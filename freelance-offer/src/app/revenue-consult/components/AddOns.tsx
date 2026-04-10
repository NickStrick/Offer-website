"use client";
import type { RevenueConsultAddOn } from "../copy";

export default function AddOns({
  id = "add-ons",
  title,
  subtitle,
  items,
  onCta,
  className = "bg-gradient-black-purple",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  items: readonly RevenueConsultAddOn[];
  onCta: () => void;
  className?: string;
}) {
  return (
    <section id={id} className={`${className} px-6 py-16 text-white`}>
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">{subtitle}</p> : null}
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred price-card"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <div className="text-accent text-xl font-extrabold">{item.price}</div>
              </div>
              <p className="mt-4 text-lg opacity-90 max-w-none">{item.description}</p>
              {item.bullets?.length ? (
                <ul className="mt-5 list-disc pl-5 space-y-2 text-lg opacity-90">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              <div className="btn-container">
                <button
                  type="button"
                  onClick={onCta}
                  className="btn-inverted w-full text-center px-8 py-4 rounded-full"
                >
                  {item.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
