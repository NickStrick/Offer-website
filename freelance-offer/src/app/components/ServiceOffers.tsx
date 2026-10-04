"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faMagnifyingGlassChart,
  faScrewdriverWrench,
  faShieldHalved,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import { IntakeModal } from "./IntakeForm";
import { auditOffer, fixOffer, type ServiceOffer } from "../offers/copy";

function ServiceCard({
  offer,
  featured,
  index,
  onRequest,
}: {
  offer: ServiceOffer;
  featured: boolean;
  index: number;
  onRequest: (offer: ServiceOffer) => void;
}) {
  return (
    <motion.div
      id={offer.id}
      className={`relative flex scroll-mt-24 flex-col p-7 md:p-9 ${
        featured
          ? "surface-card !border-2 !border-green-500 bg-zinc-900 shadow-2xl shadow-[0_0_90px_-24px_rgba(34,197,94,0.55)]"
          : "surface-card bg-gradient-to-b from-amber-500/[0.05] to-transparent"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl border text-lg ${
            featured ? "border-green-500/40 bg-green-500/10 text-green-400" : "border-white/10 bg-white/[0.03] text-amber-300"
          }`}
        >
          <FontAwesomeIcon icon={featured ? faMagnifyingGlassChart : faScrewdriverWrench} aria-hidden />
        </div>
        <div
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] ${
            featured ? "bg-green-500 font-semibold text-[#04210f]" : "border border-amber-500/30 text-amber-300"
          }`}
        >
          {featured ? <FontAwesomeIcon icon={faStar} aria-hidden /> : null}
          {offer.eyebrow}
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-semibold leading-snug">{offer.headline}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{offer.subtitle}</p>

      {offer.price ? (
        <div className="mt-6 flex flex-wrap items-baseline gap-x-2">
          <span className="text-5xl font-semibold text-white" style={{ letterSpacing: "-0.04em" }}>
            {offer.price}
          </span>
          {offer.priceNote ? <span className="text-sm text-ink-subtle">/ {offer.priceNote}</span> : null}
        </div>
      ) : offer.priceNote ? (
        <div className="mt-6 text-sm font-medium uppercase tracking-[0.12em] text-amber-300">{offer.priceNote}</div>
      ) : null}

      <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
        {offer.features.map((f) => (
          <li key={f.title} className="flex gap-3 text-[15px] leading-relaxed text-zinc-200">
            <FontAwesomeIcon
              icon={faCheck}
              aria-hidden
              className={`mt-1.5 w-3.5 shrink-0 ${featured ? "text-green-400" : "text-amber-300"}`}
            />
            <span>
              <strong className="font-semibold text-white">{f.title}</strong>, {f.text}
            </span>
          </li>
        ))}
      </ul>

      {offer.guarantee ? (
        <div className="mt-6 flex gap-3 rounded-xl border border-green-500/25 bg-green-500/[0.07] p-4">
          <FontAwesomeIcon icon={faShieldHalved} className="mt-0.5 shrink-0 text-green-400" aria-hidden />
          <div>
            <div className="text-sm font-semibold text-white">{offer.guarantee.title}</div>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{offer.guarantee.body}</p>
          </div>
        </div>
      ) : null}

      <div className="mt-auto">
        <button
          type="button"
          onClick={() => onRequest(offer)}
          className={`${featured ? "btn-gradient" : "btn-inverted"} mt-8 w-full gap-2`}
        >
          {offer.ctaText}
          <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
        </button>
      </div>
    </motion.div>
  );
}

/** The two services: the $800 Revenue Leak Audit and done-for-you fixes. */
export default function ServiceOffers({ className = "bg-page" }: { className?: string }) {
  const [requesting, setRequesting] = useState<ServiceOffer | null>(null);

  return (
    <section id="services" className={`${className} section-pad scroll-mt-16 text-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How I can help"
          eyebrowIcon={faMagnifyingGlassChart}
          title="Find the leaks. Fix the leaks. Grow your sales."
          subtitle="Two simple ways to turn more of your visitors into paying customers."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-[1.15fr_1fr]">
          <ServiceCard offer={auditOffer} featured index={0} onRequest={setRequesting} />
          <ServiceCard offer={fixOffer} featured={false} index={1} onRequest={setRequesting} />
        </div>
      </div>

      <IntakeModal
        open={requesting !== null}
        onClose={() => setRequesting(null)}
        intent={requesting?.intent ?? "audit"}
        eyebrow={requesting ? `${requesting.title}${requesting.price ? ` · ${requesting.price}` : ""}` : ""}
        title={requesting?.modal.title ?? ""}
        description={requesting?.modal.description}
      />
    </section>
  );
}
