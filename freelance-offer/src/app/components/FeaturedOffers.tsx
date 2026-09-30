"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBuilding,
  faChalkboardUser,
  faCheck,
  faClipboardCheck,
  faGift,
  faLayerGroup,
  faMicrophoneLines,
  faStar,
  faVault,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import { ChecklistModal } from "./LeadMagnetBanner";
import { featuredOffersHeader, offerTiers, type OfferTier } from "../offers/copy";

type FeaturedOffersProps = {
  id?: string;
  className?: string;
};

const cardStyles: Record<OfferTier["variant"], string> = {
  free: "surface-card !border-dashed !border-green-500/40",
  standard: "surface-card",
  featured:
    "surface-card !border-green-500/60 ring-1 ring-green-500/20 shadow-[0_0_80px_-24px_rgba(34,197,94,0.45)] xl:-my-4 xl:py-11 z-10",
  anchor: "surface-card bg-gradient-to-b from-amber-500/[0.06] to-transparent",
};

const badgeStyles: Record<OfferTier["variant"], string> = {
  free: "border border-green-500/30 bg-green-500/10 text-green-400",
  standard: "border border-white/10 text-ink-muted",
  featured: "bg-green-500 text-[#04210f] font-semibold",
  anchor: "border border-amber-500/30 text-amber-300",
};

const badgeIcons = {
  free: faGift,
  standard: faVideo,
  featured: faStar,
  anchor: faBuilding,
} as const;

const tierIcons: Record<OfferTier["id"], typeof faVault> = {
  "enterprise-checklist": faClipboardCheck,
  "communication-masterclass": faMicrophoneLines,
  "presentation-sprint": faChalkboardUser,
  "enterprise-audit": faVault,
};

function TierCta({ tier, onOpenChecklist }: { tier: OfferTier; onOpenChecklist: () => void }) {
  const className = `${tier.variant === "featured" ? "btn-gradient" : "btn-inverted"} mt-8 w-full gap-2 !px-4 !text-sm`;
  const content = (
    <>
      {tier.ctaText}
      <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
    </>
  );

  if (tier.ctaAction === "modal") {
    return (
      <button type="button" onClick={onOpenChecklist} className={className}>
        {content}
      </button>
    );
  }
  const href = tier.ctaHref ?? "/contact";
  if (/^https?:\/\//i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export default function FeaturedOffers({ id = "offers", className = "bg-page" }: FeaturedOffersProps) {
  const [checklistOpen, setChecklistOpen] = useState(false);

  return (
    <section id={id} className={`${className} section-pad scroll-mt-16 text-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={featuredOffersHeader.tag}
          eyebrowIcon={faLayerGroup}
          title={featuredOffersHeader.title}
          subtitle={featuredOffersHeader.subtitle}
        />

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {offerTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              id={tier.id}
              className={`relative flex scroll-mt-24 flex-col p-6 ${cardStyles[tier.variant]}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border text-lg ${
                    tier.variant === "featured" || tier.variant === "free"
                      ? "border-green-500/40 bg-green-500/10 text-green-400"
                      : "border-white/10 bg-white/[0.03] text-ink-muted"
                  }`}
                >
                  <FontAwesomeIcon icon={tierIcons[tier.id]} aria-hidden />
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.12em] ${badgeStyles[tier.variant]}`}
                >
                  <FontAwesomeIcon icon={badgeIcons[tier.variant]} aria-hidden />
                  {tier.badge}
                </div>
              </div>

              <div className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-subtle">{tier.tierLabel}</div>
              <h3 className="mt-1 text-lg font-semibold leading-snug">{tier.title}</h3>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-2">
                <span className="text-[1.7rem] font-semibold leading-tight text-white" style={{ letterSpacing: "-0.04em" }}>
                  {tier.price}
                </span>
                <span className="text-sm text-ink-subtle">/ {tier.priceNote}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{tier.valueProp}</p>

              <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-zinc-200">
                    <FontAwesomeIcon
                      icon={faCheck}
                      aria-hidden
                      className={`mt-1 w-3.5 shrink-0 ${
                        tier.variant === "featured" || tier.variant === "free" ? "text-green-400" : "text-ink-subtle"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-ink-subtle">
                <span className="font-medium text-ink-muted">Best for: </span>
                {tier.audience}
              </p>

              <div className="mt-auto">
                <TierCta tier={tier} onOpenChecklist={() => setChecklistOpen(true)} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ChecklistModal open={checklistOpen} onClose={() => setChecklistOpen(false)} />
    </section>
  );
}
