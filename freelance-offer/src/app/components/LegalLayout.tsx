import type { ReactNode } from "react";

import Footer from "./Footer";

/** Shared shell for legal pages (terms, refund policy): plain, readable, no marketing chrome. */
export default function LegalLayout({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-page text-white">
      <section className="border-b border-white/[0.06] px-6 pb-12 pt-20 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow">Legal</div>
          <h1 className="display-title mt-4">{title}</h1>
          <p className="mt-4 text-sm text-ink-subtle">Last updated: {lastUpdated}</p>
          {intro ? (
            <div className="lead-text mt-6 [&_a]:text-white [&_a]:underline [&_a]:decoration-green-500/60 [&_a]:underline-offset-4">
              {intro}
            </div>
          ) : null}
        </div>
      </section>

      <div className="px-6 py-16">
        <article className="legal-prose mx-auto max-w-3xl">{children}</article>
      </div>

      <Footer />
    </main>
  );
}
