import carolePhoto from "../../../public/testimonials/carole-headshot.png";
import josePhoto from "../../../public/testimonials/jose-headshot.jpg";
import lukeRottaPhoto from "../../../public/testimonials/lukerotta.jpg";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faChalkboardUser,
  faClipboardCheck,
  faDiagramProject,
  faMicrophoneLines,
  faRoute,
  faStopwatch,
  faUserShield,
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
  id: "enterprise-checklist" | "communication-masterclass" | "presentation-sprint" | "enterprise-audit";
  /** "free" is the lead magnet entry point; "featured" is the highlighted tier. */
  variant: "free" | "standard" | "featured" | "anchor";
  tierLabel: string;
  badge: string;
  title: string;
  price: string;
  priceNote: string;
  audience: string;
  valueProp: string;
  features: readonly string[];
  ctaText: string;
  /** "modal" opens the checklist signup; "link" goes to ctaHref. */
  ctaAction: "modal" | "link";
  ctaHref?: string;
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
  enterprise: "/contact?tier=enterprise",
  sprint: "/contact?intent=sprint",
  masterclass: "/contact?intent=masterclass",
  betaReader: "/contact?intent=beta-reader",
  general: "/contact?intent=general",
};

// Set NEXT_PUBLIC_STRIPE_MASTERCLASS_URL to the Stripe Payment Link for the Masterclass.
// Until then, the button falls back to the contact form with the Masterclass preselected.
export const MASTERCLASS_CHECKOUT_URL = process.env.NEXT_PUBLIC_STRIPE_MASTERCLASS_URL || contactHref.masterclass;

/** Free lead magnet: The 2026 Enterprise Infrastructure & Architecture Checklist. */
export const checklistCopy = {
  id: "free-checklist",
  resourcePath: "/resources/enterprise-checklist",
  tag: "Free Diagnostic Resource",
  title: "The 2026 Enterprise Infrastructure & Architecture Checklist",
  subtitle:
    "An over-the-shoulder visual whiteboard walkthrough (Excalidraw) mapping the top 3 architectural flaws, API latency bottlenecks, and checkout form leaks that cost scaling B2B platforms $50k+ in abandoned revenue.",
  highlights: [
    "60-Second Over-The-Shoulder Excalidraw Video Teardown",
    "Decoupled Next.js / AWS Architecture & Caching Spec Sheet",
    "Mobile Checkout Friction Audit Protocol (Max 5 Inputs)",
  ],
  emailPlaceholder: "Enter your business email...",
  ctaText: "Get Free Whiteboard Spec",
  loadingText: "Sending…",
  /** Saved in the Google Form's "First name" answer so you can tell these leads apart. */
  sourceValue: "2026 Enterprise Checklist",
  modalTitle: "Get the free whiteboard spec",
  modalDescription: "Enter your business email and we'll take you straight to the walkthrough.",
  consent: CONSENT_TEXT,
};

export const offerTiers: readonly OfferTier[] = [
  {
    id: "enterprise-checklist",
    variant: "free",
    tierLabel: "Tier 0",
    badge: "Free Entry",
    title: "The 2026 Enterprise Checklist",
    price: "Free",
    priceNote: "instant access",
    audience: "Founders and technical operators who want a fast, visual read on where their platform leaks revenue.",
    valueProp: "The whiteboard walkthrough and spec sheet behind every audit, free.",
    features: checklistCopy.highlights,
    ctaText: "Get Free Whiteboard Spec",
    ctaAction: "modal",
  },
  {
    id: "communication-masterclass",
    variant: "standard",
    tierLabel: "Tier 1",
    badge: "Masterclass",
    title: "The Boardroom Communication Masterclass",
    price: "$500",
    priceNote: "one-time",
    audience: "Developers and technical operators who want to explain their work to executives with authority.",
    valueProp: "The core frameworks for presenting technical work so decision makers listen and act.",
    features: [
      "Vocal command: Rate Pivot and Power Pause",
      "Whiteboard explanation frameworks",
      "Structuring technical updates for executives",
      "Sales discovery fundamentals",
    ],
    ctaText: "Get the Masterclass ($500)",
    ctaAction: "link",
    ctaHref: MASTERCLASS_CHECKOUT_URL,
  },
  {
    id: "presentation-sprint",
    variant: "featured",
    tierLabel: "Tier 2",
    badge: "Most Popular",
    title: "5-Day Boardroom Presentation Sprint",
    price: "$1,500 to $3,500",
    priceNote: "per seat",
    audience: "Ambitious developers and junior technical operators moving into client-facing and sales engineering roles.",
    valueProp: "A 5-day live cohort that turns technical people into confident boardroom presenters.",
    features: [
      "Vocal command: Rate Pivot and Power Pause",
      "Live whiteboard presentation mechanics",
      "Sales discovery and MEDDPICC alignment",
      "Small cohort with live practice and feedback",
    ],
    ctaText: "Apply for the Sprint",
    ctaAction: "link",
    ctaHref: contactHref.sprint,
  },
  {
    id: "enterprise-audit",
    variant: "anchor",
    tierLabel: "Tier 3",
    badge: "Enterprise",
    title: "Enterprise Architecture Audit & Digital Vault Build",
    price: "$5,000 to $50,000",
    priceNote: "scoped per platform",
    audience: "Growth-stage B2B platforms ($1M to $10M ARR) with checkout friction, API latency, or security gaps.",
    valueProp: "From a fixed-scope architecture audit to a full private portal build on Next.js and AWS.",
    features: [
      "48-hour Loom teardown and Excalidraw blueprint",
      "Checkout friction, API latency, and AWS cost leaks mapped",
      "Zero-trust security: OAuth 2.0, MFA, identity boundaries",
      "Digital Vault private portal build (Next.js / AWS)",
    ],
    ctaText: "Contact for Enterprise",
    ctaAction: "link",
    ctaHref: contactHref.enterprise,
  },
];

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
  tag: "The Offer Ladder",
  title: "From free checklist to boardroom ready.",
  subtitle:
    "Start free, sharpen how you communicate technical work, then bring in enterprise architecture when the stakes are highest. No open-ended hourly billing.",
};

export type WelcomePageCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  video: VideoMedia;
  steps: readonly string[];
  nextCta: { text: string; href: string };
};

/** Post-signup pages at /welcome/[offer]. Point Stripe / Calendly redirects here. */
export const welcomePages: Record<"communication-masterclass" | "presentation-sprint" | "architecture-audit", WelcomePageCopy> = {
  "communication-masterclass": {
    eyebrow: "The Boardroom Communication Masterclass",
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
    eyebrow: "5-Day Boardroom Presentation Sprint",
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
    eyebrow: "Enterprise Architecture Audit & Digital Vault Build",
    title: "Your kickoff is booked.",
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
      ctaText: "Contact for Enterprise",
      ctaHref: contactHref.enterprise,
      title: "Need the architecture handled too?",
      subtitle:
        "Enterprise audits and Digital Vault builds are scoped for B2B platforms between $1M and $10M ARR.",
      secondaryText: "Get the free checklist",
      secondaryHref: `#${checklistCopy.id}`,
      className: "bg-page",
    },
    bottom: {
      ctaText: "Apply for the 5-Day Sprint",
      ctaHref: contactHref.sprint,
      title: "Ready to command the room?",
      subtitle:
        "Five days of live practice on vocal command, whiteboard mechanics, and sales discovery.",
      secondaryText: "Enterprise audit & build",
      secondaryHref: contactHref.enterprise,
      className: "bg-page",
    },
  } satisfies Record<string, OffersCtaBannerCopy>,

  howItWorks: {
    id: "how-it-works",
    title: "How it works",
    subtitle: "Start free, build communication skills, then bring in architecture when the stakes are highest.",
    steps: [
      {
        icon: faClipboardCheck,
        eyebrow: "Tier 0: Free",
        title: "The 2026 Enterprise Checklist",
        description:
          "A 60-second whiteboard teardown and spec sheet covering the top 3 architectural flaws and checkout leaks.",
      },
      {
        icon: faMicrophoneLines,
        eyebrow: "Tier 1: $500",
        title: "Communication Masterclass",
        description:
          "The core frameworks for presenting technical work: vocal command, whiteboard structure, and discovery.",
      },
      {
        icon: faChalkboardUser,
        eyebrow: "Tier 2: $1,500 to $3,500",
        title: "5-Day Presentation Sprint",
        description:
          "A live cohort with daily practice and feedback until presenting to executives feels natural.",
      },
      {
        icon: faDiagramProject,
        eyebrow: "Tier 3: $5,000 to $50,000",
        title: "Enterprise Audit & Build",
        description:
          "A fixed-scope architecture audit, scaling up to a full Digital Vault private portal build.",
      },
    ] satisfies OffersHowItWorksStep[],
  },

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
        question: "Is the Enterprise Checklist really free?",
        answer:
          "Yes. Enter your business email and you go straight to the whiteboard walkthrough and spec sheet. No sales call, no obligation.",
      },
      {
        question: "What's the difference between the Masterclass and the Sprint?",
        answer:
          "The $500 Masterclass teaches the core frameworks. The 5-Day Sprint is a live cohort where you practice them daily with feedback until presenting to executives feels natural.",
      },
      {
        question: "Who is the Sprint for?",
        answer:
          "Developers and junior technical operators moving into client-facing or sales engineering roles, and engineers who need to present to leadership with authority.",
      },
      {
        question: "Why is the Sprint priced as a range?",
        answer:
          "Seat price is set per cohort. You know the exact number before you commit.",
      },
      {
        question: "What does the Enterprise tier include?",
        answer:
          "It starts with a fixed-scope architecture audit: a 48-hour Loom teardown and Excalidraw blueprint covering checkout friction, API latency, security, and AWS cost. If you want us to build the fix, it scales to a full Digital Vault private portal on Next.js and AWS.",
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
    { value: "sprint", label: "Apply for the 5-Day Boardroom Presentation Sprint" },
    { value: "masterclass", label: "Join the Boardroom Communication Masterclass" },
    { value: "enterprise", label: "Enterprise Architecture Audit & Digital Vault Build" },
    { value: "beta-reader", label: "Join \"The Iteration Loop\" Book Beta Reader List" },
    { value: "general", label: "General Business Inquiry / Keynote Speaking" },
  ],
  /**
   * Google Form entry IDs for the extra fields. Leave empty until those questions exist on the form;
   * until then the intent, company, role, ARR and message are added to the "Last name" answer so nothing is lost.
   */
  extraEntries: {
    intent: "",
    company: "",
    role: "",
    arr: "",
    message: "",
  },
  roleLabel: "Current role (for your Sprint application)",
  rolePlaceholder: "e.g. Software Engineer, Solutions Engineer, Tech Lead",
  arrLabel: "Company ARR (optional)",
  arrOptions: [
    { value: "under-1m", label: "Under $1M ARR" },
    { value: "1m-3m", label: "$1M to $3M ARR" },
    { value: "3m-10m", label: "$3M to $10M ARR" },
    { value: "10m-plus", label: "$10M+ ARR" },
  ],
  underArrNote: "Under $1M ARR? The free Enterprise Checklist is the faster place to start.",
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
