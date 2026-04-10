"use client";
import type { RevenueConsultTier } from "../copy";

export default function OfferTiers({
  id = "tiers",
  title,
  subtitle,
  tiers,
  onCta,
  backgroundImageSrc,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  tiers: readonly RevenueConsultTier[];
  onCta: () => void;
  backgroundImageSrc: string;
}) {
  return (
    <section
      id={id}
      className="px-6 py-16 text-white bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text">{title}</h2>
          {subtitle ? (
            <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto gradient-text">{subtitle}</p>
          ) : null}
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred price-card"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="text-accent text-xl font-extrabold">{tier.price}</div>
              </div>
              {tier.tagline ? <p className="mt-2 text-lg opacity-90 max-w-none">{tier.tagline}</p> : null}
              {tier.description ? <p className="mt-4 text-lg opacity-90 max-w-none">{tier.description}</p> : null}
              <ul className="mt-5 list-disc pl-5 space-y-2 text-lg opacity-90">
                {tier.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="btn-container">
                <button
                  type="button"
                  onClick={onCta}
                  className={`${
                    tier.ctaVariant === "gradient" ? "btn-gradient" : "btn-inverted"
                  } w-full text-center px-8 py-4 rounded-full`}
                >
                  {tier.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
