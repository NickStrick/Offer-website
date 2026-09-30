import carolePhoto from "../../../public/testimonials/carole-headshot.png";
import josePhoto from "../../../public/testimonials/jose-headshot.jpg";
import lukeRottaPhoto from "../../../public/testimonials/lukerotta.jpg";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faChalkboardUser,
  faCodeBranch,
  faDiagramProject,
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

export type OfferTier = {
  id: "architecture-audit" | "communication-sprint" | "zero-trust-security";
  variant: "standard" | "featured" | "anchor";
  badge: string;
  title: string;
  price: string;
  priceNote: string;
  audience: string;
  valueProp: string;
  features: readonly string[];
  ctaText: string;
  ctaHref: string;
};

export type OffersCtaBannerCopy = {
  id?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
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

export const SALES_EMAIL = "sales@strickerdigital.com";

/** Google Form that collects every lead on the site. */
export const LEADS_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSei5MW9D_2R8OzjDQdy78j_x7Z3Hx0NXO1ohwoljdZ6xHQg9Q/formResponse";
/** Existing Google Form questions: First name, Last name, Email. */
export const LEADS_FORM_ENTRIES = {
  firstName: "entry.1511831625",
  lastName: "entry.659719382",
  email: "entry.1036202572",
};

export const BOOK_CALL_URL = "https://calendly.com/strickerdigital/30-min-website-consult";

export const CONSENT_TEXT =
  "By providing your information today, you are giving consent for us to contact you by mail, phone, text, or email. We do not sell your personal information, and you can withdraw consent at any time.";

/** Contact links with the intent dropdown preselected. */
export const contactHref = {
  audit: "/contact?intent=audit",
  cohort: "/contact?intent=cohort",
  betaReader: "/contact?intent=beta-reader",
  general: "/contact?intent=general",
};

export const offerTiers: readonly OfferTier[] = [
  {
    id: "architecture-audit",
    variant: "featured",
    badge: "Core Offer",
    title: "Fixed-Scope Architecture Audit",
    price: "$2,500 to $5,000",
    priceNote: "fixed-scope",
    audience: "Growth-stage B2B platforms ($1M to $10M ARR) experiencing checkout friction or API latency.",
    valueProp:
      "A 48-hour diagnostic that maps where your system leaks revenue. Your internal dev team executes the fix.",
    features: [
      "48-hour over-the-shoulder Loom video teardown",
      "Excalidraw blueprint of your system and flows",
      "Checkout friction and API latency mapped",
      "AWS cost leaks identified",
      "Hand-off ready for your internal dev team",
    ],
    ctaText: "Request Architectural Audit",
    ctaHref: contactHref.audit,
  },
  {
    id: "communication-sprint",
    variant: "standard",
    badge: "5-Day Cohort",
    title: "Developer-to-SE Communication Sprint",
    price: "$1,500 to $3,500",
    priceNote: "per seat",
    audience: "Ambitious developers and junior technical operators moving into client-facing and sales engineering roles.",
    valueProp:
      "A 5-day presentation cohort that teaches technical people to speak with authority in the boardroom.",
    features: [
      "Vocal command: Rate Pivot and Power Pause",
      "Live whiteboard presentation mechanics",
      "Sales discovery and MEDDPICC alignment",
      "Small cohort with live practice and feedback",
    ],
    ctaText: "Inquire About Cohorts",
    ctaHref: contactHref.cohort,
  },
  {
    id: "zero-trust-security",
    variant: "anchor",
    badge: "Security",
    title: "Zero-Trust Security & Auth Boundaries",
    price: "Custom",
    priceNote: "scoped per platform",
    audience: "High-trust platforms handling sensitive client data, payments, or private portals.",
    valueProp:
      "Identity and access architecture designed so your platform stays secure without slowing users down.",
    features: [
      "Identity verification flows",
      "OAuth 2.0 token design",
      "Multi-factor authentication (MFA) architecture",
      "Built for high-trust platforms",
    ],
    ctaText: "Discuss Security Scope",
    ctaHref: contactHref.audit,
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
    submitUrl: LEADS_FORM_URL,
    entries: {
      email: LEADS_FORM_ENTRIES.email,
      url: LEADS_FORM_ENTRIES.lastName, // "Last name" field until a URL question exists
      source: LEADS_FORM_ENTRIES.firstName, // "First name" field until a Source question exists
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
      body: "Your 2-minute Loom audit will land in your inbox. Want the full system map, AWS cost review, and hand-off ready blueprint in 48 hours?",
      upsellText: "Request Architectural Audit",
      upsellHref: contactHref.audit,
    },
    consent: CONSENT_TEXT,
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

/** Headline results shown as a stats band. */
export const proofMetrics = [
  { value: "30%", label: "lift in completed checkout conversions" },
  { value: "22%", label: "raw reduction in user friction tickets" },
  { value: "48 hrs", label: "from kickoff to delivered audit" },
];

export const featuredOffersHeader = {
  tag: "Architecture, Communication & Security",
  title: "Quantifying technical friction into measurable commercial ROI.",
  subtitle:
    "Fixed-scope audits for your platform, communication sprints for your people, and security architecture you can trust. No open-ended hourly billing.",
};

export type WelcomePageCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  video: VideoMedia;
  steps: readonly string[];
  nextCta: { text: string; href: string };
};

/** Post-signup pages at /welcome/[offer]. Point Calendly / checkout redirects here. */
export const welcomePages: Record<"architecture-audit" | "communication-sprint", WelcomePageCopy> = {
  "architecture-audit": {
    eyebrow: "Fixed-Scope Architecture Audit",
    title: "Your audit kickoff is booked.",
    subtitle: "A few things to prepare so we get the most out of the call.",
    video: videos.welcomeAudit,
    steps: [
      "Watch the short prep video above.",
      "List the flows that matter most (signup, onboarding, checkout) and any known drop-off points.",
      "Have recent analytics and a staging or read-only environment ready to share.",
      "After kickoff we confirm fixed scope and price, and your Loom teardown and Excalidraw blueprint arrive within 48 hours.",
    ],
    nextCta: { text: "Back to offers", href: "/offers" },
  },
  "communication-sprint": {
    eyebrow: "Developer-to-SE Communication Sprint",
    title: "Welcome to the cohort.",
    subtitle: "Here's how to get ready for your 5-day sprint.",
    video: videos.welcomeCohort,
    steps: [
      "Watch the welcome video above.",
      "Look out for your cohort schedule and calendar invites in your inbox.",
      "Pick one technical topic you explain often. We'll use it for your first whiteboard session.",
    ],
    nextCta: { text: "Explore the Library", href: "/library" },
  },
};

export const offersCopy = {
  headline: {
    eyebrow: "Advisory",
    headlineText: "Diagnostic Systems Strategy & Boardroom Discovery",
    subheadlineText: "Quantifying technical friction into measurable commercial ROI.",
    ctas: [
      { label: "Request Architectural Audit", href: contactHref.audit },
      { label: "Get the free audit", href: "#free-audit", variant: "inverted" as const },
    ],
  },

  ctaBanners: {
    middle: {
      id: "apply",
      ctaText: "Request Architectural Audit",
      ctaHref: contactHref.audit,
      title: "Ready for the full diagnostic?",
      subtitle:
        "Tell us about your platform. Audits are scoped for B2B platforms between $1M and $10M ARR.",
      secondaryText: "Get the free Loom audit",
      secondaryHref: "#free-audit",
      className: "bg-page",
    },
    bottom: {
      ctaText: "Request Architectural Audit",
      ctaHref: contactHref.audit,
      title: "Stop guessing where the friction is.",
      subtitle:
        "Fixed scope. Fixed price. A hand-off ready blueprint your team can execute the following week.",
      secondaryText: "Inquire about cohorts",
      secondaryHref: contactHref.cohort,
      className: "bg-page",
    },
  } satisfies Record<string, OffersCtaBannerCopy>,

  howItWorks: {
    id: "how-it-works",
    title: "How it works",
    subtitle: "Start with free evidence, fix the system, then level up the people who present it.",
    steps: [
      {
        icon: faVideo,
        eyebrow: "Start here: Free",
        title: "2-Minute Loom Audit",
        description:
          "Send your app or checkout link. We record a quick over-the-shoulder walkthrough of your top 3 bottlenecks. No sales call.",
      },
      {
        icon: faDiagramProject,
        eyebrow: "Step 1: $2,500 to $5,000",
        title: "Architecture Audit",
        description:
          "A 48-hour video teardown and Excalidraw blueprint mapping checkout friction, API latency, and AWS cost leaks.",
      },
      {
        icon: faCodeBranch,
        eyebrow: "Step 2: Your team",
        title: "Your Team Executes",
        description:
          "Your internal developers ship the fixes from a clear, prioritized blueprint. No agency lock-in.",
      },
      {
        icon: faChalkboardUser,
        eyebrow: "Step 3: $1,500 to $3,500 per seat",
        title: "Communication Sprint",
        description:
          "Train the engineers who present the work to lead discovery and command the room with executives.",
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
        title: "Checkout Friction Mapping",
        description:
          "Shifting complex interactions from overwhelming single-page \"walls of inputs\" into smooth, multi-step linear flows designed to maximize completion rates and data integrity.",
      },
      {
        icon: faUserShield,
        title: "Security & AWS Cost Review",
        description:
          "Reviewing identity (OAuth 2.0, MFA, session boundaries) and AWS caching and cost posture so your platform stays secure without slowing checkout or inflating your bill.",
      },
    ] satisfies OffersFrameworkItem[],
  },

  whoThisIsFor: {
    title: "Who this is for",
    intro: "Built for platforms that need clarity and for the technical people who have to explain it.",
    bullets: [
      "B2B platforms between $1M and $10M ARR with checkout friction or API latency",
      "Teams that want a fixed-scope answer instead of open-ended hourly billing",
      "Internal dev teams ready to execute from a clear blueprint",
      "Developers and technical operators moving into sales engineering or client-facing roles",
      "Engineers who need to present to executives and boardrooms with authority",
    ],
  },

  about: {
    title: "Learn more about us",
    cards: {
      left: {
        title: "Who We Are",
        bodyLines: [
          "I’m Nick, a full-stack engineer who architects and audits production systems and teaches technical people to communicate with authority.",
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
        question: "What do I get from the Architecture Audit?",
        answer:
          "A 48-hour over-the-shoulder video teardown and an Excalidraw blueprint mapping your checkout friction, API latency, and AWS cost leaks, prioritized so your team knows what to fix first.",
      },
      {
        question: "Why is the audit priced as a range?",
        answer:
          "The fixed price is set before work begins, based on the surface area in scope (number of critical flows, services, and integrations). You know the exact number before you commit, and there is no hourly billing.",
      },
      {
        question: "Do you write the code?",
        answer:
          "No. We deliver the diagnosis and the blueprint, and your internal dev team executes it. That keeps the engagement fast, fixed-scope, and free of agency lock-in.",
      },
      {
        question: "What happens in a Communication Sprint?",
        answer:
          "A 5-day presentation cohort for developers and technical operators. You practice vocal command (Rate Pivot, Power Pause), live whiteboard mechanics, and sales discovery aligned to MEDDPICC.",
      },
      {
        question: "What if we're under $1M ARR?",
        answer:
          "Start with the free 2-minute Loom audit. It surfaces the highest-impact fixes quickly and tells you whether a full audit is worth it later.",
      },
    ] satisfies OffersFAQItem[],
  },
} as const;

export type OffersCopy = typeof offersCopy;

/** /contact intake form. */
export const contactCopy = {
  eyebrow: "Contact",
  headline: "Let's Align Your Architecture with Commercial Outcomes.",
  subheadline: "Tell us what you need and we'll point you to the right starting point.",
  intents: [
    { value: "audit", label: "Request a 48-Hour Architecture & Security Audit" },
    { value: "cohort", label: "Inquire about Developer-to-SE Communication Cohorts / Sprints" },
    { value: "beta-reader", label: "Join \"The Iteration Loop\" Book Beta Reader List" },
    { value: "general", label: "General Business Inquiry / Keynote Speaking" },
  ],
  /**
   * Google Form entry IDs for the extra fields. Leave empty until those questions exist on the form;
   * until then the intent, company, ARR and message are added to the "Last name" answer so nothing is lost.
   */
  extraEntries: {
    intent: "",
    company: "",
    arr: "",
    message: "",
  },
  arrLabel: "Company ARR (optional)",
  arrOptions: [
    { value: "under-1m", label: "Under $1M ARR" },
    { value: "1m-3m", label: "$1M to $3M ARR" },
    { value: "3m-10m", label: "$3M to $10M ARR" },
    { value: "10m-plus", label: "$10M+ ARR" },
  ],
  underArrNote: "Under $1M ARR? The free 2-minute Loom audit is the faster place to start.",
  placeholders: {
    firstName: "First name",
    lastName: "Last name",
    email: "Work email",
    company: "Company or website (optional)",
    message: "What's going on? Share any context that helps (optional)",
  },
  submit: { idle: "Send", loading: "Sending…" },
  success: {
    title: "Thanks, we've got it.",
    body: "We'll reply by email shortly. If you'd like to reach us directly in the meantime, email",
    bookCallText: "Book a call now",
  },
  consent: CONSENT_TEXT,
};
