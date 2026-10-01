"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarCheck, faChevronDown, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { BOOK_CALL_URL, CONTACT_EMAIL, contactCopy } from "../offers/copy";
import { submitLead } from "../lib/leads";

export type IntentValue = (typeof contactCopy.intents)[number]["value"];

/** ?tier=… links (and older intent names) map onto the current intents. */
const tierToIntent: Record<string, IntentValue> = {
  "50k": "retainer",
  retainer: "retainer",
  "enterprise-retainer": "retainer",
  enterprise: "audit",
  "enterprise-audit": "audit",
  "micro-audit": "audit",
  cohort: "sprint",
};

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-ink-subtle transition focus:border-green-500/60 focus:bg-white/[0.05] focus:outline-none";

function isIntent(value: string | null): value is IntentValue {
  return contactCopy.intents.some((i) => i.value === value);
}

/** Resolve ?intent= / ?tier= query values (including older names) to a form intent. */
export function resolveIntent(intent: string | null, tier: string | null): IntentValue | "" {
  if (isIntent(intent)) return intent;
  return tierToIntent[intent ?? ""] ?? tierToIntent[tier ?? ""] ?? "";
}

/**
 * The intake / application form used on /contact and in the offer pop-ups.
 * Submissions go to the Google Form; fields without their own question ride along in "Last name".
 */
export default function IntakeForm({
  initialIntent = "",
  lockIntent = false,
  framed = true,
}: {
  initialIntent?: IntentValue | "";
  /** Hide the dropdown (used when the pop-up already knows which offer this is). */
  lockIntent?: boolean;
  /** Wrap in a card (off inside pop-ups, which provide their own frame). */
  framed?: boolean;
}) {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    intent: initialIntent as IntentValue | "",
    arr: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [key]: e.target.value });

  const isAudit = values.intent === "audit";
  const isRetainer = values.intent === "retainer";
  const isSprint = values.intent === "sprint";
  const isEmailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(values.email.trim());
  const isDisabled = loading || !values.firstName.trim() || !isEmailValid || !values.intent || (isAudit && !values.arr);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isDisabled) return;

    const intentLabel = contactCopy.intents.find((i) => i.value === values.intent)?.label ?? "";
    const arrLabel = contactCopy.arrOptions.find((o) => o.value === values.arr)?.label ?? "";
    // Role and ARR have no question of their own on the form, so they lead the Context answer.
    const context = [
      values.role.trim() ? `Role: ${values.role.trim()}` : "",
      arrLabel ? `ARR: ${arrLabel}` : "",
      values.message.trim(),
    ]
      .filter(Boolean)
      .join(" | ");

    setLoading(true);
    setError(null);
    const saved = await submitLead({
      intent: intentLabel,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      website: values.company,
      context,
    });
    setLoading(false);
    if (saved) setSent(true);
    else setError(`Something went wrong sending the form. Please try again or email us at ${CONTACT_EMAIL}.`);
  }

  if (sent) {
    return (
      <div className={`${framed ? "surface-card p-8 md:p-12" : "py-4"} text-center`}>
        <FontAwesomeIcon icon={faCircleCheck} className="text-4xl text-green-400" aria-hidden />
        <h2 className="display-title mt-5 !text-3xl">{contactCopy.success.title}</h2>
        <p className="lead-text mx-auto mt-4 max-w-md">
          {contactCopy.success.body}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline decoration-green-500/60 underline-offset-4">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        {isAudit || isRetainer || isSprint ? (
          <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="btn-gradient mt-8 gap-2">
            <FontAwesomeIcon icon={faCalendarCheck} aria-hidden />
            {contactCopy.success.bookCallText}
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${framed ? "surface-card p-7 md:p-10" : ""} space-y-4`}>
      <div className={`relative ${lockIntent ? "hidden" : ""}`}>
        <label htmlFor="intent" className="mb-2 block text-sm font-medium text-ink-muted">
          I&apos;d like to
        </label>
        <select id="intent" value={values.intent} onChange={set("intent")} className={`${fieldClass} appearance-none pr-10`}>
          <option value="" disabled className="bg-[#181b18]">
            Choose one…
          </option>
          {contactCopy.intents.map((i) => (
            <option key={i.value} value={i.value} className="bg-[#181b18]">
              {i.label}
            </option>
          ))}
        </select>
        <FontAwesomeIcon icon={faChevronDown} className="pointer-events-none absolute bottom-4 right-4 text-xs text-ink-subtle" aria-hidden />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input aria-label={contactCopy.placeholders.firstName} value={values.firstName} onChange={set("firstName")} className={fieldClass} placeholder={contactCopy.placeholders.firstName} />
        <input aria-label={contactCopy.placeholders.lastName} value={values.lastName} onChange={set("lastName")} className={fieldClass} placeholder={contactCopy.placeholders.lastName} />
      </div>
      <input type="email" aria-label={contactCopy.placeholders.email} value={values.email} onChange={set("email")} className={fieldClass} placeholder={contactCopy.placeholders.email} />
      <input aria-label={contactCopy.placeholders.company} value={values.company} onChange={set("company")} className={fieldClass} placeholder={contactCopy.placeholders.company} />

      {isSprint ? (
        <div>
          <label htmlFor="role" className="mb-2 block text-sm font-medium text-ink-muted">
            {contactCopy.roleLabel}
          </label>
          <input id="role" value={values.role} onChange={set("role")} className={fieldClass} placeholder={contactCopy.rolePlaceholder} />
        </div>
      ) : null}

      {isAudit ? (
        <div className="relative">
          <label htmlFor="arr" className="mb-2 block text-sm font-medium text-ink-muted">
            {contactCopy.arrLabel}
          </label>
          <select id="arr" value={values.arr} onChange={set("arr")} className={`${fieldClass} appearance-none pr-10`}>
            <option value="" disabled className="bg-[#181b18]">Select your ARR…</option>
            {contactCopy.arrOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-[#181b18]">
                {o.label}
              </option>
            ))}
          </select>
          <FontAwesomeIcon icon={faChevronDown} className="pointer-events-none absolute bottom-4 right-4 text-xs text-ink-subtle" aria-hidden />
          {values.arr === "under-1m" ? (
            <p className="mt-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
              {contactCopy.underArrNote}{" "}
              <Link href="/#free-checklist" className="font-semibold underline underline-offset-4">
                Get the free checklist
              </Link>
            </p>
          ) : null}
        </div>
      ) : null}

      <textarea
        aria-label={contactCopy.placeholders.message}
        value={values.message}
        onChange={set("message")}
        rows={4}
        className={`${fieldClass} resize-y`}
        placeholder={isSprint ? contactCopy.placeholders.sprintMessage : contactCopy.placeholders.message}
      />

      {error ? <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</div> : null}

      <button type="submit" disabled={isDisabled} className="btn-gradient w-full gap-2 !py-4">
        {loading ? contactCopy.submit.loading : contactCopy.submit.idle}
        {loading ? null : <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />}
      </button>
      <p className="text-center text-xs leading-relaxed text-ink-subtle">{contactCopy.consent}</p>
    </form>
  );
}

/** Application pop-up for a specific offer (Sprint cohort, $5k audit). */
export function IntakeModal({
  open,
  onClose,
  intent,
  eyebrow,
  title,
  description,
}: {
  open: boolean;
  onClose: () => void;
  intent: IntentValue;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[550] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="intake-modal-title"
            className="surface-card my-8 w-full max-w-[620px] p-7 text-white md:p-9"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="eyebrow">{eyebrow}</div>
              <button onClick={onClose} aria-label="Close" className="rounded-lg px-2 text-ink-subtle hover:text-white">
                ✖
              </button>
            </div>
            <h4 id="intake-modal-title" className="mt-3 text-2xl font-semibold">
              {title}
            </h4>
            {description ? <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{description}</p> : null}
            <div className="mt-6">
              <IntakeForm initialIntent={intent} lockIntent framed={false} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
