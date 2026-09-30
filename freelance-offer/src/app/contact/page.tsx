'use client';
import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarCheck,
  faChevronDown,
  faCircleCheck,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Headline from "../components/Headline";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import {
  BOOK_CALL_URL,
  LEADS_FORM_ENTRIES,
  LEADS_FORM_URL,
  SALES_EMAIL,
  contactCopy,
} from "../offers/copy";

type IntentValue = (typeof contactCopy.intents)[number]["value"];

/** Old links used ?tier=…; map them onto the new intents. */
const legacyTierToIntent: Record<string, IntentValue> = {
  "micro-audit": "audit",
  "enterprise-audit": "audit",
  enterprise: "general",
};

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-ink-subtle transition focus:border-green-500/60 focus:bg-white/[0.05] focus:outline-none";

function isIntent(value: string | null): value is IntentValue {
  return contactCopy.intents.some((i) => i.value === value);
}

function ContactForm() {
  const params = useSearchParams();
  const initialIntent = useMemo<IntentValue | "">(() => {
    const intent = params.get("intent");
    if (isIntent(intent)) return intent;
    return legacyTierToIntent[params.get("tier") ?? ""] ?? "";
  }, [params]);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    intent: initialIntent as IntentValue | "",
    arr: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setValues((v) => ({ ...v, intent: initialIntent }));
  }, [initialIntent]);

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues({ ...values, [key]: e.target.value });

  const isAudit = values.intent === "audit";
  const isEmailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(values.email.trim());
  const isDisabled = loading || !values.firstName.trim() || !isEmailValid || !values.intent;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isDisabled) return;

    const intentLabel = contactCopy.intents.find((i) => i.value === values.intent)?.label ?? "";
    const arrLabel = contactCopy.arrOptions.find((o) => o.value === values.arr)?.label ?? "";
    const extras = contactCopy.extraEntries;

    const formData = new FormData();
    formData.append(LEADS_FORM_ENTRIES.firstName, values.firstName.trim());
    formData.append(LEADS_FORM_ENTRIES.email, values.email.trim());

    // Fields without their own Google Form question yet ride along in the "Last name" answer.
    const packed: string[] = [values.lastName.trim()];
    const addExtra = (entry: string, label: string, value: string) => {
      if (!value) return;
      if (entry) formData.append(entry, value);
      else packed.push(`${label}: ${value}`);
    };
    addExtra(extras.intent, "Intent", intentLabel);
    addExtra(extras.company, "Company", values.company.trim());
    addExtra(extras.arr, "ARR", arrLabel);
    addExtra(extras.message, "Message", values.message.trim());
    formData.append(LEADS_FORM_ENTRIES.lastName, packed.filter(Boolean).join(" | "));

    formData.append("fvv", "1");
    formData.append("draftResponse", "[]");
    formData.append("pageHistory", "0");

    try {
      setLoading(true);
      setError(null);
      // Google Forms doesn't include CORS headers → use no-cors
      await fetch(LEADS_FORM_URL, { method: "POST", mode: "no-cors", body: formData });
      setSent(true);
    } catch {
      setError(`Something went wrong sending the form. Please email us at ${SALES_EMAIL}.`);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="surface-card p-8 text-center md:p-12">
        <FontAwesomeIcon icon={faCircleCheck} className="text-4xl text-green-400" aria-hidden />
        <h2 className="display-title mt-5 !text-3xl">{contactCopy.success.title}</h2>
        <p className="lead-text mx-auto mt-4 max-w-md">
          {contactCopy.success.body}{" "}
          <a href={`mailto:${SALES_EMAIL}`} className="text-white underline decoration-green-500/60 underline-offset-4">
            {SALES_EMAIL}
          </a>
          .
        </p>
        {isAudit ? (
          <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="btn-gradient mt-8 gap-2">
            <FontAwesomeIcon icon={faCalendarCheck} aria-hidden />
            {contactCopy.success.bookCallText}
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card space-y-4 p-7 md:p-10">
      <div className="relative">
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

      {isAudit ? (
        <div className="relative">
          <label htmlFor="arr" className="mb-2 block text-sm font-medium text-ink-muted">
            {contactCopy.arrLabel}
          </label>
          <select id="arr" value={values.arr} onChange={set("arr")} className={`${fieldClass} appearance-none pr-10`}>
            <option value="" className="bg-[#181b18]">Prefer not to say</option>
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
              <Link href="/offers#free-audit" className="font-semibold underline underline-offset-4">
                Get the free audit
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
        placeholder={contactCopy.placeholders.message}
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-page text-white">
      <Headline eyebrow={contactCopy.eyebrow} headlineText={contactCopy.headline} subheadlineText={contactCopy.subheadline} />

      <section className="bg-page px-6 pb-28 text-white">
        <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* useSearchParams requires a Suspense boundary for static rendering */}
          <Suspense fallback={<div className="surface-card h-[520px]" />}>
            <ContactForm />
          </Suspense>

          <aside className="space-y-5">
            <div className="surface-card p-7">
              <h2 className="text-lg font-semibold">Prefer email?</h2>
              <p className="mt-2 text-[15px] text-ink-muted">Write to us directly and we&apos;ll reply shortly.</p>
              <a href={`mailto:${SALES_EMAIL}`} className="btn-inverted mt-5 w-full gap-2">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden />
                {SALES_EMAIL}
              </a>
            </div>
            <div className="surface-card p-7">
              <h2 className="text-lg font-semibold">Ready to talk now?</h2>
              <p className="mt-2 text-[15px] text-ink-muted">Book a short call to scope your audit or cohort seat.</p>
              <a href={BOOK_CALL_URL} target="_blank" rel="noreferrer" className="btn-inverted mt-5 w-full gap-2">
                <FontAwesomeIcon icon={faCalendarCheck} aria-hidden />
                Book a call
              </a>
            </div>
            <div className="surface-card p-7">
              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <FontAwesomeIcon icon={faLocationDot} aria-hidden />
                Based in Chicago, IL. Working with teams anywhere.
              </div>
              <Socials className="mt-4" />
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
