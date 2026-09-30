"use client";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

import IconTile from "../../components/IconTile";
import SectionHeader from "../../components/SectionHeader";
import type { OffersHowItWorksStep } from "../copy";

export default function HowItWorks({
  id = "how-it-works",
  title,
  subtitle,
  steps,
  className = "bg-page",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  steps: readonly OffersHowItWorksStep[];
  className?: string;
}) {
  return (
    <section id={id} className={`${className} section-pad scroll-mt-16 text-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="The value ladder" eyebrowIcon={faSeedling} title={title} subtitle={subtitle} />

        <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {/* growth line connecting the steps */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-green-500/40 via-green-500/20 to-amber-500/40 lg:block"
          />
          {steps.map((step, i) => (
            <li key={step.eyebrow + step.title} className="surface-card surface-card-hover relative p-6">
              <div className="flex items-center justify-between">
                {step.icon ? <IconTile icon={step.icon} /> : <span />}
                <span className="font-mono text-xs text-ink-subtle">0{i + 1}</span>
              </div>
              <div className="eyebrow mt-6">{step.eyebrow}</div>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
