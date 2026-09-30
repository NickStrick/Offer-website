'use client';
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Headline from "../components/Headline";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import IntakeForm, { resolveIntent } from "../components/IntakeForm";
import { BOOK_CALL_URL, CONTACT_EMAIL, contactCopy } from "../offers/copy";

function ContactForm() {
  const params = useSearchParams();
  const intent = resolveIntent(params.get("intent"), params.get("tier"));
  // key: a new ?intent= link resets the form to that offer
  return <IntakeForm key={intent} initialIntent={intent} />;
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
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-inverted mt-5 w-full gap-2">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden />
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="surface-card p-7">
              <h2 className="text-lg font-semibold">Ready to talk now?</h2>
              <p className="mt-2 text-[15px] text-ink-muted">Book a short call about the Sprint, the $5k audit, or the retainer.</p>
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
