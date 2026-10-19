"use client";
import { useEffect, useState } from "react";

/**
 * Invisible bot traps for lead forms; place inside the <form>. People never see or fill these:
 * - hp_field: a hidden "honeypot" input that only bots fill in.
 * - _ts: when this form appeared, so instant bot submissions can be spotted.
 * Read them at submit time with botGuardFrom() from lib/leads; /api/lead quietly drops bot submissions.
 */
export default function BotGuardFields() {
  // Set after mount (not during render) so a prerendered page never bakes in its build time.
  const [renderedAt, setRenderedAt] = useState("");
  useEffect(() => setRenderedAt(String(Date.now())), []);

  return (
    <div aria-hidden className="pointer-events-none absolute -left-[10000px] top-0 h-px w-px overflow-hidden">
      <label>
        Leave this empty
        <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
      <input type="hidden" name="_ts" value={renderedAt} readOnly />
    </div>
  );
}
