"use client";
import type { RevenueConsultCaseStudy } from "../copy";

export default function CaseStudy({
  copy,
  className = "bg-gradient-black-dark",
}: {
  copy: RevenueConsultCaseStudy;
  className?: string;
}) {
  const rows = [copy.friction, copy.architecture, copy.metric];

  return (
    <section className={`${className} px-6 py-16 text-white`}>
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-10">
          <div className="text-accent text-sm font-bold uppercase tracking-wide">
            B2B / Luxury Watch Case Study
          </div>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">{copy.title}</h2>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {rows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred">
              <div className="text-accent text-sm font-bold uppercase tracking-wide">{row.label}</div>
              <p className="mt-3 text-lg opacity-90 max-w-none">{row.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
