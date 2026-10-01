import amandaPhoto from "../../../public/testimonials/amanda-headshot.jpg";
import carolePhoto from "../../../public/testimonials/carole-headshot.png";
import connorPhoto from "../../../public/testimonials/connor-headshot.png";
import fernandoPhoto from "../../../public/testimonials/fernando-headshot.jpg";
import josePhoto from "../../../public/testimonials/jose-headshot.jpg";
import lukePhoto from "../../../public/testimonials/luke-headshot.jpg";
import lukeRottaPhoto from "../../../public/testimonials/lukerotta.jpg";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faRoute,
  faStopwatch,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { caseStudyImages, isMediaReady, videos, type ImageMedia, type VideoMedia } from "../media";

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
  id: "communication-masterclass" | "presentation-sprint" | "enterprise-audit" | "enterprise-retainer";
  /** featured: highlighted career card; core: dominant B2B card; anchor: premium price anchor. */
  variant: "standard" | "featured" | "core" | "anchor";
  tierLabel: string;
  badge: string;
  title: string;
  price: string;
  priceNote: string;
  features: readonly string[];
  bonuses: readonly string[];
  riskReversal?: { title: string; body: string };
  ctaText: string;
  /** "link" goes to ctaHref; "modal" opens the application pop-up for `intent`. */
  ctaAction: "link" | "modal";
  ctaHref?: string;
  modal?: { intent: "sprint" | "audit"; title: string; description: string };
};

export type OfferLadder = {
  id: string;
  badge: string;
  headline: string;
  subheadline: string;
  icp: string;
  tiers: readonly OfferTier[];
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

export type OffersAboutCopy = {
  title: string;
  cards: {
    left: { title: string; bodyLines: readonly string[] };
    right: { title: string; bodyLines: readonly string[] };
  };
};

export const CONTACT_EMAIL = "nick@strickerdigital.com";

export const BOOK_CALL_URL = "https://calendly.com/strickerdigital/30-min-website-consult";

export const CONSENT_TEXT =
  "By providing your information today, you are giving consent for us to contact you by mail, phone, text, or email. We do not sell your personal information, and you can withdraw consent at any time.";

/** Contact links with the intent dropdown preselected. */
export const contactHref = {
  audit: "/contact?intent=audit",
  retainer: "/contact?tier=50k",
  sprint: "/contact?intent=sprint",
  masterclass: "/contact?intent=masterclass",
  betaReader: "/contact?intent=beta-reader",
  general: "/contact?intent=general",
};

// Set NEXT_PUBLIC_STRIPE_MASTERCLASS_URL to the Stripe Payment Link for the Masterclass.
// Until then, the button falls back to the contact form with the Masterclass preselected.
export const MASTERCLASS_CHECKOUT_URL = process.env.NEXT_PUBLIC_STRIPE_MASTERCLASS_URL || contactHref.masterclass;

/**
 * The whiteboard video isn't recorded yet. Until videos.enterpriseChecklist is published in media.ts,
 * the lead magnet is promoted as a blueprint + spec sheet; publishing the video switches the wording automatically.
 */
const checklistVideoReady = isMediaReady(videos.enterpriseChecklist);

/** Free lead magnet: The 2026 Enterprise Infrastructure & Architecture Checklist. */
export const checklistCopy = {
  videoReady: checklistVideoReady,
  id: "free-checklist",
  resourcePath: "/resources/enterprise-checklist",
  tag: "Free Diagnostic",
  price: "$0",
  title: "2026 Enterprise Infrastructure Checklist",
  subtitle:
    checklistVideoReady
      ? "An over-the-shoulder visual whiteboard walkthrough (Excalidraw) mapping the top 3 architectural flaws, API latency bottlenecks, and checkout form leaks that cost scaling B2B platforms $50k+ in abandoned revenue."
      : "A visual Excalidraw blueprint and spec sheet mapping the top 3 architectural flaws, API latency bottlenecks, and checkout form leaks that cost scaling B2B platforms $50k+ in abandoned revenue.",
  highlights: [
    checklistVideoReady
      ? "60-Second Over-The-Shoulder Excalidraw Video Teardown"
      : "Excalidraw Blueprint of the Top 3 Architectural Flaws",
    "Decoupled Next.js / AWS Architecture & Caching Spec Sheet",
    "Mobile Checkout Friction Audit Protocol (Max 5 Inputs)",
  ],
  emailPlaceholder: "Enter your business email...",
  ctaText: "Get Free Whiteboard Spec",
  loadingText: "Sending…",
  /** Saved as the Google Form "Intent" answer for checklist signups. */
  sourceValue: "2026 Enterprise Checklist",
  modalTitle: "Get the free whiteboard spec",
  modalDescription: "Enter your business email and we'll take you straight to the checklist.",
  consent: CONSENT_TEXT,
};

/** Two ladders, one per customer profile. */
export const offerLadders: readonly OfferLadder[] = [
  {
    id: "career",
    badge: "Career & Communication Acceleration",
    headline: "Master Vocal Authority & Command the Boardroom.",
    subheadline:
      "Self-paced playbooks and live 5-day presentation sprints for technical builders looking to double their leverage and transition into $200k+ Sales Engineering roles.",
    icp: "Ambitious Software Engineers, Junior SEs, Technical Operators, and Builders.",
    tiers: [
      {
        id: "communication-masterclass",
        variant: "standard",
        tierLabel: "Tier 1",
        badge: "Self-Paced / Digital System",
        title: "The Boardroom Communication & Iteration System",
        price: "$500",
        priceNote: "one-time access",
        features: [
          "Complete Video Vault: Vocal Command, Power Pause & Rate Pivot Drills",
          "Technical-to-Commercial Metric Translation Matrix (Converting code to ROI)",
          "MEDDPICC Enterprise Discovery Playbook & Excalidraw Templates",
        ],
        bonuses: [
          "Early Access Chapter Drafts of 'The Iteration Loop' Book",
          "Plug-and-Play Whiteboard Presentation Blueprints",
        ],
        ctaText: "Enroll in Masterclass ($500)",
        ctaAction: "link",
        ctaHref: MASTERCLASS_CHECKOUT_URL,
      },
      {
        id: "presentation-sprint",
        variant: "featured",
        tierLabel: "Tier 2",
        badge: "5-Day Live Cohort / Capped at 10 Seats",
        title: "The 5-Day Boardroom Gravity & SE Transition Accelerator",
        price: "$2,500",
        priceNote: "seat",
        features: [
          "5 Days of Live Interactive Vocal Mechanics & Whiteboard Presentation Drills",
          "1-on-1 Excalidraw Whiteboard Discovery & MEDDPICC Strategy Audit",
          "Live Interview & Technical Objection Mock Scenarios",
        ],
        bonuses: [
          "Direct Resume & Portfolio Review (Bypassing ATS Filters)",
          "Lifetime Access to The Boardroom Communication Vault ($500 Value)",
        ],
        riskReversal: {
          title: "100% Day-2 Money-Back Guarantee",
          body: "Refund on the spot if you don't feel your presentation skills have leveled up.",
        },
        ctaText: "Apply for Next Cohort ($2,500)",
        ctaAction: "modal",
        modal: {
          intent: "sprint",
          title: "Apply for the next cohort",
          description: "Cohorts are capped at 10 seats. Tell us where you are today and we'll reply with next steps.",
        },
      },
    ],
  },
  {
    id: "enterprise",
    badge: "B2B Enterprise Architecture & Consulting",
    headline: "Eradicate System Friction. Protect Business Margins.",
    subheadline:
      "Fixed-scope diagnostic audits and production-grade private portal deployments delivered in 48 hours. Zero open-ended hourly billing.",
    icp: "B2B SaaS Founders ($1M to $10M ARR), CTOs, and High-Ticket Digital Operators with checkout friction, API latency, or security debt.",
    tiers: [
      {
        id: "enterprise-audit",
        variant: "core",
        tierLabel: "Tier 3",
        badge: "Core B2B Diagnostic / Maximum 2 Slots per Month",
        title: "The 48-Hour Enterprise System Latency & Conversion Vault",
        price: "$5,000",
        priceNote: "fixed-scope",
        features: [
          "Complete Checkout, API Latency & Auth Security Audit",
          "Custom Excalidraw System Topology & Progressive Flow Blueprint",
          "Developer-Ready Refactoring Spec Sheet (Zero dev management required)",
        ],
        bonuses: [
          "AWS Caching & FinOps Cost-Reduction Protocol",
          "30-Minute Live Executive Discovery & Strategy Sync",
          "30-Day Post-Audit Code Implementation Review",
        ],
        riskReversal: {
          title: "24-Hour Total Clarity Guarantee",
          body: "Review your Excalidraw system topology and refactoring spec sheet. If within 24 hours of delivery you don't feel you received total clarity on your application's bottlenecks, let us know and we will issue a prompt, 100% refund, no questions asked.",
        },
        ctaText: "Apply for $5k Enterprise Audit",
        ctaAction: "modal",
        modal: {
          intent: "audit",
          title: "Apply for the $5k Enterprise Audit",
          description: "Built for B2B SaaS platforms at $1M+ ARR, with a maximum of 2 audit slots per month.",
        },
      },
      {
        id: "enterprise-retainer",
        variant: "anchor",
        tierLabel: "Tier 4",
        badge: "Full Deployment Retainer",
        title: "Enterprise AI Agent & Digital Vault Implementation",
        price: "$50,000",
        priceNote: "full deployment retainer",
        features: [
          "Full Custom Next.js / AWS Private Client Portal Deployment (\"Digital Vault\")",
          "Autonomous AI Agent Workflow Integration (n8n / CrewAI)",
          "Zero-Trust OAuth 2.0, Auth0 Actions & Session Isolation Setup",
          "Multi-Tenant Data Boundaries, Audit Logs & CIS Compliance",
          "30-Day Hands-on Engineering & Pre-Sales Implementation Support",
        ],
        bonuses: [],
        ctaText: "Inquire for Enterprise Retainer ($50k)",
        ctaAction: "link",
        ctaHref: contactHref.retainer,
      },
    ],
  },
];

/** Every paid tier, in ladder order. */
export const offerTiers: readonly OfferTier[] = offerLadders.flatMap((ladder) => ladder.tiers);

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
      text: "Secured a 30% lift in completed checkout conversions within the first 30 days of active deployment.",
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

export type WelcomePageCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  video: VideoMedia;
  steps: readonly string[];
  nextCta: { text: string; href: string };
};

/** Post-signup pages at /welcome/[offer]. Point Stripe / Calendly redirects here. */
export const welcomePages: Record<
  "communication-masterclass" | "presentation-sprint" | "architecture-audit" | "enterprise-retainer",
  WelcomePageCopy
> = {
  "communication-masterclass": {
    eyebrow: "The Boardroom Communication & Iteration System",
    title: "You're in. Welcome to the Masterclass.",
    subtitle: "Here's how to get the most out of it.",
    video: videos.welcomeMasterclass,
    steps: [
      "Check your inbox for your payment confirmation and access details.",
      "Watch the welcome video above.",
      "Pick one technical topic you explain often and practice it with each framework.",
    ],
    nextCta: { text: "Explore the 5-Day Sprint", href: "/offers#presentation-sprint" },
  },
  "presentation-sprint": {
    eyebrow: "The 5-Day Boardroom Gravity & SE Transition Accelerator",
    title: "Welcome to the Sprint.",
    subtitle: "Here's how to get ready for your 5 days.",
    video: videos.welcomeSprint,
    steps: [
      "Watch the welcome video above.",
      "Look out for your cohort schedule and calendar invites in your inbox.",
      "Pick one technical topic you explain often. We'll use it for your first whiteboard session.",
    ],
    nextCta: { text: "Explore the Library", href: "/library" },
  },
  "architecture-audit": {
    eyebrow: "The 48-Hour Enterprise System Latency & Conversion Vault",
    title: "Your kickoff is booked.",
    subtitle: "A few things to prepare so we get the most out of the call.",
    video: videos.welcomeAudit,
    steps: [
      "Watch the short prep video above.",
      "List the flows that matter most (signup, onboarding, checkout) and any known drop-off points.",
      "Have recent analytics and a staging or read-only environment ready to share.",
      "Your topology blueprint, refactoring spec sheet, and FinOps protocol arrive within 48 hours of kickoff, followed by the executive strategy sync and a 30-day post-audit implementation review.",
    ],
    nextCta: { text: "Back to offers", href: "/offers" },
  },
  "enterprise-retainer": {
    eyebrow: "Enterprise AI Agent & Digital Vault Implementation",
    title: "Welcome aboard. Let's build.",
    subtitle: "Here's how the implementation kicks off.",
    video: videos.welcomeRetainer,
    steps: [
      "Watch the kickoff video above.",
      "Look out for the kickoff agenda and access checklist in your inbox.",
      "We map the architecture, then build and deploy with 30 days of hands-on engineering support.",
    ],
    nextCta: { text: "Contact us", href: contactHref.retainer },
  },
};

export const offersCopy = {
  headline: {
    eyebrow: "Advisory",
    headlineText: "Diagnostic Systems Strategy & Boardroom Discovery",
    subheadlineText: "Quantifying technical friction into measurable commercial ROI.",
    ctas: [
      { label: "Apply for the 5-Day Sprint", href: contactHref.sprint },
      { label: "Get the free checklist", href: `#${checklistCopy.id}`, variant: "inverted" as const },
    ],
  },

  ctaBanners: {
    middle: {
      id: "apply",
      ctaText: "Apply for $5k Audit",
      ctaHref: contactHref.audit,
      title: "Need the architecture handled too?",
      subtitle:
        "The $5,000 Enterprise Audit is a fixed-scope, 48-hour diagnostic for B2B SaaS platforms at $1M+ ARR.",
      secondaryText: "Get the free checklist",
      secondaryHref: `#${checklistCopy.id}`,
      className: "bg-page",
    },
    bottom: {
      ctaText: "Apply for Next Cohort ($2,500)",
      ctaHref: contactHref.sprint,
      title: "Ready to command the room?",
      subtitle:
        "Five days of live practice on vocal command, whiteboard mechanics, and sales discovery.",
      secondaryText: "Apply for $5k Audit",
      secondaryHref: contactHref.audit,
      className: "bg-page",
    },
  } satisfies Record<string, OffersCtaBannerCopy>,

  framework: {
    id: "framework",
    title: "What the enterprise audit covers",
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
    intro: "Built for the technical people who have to explain the work, and the platforms they run.",
    bullets: [
      "Developers and technical operators moving into sales engineering or client-facing roles",
      "Engineers who need to present to executives and boardrooms with authority",
      "Technical leads who want their updates to drive decisions, not questions",
      "B2B platforms between $1M and $10M ARR with checkout friction or API latency",
      "Teams that want a fixed-scope answer instead of open-ended hourly billing",
    ],
  },

  about: {
    title: "Learn more about us",
    cards: {
      left: {
        title: "Who We Are",
        bodyLines: [
          "I’m Nick, my career has always sat at the intersection of technical execution and human connection. I began as a game developer building interactive environments, transitioned into a teaching assistant mentoring engineers through complex codebases, and stepped into product management and demo engineering at Expocad—leading live, in-person enterprise software walkthroughs at national trade shows.",
          "Today, I am the founder of Stricker Digital, owning the technical thread from discovery to architecture and delivery.",
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
    title: "What clients say",
    subtitle: "This is what our previous clients had to say about us.",
    items: [
      {
        quote:
          "Nick is a great web developer who takes his job seriously and is willing to meet his clients where they are at. He makes the working relationship enjoyable and provides great recommendations and feedback. He has tremendous attention to detail and has a creative mind. I highly recommend reaching to Nick for anything related to web development and assistance with other related services.",
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
      {
        quote:
          "Nick provided expert advice for my web design and digital marketing strategy. He was professional, efficient, and delivered high-quality work on time. I highly recommend his services to anyone looking to enhance their online presence.",
        name: "Luke Rotta",
        role: "Founder of Redtail Luxe",
        avatarUrl: lukeRottaPhoto.src,
      },
      {
        quote:
          "Nick is an outstanding professional. He is knowledge, skillful, responsible, detailed oriented, and all around a supportive and very cool guy. I highly recommend reaching out to Nick if you need a dynamic website that addresses your company's need.",
        name: "Fernando Rayas",
        role: "Co-Founder of Connecting Dots for Latinx Professionals",
        avatarUrl: fernandoPhoto.src,
      },
      {
        quote:
          "Nick had my professional profile website running in 2 days, in time for my book release! Outstanding communication, delivery, and expertise.",
        name: "Amanda Grau",
        role: "Board Certified Behavior Analyst",
        avatarUrl: amandaPhoto.src,
      },
      {
        quote:
          "Perfect For all my coaching needs, Nick knew exactly what i needed for my private coaching business and gave me the most perfect personalized website for me.",
        name: "Luke Stricker",
        role: "Private Baseball Hitting Coach",
        avatarUrl: lukePhoto.src,
      },
      {
        quote:
          "Nick nailed my vision from the get go. I highly reccomend him. The perfect solution to market my music teaching, and promote my bands.",
        name: "Connor M",
        role: "Stage Guitarist, Music Teacher",
        avatarUrl: connorPhoto.src,
      },
    ] satisfies OffersTestimonialItem[],
  },

  faq: {
    id: "faq",
    title: "Frequently asked questions",
    items: [
      {
        question: "Is the Enterprise Checklist really free?",
        answer:
          "Yes. Enter your business email and you go straight to the checklist and spec sheet. No sales call, no obligation.",
      },
      {
        question: "What's the difference between the Masterclass and the Sprint?",
        answer:
          "The $500 Masterclass is self-paced: the video vault, metric translation matrix, MEDDPICC playbook, and blueprints. The $2,500 Accelerator is a live 5-day cohort (capped at 10 seats) with 1-on-1 coaching, mock interviews, a resume review, and lifetime access to the Masterclass vault.",
      },
      {
        question: "Who is the Sprint for?",
        answer:
          "Developers and junior technical operators moving into client-facing or sales engineering roles, and engineers who need to present to leadership with authority.",
      },
      {
        question: "What if the Sprint isn't working for me?",
        answer:
          "Every cohort has a 100% Day-2 Money-Back Guarantee. If you don't feel your presentation skills have leveled up by day 2, you get a refund on the spot.",
      },
      {
        question: "What does the $5,000 Enterprise Audit include?",
        answer:
          "A complete checkout, API latency, and auth security audit, a custom Excalidraw topology and flow blueprint, and a developer-ready refactoring spec sheet. Bonuses: an AWS caching and FinOps protocol, a 30-minute executive strategy sync, and a 30-day post-audit implementation review. One fixed price, delivered in 48 hours, with a maximum of 2 slots per month.",
      },
      {
        question: "Is the audit guaranteed?",
        answer:
          "Yes. Review your Excalidraw system topology and refactoring spec sheet. If within 24 hours of delivery you don't feel you received total clarity on your application's bottlenecks, let us know and we will issue a prompt, 100% refund, no questions asked.",
      },
      {
        question: "Who writes the code after the audit?",
        answer:
          "Your internal dev team, using the refactoring spec sheet, and we review their implementation for 30 days after the audit. If you'd rather we build it, the $50,000 retainer covers the full Digital Vault deployment, AI agent workflows, zero-trust security, and 30 days of hands-on support.",
      },
      {
        question: "What if we're under $1M ARR?",
        answer:
          "Start with the free Enterprise Checklist. It surfaces the highest-impact fixes quickly and tells you whether a full audit is worth it later.",
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
    { value: "sprint", label: "Apply for the 5-Day Boardroom Gravity & SE Transition Accelerator ($2,500)" },
    { value: "masterclass", label: "Enroll in the Boardroom Communication & Iteration System ($500)" },
    { value: "audit", label: "Apply for the $5k Enterprise Audit" },
    { value: "retainer", label: "Enterprise AI Agent & Digital Vault Implementation ($50,000)" },
    { value: "beta-reader", label: "Join \"The Iteration Loop\" Book Beta Reader List" },
    { value: "general", label: "General Business Inquiry / Keynote Speaking" },
  ],
  roleLabel: "Current role (for your Sprint application)",
  rolePlaceholder: "e.g. Software Engineer, Solutions Engineer, Tech Lead",
  arrLabel: "Company ARR",
  arrOptions: [
    { value: "under-1m", label: "Under $1M ARR" },
    { value: "1m-3m", label: "$1M to $3M ARR" },
    { value: "3m-10m", label: "$3M to $10M ARR" },
    { value: "10m-plus", label: "$10M+ ARR" },
  ],
  underArrNote: "The $5,000 audit is built for platforms at $1M+ ARR. Under that, the free Enterprise Checklist is the faster place to start.",
  placeholders: {
    firstName: "First name",
    lastName: "Last name",
    email: "Work email",
    company: "Company or website (optional)",
    message: "What's going on? Share any context that helps (optional)",
    sprintMessage: "What do you present today, and what do you want to get better at?",
  },
  submit: { idle: "Send", loading: "Sending…" },
  success: {
    title: "Thanks, we've got it.",
    body: "We'll reply by email shortly. If you'd like to reach us directly in the meantime, email",
    bookCallText: "Book a call now",
  },
  consent: CONSENT_TEXT,
};
