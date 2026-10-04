'use client';
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Leafs from "../../../public/SDLogoLeafs.png";

type HeadlineCta = {
  label: string;
  href: string;
  variant?: "gradient" | "inverted";
};

type HeadlineProps = {
  headlineText?: string;
  subheadlineText?: string;
  eyebrow?: string;
  ctas?: HeadlineCta[];
  /** Small line under the buttons, e.g. a friendly one-line intro. */
  intro?: ReactNode;
};

export default function Headline({
  headlineText = "Grow the right way. Your Web & Business Partner",
  subheadlineText,
  eyebrow = "Stricker Digital",
  ctas,
  intro,
}: HeadlineProps) {
  return (
    <section className="relative isolate overflow-hidden bg-page px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Sunrise glow (green growth + amber light) over a faint engineering grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-backdrop absolute inset-0" />
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[900px] -translate-x-[60%] rounded-full bg-green-500/20 blur-[120px]" />
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[620px] translate-x-[5%] rounded-full bg-amber-500/15 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <motion.div
        className="relative mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-sm text-ink-muted">
          <Image src={Leafs} alt="" width={20} height={20} className="h-5 w-5" priority />
          {eyebrow}
        </div>

        <h1 className="text-[2.6rem] leading-[1.04] font-semibold text-white sm:text-6xl md:text-7xl" style={{ letterSpacing: "-0.045em" }}>
          {headlineText}
        </h1>

        {subheadlineText ? (
          <p className="lead-text mx-auto mt-6 max-w-2xl md:text-xl">{subheadlineText}</p>
        ) : null}

        {ctas?.length ? (
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            {ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`${cta.variant === "inverted" ? "btn-inverted" : "btn-gradient"} gap-2`}
              >
                {cta.label}
                {cta.variant === "inverted" ? null : <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />}
              </a>
            ))}
          </div>
        ) : null}

        {intro ? <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 text-sm text-ink-muted">{intro}</div> : null}
      </motion.div>
    </section>
  );
}
