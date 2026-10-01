import { NextResponse } from "next/server";

/**
 * Lead capture endpoint. Every site form posts here; the server forwards the entry to the
 * Google Form. Going through our own domain means ad/privacy blockers don't drop submissions,
 * and we can confirm Google actually recorded the response.
 */

/** Google Form that collects every lead on the site. The Intent column says which form each row came from. */
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

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
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

  const form = new URLSearchParams();
  for (const field of Object.keys(LEADS_FORM_ENTRIES) as LeadField[]) {
    if (lead[field]) form.append(LEADS_FORM_ENTRIES[field], lead[field]);
  }
  form.append("fvv", "1");
  form.append("pageHistory", "0");

  try {
    const res = await fetch(LEADS_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept-Language": "en-US" },
      body: form.toString(),
      cache: "no-store",
    });
    const html = await res.text();
    // Google shows this confirmation only when the response was saved.
    if (res.ok && html.includes("Your response has been recorded")) {
      return NextResponse.json({ ok: true });
    }
    console.error("Lead form rejected", res.status);
  } catch (err) {
    console.error("Lead form unreachable", err);
  }
  return NextResponse.json({ ok: false, error: "Could not save your submission" }, { status: 502 });
}
