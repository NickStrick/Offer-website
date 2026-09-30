'use client';
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarCheck, faCircleCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Headline from "../components/Headline";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import { SALES_EMAIL, offerTiers, offersCopy } from "../offers/copy";

const tierMessages: Record<string, { title: string; body: string; subject: string }> = {
  enterprise: {
    title: "Enterprise AI Agent & Vault Implementation",
    body: "Tell us about your platform, current architecture, and the outcome you need. We follow up to schedule a scoping call for the full-deployment retainer.",
    subject: "Enterprise Retainer Inquiry",
  },
  "micro-audit": {
    title: "Micro Conversion & Latency Audit",
    body: "Send your product URL and the flow you want reviewed (signup, onboarding, or checkout). Once scope is confirmed, your Loom teardown is delivered within 24–48 hours.",
    subject: "Micro-Audit Request",
  },
};

const defaultMessage = {
  title: "Talk to Stricker Digital",
  body: "Questions about an audit or implementation? Email us directly and we'll point you to the right starting point.",
  subject: "Stricker Digital Inquiry",
};

function ContactContent() {
  const tier = useSearchParams().get("tier") ?? "";
  const message = tierMessages[tier] ?? defaultMessage;
  const offer = offerTiers.find((t) => t.id === (tier === "enterprise" ? "enterprise-retainer" : tier));
  const mailto = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(message.subject)}`;

  return (
    <section className="bg-page px-6 pb-28 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="surface-card p-8 text-center md:p-12">
          {offer ? (
            <div className="eyebrow">
              {offer.price} / {offer.priceNote}
            </div>
          ) : null}
          <h2 className="display-title mt-3 !text-3xl md:!text-4xl">{message.title}</h2>
          <p className="lead-text mx-auto mt-4 max-w-xl">{message.body}</p>

          {offer ? (
            <ul className="mx-auto mt-6 max-w-xl space-y-2 text-left text-zinc-200">
              {offer.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="mt-1 w-4 shrink-0 text-green-400" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={mailto}
              className="btn-gradient gap-2"
            >
              <FontAwesomeIcon icon={faEnvelope} aria-hidden />
              Email {SALES_EMAIL}
            </a>
            <a
              href={offersCopy.intakeModal.bookCallUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-inverted gap-2"
            >
              <FontAwesomeIcon icon={faCalendarCheck} aria-hidden />
              Book a call
            </a>
          </div>

          <Link href="/offers" className="mt-8 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white">
            Compare all offers <FontAwesomeIcon icon={faArrowRight} className="text-xs" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-ink-subtle">Based in Chicago, IL · Working with teams anywhere</p>
          <Socials className="mt-4 justify-center" />
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-page text-white">
      <Headline
        headlineText="Let's Scope Your Engagement"
        subheadlineText="Fixed scope. Fixed price. Tell us where the friction is."
      />
      {/* useSearchParams requires a Suspense boundary for static rendering */}
      <Suspense fallback={null}>
        <ContactContent />
      </Suspense>
      <Footer />
    </main>
  );
}
