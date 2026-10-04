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

/** Calendly booking page, shown in the "Book a call" pop-up (components/BookCallModal.tsx). */
export const BOOK_CALL_URL = "https://calendly.com/nickolasstricker/stricker-digital-discussion";

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
  /**
   * The Canva e-book. Put the PDF at public/resources/2026-enterprise-infrastructure-checklist.pdf;
   * the checklist page shows its download button automatically once the file is there.
   */
  ebookPath: "/resources/2026-enterprise-infrastructure-checklist.pdf",
  ebookDownloadName: "Stricker Digital - 2026 Enterprise Infrastructure Checklist.pdf",
  tag: "Free",
  price: "$0",
  /** The resource's name, shown as a small label (and as the checklist page title). */
  title: "2026 Enterprise Infrastructure Checklist",
  headline: "Is your app leaking money? Find out free.",
  subtitle:
    checklistVideoReady
      ? "Watch me walk through the 3 biggest money leaks I see in growing apps: slow pages, slow servers, and checkout forms that ask too much. Leaks like these can cost a company $50k or more."
      : "My free e-book maps the 3 biggest money leaks I see in growing apps: slow pages, slow servers, and checkout forms that ask too much. Leaks like these can cost a company $50k or more.",
  highlights: [
    checklistVideoReady
      ? "A 60-second video where I draw out the 3 biggest problems I find (in Excalidraw)"
      : "A drawn map of the 3 biggest problems I find (made in Excalidraw)",
    "A simple plan for a fast, solid setup on Next.js and AWS",
    "My mobile checkout test: no step should ask for more than 5 things",
  ],
  emailPlaceholder: "Enter your business email...",
  ctaText: "Send me the free checklist",
  loadingText: "Sending…",
  /** Saved as the Google Form "Intent" answer for checklist signups. */
  sourceValue: "2026 Enterprise Checklist",
  modalTitle: "Get the free checklist",
  modalDescription: "Enter your email and I'll take you straight to the checklist.",
  consent: CONSENT_TEXT,
};

/** Two ladders, one per customer profile. */
export const offerLadders: readonly OfferLadder[] = [
  {
    id: "career",
    badge: "For engineers",
    headline: "Speak up. Get heard. Get paid.",
    subheadline:
      "You already know how to build. I'll teach you how to explain it, so bosses say yes and companies hire you for $200k+ sales engineer jobs.",
    icp: "Engineers, junior sales engineers, and builders who want to grow.",
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
          "Video lessons on speaking with power (my Power Pause and Rate Pivot drills)",
          "A cheat sheet that turns your tech wins into dollars your boss cares about",
          "The question playbook top sales engineers use (MEDDPICC), plus whiteboard templates",
        ],
        bonuses: [
          "Sneak-peek chapters of my book, The Iteration Loop",
          "Ready-to-use whiteboard slides for your next big talk",
        ],
        ctaText: "Enroll in Masterclass ($500)",
        ctaAction: "link",
        ctaHref: MASTERCLASS_CHECKOUT_URL,
      },
      {
        id: "presentation-sprint",
        variant: "featured",
        tierLabel: "Tier 2",
        badge: "Live for 5 days · Only 10 seats",
        title: "The 5-Day Boardroom Gravity & SE Transition Accelerator",
        price: "$2,500",
        priceNote: "seat",
        features: [
          "5 live days of speaking and whiteboard practice, with real feedback",
          "A 1-on-1 session where we map out your big pitch together",
          "Practice interviews and tough questions, so nothing surprises you",
        ],
        bonuses: [
          "I review your resume and portfolio so real people see it, not just robot filters",
          "Lifetime access to the full Masterclass ($500 value)",
        ],
        riskReversal: {
          title: "Money back on Day 2",
          body: "Not feeling better at presenting by Day 2? I'll refund you on the spot.",
        },
        ctaText: "Apply for Next Cohort ($2,500)",
        ctaAction: "modal",
        modal: {
          intent: "sprint",
          title: "Apply for the next cohort",
          description: "Only 10 seats per group. Tell me where you are today and I'll reply with next steps.",
        },
      },
    ],
  },
  {
    id: "enterprise",
    badge: "For founders",
    headline: "Stop losing sales to slow, clunky software.",
    subheadline:
      "I find the leaks in your checkout and code in 48 hours. You get a clear plan for one fixed price. No surprise hourly bills, ever.",
    icp: "Founders and tech leaders at companies making $1M to $10M a year.",
    tiers: [
      {
        id: "enterprise-audit",
        variant: "core",
        tierLabel: "Tier 3",
        badge: "My core audit · Only 2 spots a month",
        title: "The 48-Hour Enterprise System Latency & Conversion Vault",
        price: "$5,000",
        priceNote: "fixed-scope",
        features: [
          "I check your checkout, your speed, and your login security",
          "A clear map of your whole system, with the trouble spots circled",
          "A step-by-step fix list your developers can start on right away",
        ],
        bonuses: [
          "Ways to shrink your AWS bill",
          "A 30-minute call with your leaders to plan next steps",
          "I check your team's fixes for 30 days after",
        ],
        riskReversal: {
          title: "Clarity or your money back",
          body: "Look over your map and fix list. If your problems aren't crystal clear within 24 hours, tell me and I'll refund 100%. No questions asked.",
        },
        ctaText: "Apply for $5k Enterprise Audit",
        ctaAction: "modal",
        modal: {
          intent: "audit",
          title: "Apply for the $5k Enterprise Audit",
          description: "Built for companies making $1M+ a year. I only take 2 audits a month.",
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
          "I build your private client portal from scratch (the Digital Vault, on Next.js and AWS)",
          "AI helpers that handle busywork for your team (n8n and CrewAI)",
          "Locked-down login security (OAuth 2.0 and Auth0)",
          "Every customer's data kept safe and separate, with full records (CIS compliance)",
          "30 days of hands-on help after launch",
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
  title: "Real work. Real results.",
  subtitle: "Here's what was broken, what I built, and what changed.",
};

export const caseStudies: readonly OffersCaseStudy[] = [
  {
    id: "redtail-luxe",
    published: true,
    eyebrow: "Checkout Refactor",
    title: "Fixing Redtail Luxe's checkout",
    image: caseStudyImages.redtailLuxe,
    friction: {
      label: "The problem",
      text: "Shoppers hit one giant wall of a form and left before buying expensive watches.",
    },
    architecture: {
      label: "What I built",
      text: "I split it into small steps, 5 questions or fewer each, with smooth, fast animations.",
    },
    metric: {
      label: "The result",
      text: "30% more shoppers finished checkout in the first 30 days.",
    },
  },
  {
    id: "trade-show-platform",
    published: true,
    eyebrow: "Enterprise Platform",
    title: "Helping a huge trade show app grow",
    image: caseStudyImages.tradeShowPlatform,
    friction: {
      label: "The problem",
      text: "A giant app (600,000 lines of code!) had to work live for exhibitors and visitors.",
    },
    architecture: {
      label: "What I built",
      text: "Live chat, live exhibitor lists, and behind-the-scenes message delivery.",
    },
    metric: {
      label: "The result",
      text: "The app ran 30% faster, and complaint tickets dropped 22%.",
    },
  },
  {
    id: "slot-3",
    published: false,
    eyebrow: "Case Study Slot 3",
    title: "Your next B2B SaaS case study",
    image: caseStudyImages.slot3,
    friction: { label: "The problem", text: "What was breaking and what it cost." },
    architecture: { label: "What I built", text: "What I changed in the system." },
    metric: { label: "The result", text: "The number that moved." },
  },
  {
    id: "slot-4",
    published: false,
    eyebrow: "Case Study Slot 4",
    title: "Your next B2B SaaS case study",
    image: caseStudyImages.slot4,
    friction: { label: "The problem", text: "What was breaking and what it cost." },
    architecture: { label: "What I built", text: "What I changed in the system." },
    metric: { label: "The result", text: "The number that moved." },
  },
];

/** Headline results shown as a stats band. */
export const proofMetrics = [
  { value: "30%", label: "more shoppers finished checkout" },
  { value: "22%", label: "fewer \"this is broken\" tickets" },
  { value: "48 hrs", label: "from kickoff to your finished audit" },
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
      "Pick one technical topic you explain often. I'll use it for your first whiteboard session.",
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
      "I map the architecture, then build and deploy it with 30 days of hands-on support.",
    ],
    nextCta: { text: "Contact me", href: contactHref.retainer },
  },
};

export const offersCopy = {
  headline: {
    eyebrow: "Offers",
    headlineText: "Grow your career. Grow your revenue.",
    subheadlineText:
      "Pick your path. Engineers: learn to speak so people listen. Founders: find and fix what's costing you sales.",
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
      title: "Want me to look at your app?",
      subtitle:
        "My $5,000 audit finds what's costing you sales in 48 hours. It's built for companies making $1M+ a year.",
      secondaryText: "Get the free checklist",
      secondaryHref: `#${checklistCopy.id}`,
      className: "bg-page",
    },
    bottom: {
      ctaText: "Apply for Next Cohort ($2,500)",
      ctaHref: contactHref.sprint,
      title: "Ready to own the room?",
      subtitle: "5 live days. Real practice. Real feedback. You'll walk out talking like a pro.",
      secondaryText: "Apply for $5k Audit",
      secondaryHref: contactHref.audit,
      className: "bg-page",
    },
  } satisfies Record<string, OffersCtaBannerCopy>,

  framework: {
    id: "framework",
    title: "What I check in your audit",
    subtitle: "I dig deep into how your app really works, not just how it looks.",
    items: [
      {
        icon: faStopwatch,
        title: "Speed check",
        description:
          "I find the slow spots in your app and the tools it talks to (payments, webhooks, APIs), the ones that make buyers give up and leave.",
      },
      {
        icon: faRoute,
        title: "Checkout check",
        description:
          "Long forms scare people off. I turn them into short, easy steps so more people finish.",
      },
      {
        icon: faUserShield,
        title: "Safety and cost check",
        description:
          "I make sure logins are locked down (OAuth 2.0, MFA) and your AWS bill isn't bigger than it should be.",
      },
    ] satisfies OffersFrameworkItem[],
  },

  whoThisIsFor: {
    title: "Who this is for",
    intro: "This is for you if…",
    bullets: [
      "You're an engineer who wants a sales engineer or client-facing job",
      "You present to bosses and want them to say yes",
      "You lead a tech team and want your updates to drive decisions",
      "You run a company making $1M to $10M a year, and checkout feels slow",
      "You want one fixed price, not surprise hourly bills",
    ],
  },

  about: {
    title: "Learn more about me",
    cards: {
      left: {
        title: "Who I Am",
        bodyLines: [
          "I’ve always loved two things: building tech and helping people. I started out making video games. Then I taught engineers how to work through tricky code. At Expocad, I ran live software demos for big companies at national trade shows.",
          "Now I run Stricker Digital. I help companies find what’s costing them sales, and I help engineers get heard.",
        ],
      },
      right: {
        title: "Based in Chicago",
        bodyLines: [
          "I'm based in Chicago and work with teams anywhere.",
          "Every recommendation is tied to a business metric: conversion, latency, or cost.",
          "You get engineering depth with the communication of a sales engineer.",
        ],
      },
    },
  } satisfies OffersAboutCopy,

  testimonials: {
    title: "What clients say",
    subtitle: "Here's what people I've worked with have to say.",
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
        question: "Is the checklist really free?",
        answer: "Yep! Just enter your email and you'll go straight to it, with the e-book ready to download. No sales call. No catch.",
      },
      {
        question: "What's the difference between the Masterclass and the Sprint?",
        answer:
          "The Masterclass ($500) is videos and tools you go through on your own time. The Sprint ($2,500) is 5 live days with me and a small group of 10 or fewer. You practice, I coach you, and you also get 1-on-1 help, practice interviews, a resume review, and the full Masterclass.",
      },
      {
        question: "Who is the Sprint for?",
        answer:
          "Engineers who want to move into sales engineering or client-facing jobs, and anyone who has to present to bosses and wants to nail it.",
      },
      {
        question: "What if the Sprint isn't working for me?",
        answer:
          "Tell me by the end of Day 2. If you don't feel better at presenting, I'll give you all your money back on the spot.",
      },
      {
        question: "What does the $5,000 audit include?",
        answer:
          "I check your checkout, your speed, and your login security. You get a map of your system with the trouble spots circled, plus a step-by-step fix list for your developers. Bonuses: ways to shrink your AWS bill, a 30-minute planning call with your leaders, and 30 days of me checking your team's fixes. One price. Done in 48 hours. Only 2 spots a month.",
      },
      {
        question: "Is the audit guaranteed?",
        answer:
          "Yes! Look over your map and fix list. If your problems aren't crystal clear within 24 hours, tell me and I'll refund 100%. No questions asked.",
      },
      {
        question: "Who writes the code after the audit?",
        answer:
          "Your developers do, using my fix list, and I check their work for 30 days. Want me to build it for you instead? That's the $50,000 Vault Implementation.",
      },
      {
        question: "What if we make less than $1M a year?",
        answer:
          "Start with the free checklist. It shows you the biggest fixes fast, so you'll know if a full audit makes sense later.",
      },
    ] satisfies OffersFAQItem[],
  },
} as const;

export type OffersCopy = typeof offersCopy;

/** /contact intake form. */
export const contactCopy = {
  eyebrow: "Contact",
  headline: "Let's grow your revenue together.",
  subheadline: "Tell me what you need. I read every message and I'll point you to the best next step.",
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
  underArrNote: "My $5,000 audit is built for companies making $1M+ a year. Under that, the free checklist is the faster place to start.",
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
    title: "Thanks! Got it.",
    body: "I'll reply by email soon. Want to reach me right now? Email",
    bookCallText: "Book a call now",
  },
  consent: CONSENT_TEXT,
};
