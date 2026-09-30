"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faBuilding,
  faChalkboardUser,
  faCheck,
  faCrown,
  faGift,
  faMicrophoneLines,
  faPlay,
  faRocket,
  faShieldHalved,
  faUserTie,
  faUsers,
  faVault,
} from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "./SectionHeader";
import { IntakeModal } from "./IntakeForm";
import { offerLadders, type OfferLadder, type OfferTier } from "../offers/copy";

const cardStyles: Record<OfferTier["variant"], string> = {
  standard: "surface-card",
  featured:
    "surface-card !border-2 !border-green-500 bg-zinc-900 shadow-2xl shadow-[0_0_90px_-24px_rgba(34,197,94,0.55)] md:scale-105 z-10",
  core: "surface-card !border-2 !border-green-500/80 bg-zinc-900 shadow-xl shadow-[0_0_70px_-28px_rgba(34,197,94,0.5)]",
  anchor: "surface-card !border-zinc-700 bg-gradient-to-b from-amber-500/[0.06] to-transparent",
};

const badgeStyles: Record<OfferTier["variant"], string> = {
  standard: "border border-white/10 text-ink-muted",
  featured: "bg-green-500 text-[#04210f] font-semibold",
  core: "bg-green-500 text-[#04210f] font-semibold",
  anchor: "border border-amber-500/30 text-amber-300",
};

const badgeIcons: Record<OfferTier["variant"], IconDefinition> = {
  standard: faPlay,
  featured: faUsers,
  core: faCrown,
  anchor: faBuilding,
};

const tierIcons: Record<OfferTier["id"], IconDefinition> = {
  "communication-masterclass": faMicrophoneLines,
  "presentation-sprint": faChalkboardUser,
  "enterprise-audit": faShieldHalved,
  "enterprise-retainer": faVault,
};

const ladderIcons: Record<string, IconDefinition> = {
  career: faRocket,
  enterprise: faUserTie,
};

const isHighlighted = (tier: OfferTier) => tier.variant === "featured" || tier.variant === "core";

function TierCta({ tier, onApply }: { tier: OfferTier; onApply: (tier: OfferTier) => void }) {
  const className = `${isHighlighted(tier) ? "btn-gradient" : "btn-inverted"} mt-8 w-full gap-2`;
  const content = (
    <>
      {tier.ctaText}
      <FontAwesomeIcon icon={faArrowRight} className="text-sm" aria-hidden />
    </>
  );

  if (tier.ctaAction === "modal") {
    return (
      <button type="button" onClick={() => onApply(tier)} className={className}>
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

function TierCard({ tier, index, onApply }: { tier: OfferTier; index: number; onApply: (tier: OfferTier) => void }) {
  const highlighted = isHighlighted(tier);

  return (
    <motion.div
      id={tier.id}
      className={`relative flex scroll-mt-24 flex-col p-7 md:p-8 ${cardStyles[tier.variant]}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl border text-lg ${
            highlighted ? "border-green-500/40 bg-green-500/10 text-green-400" : "border-white/10 bg-white/[0.03] text-ink-muted"
          }`}
        >
          <FontAwesomeIcon icon={tierIcons[tier.id]} aria-hidden />
        </div>
        <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] ${badgeStyles[tier.variant]}`}>
          <FontAwesomeIcon icon={badgeIcons[tier.variant]} aria-hidden />
          {tier.badge}
        </div>
      </div>

      <div className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-subtle">{tier.tierLabel}</div>
      <h3 className="mt-1 text-xl font-semibold leading-snug">{tier.title}</h3>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-2">
        <span className="text-4xl font-semibold text-white" style={{ letterSpacing: "-0.04em" }}>
          {tier.price}
        </span>
        <span className="text-sm text-ink-subtle">/ {tier.priceNote}</span>
      </div>

      {/* Value stack */}
      <ul className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-relaxed text-zinc-200">
            <FontAwesomeIcon icon={faCheck} aria-hidden className={`mt-1 w-3.5 shrink-0 ${highlighted ? "text-green-400" : "text-ink-subtle"}`} />
            <span>{feature}</span>
          </li>
        ))}
        {tier.bonuses.map((bonus, i) => (
          <li key={bonus} className="flex gap-3 text-sm leading-relaxed text-zinc-200">
            <FontAwesomeIcon icon={faGift} aria-hidden className="mt-1 w-3.5 shrink-0 text-amber-400" />
            <span>
              <span className="mr-1.5 font-semibold uppercase tracking-wide text-amber-300">Bonus {i + 1}:</span>
              {bonus}
            </span>
          </li>
        ))}
      </ul>

      {tier.riskReversal ? (
        <div className="mt-6 flex gap-3 rounded-xl border border-green-500/25 bg-green-500/[0.07] p-4">
          <FontAwesomeIcon icon={faShieldHalved} className="mt-0.5 shrink-0 text-green-400" aria-hidden />
          <div>
            <div className="text-sm font-semibold text-white">{tier.riskReversal.title}</div>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{tier.riskReversal.body}</p>
          </div>
        </div>
      ) : null}

      <div className="mt-auto">
        <TierCta tier={tier} onApply={onApply} />
      </div>
    </motion.div>
  );
}

function LadderSection({
  ladder,
  className,
  onApply,
}: {
  ladder: OfferLadder;
  className: string;
  onApply: (tier: OfferTier) => void;
}) {
  return (
    <section id={ladder.id} className={`${className} section-pad scroll-mt-16 text-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={ladder.badge}
          eyebrowIcon={ladderIcons[ladder.id]}
          title={ladder.headline}
          subtitle={ladder.subheadline}
          className="!mb-6"
        />
        <p className="mx-auto mb-14 max-w-2xl text-center text-sm text-ink-subtle">
          <span className="font-medium text-ink-muted">Built for: </span>
          {ladder.icp}
        </p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {ladder.tiers.map((tier, i) => (
            <TierCard key={tier.id} tier={tier} index={i} onApply={onApply} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Two offer ladders split by customer profile: career/communication (B2C) and enterprise architecture (B2B). */
export default function DualOfferLadders() {
  const [applying, setApplying] = useState<OfferTier | null>(null);

  return (
    <div id="offers" className="scroll-mt-16">
      <LadderSection ladder={offerLadders[0]} className="bg-page" onApply={setApplying} />
      <LadderSection ladder={offerLadders[1]} className="bg-gradient-purple-black" onApply={setApplying} />

      <IntakeModal
        open={applying !== null}
        onClose={() => setApplying(null)}
        intent={applying?.modal?.intent ?? "general"}
        eyebrow={applying ? `${applying.tierLabel} · ${applying.price}` : ""}
        title={applying?.modal?.title ?? ""}
        description={applying?.modal?.description}
      />
    </div>
  );
}
