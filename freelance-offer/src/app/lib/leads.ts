/** A lead as sent from any site form to /api/lead (which forwards it to the Google Form). */
export type Lead = {
  /** Which form or offer this came from, e.g. "Get a 48-Hour Blueprint". */
  intent: string;
  email: string;
  firstName?: string;
  lastName?: string;
  website?: string;
  context?: string;
  /** Bot traps from <BotGuardFields />; see botGuardFrom(). */
  hp_field?: string;
  _ts?: number;
};

/** Reads the hidden bot-trap values from a form that renders <BotGuardFields />. */
export function botGuardFrom(form: HTMLFormElement): Pick<Lead, "hp_field" | "_ts"> {
  const data = new FormData(form);
  const renderedAt = Number(data.get("_ts"));
  return {
    hp_field: String(data.get("hp_field") ?? ""),
    _ts: renderedAt > 0 ? renderedAt : undefined,
  };
}

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
