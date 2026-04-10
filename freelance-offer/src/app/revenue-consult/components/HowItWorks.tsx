"use client";
import type { RevenueConsultHowItWorksStep } from "../copy";

export default function HowItWorks({
  id = "how-it-works",
  title,
  subtitle,
  steps,
  className = "bg-gradient-black-dark",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  steps: readonly RevenueConsultHowItWorksStep[];
  className?: string;
}) {
  return (
    <section id={id} className={`${className} px-6 py-16 text-white`}>
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">{subtitle}</p>
          ) : null}
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.eyebrow + step.title} className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred">
              <div className="text-accent text-sm font-bold uppercase tracking-wide">{step.eyebrow}</div>
              <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-lg opacity-90 max-w-none">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
