"use client";

import React from "react";
import { Check, Crown, Shield, Zap } from "lucide-react";

export type Plan = {
  name: string;
  price: string; // e.g. "$99/mo"
  tagline: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

export type AddOn = {
  label: string;
  price: string;
};

type Props = {
  /** Optional custom plans. If omitted, sensible defaults are used. */
  plans?: Plan[];
  /** Called when user clicks a plan CTA. */
  onSelect?: (planName: string) => void;
  /** CTA target. You can also handle onSelect to open a modal/checkout. */
  ctaHref?: string;
  /** Show the Add‑Ons section */
  showAddOns?: boolean;
  /** Optional custom add‑ons */
  addOns?: AddOn[];
  /** Optional heading override */
  heading?: string;
  /** Optional subheading override */
  subheading?: string;
};

const defaultPlans: Plan[] = [
  {
    name: "Essential Care",
    price: "$99/mo",
    tagline: "Basic protection & updates for small sites",
    features: [
      "Weekly security updates & patches",
      "Daily automated backups",
      "24/7 uptime monitoring",
      "SSL certificate management",
      "Monthly performance report",
    ],
    badge: "Best Value",
  },
  {
    name: "Growth Plan",
    price: "$249/mo",
    tagline: "Consistent updates + better search visibility",
    features: [
      "Everything in Essential",
      "Up to 3 hours of content updates",
      "Monthly on‑page SEO adjustments",
      "Keyword rank tracking & report",
      "Image optimization for speed",
      "Quarterly strategy call",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "VIP Partner",
    price: "$499/mo",
    tagline: "Priority growth & ROI with a full‑service team",
    features: [
      "Everything in Growth",
      "Up to 8 hours of design/dev work",
      "Priority support (same‑day)",
      "Custom landing page each month",
      "A/B testing on key pages",
      "Conversion & analytics reporting",
    ],
    badge: "Premium",
  },
];

const defaultAddOns: AddOn[] = [
  { label: "Extra content/design hours", price: "$50/hr" },
  { label: "Managed hosting", price: "from $50/mo" },
  { label: "Email marketing + newsletter", price: "from $149/mo" },
];

/**
 * PricingPlans — A polished, responsive pricing section for Next.js + Tailwind.
 *
 * Usage:
 *   <PricingPlans onSelect={(name) => console.log(name)} ctaHref="/contact" />
 */
export default function PricingPlans({
  plans = defaultPlans,
  addOns = defaultAddOns,
  ctaHref = "/contact",
  onSelect,
  showAddOns = true,
  heading = "Website Care & Growth Plans",
  subheading = "Keep your website fast, secure, and working for your business — every month.",
}: Props) {
  return (
    <section className="relative w-full py-16 sm:py-20">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-50 to-transparent dark:via-neutral-900" />

      <div className="mx-auto max-w-7xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">{subheading}</p>
        </header>

        {/* Plans grid */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              ctaHref={ctaHref}
              onSelect={onSelect}
            />
          ))}
        </div>

        {/* Add‑ons */}
        {showAddOns && (
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-neutral-200/60 bg-white/70 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-violet-600 dark:text-violet-400" aria-hidden="true" />
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-50">Add‑Ons</h3>
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {addOns.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center justify-between rounded-xl border border-neutral-200/60 bg-white px-4 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <span className="text-neutral-700 dark:text-neutral-300">{a.label}</span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  ctaHref,
  onSelect,
}: {
  plan: Plan;
  ctaHref: string;
  onSelect?: (planName: string) => void;
}) {
  const Icon = plan.highlight ? Crown : plan.name.includes("Essential") ? Shield : Zap;
  const ring = plan.highlight
    ? "ring-2 ring-violet-600/70 dark:ring-violet-400/70"
    : "ring-1 ring-neutral-200/70 dark:ring-neutral-800/70";

  return (
    <div
      className={[
        "relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md dark:bg-neutral-900",
        ring,
      ].join(" ")}
    >
      {/* Accent gradient bar */}
      <div
        className={[
          "absolute inset-x-0 top-0 h-1",
          plan.highlight
            ? "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500"
            : "bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800",
        ].join(" ")}
      />

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {plan.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{plan.tagline}</p>
        </div>
        <div className="shrink-0 rounded-full bg-neutral-100 p-2 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          {plan.price}
        </span>
        {plan.badge && (
          <span className="rounded-full bg-violet-600/10 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
            {plan.badge}
          </span>
        )}
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" aria-hidden="true" />
            <span className="text-neutral-700 dark:text-neutral-300">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8" />

      <a
        href={ctaHref}
        onClick={(e) => {
          if (onSelect) {
            e.preventDefault();
            onSelect(plan.name);
          }
        }}
        className={[
          "group mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition",
          plan.highlight
            ? "bg-violet-600 text-white hover:bg-violet-700"
            : "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200",
        ].join(" ")}
        aria-label={`Select the ${plan.name}`}
      >
        <span>Get Started</span>
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
        </svg>
      </a>
    </div>
  );
}
