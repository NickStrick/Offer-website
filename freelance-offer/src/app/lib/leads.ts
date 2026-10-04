/** A lead as sent from any site form to /api/lead (which forwards it to the Google Form). */
export type Lead = {
  /** Which form or offer this came from, e.g. "Get a $800 Revenue Leak Audit". */
  intent: string;
  email: string;
  firstName?: string;
  lastName?: string;
  website?: string;
  context?: string;
};

/** Saves a lead. Resolves true only once the Google Form has recorded it. */
export async function submitLead(lead: Lead): Promise<boolean> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    const data = (await res.json()) as { ok?: boolean };
    return res.ok && data.ok === true;
  } catch {
    return false;
  }
}
