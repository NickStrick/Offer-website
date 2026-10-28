"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faCalendarCheck,
  faCheck,
  faHandshake,
  faMagnifyingGlassChart,
  faPenRuler,
  faScrewdriverWrench,
  faShieldHalved,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import BookCallButton from "./BookCallModal";
import { IntakeModal } from "./IntakeForm";
import { auditOffer, fixOffer, fractionalOffer, type ServiceOffer } from "../offers/copy";

const tierIcons: Record<ServiceOffer["intent"], IconDefinition> = {
  audit: faPenRuler,
  fractional: faHandshake,
  fixes: faScrewdriverWrench,
};

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
          <FontAwesomeIcon icon={tierIcons[offer.intent]} aria-hidden />
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

      <div className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-ink-muted">{offer.title}</div>
      <h3 className="mt-2 text-2xl font-semibold leading-snug">{offer.headline}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{offer.subtitle}</p>

      {offer.priceBadge ? (
        <div className="mt-6 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-amber-300">
          {offer.priceBadge}
        </div>
      ) : null}
      {offer.price ? (
        <div className={`${offer.priceBadge ? "mt-3" : "mt-6"} flex flex-wrap items-baseline gap-x-2`}>
          {offer.regularPrice ? (
            <span className="text-2xl font-medium text-ink-subtle line-through">
              <span className="sr-only">Regularly </span>
              {offer.regularPrice}
            </span>
          ) : null}
          <span className="text-4xl font-semibold text-white xl:text-5xl" style={{ letterSpacing: "-0.04em" }}>
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
        {offer.checkoutHref ? (
          <>
            <Link href={offer.checkoutHref} className={`${featured ? "btn-gradient" : "btn-inverted"} mt-8 w-full gap-2`}>
              {offer.ctaText}
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={() => onRequest(offer)}
              className="mt-3 w-full text-center text-sm text-ink-muted underline-offset-4 transition hover:text-white hover:underline"
            >
              Questions first? Send me a message
            </button>
          </>
        ) : offer.bookCall ? (
          <>
            <BookCallButton className={`${featured ? "btn-gradient" : "btn-inverted"} mt-8 w-full gap-2`}>
              <FontAwesomeIcon icon={faCalendarCheck} className="text-sm" aria-hidden />
              {offer.ctaText}
            </BookCallButton>
            <button
              type="button"
              onClick={() => onRequest(offer)}
              className="mt-3 w-full text-center text-sm text-ink-muted underline-offset-4 transition hover:text-white hover:underline"
            >
              Rather write first? Send me a message
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => onRequest(offer)}
            className={`${featured ? "btn-gradient" : "btn-inverted"} mt-8 w-full gap-2`}
          >
            {offer.ctaText}
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
          </button>
        )}
      </div>
    </motion.div>
  );
}

/** The three tiers: the 48-Hour Blueprint, the Fractional Solutions Architect, and the Systems Refactor. */
export default function ServiceOffers({ className = "bg-page" }: { className?: string }) {
  const [requesting, setRequesting] = useState<ServiceOffer | null>(null);

  return (
    <section id="services" className={`${className} section-pad scroll-mt-16 text-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How I can help"
          eyebrowIcon={faMagnifyingGlassChart}
          title="Draw it. Simplify it. Sell it."
          subtitle="Start with a Blueprint. Then keep me on your team, or have me build the fixes for you."
        />

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          <ServiceCard offer={auditOffer} featured index={0} onRequest={setRequesting} />
          <ServiceCard offer={fractionalOffer} featured={false} index={1} onRequest={setRequesting} />
          <ServiceCard offer={fixOffer} featured={false} index={2} onRequest={setRequesting} />
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
