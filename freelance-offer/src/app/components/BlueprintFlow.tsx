"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPenRuler } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import { SketchArrow, SketchCircle } from "./Sketch";
import { blueprintFlow } from "../offers/brand";

/** A tiny "messy" vs "clean" doodle for each step, drawn like a whiteboard sketch. */
function StepDoodle({ step }: { step: number }) {
  if (step === 0) {
    // Tangled boxes and crossing lines
    return (
      <svg viewBox="0 0 160 90" aria-hidden fill="none" className="h-20 w-full text-red-300/80">
        <rect x="8" y="10" width="34" height="22" rx="4" stroke="currentColor" strokeWidth="2" transform="rotate(-4 25 21)" />
        <rect x="112" y="8" width="38" height="24" rx="4" stroke="currentColor" strokeWidth="2" transform="rotate(5 131 20)" />
        <rect x="58" y="58" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="2" transform="rotate(-3 78 70)" />
        <path d="M42 22c30 40 50-20 70 0M30 34c10 30 60 10 30 26M132 32c-10 20-40 0-36 28M44 16c40-10 30 50 70 40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (step === 1) {
    // One clean page with a circled hot spot
    return (
      <svg viewBox="0 0 160 90" aria-hidden fill="none" className="h-20 w-full text-amber-300/90">
        <rect x="40" y="6" width="80" height="78" rx="6" stroke="currentColor" strokeWidth="2" />
        <path d="M54 26h52M54 40h36M54 54h46M54 68h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M86 32c14-6 30 2 26 12-4 9-26 10-32 2-5-7 2-12 10-14" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  // Ranked checklist
  return (
    <svg viewBox="0 0 160 90" aria-hidden fill="none" className="h-20 w-full text-green-400">
      {[16, 40, 64].map((y, i) => (
        <g key={y}>
          <path d={`M42 ${y}l5 5 9-10`} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M66 ${y}h${56 - i * 12}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <text x="126" y={y + 4} fill="currentColor" fontSize="11" fontFamily="var(--font-hand)">{`$${3 - i}`}</text>
        </g>
      ))}
    </svg>
  );
}

/** "How it works": the Blueprint drawn as a hand-sketched 3-step flow. */
export default function BlueprintFlow({ className = "bg-page" }: { className?: string }) {
  const { eyebrow, title, subtitle, steps, cta } = blueprintFlow;

  return (
    <section className={`${className} section-pad text-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={eyebrow} eyebrowIcon={faPenRuler} title={title} subtitle={subtitle} />

        <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-3">
          {steps.map((step, i) => (
            <div key={step.label} className="contents">
              <motion.div
                className="sketch-card isolate flex flex-col items-center p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
              >
                <StepDoodle step={i} />
                <div className="relative mt-4 inline-block px-3">
                  {i === 1 ? <SketchCircle className="absolute -inset-x-2 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+16px)] text-amber-300/70" /> : null}
                  <h3 className="relative text-xl font-semibold">{step.label}</h3>
                </div>
                <div className="hand-note mt-2 text-xl">{step.note}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{step.body}</p>
              </motion.div>
              {i < steps.length - 1 ? (
                <div className="flex items-center justify-center">
                  <SketchArrow className="h-8 w-16 rotate-90 text-white/40 md:h-10 md:w-14 md:rotate-0" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href={cta.href} className="btn-gradient gap-2">
            {cta.label}
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
