"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCartShopping, faCode, faCompassDrafting, faFaceFrown, faSeedling } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import { SketchArrow } from "./Sketch";
import { audienceSections, type AudienceSection, type Scenario } from "../offers/brand";

const sectionIcons = { saas: faCode, stores: faCartShopping } as const;

function ScenarioCard({ scenario, index }: { scenario: Scenario; index: number }) {
  const rows = [
    { label: "The scene", text: scenario.scene, icon: faFaceFrown, tone: "text-red-300" },
    { label: "What I do", text: scenario.whatIDo, icon: faCompassDrafting, tone: "text-amber-300" },
    { label: "What changes", text: scenario.whatChanges, icon: faSeedling, tone: "text-green-400" },
  ];

  return (
    <motion.article
      className="sketch-card isolate flex flex-col p-7 md:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="hand-note text-xl">{scenario.who}</span>
        {/* These are examples of who I help, not real client stories. */}
        <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-subtle">
          Example
        </span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold leading-snug text-white">{scenario.title}</h3>

      <dl className="mt-6 space-y-5">
        {rows.map((row) => (
          <div key={row.label} className="flex gap-4">
            <FontAwesomeIcon icon={row.icon} className={`mt-1 w-4 shrink-0 ${row.tone}`} aria-hidden />
            <div>
              <dt className={`text-xs font-semibold uppercase tracking-[0.14em] ${row.tone}`}>{row.label}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-zinc-300">{row.text}</dd>
            </div>
          </div>
        ))}
      </dl>
    </motion.article>
  );
}

function Audience({ section }: { section: AudienceSection }) {
  return (
    <section id={section.id} className="section-pad scroll-mt-16 bg-page text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          eyebrowIcon={sectionIcons[section.id]}
          title={section.title}
          subtitle={section.subtitle}
        />

        <p className="hand-note -mt-6 mb-8 text-center">sound familiar?</p>

        <div className="grid gap-8 md:grid-cols-2">
          {section.scenarios.map((scenario, i) => (
            <ScenarioCard key={scenario.id} scenario={scenario} index={i} />
          ))}
        </div>

        {section.proof ? (
          <a
            href={section.proof.href}
            className="group mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-green-500/25 bg-green-500/[0.06] p-5 text-center sm:flex-row sm:text-left"
          >
            <span className="font-hand text-2xl text-green-300">real result</span>
            <SketchArrow className="hidden h-6 w-14 shrink-0 text-green-400/70 sm:block" />
            <span className="flex-1 text-[15px] leading-relaxed text-zinc-200">{section.proof.text}</span>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-green-400">
              {section.proof.linkText}
              <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </a>
        ) : null}
      </div>
    </section>
  );
}

/** "Sound familiar?" pain sections, one per customer type, with example scenarios. */
export default function AudienceScenarios() {
  return (
    <>
      {audienceSections.map((section) => (
        <Audience key={section.id} section={section} />
      ))}
    </>
  );
}
