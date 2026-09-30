import carolePhoto from "../../../public/testimonials/carole-headshot.png";
import josePhoto from "../../../public/testimonials/jose-headshot.jpg";
import lukeRottaPhoto from "../../../public/testimonials/lukerotta.jpg";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDiagramProject,
  faMagnifyingGlassChart,
  faRocket,
  faRoute,
  faStopwatch,
  faUserShield,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { caseStudyImages, videos, type ImageMedia, type VideoMedia } from "../media";

export type OffersFAQItem = {
  question: string;
  answer: string;
};

export type OffersTestimonialItem = {
  quote: string;
  name: string;
  role?: string;
  avatarUrl?: string;
};

export type OffersHowItWorksStep = {
  icon?: IconDefinition;
  eyebrow: string;
  title: string;
  description: string;
};

export type OffersFrameworkItem = {
  icon?: IconDefinition;
  title: string;
  description: string;
};

export type OffersCaseStudy = {
  id: string;
  /** Unpublished studies are hidden in production and shown as placeholders in dev. */
  published: boolean;
  eyebrow: string;
  title: string;
  image: ImageMedia;
  friction: { label: string; text: string };
  architecture: { label: string; text: string };
  metric: { label: string; text: string };
};

/**
 * How a tier's CTA behaves:
 * - "checkout": external payment link (Stripe) or fallback route
 * - "apply":    opens the ICP intake modal (filters by ARR)
 * - "link":     internal route
 */
export type OfferCtaAction = "checkout" | "apply" | "link";

export type OfferTier = {
  id: "micro-audit" | "enterprise-audit" | "enterprise-retainer";
  variant: "standard" | "featured" | "anchor";
  badge: string;
  title: string;
  price: string;
  priceNote: string;
  audience: string;
  valueProp: string;
  features: readonly string[];
  ctaText: string;
  ctaAction: OfferCtaAction;
  ctaHref?: string;
};

export type OffersCtaBannerCopy = {
  id?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
};

export type OffersIntakeModalCopy = {
  submitUrl: string;
  bookCallUrl: string;
  /** Google Form entry IDs. Leave `arr` / `company` empty until those questions exist on the form. */
  entries: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    arr: string;
  };
  closeLabel: string;
  title: string;
  description: string;
  placeholders: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
  };
  arrLabel: string;
  arrOptions: readonly { value: string; label: string; qualifies: boolean }[];
  submit: {
    idle: string;
    loading: string;
  };
  notQualified: {
    title: string;
    body: string;
    ctaText: string;
    backText: string;
  };
  consent: string;
};

export type LeadMagnetCopy = {
  id: string;
  /** Shown in the success state after someone requests the free audit. */
  video: VideoMedia;
  tag: string;
  title: string;
  body: string;
  ctaText: string;
  modal: {
    submitUrl: string;
    /**
     * Google Form entry IDs. Until the form has dedicated "Source" and "URL" questions,
     * these reuse the existing first/last name fields so leads are still captured.
     */
    entries: { email: string; url: string; source: string };
    sourceValue: string;
    closeLabel: string;
    title: string;
    description: string;
    placeholders: { email: string; url: string };
    submit: { idle: string; loading: string };
    success: { title: string; body: string; upsellText: string; upsellHref: string };
    consent: string;
  };
};

export type OffersAboutCopy = {
  title: string;
  cards: {
    left: { title: string; bodyLines: readonly string[] };
    right: { title: string; bodyLines: readonly string[] };
  };
};

// Set NEXT_PUBLIC_STRIPE_MICRO_AUDIT_URL to the Stripe Payment Link for Tier 1.
// Until then, the CTA falls back to the contact intake.
export const MICRO_AUDIT_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_STRIPE_MICRO_AUDIT_URL || "/contact?tier=micro-audit";

export const SALES_EMAIL = "sales@strickerdigital.com";

export const offerTiers: readonly OfferTier[] = [
  {
    id: "micro-audit",
    variant: "standard",
    badge: "48-Hour Delivery",
    title: "Micro Conversion & Latency Audit",
    price: "$400",
    priceNote: "one-time",
    audience: "Growth-stage founders wanting immediate visual proof of form/API friction.",
    valueProp: "Identify your top 3 conversion and system latency leaks without booking a sales call.",
    features: [
      "Complete 10-Minute Loom Video Teardown",
      "Excalidraw Progressive UI/UX Layout Blueprint",
      "Top 3 API / Checkout Bottlenecks Mapped for your internal dev team",
    ],
    ctaText: "Order Micro-Audit ($400)",
    ctaAction: "checkout",
    ctaHref: MICRO_AUDIT_CHECKOUT_URL,
  },
  {
    id: "enterprise-audit",
    variant: "featured",
    badge: "Most Popular",
    title: "48-Hour Enterprise System & Security Audit",
    price: "$3,500 to $5,000",
    priceNote: "fixed-scope",
    audience:
      "B2B SaaS Platforms ($1M to $10M ARR) experiencing user drop-off or infrastructure friction.",
    valueProp:
      "A complete diagnostic overhaul mapping architectural debt directly onto recovered business margins.",
    features: [
      "Full Checkout, API Latency & Auth Security Audit",
      "Custom Excalidraw System Topology Blueprint",
      "Developer-Ready Refactoring Spec Sheet",
      "AWS Caching & Cost-Optimization Review (FinOps)",
      "30-Minute Executive Strategy Sync",
    ],
    ctaText: "Apply for Architectural Audit",
    ctaAction: "apply",
  },
  {
    id: "enterprise-retainer",
    variant: "anchor",
    badge: "Full Implementation",
    title: "Enterprise AI Agent & Vault Implementation",
    price: "$50,000",
    priceNote: "retainer",
    audience:
      "High-growth enterprise platforms requiring custom AI workflows, multi-tenant \"Digital Vault\" security, and hands-on refactoring.",
    valueProp:
      "End-to-end architecture design, agentic workflow automation, and infrastructure deployment built for high-scale, zero-trust environments.",
    features: [
      "Custom Next.js / AWS Private Portal Deployment",
      "Autonomous AI Agent Workflows (n8n/CrewAI)",
      "Zero-Trust Security, Auth0 & Session Isolation Setup",
      "30-Day Hands-On Engineering Support",
    ],
    ctaText: "Inquire for Enterprise Retainer",
    ctaAction: "link",
    ctaHref: "/contact?tier=enterprise",
  },
];

export const leadMagnetCopy: LeadMagnetCopy = {
  id: "free-audit",
  video: videos.welcomeFreeAudit,
  tag: "Free Diagnostic",
  title: "Want a Free 2-Minute Over-The-Shoulder Video Audit?",
  body: "Send us your web application or checkout link. We'll map out your top 3 conversion and latency bottlenecks on Excalidraw for free. No sales call required.",
  ctaText: "Request Free Loom Audit",
  modal: {
    submitUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSei5MW9D_2R8OzjDQdy78j_x7Z3Hx0NXO1ohwoljdZ6xHQg9Q/formResponse",
    entries: {
      email: "entry.1036202572",
      url: "entry.659719382", // "Last name" field until a URL question exists
      source: "entry.1511831625", // "First name" field until a Source question exists
    },
    sourceValue: "Free Loom Audit",
    closeLabel: "✖",
    title: "Get Your Free Loom Audit",
    description:
      "Drop your app or checkout link and where to send the video. You'll get a 2-minute walkthrough of your top 3 bottlenecks. No call, no pitch.",
    placeholders: {
      email: "Work email",
      url: "App or checkout URL",
    },
    submit: {
      idle: "Send my free audit",
      loading: "Sending…",
    },
    success: {
      title: "You're in the queue.",
      body: "Your 2-minute Loom audit will land in your inbox. Want the full 10-minute teardown and layout blueprint in 48 hours?",
      upsellText: "Order Micro-Audit ($400)",
      upsellHref: MICRO_AUDIT_CHECKOUT_URL,
    },
    consent:
      "By providing your information today, you are giving consent for us to contact you by mail, phone, text, or email. We do not sell your personal information, and you can withdraw consent at any time.",
  },
};

export const caseStudiesHeader = {
  id: "case-studies",
  eyebrow: "Proof",
  title: "Case Studies",
  subtitle: "Architectural friction, the fix, and the metric it moved.",
};

export const caseStudies: readonly OffersCaseStudy[] = [
  {
    id: "redtail-luxe",
    published: true,
    eyebrow: "Checkout Refactor",
    title: "Refactoring Redtail Luxe Checkout Infrastructure",
    image: caseStudyImages.redtailLuxe,
    friction: {
      label: "The Friction",
      text: "Monolithic checkout walls causing high user bounce rates on premium watch inventories.",
    },
    architecture: {
      label: "The Architecture",
      text: "Transformed the data collection process into a structured, linear flow restricted to a maximum of 5 inputs per step, paired with zero-latency custom-coded animations.",
    },
    metric: {
      label: "The Metric",
      text: "Secured a 30% lift in month-over-month user form completions within the first 30 days of active deployment.",
    },
  },
  {
    id: "trade-show-platform",
    published: true,
    eyebrow: "Enterprise Platform",
    title: "Scaling a Trade Show Analytics Platform",
    image: caseStudyImages.tradeShowPlatform,
    friction: {
      label: "The Friction",
      text: "Architectural scaling requirements across a 600,000-line enterprise execution engine serving exhibitors and attendees in real time.",
    },
    architecture: {
      label: "The Architecture",
      text: "Built full-stack direct-messaging matrices, real-time exhibitor directories, and asynchronous webhook delivery layers.",
    },
    metric: {
      label: "The Metric",
      text: "Drove a 30% performance optimization and a 22% drop in recorded user friction tickets.",
    },
  },
  {
    id: "slot-3",
    published: false,
    eyebrow: "Case Study Slot 3",
    title: "Your next B2B SaaS case study",
    image: caseStudyImages.slot3,
    friction: { label: "The Friction", text: "What was breaking and what it cost." },
    architecture: { label: "The Architecture", text: "What we changed in the system." },
    metric: { label: "The Metric", text: "The number that moved." },
  },
  {
    id: "slot-4",
    published: false,
    eyebrow: "Case Study Slot 4",
    title: "Your next B2B SaaS case study",
    image: caseStudyImages.slot4,
    friction: { label: "The Friction", text: "What was breaking and what it cost." },
    architecture: { label: "The Architecture", text: "What we changed in the system." },
    metric: { label: "The Metric", text: "The number that moved." },
  },
];

export const featuredOffersHeader = {
  tag: "Productized B2B Architecture Services",
  title: "Eliminate System Friction. Recover Leaked Revenue.",
  subtitle:
    "Fixed-scope diagnostic clarity and enterprise refactoring blueprints delivered in 48 hours. No open-ended hourly billing, just quantifiable business metrics.",
};

export type WelcomePageCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  video: VideoMedia;
  steps: readonly string[];
  nextCta: { text: string; href: string };
};

/** Post-signup pages at /welcome/[tier]. Point Stripe / Calendly redirects here. */
export const welcomePages: Record<OfferTier["id"], WelcomePageCopy> = {
  "micro-audit": {
    eyebrow: "Micro Conversion & Latency Audit",
    title: "You're in. Your Micro-Audit is underway.",
    subtitle: "Here's what happens over the next 48 hours.",
    video: videos.welcomeMicroAudit,
    steps: [
      "Check your inbox for your payment confirmation.",
      "Reply with your app or checkout URL and the flow you want reviewed, if you haven't already sent it.",
      "Your 10-minute Loom teardown and Excalidraw blueprint arrive within 24 to 48 hours.",
    ],
    nextCta: { text: "Explore the Enterprise Audit", href: "/offers#enterprise-audit" },
  },
  "enterprise-audit": {
    eyebrow: "48-Hour Enterprise System & Security Audit",
    title: "Your Executive Strategy Sync is booked.",
    subtitle: "A few things to prepare so we get the most out of the call.",
    video: videos.welcomeEnterpriseAudit,
    steps: [
      "Watch the short prep video above.",
      "List the flows that matter most (signup, onboarding, checkout) and any known drop-off points.",
      "Have recent analytics and a staging or read-only environment ready to share.",
      "After the sync we confirm fixed scope and price; the audit is delivered within 48 hours of kickoff.",
    ],
    nextCta: { text: "Back to offers", href: "/offers" },
  },
  "enterprise-retainer": {
    eyebrow: "Enterprise AI Agent & Vault Implementation",
    title: "Welcome aboard. Let's build.",
    subtitle: "Here's how the implementation kicks off.",
    video: videos.welcomeEnterpriseRetainer,
    steps: [
      "Watch the kickoff video above.",
      "Look out for the kickoff agenda and access checklist in your inbox.",
      "We map the architecture, then build and deploy with 30 days of hands-on engineering support.",
    ],
    nextCta: { text: "Contact us", href: "/contact?tier=enterprise" },
  },
};

export const offersCopy = {
  headline: {
    eyebrow: "Offers & pricing",
    headlineText: "Start free. Scale up when the numbers justify it.",
    subheadlineText:
      "Productized architecture audits for B2B SaaS. Every engagement has a defined deliverable and a defined price, with no open-ended hourly billing.",
    ctas: [
      { label: "Get the free audit", href: "#free-audit" },
      { label: "Compare offers", href: "#offers", variant: "inverted" as const },
    ],
  },

  intakeModal: {
    submitUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSei5MW9D_2R8OzjDQdy78j_x7Z3Hx0NXO1ohwoljdZ6xHQg9Q/formResponse",
    bookCallUrl: "https://calendly.com/strickerdigital/30-min-website-consult",
    entries: {
      firstName: "entry.1511831625",
      lastName: "entry.659719382",
      email: "entry.1036202572",
      company: "",
      arr: "",
    },
    closeLabel: "✖",
    title: "Apply for the Architectural Audit",
    description:
      "The 48-Hour Enterprise Audit is built for B2B SaaS platforms at $1M+ ARR. Tell us about your company, and qualified applicants go straight to scheduling the discovery sync.",
    placeholders: {
      firstName: "First name",
      lastName: "Last name",
      email: "Work email",
      company: "Company website",
    },
    arrLabel: "Current annual recurring revenue",
    arrOptions: [
      { value: "under-1m", label: "Under $1M ARR", qualifies: false },
      { value: "1m-3m", label: "$1M to $3M ARR", qualifies: true },
      { value: "3m-10m", label: "$3M to $10M ARR", qualifies: true },
      { value: "10m-plus", label: "$10M+ ARR", qualifies: true },
    ],
    submit: {
      idle: "Submit application",
      loading: "Submitting…",
    },
    notQualified: {
      title: "Start with the Micro-Audit",
      body: "The Enterprise Audit is scoped for platforms at $1M+ ARR. The $400 Micro Conversion & Latency Audit maps your top 3 conversion and latency leaks in 48 hours. No sales call required.",
      ctaText: "Order Micro-Audit ($400)",
      backText: "Back",
    },
    consent:
      "By providing your information today, you are giving consent for us to contact you by mail, phone, text, or email. We do not sell your personal information, and you can withdraw consent at any time.",
  } satisfies OffersIntakeModalCopy,

  ctaBanners: {
    middle: {
      id: "apply",
      ctaText: "Apply for Architectural Audit",
      title: "Ready for the full diagnostic?",
      subtitle:
        "Applications are reviewed for fit ($1M+ ARR). Qualified teams book the executive discovery sync right away.",
      secondaryText: "Get the free Loom audit",
      secondaryHref: "#free-audit",
      className: "bg-page",
    },
    bottom: {
      ctaText: "Apply for Architectural Audit",
      title: "Stop guessing where the friction is.",
      subtitle:
        "Fixed scope. Fixed price. A hand-off ready spec your team can execute the following week.",
      secondaryText: "Talk enterprise",
      secondaryHref: "/contact?tier=enterprise",
      className: "bg-page",
    },
  } satisfies Record<string, OffersCtaBannerCopy>,

  howItWorks: {
    id: "how-it-works",
    title: "How it works",
    subtitle: "A value ladder. Start where the evidence you need is, and move up when the numbers justify it.",
    steps: [
      {
        icon: faVideo,
        eyebrow: "Start here: Free",
        title: "2-Minute Loom Audit",
        description:
          "Send your app or checkout link. We record a quick over-the-shoulder walkthrough of your top 3 bottlenecks. No sales call.",
      },
      {
        icon: faMagnifyingGlassChart,
        eyebrow: "Step 1: $400",
        title: "Micro-Audit",
        description:
          "A recorded Loom teardown and layout blueprint of your top 3 conversion and latency leaks, delivered in 24 to 48 hours.",
      },
      {
        icon: faDiagramProject,
        eyebrow: "Step 2: $3,500 to $5,000",
        title: "48-Hour Enterprise Audit",
        description:
          "Full checkout, API, auth, and AWS cost review. You leave with a system topology and a refactoring spec your internal team can execute.",
      },
      {
        icon: faRocket,
        eyebrow: "Step 3: $50,000",
        title: "Enterprise Implementation",
        description:
          "We build it: Digital Vault infrastructure, AI agent workflows, and zero-trust security, with 30 days of hands-on engineering support.",
      },
    ] satisfies OffersHowItWorksStep[],
  },

  framework: {
    id: "framework",
    title: "What we audit",
    subtitle: "Deep diagnostic mechanics, not surface-level marketing tactics.",
    items: [
      {
        icon: faStopwatch,
        title: "Latency & Flow Profiling",
        description:
          "We trace application structures and third-party integrations (payment processors, custom webhooks, internal APIs) to locate where server lag or database schemas cause high-intent users to abandon transactions.",
      },
      {
        icon: faRoute,
        title: "Conversion Optimization Framework",
        description:
          "Shifting complex interactions from overwhelming single-page \"walls of inputs\" into smooth, multi-step linear flows designed to maximize completion rates and data integrity.",
      },
      {
        icon: faUserShield,
        title: "Zero-Trust Security & FinOps",
        description:
          "Reviewing identity (Auth0 Actions, MFA, M2M tokens, session isolation) and AWS caching/cost posture so your platform stays secure without slowing checkout or inflating your bill.",
      },
    ] satisfies OffersFrameworkItem[],
  },

  whoThisIsFor: {
    title: "Who this is for",
    intro: "Built for B2B SaaS founders and technical leaders who:",
    bullets: [
      "Run a platform between $1M and $10M ARR",
      "See user drop-off in signup, onboarding, or checkout flows",
      "Suspect API latency or auth friction is costing conversions",
      "Want a fixed-scope answer instead of an open-ended hourly engagement",
      "Need a spec their internal dev team can execute immediately",
    ],
  },

  about: {
    title: "Learn more about us",
    cards: {
      left: {
        title: "Who We Are",
        bodyLines: [
          "I’m Nick, a full-stack engineer who architects and audits production systems.",
          "I’ve worked inside 600,000-line enterprise execution engines, shipping webhook delivery layers and real-time platforms that drove a 30% performance optimization and a 22% drop in user friction tickets.",
        ],
      },
      right: {
        title: "Based in Chicago",
        bodyLines: [
          "Chicago is our base of operations; engagements run remotely with teams anywhere.",
          "Every recommendation is tied to a business metric: conversion, latency, or cost.",
          "You get engineering depth with the communication of a sales engineer.",
        ],
      },
    },
  } satisfies OffersAboutCopy,

  testimonials: {
    title: "Reviews & Testimonials",
    subtitle: "A few words from past clients.",
    items: [
      {
        quote:
          "Nick provided expert advice for my web design and digital marketing strategy. He was professional, efficient, and delivered high-quality work on time.",
        name: "Luke Rotta",
        role: "Founder of Redtail Luxe",
        avatarUrl: lukeRottaPhoto.src,
      },
      {
        quote:
          "Nick is a great web developer who takes his job seriously and is willing to meet his clients where they are at. He makes the working relationship enjoyable and provides great recommendations and feedback.",
        name: "Jose Ortiz",
        role: "Co-Founder of Connecting Dots for Latinx Professionals",
        avatarUrl: josePhoto.src,
      },
      {
        quote:
          "Took an idea a created what I imagined just by him understanding what my business needed through our conversations. I loved the visual accents, instant awareness to the Customer of toggles and info points that he included.",
        name: "Carole Murray",
        role: "Founder of CM Florals",
        avatarUrl: carolePhoto.src,
      },
    ] satisfies OffersTestimonialItem[],
  },

  faq: {
    id: "faq",
    title: "Frequently asked questions",
    items: [
      {
        question: "Is the free Loom audit really free?",
        answer:
          "Yes. Send your link and you get a 2-minute recorded walkthrough of your top 3 conversion and latency bottlenecks. No sales call, no obligation.",
      },
      {
        question: "What's the difference between the Micro-Audit and the Enterprise Audit?",
        answer:
          "The Micro-Audit is a fast, recorded teardown of your top 3 conversion and latency leaks, with no call required. The Enterprise Audit covers checkout, API latency, authentication security, and AWS cost, and ends with a system topology, a step-by-step refactoring spec, and a live executive strategy sync.",
      },
      {
        question: "Why is the Enterprise Audit priced as a range?",
        answer:
          "The fixed price is set before work begins, based on the surface area in scope (number of critical flows, services, and integrations). You know the exact number before you commit, and there is no hourly billing.",
      },
      {
        question: "What if we're under $1M ARR?",
        answer:
          "Start with the free 2-minute Loom audit or the $400 Micro-Audit. Both surface the highest-impact fixes quickly and tell you whether a full audit is worth it later.",
      },
      {
        question: "Do you implement the fixes?",
        answer:
          "The Enterprise Audit spec is written to be hand-off ready for your internal team. If you want us to build it, the Enterprise Implementation retainer covers deployment and 30 days of hands-on engineering support.",
      },
      {
        question: "How fast is delivery?",
        answer:
          "Both audits are delivered within 48 hours of kickoff, once we have the access and context agreed on in scope.",
      },
    ] satisfies OffersFAQItem[],
  },
} as const;

export type OffersCopy = typeof offersCopy;
