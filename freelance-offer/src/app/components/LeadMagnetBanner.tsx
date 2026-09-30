"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faChalkboard, faPlay } from "@fortawesome/free-solid-svg-icons";

import { LEADS_FORM_ENTRIES, LEADS_FORM_URL, checklistCopy } from "../offers/copy";

/** Email capture for the free checklist. Saves the lead, then sends them to the walkthrough page. */
export function ChecklistForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const isValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email.trim());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || loading) return;
    setLoading(true);
    const formData = new FormData();
    formData.append(LEADS_FORM_ENTRIES.firstName, checklistCopy.sourceValue);
    formData.append(LEADS_FORM_ENTRIES.email, email.trim());
    formData.append("fvv", "1");
    formData.append("draftResponse", "[]");
    formData.append("pageHistory", "0");
    try {
      // Google Forms doesn't include CORS headers → use no-cors
      await fetch(LEADS_FORM_URL, { method: "POST", mode: "no-cors", body: formData });
    } catch (err) {
      // Never block the visitor from the resource if the lead save fails.
      console.error("Checklist signup failed", err);
    }
    router.push(checklistCopy.resourcePath);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        required
        aria-label={checklistCopy.emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={checklistCopy.emailPlaceholder}
        className="min-w-0 flex-1 rounded-[10px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-ink-subtle transition focus:border-green-500/60 focus:outline-none"
      />
      <button type="submit" disabled={!isValid || loading} className="btn-gradient shrink-0 gap-2">
        {loading ? checklistCopy.loadingText : checklistCopy.ctaText}
        {loading ? null : <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />}
      </button>
    </form>
  );
}

/** Whiteboard-style thumbnail preview for the walkthrough video. */
function WhiteboardPreview() {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#0c0e0c]">
      <div aria-hidden className="grid-backdrop absolute inset-0 opacity-80" />
      {/* hand-drawn style boxes and arrows, like an Excalidraw sketch */}
      <svg aria-hidden viewBox="0 0 320 180" className="absolute inset-0 h-full w-full text-white/25">
        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="28" y="30" width="72" height="40" rx="6" />
          <rect x="130" y="70" width="72" height="40" rx="6" />
          <rect x="228" y="30" width="68" height="40" rx="6" />
          <rect x="228" y="118" width="68" height="36" rx="6" />
          <path d="M100 52 C118 56, 122 74, 130 86" />
          <path d="M202 86 C214 72, 220 58, 228 52" />
          <path d="M202 96 C216 110, 222 124, 228 134" />
        </g>
        <g fill="none" stroke="#f4a336" strokeWidth="2" strokeLinecap="round" opacity="0.7">
          <circle cx="166" cy="90" r="30" strokeDasharray="4 5" />
        </g>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-green)] to-[var(--color-highlight)] text-white shadow-[0_10px_30px_-8px_rgba(197,113,4,0.8)]">
          <FontAwesomeIcon icon={faPlay} className="ml-0.5 text-lg" aria-hidden />
        </span>
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/85">
        <FontAwesomeIcon icon={faChalkboard} aria-hidden />
        Excalidraw walkthrough
      </div>
      <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/85">
        60 sec
      </div>
    </div>
  );
}

/** Free lead magnet banner, placed directly below the hero and above the offer ladder. */
export default function LeadMagnetBanner({ className = "bg-page" }: { className?: string }) {
  return (
    <section id={checklistCopy.id} className={`${className} scroll-mt-20 px-6 py-16 text-white`}>
      <motion.div
        className="surface-card relative mx-auto max-w-6xl overflow-hidden !border-green-500/40 bg-zinc-900/80 p-7 shadow-[0_0_80px_-30px_rgba(34,197,94,0.5)] backdrop-blur-md md:p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-500/15 blur-3xl" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-green-400">
                {checklistCopy.tag}
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-subtle">
                Tier 0 · <span className="text-white">{checklistCopy.price}</span>
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold md:text-[2rem]" style={{ letterSpacing: "-0.03em", lineHeight: 1.12 }}>
              {checklistCopy.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{checklistCopy.subtitle}</p>
            <ul className="mt-6 space-y-3">
              {checklistCopy.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] text-zinc-200">
                  <FontAwesomeIcon icon={faCheck} className="mt-1 w-3.5 shrink-0 text-green-400" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <WhiteboardPreview />
            <div className="mt-5">
              <ChecklistForm />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-subtle">Instant access. No sales call. Unsubscribe anytime.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
