"use client";
import type { RevenueConsultFrameworkItem } from "../copy";

export default function Framework({
  id = "framework",
  title,
  subtitle,
  items,
  className = "bg-gradient-black-purple",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  items: readonly RevenueConsultFrameworkItem[];
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
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred">
              <h3 className="text-2xl font-bold text-accent">{item.title}</h3>
              <p className="mt-3 text-lg opacity-90 max-w-none">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
