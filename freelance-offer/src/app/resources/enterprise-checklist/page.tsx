import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
  faClock,
  faFilePdf,
  faDownload,
  faLayerGroup,
  faMobileScreen,
  faServer,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

import Headline from "../../components/Headline";
import Footer from "../../components/Footer";
import IconTile from "../../components/IconTile";
import SectionHeader from "../../components/SectionHeader";
import { VideoPlayer } from "../../components/Video";
import { isMediaReady, videos } from "../../media";
import { checklistCopy, offerTiers } from "../../offers/copy";

// Reached after the email signup; keep it out of search results.
export const metadata: Metadata = {
  title: "2026 Enterprise Infrastructure Checklist",
  robots: { index: false, follow: false },
};

/** The written checklist that accompanies the whiteboard video. */
const sections = [
  {
    icon: faServer,
    title: "Decoupled Next.js / AWS Architecture & Caching",
    items: [
      "Front end and API deploy independently, so a UI change never redeploys the backend",
      "Static and marketing pages are served from the CDN edge, not rendered on every request",
      "API responses on hot paths are cached with explicit expiry times",
      "Checkout and account queries are indexed and profiled, not just \"fast enough\" in staging",
      "No third-party script or API call blocks the first render",
    ],
  },
  {
    icon: faStopwatch,
    title: "API Latency Bottlenecks",
    items: [
      "p95 response time is tracked for every checkout, auth, and payment endpoint",
      "Webhooks are processed asynchronously through a queue with retries",
      "Payment and auth calls have timeouts and a graceful fallback",
      "Repeated per-item database queries (N+1) are removed from cart and product endpoints",
      "Serverless cold starts are measured on every function in the checkout path",
    ],
  },
  {
    icon: faMobileScreen,
    title: "Mobile Checkout Friction Audit Protocol (Max 5 Inputs)",
    items: [
      "No checkout step asks for more than 5 inputs",
      "Every field opens the right mobile keyboard (email, number, phone)",
      "Browser autofill and wallet payments (Apple Pay, Google Pay) are enabled",
      "Errors show inline as the user types, not after they submit",
      "A progress indicator shows the steps, and entered data survives going back",
      "Tap targets are at least 44px, with the primary button in thumb reach",
    ],
  },
];

export default function EnterpriseChecklistPage() {
  const video = videos.enterpriseChecklist;
  // Only offer the download once the PDF is actually in /public (checked at build time).
  const ebookReady = existsSync(join(process.cwd(), "public", checklistCopy.ebookPath));

  return (
    <main className="min-h-screen bg-page text-white">
      <Headline eyebrow={checklistCopy.tag} headlineText={checklistCopy.title} subheadlineText={checklistCopy.subtitle} />

      <section className="bg-page px-6 pb-20">
        <div className="mx-auto max-w-4xl space-y-6">
          {ebookReady ? (
            <div className="surface-card flex flex-col items-start gap-5 !border-green-500/40 p-6 sm:flex-row sm:items-center md:p-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 text-2xl text-green-400">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden />
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Your free e-book is ready!</h2>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">
                  Download it, then use the checklist below to test your own app.
                </p>
              </div>
              <a href={checklistCopy.ebookPath} download={checklistCopy.ebookDownloadName} className="btn-gradient gap-2">
                <FontAwesomeIcon icon={faDownload} aria-hidden />
                Download the e-book (PDF)
              </a>
            </div>
          ) : null}
          {isMediaReady(video) ? (
            <VideoPlayer video={video} />
          ) : (
            <div className="surface-card flex items-start gap-4 !border-amber-500/30 p-6">
              <FontAwesomeIcon icon={faClock} className="mt-1 text-lg text-amber-300" aria-hidden />
              <div>
                <h2 className="text-lg font-semibold">A whiteboard video walkthrough is on the way</h2>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">
                  I&apos;ll email you a recorded Excalidraw walkthrough as soon as it&apos;s live. The full checklist
                  and spec sheet are below so you can start now.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-pad bg-gradient-purple-black text-white">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="The Checklist" eyebrowIcon={faLayerGroup} title="Run this against your platform." />
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="surface-card p-7 md:p-9">
                <div className="flex items-center gap-4">
                  <IconTile icon={section.icon} />
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-zinc-200">
                      <FontAwesomeIcon icon={faCircleCheck} className="mt-1 w-4 shrink-0 text-green-400" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-page text-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Next steps"
            title="Found gaps? Here's where to go next."
            subtitle="Learn to explain the fixes, or bring me in to audit and build them."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {offerTiers.map((tier) => (
              <Link
                key={tier.id}
                href={`/offers#${tier.id}`}
                className={`surface-card surface-card-hover group flex flex-col p-7 ${
                  tier.variant === "featured" ? "!border-green-500/50" : ""
                }`}
              >
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-ink-subtle">{tier.tierLabel}</div>
                <h3 className="mt-2 text-lg font-semibold">{tier.title}</h3>
                <div className="mt-2 text-sm text-ink-muted">
                  {tier.price} / {tier.priceNote}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-400">
                  Learn more
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
