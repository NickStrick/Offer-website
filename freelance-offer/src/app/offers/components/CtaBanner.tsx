"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export type CtaBannerProps = {
  id?: string;
  ctaHref: string;
  onCtaClick?: () => void;
  ctaText?: string;
  title?: string;
  subtitle?: string;
  secondaryHref?: string;
  secondaryText?: string;
  className?: string;
};

/** Contained call-to-action panel with a soft green/amber glow. */
export default function CtaBanner({
  id,
  ctaHref,
  onCtaClick,
  ctaText = "Apply for Architectural Audit",
  title = "Apply for the Architectural Audit",
  subtitle = "Fixed-scope diagnostics delivered in 48 hours.",
  secondaryHref = "#offers",
  secondaryText = "",
  className = "bg-page",
}: CtaBannerProps) {
  const isExternal = /^https?:\/\//i.test(ctaHref);
  const primaryContent = (
    <>
      {ctaText}
      <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
    </>
  );

  return (
    <section id={id} className={`${className} scroll-mt-16 px-6 py-20 text-white`}>
      <div className="surface-card relative mx-auto max-w-6xl overflow-hidden px-6 py-16 text-center md:px-16 md:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-backdrop absolute inset-0 opacity-60" />
          <div className="absolute -left-20 -top-32 h-72 w-96 rounded-full bg-green-500/20 blur-[100px]" />
          <div className="absolute -bottom-32 -right-20 h-72 w-96 rounded-full bg-amber-500/15 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <h2 className="display-title">{title}</h2>
          <p className="lead-text mx-auto mt-5">{subtitle}</p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            {onCtaClick ? (
              <button type="button" onClick={onCtaClick} className="btn-gradient gap-2">
                {primaryContent}
              </button>
            ) : isExternal ? (
              <a href={ctaHref} target="_blank" rel="noreferrer" className="btn-gradient gap-2">
                {primaryContent}
              </a>
            ) : (
              <Link href={ctaHref} className="btn-gradient gap-2">
                {primaryContent}
              </Link>
            )}
            {secondaryText ? (
              <a href={secondaryHref} className="btn-inverted">
                {secondaryText}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
