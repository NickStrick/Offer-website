import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Headline from "../../components/Headline";
import Footer from "../../components/Footer";
import { VideoPlayer } from "../../components/Video";
import { CONTACT_EMAIL, welcomePages } from "../../offers/copy";

type Params = { tier: string };

export function generateStaticParams(): Params[] {
  return Object.keys(welcomePages).map((tier) => ({ tier }));
}

export const dynamicParams = false;

// Post-signup pages shouldn't show up in search results.
export const metadata: Metadata = {
  title: "Welcome | Stricker Digital",
  robots: { index: false, follow: false },
};

export default async function WelcomePage({ params }: { params: Promise<Params> }) {
  const { tier } = await params;
  const page = welcomePages[tier as keyof typeof welcomePages];
  if (!page) notFound();

  return (
    <main className="min-h-screen bg-page text-white">
      <Headline eyebrow={page.eyebrow} headlineText={page.title} subheadlineText={page.subtitle} />

      <section className="bg-page px-6 pb-28">
        <div className="mx-auto max-w-4xl">
          <VideoPlayer video={page.video} />

          <div className="surface-card mt-12 p-7 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">What happens next</h2>
            <ol className="mt-6 space-y-4">
              {page.steps.map((step) => (
                <li key={step} className="flex gap-3 text-base leading-relaxed text-zinc-200">
                  <FontAwesomeIcon icon={faCircleCheck} className="mt-1 w-5 shrink-0 text-green-400" aria-hidden />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="btn-gradient gap-2"
            >
              <FontAwesomeIcon icon={faEnvelope} aria-hidden />
              Questions? {CONTACT_EMAIL}
            </a>
            <Link
              href={page.nextCta.href}
              className="btn-inverted gap-2"
            >
              {page.nextCta.text}
              <FontAwesomeIcon icon={faArrowRight} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
