import { NextResponse } from "next/server";

/**
 * Lead capture endpoint. Every site form posts here. Book waitlist signups go to the Waitlist
 * Google Form and beehiiv; everything else goes to the Messages Google Form. Going through our
 * own domain means ad/privacy blockers don't drop submissions, and we can confirm each save.
 */

/** "Messages" Google Form: contact form, offer applications, and checklist signups (Intent column says which). */
const LEADS_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfSUvIRFJSq-68FWHijiNzegpuIRTB74Vp-kJS_fuoBlGZwng/formResponse";

const LEADS_FORM_ENTRIES = {
  intent: "entry.933553097",
  firstName: "entry.1564115074",
  lastName: "entry.662139467",
  email: "entry.689881023",
  website: "entry.2101191798",
  context: "entry.1977382789",
} as const;

const MAX_LENGTH = { intent: 200, firstName: 100, lastName: 100, email: 254, website: 300, context: 5000 } as const;

type LeadField = keyof typeof LEADS_FORM_ENTRIES;

/** "Stricker Digital Waitlist" Google Form: book waitlist signups. */
const WAITLIST_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeZYuuHueEbwo5i5ufgsvU9p4GDbN3rJNwwoyxdEsjpnZMHQw/formResponse";

const WAITLIST_FORM_ENTRIES = {
  name: "entry.2084999322",
  email: "entry.2128354458",
  /** Which book list they joined, e.g. "Beta Reader: The Iteration Loop". */
  list: "entry.286247146",
};

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Book waitlists that also go to beehiiv, keyed by the list name the signup buttons send
 * (see `listName` in library/copy.ts). The value is the tag the subscriber gets in beehiiv.
 */
const BEEHIIV_LIST_TAGS: Record<string, string> = {
  "Weekly Notes": "Weekly Notes", // journeyCopy.newsletterListName
  "SE Classes Waitlist": "SE Classes Waitlist", // mentoringCopy.listName
  "Beta Reader: The Iteration Loop": "Iteration Loop Beta",
  "Release Notify: Amor Fati in the Arena": "Amor Fati Release",
};

/** Posts answers ({ entryId: value }) to a Google Form and confirms Google recorded them. */
async function submitGoogleForm(url: string, answers: Record<string, string>): Promise<boolean> {
  const form = new URLSearchParams();
  for (const [entry, value] of Object.entries(answers)) {
    if (entry && value) form.append(entry, value);
  }
  form.append("fvv", "1");
  form.append("pageHistory", "0");

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US" },
      body: form.toString(),
      cache: "no-store",
    });
    const html = await res.text();
    // Google shows this confirmation only when the response was saved.
    if (res.ok && html.includes("Your response has been recorded")) return true;
    console.error("Google Form rejected", url, res.status);
  } catch (err) {
    console.error("Google Form unreachable", url, err);
  }
  return false;
}

function saveToMessagesForm(lead: Record<LeadField, string>) {
  const answers = Object.fromEntries(
    (Object.keys(LEADS_FORM_ENTRIES) as LeadField[]).map((field) => [LEADS_FORM_ENTRIES[field], lead[field]]),
  );
  return submitGoogleForm(LEADS_FORM_URL, answers);
}

function saveToWaitlistForm(lead: Record<LeadField, string>) {
  return submitGoogleForm(WAITLIST_FORM_URL, {
    [WAITLIST_FORM_ENTRIES.name]: [lead.firstName, lead.lastName].filter(Boolean).join(" "),
    [WAITLIST_FORM_ENTRIES.email]: lead.email,
    [WAITLIST_FORM_ENTRIES.list]: lead.intent,
  });
}

/**
 * Adds the subscriber to beehiiv and tags them with the book list they joined.
 * Needs BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID in the server environment (never exposed to the browser).
 */
async function subscribeToBeehiiv(email: string, tag: string): Promise<boolean> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  if (!apiKey || !publicationId) {
    console.error("beehiiv is not configured: set BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID");
    return false;
  }

  const base = `https://api.beehiiv.com/v2/publications/${publicationId}`;
  const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };

  try {
    const res = await fetch(`${base}/subscriptions`, {
      method: "POST",
      headers,
      cache: "no-store",
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: "strickerdigital.com",
        utm_medium: "website",
        utm_campaign: tag,
        referring_site: "https://www.strickerdigital.com",
      }),
    });
    if (!res.ok) {
      console.error("beehiiv subscribe failed", res.status, await res.text());
      return false;
    }
    const { data } = (await res.json()) as { data?: { id?: string } };
    if (data?.id) {
      const tagRes = await fetch(`${base}/subscriptions/${data.id}/tags`, {
        method: "POST",
        headers,
        cache: "no-store",
        body: JSON.stringify({ tags: [tag] }),
      });
      // The subscriber is saved even if tagging fails; just log it.
      if (!tagRes.ok) console.error("beehiiv tagging failed", tagRes.status, await tagRes.text());
    }
    return true;
  } catch (err) {
    console.error("beehiiv unreachable", err);
    return false;
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const lead = Object.fromEntries(
    (Object.keys(LEADS_FORM_ENTRIES) as LeadField[]).map((field) => [field, clean(body[field], MAX_LENGTH[field])]),
  ) as Record<LeadField, string>;

  if (!lead.intent || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "Missing intent or valid email" }, { status: 400 });
  }

  // Book waitlist signups go to the Waitlist form and beehiiv; everything else to the Messages form.
  const beehiivTag = BEEHIIV_LIST_TAGS[lead.intent];
  const [savedToSheet, savedToBeehiiv] = await Promise.all([
    beehiivTag ? saveToWaitlistForm(lead) : saveToMessagesForm(lead),
    beehiivTag ? subscribeToBeehiiv(lead.email, beehiivTag) : Promise.resolve(false),
  ]);

  if (savedToSheet || savedToBeehiiv) return NextResponse.json({ ok: true });
  return NextResponse.json({ ok: false, error: "Could not save your submission" }, { status: 502 });
}
