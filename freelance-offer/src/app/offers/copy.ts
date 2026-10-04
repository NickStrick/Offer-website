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
  /** Optional link to the live project. */
  link?: { href: string; label: string };
};

/** A smaller project shown in the "More sites I've built" row. */
export type MoreWorkItem = {
  id: string;
  name: string;
  type: string;
  description: string;
  image: ImageMedia;
  href: string;
};

/** A service card: the visitor's outcome first, the price second. */
export type ServiceOffer = {
  id: string;
  eyebrow: string;
  title: string;
  headline: string;
  subtitle: string;
  price?: string;
  priceNote?: string;
  features: readonly { title: string; text: string }[];
  guarantee?: { title: string; body: string };
  ctaText: string;
  /** Opens the application pop-up for this intent. */
  intent: "audit" | "fixes";
  modal: { title: string; description: string };
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
  fixes: "/contact?intent=fixes",
  mentoring: "/contact?intent=mentoring",
  newsletter: "/contact?intent=newsletter",
  general: "/contact?intent=general",
};

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

/** The paid audit: the main service. */
export const auditOffer: ServiceOffer = {
  id: "audit",
  eyebrow: "Revenue Leak Audit",
  title: "Revenue Leak Audit",
  headline: "Find out exactly why visitors leave without buying.",
  subtitle: "In 48 hours you'll know what's costing you sales, and exactly what to fix first.",
  price: "$800",
  priceNote: "one fixed price, no surprise bills",
  features: [
    { title: "A clear picture of your store or app", text: "with every trouble spot circled" },
    { title: "Your fix list, ranked by money", text: "so you tackle what grows sales first" },
    { title: "Speed, checkout, and security checked", text: "the three places buyers drop off most" },
    { title: "A 30-minute call", text: "where we walk through everything together and answer your questions" },
  ],
  guarantee: {
    title: "Clear answers, or your money back",
    body: "If your problems aren't crystal clear within 24 hours of delivery, you get a full refund. No questions asked.",
  },
  ctaText: "Get your audit",
  intent: "audit",
  modal: {
    title: "Get your $800 Revenue Leak Audit",
    description: "Tell me about your store or app, and I'll reply soon with next steps and a time for your kickoff.",
  },
};

/** Done-for-you fixes: the follow-on service after an audit. */
export const fixOffer: ServiceOffer = {
  id: "fixes",
  eyebrow: "Done-for-you fixes",
  title: "Done-for-you fixes",
  headline: "Want it fixed for you?",
  subtitle:
    "Skip the to-do list. Get a fixed quote and have every fix built, tested, and shipped, so you can get back to running your business.",
  priceNote: "fixed quote after your audit",
  features: [
    { title: "One fixed price", text: "agreed before any work starts" },
    { title: "Built, tested, and shipped", text: "by a senior full-stack engineer" },
    { title: "Fixes ranked by money", text: "so your sales grow first" },
  ],
  ctaText: "Get a fixed quote",
  intent: "fixes",
  modal: {
    title: "Get a fixed quote",
    description: "Share your store or app and what you'd like fixed. If you've had an audit, mention it and I'll quote from your fix list.",
  },
};

/** "Follow along": YouTube and the weekly notes newsletter. */
export const journeyCopy = {
  id: "journey",
  eyebrow: "Follow along",
  headline: "Learn to sell and speak with confidence.",
  subtitle:
    "I'm documenting everything I learn about communication and sales, and sharing the lessons that work in free videos and weekly emails. You get real lessons, tried in the real world before they reach you.",
  youtubeUrl: "https://www.youtube.com/@NickolasStricker",
  youtubeShortsUrl: "https://www.youtube.com/@NickolasStricker/shorts",
  /** Saved as the waitlist form's "List" answer and as the beehiiv tag. */
  newsletterListName: "Weekly Notes",
  newsletterCta: "Get the weekly notes",
  newsletterModal: {
    title: "Get the weekly notes",
    description: "One email a week with what I'm learning about communication, sales, and building a business, plus book updates. No spam.",
  },
};

/** Upcoming developer-to-sales-engineer classes (waitlist only for now). */
export const mentoringCopy = {
  id: "se-classes",
  eyebrow: "Coming soon",
  headline: "Want to move from developer to sales engineer?",
  subtitle:
    "I'm turning everything I learn into classes for developers who want to make the jump. Join the waitlist and you'll be first in line when they open.",
  ctaText: "Join the waitlist",
  /** Saved as the waitlist form's "List" answer and as the beehiiv tag. */
  listName: "SE Classes Waitlist",
  modal: {
    title: "Join the developer-to-SE waitlist",
    description: "Leave your email and you'll be the first to know when the classes open.",
  },
};

/** Short "Meet Nick" strip on the homepage. */
export const meetNickCopy = {
  name: "Hi, I'm Nick!",
  body:
    "I've spent 6 years building and fixing online stores and apps, and I love helping businesses turn more visitors into buyers. I'm also learning to sell and speak, and I share every lesson on YouTube as I go. Soon I'll turn what works into classes for developers moving into sales engineering.",
};

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
    eyebrow: "Luxury watch store · Checkout rebuild",
    title: "Fixing Redtail Luxe's checkout",
    image: caseStudyImages.redtailLuxe,
    friction: {
      label: "The problem",
      text: "Their Wix site looked great, but buyers kept leaving. Reviews were buried, and checkout was one big wall of confusing boxes.",
    },
    architecture: {
      label: "What I built",
      text: "I moved reviews and their story to the top, so shoppers trusted them faster. Then I rebuilt checkout into short, simple steps, with 5 questions or fewer on each screen.",
    },
    metric: {
      label: "The result",
      text: "30% more shoppers finished checkout, month over month.",
    },
    link: { href: "https://www.redtailluxe.com/", label: "See the live store" },
  },
  {
    id: "trade-show-platform",
    published: true,
    eyebrow: "Enterprise trade show platform",
    title: "Helping a huge trade show app run faster",
    image: caseStudyImages.tradeShowPlatform,
    friction: {
      label: "The problem",
      text: "A giant app (600,000 lines of code!) used live at trade shows felt slow, and users kept getting stuck.",
    },
    architecture: {
      label: "What I built",
      text: "A live attendee dashboard with chat, exhibitor search, and calendar sync. I traced every data request from start to finish and fixed the slow ones.",
    },
    metric: {
      label: "The result",
      text: "The app ran 30% faster and user friction dropped 22%, helping keep its biggest customers renewing.",
    },
  },
  {
    id: "cm-florals",
    published: true,
    eyebrow: "Local florist · Online store",
    title: "Giving a 45-year florist an online store",
    image: caseStudyImages.cmFlorals,
    friction: {
      label: "The problem",
      text: "A florist with 45 years of experience needed new customers to find her, order online, and ask about custom flowers.",
    },
    architecture: {
      label: "What I built",
      text: "A custom online store with easy inquiry forms, built in 4 weeks on Next.js and AWS.",
    },
    metric: {
      label: "The result",
      text: "One easy place for customers to shop and reach out, built just the way she pictured it.",
    },
    link: { href: "https://www.cmfloralsandgifts.com/", label: "See the live store" },
  },
  {
    id: "grand-wood-and-glass",
    published: true,
    eyebrow: "Woodworking & glass studio · Online store",
    title: "Taking a craft studio's work online",
    image: caseStudyImages.grandWood,
    friction: {
      label: "The problem",
      text: "A woodworking and glass company needed a way to sell online and bring in requests for custom pieces.",
    },
    architecture: {
      label: "What I built",
      text: "A custom online store with lead capture for custom orders, built in 4 weeks on Next.js and AWS.",
    },
    metric: {
      label: "The result",
      text: "One place for customers to shop, see the craft up close, and ask for custom work.",
    },
    link: { href: "https://www.grandwoodandglass.com/", label: "See the live store" },
  },
];

/** Smaller projects, shown as a compact row under the case studies. */
export const moreWork: readonly MoreWorkItem[] = [
  {
    id: "connecting-dots",
    name: "Connecting Dots LatinX",
    type: "Community nonprofit",
    description: "A home online for Chicago's LatinX community to find events and connect.",
    image: caseStudyImages.connectingDots,
    href: "https://connecting-dots-five.vercel.app/",
  },
  {
    id: "do-well-2-transform",
    name: "Do Well 2 Transform",
    type: "Coaching business",
    description: "A clean landing page for a coaching and hypnosis practice.",
    image: caseStudyImages.doWell,
    href: "https://dowell2transform.com/",
  },
  {
    id: "claroflow",
    name: "ClaroFlow",
    type: "SaaS landing page",
    description: "A fast, sleek landing page for a workflow tool built for remote teams.",
    image: caseStudyImages.claroflow,
    href: "https://claro-flow.vercel.app/",
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

/** Post-signup pages at /welcome/[offer]. Point Calendly / checkout redirects here. */
export const welcomePages: Record<"architecture-audit", WelcomePageCopy> = {
  "architecture-audit": {
    eyebrow: "Revenue Leak Audit",
    title: "Your audit kickoff is booked!",
    subtitle: "A few quick things to have ready so we get the most out of it.",
    video: videos.welcomeAudit,
    steps: [
      "Watch the short prep video above.",
      "Write down the pages that matter most (product pages, cart, checkout, signup) and anywhere you think buyers drop off.",
      "Have your analytics and a way for me to see your store or app (a staging link or a read-only login) ready to share.",
      "Your map, ranked fix list, and walkthrough call land within 48 hours of kickoff.",
    ],
    nextCta: { text: "See the done-for-you fixes", href: "/audits#fixes" },
  },
};

/** Copy for the /audits page. */
export const offersCopy = {
  headline: {
    eyebrow: "Revenue Leak Audit",
    headlineText: "More sales from the visitors you already have.",
    subheadlineText:
      "Your store or app might be quietly losing buyers to slow pages and clunky checkouts. Let's find the leaks, fix them, and turn more of your visitors into paying customers.",
    ctas: [
      { label: "Get your $800 audit", href: "#audit" },
      { label: "See what's included", href: "#framework", variant: "inverted" as const },
    ],
  },

  ctaBanners: {
    middle: {
      id: "apply",
      ctaText: "Get your $800 audit",
      ctaHref: contactHref.audit,
      title: "Ready to find your leaks?",
      subtitle: "In 48 hours you'll know what's costing you sales, and what to fix first. One fixed price.",
      secondaryText: "Get the free checklist",
      secondaryHref: "#free-checklist",
      className: "bg-page",
    },
    bottom: {
      ctaText: "Get your $800 audit",
      ctaHref: contactHref.audit,
      title: "More buyers are one fix away.",
      subtitle: "Find the leaks, get them fixed, and watch more visitors turn into customers.",
      secondaryText: "Get a fixed quote",
      secondaryHref: contactHref.fixes,
      className: "bg-page",
    },
  } satisfies Record<string, OffersCtaBannerCopy>,

  framework: {
    id: "framework",
    title: "What your audit checks",
    subtitle: "A deep look at how your store or app really works, not just how it looks.",
    items: [
      {
        icon: faStopwatch,
        title: "Speed check",
        description:
          "Find the slow spots in your pages and the tools they talk to (payments, plugins, APIs), the ones that make buyers give up and leave.",
      },
      {
        icon: faRoute,
        title: "Checkout check",
        description: "Long forms scare people off. You get a plan to turn them into short, easy steps so more people finish.",
      },
      {
        icon: faUserShield,
        title: "Safety check",
        description: "Make sure logins and payments are locked down, so customers trust your store and you sleep well at night.",
      },
    ] satisfies OffersFrameworkItem[],
  },

  whoThisIsFor: {
    title: "Who this is for",
    intro: "This is for you if…",
    bullets: [
      "You run an online store or software business and want more sales",
      "Visitors come to your site, but too few of them buy",
      "Your pages feel slow, or your checkout feels clunky",
      "You want clear answers and one fixed price, not surprise hourly bills",
      "You'd love an expert to just fix it for you",
    ],
  },

  about: {
    title: "Learn more about me",
    cards: {
      left: {
        title: "Who I Am",
        bodyLines: [
          "I’ve always loved two things: building tech and helping people. I started out making video games. Then I taught engineers how to work through tricky code. At Expocad, I ran live software demos for big companies at national trade shows.",
          "Now I run Stricker Digital. I help online businesses find what’s costing them sales and fix it, and I share what I learn about communication on YouTube.",
        ],
      },
      right: {
        title: "Based in Chicago",
        bodyLines: [
          "I'm based in Chicago and work with businesses anywhere.",
          "Every recommendation is tied to what grows your sales.",
          "You get engineering depth with clear, plain-English answers.",
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
        question: "What do I get with the $800 audit?",
        answer:
          "A clear picture of your store or app with the trouble spots circled, a fix list ranked by what grows sales first, and a 30-minute call to walk through it all together. Speed, checkout, and security are all checked.",
      },
      {
        question: "How fast is it?",
        answer: "Your audit lands within 48 hours of kickoff, once I can see your store or app.",
      },
      {
        question: "What if it doesn't help?",
        answer:
          "If your problems aren't crystal clear within 24 hours of delivery, tell me and you get a full refund. No questions asked.",
      },
      {
        question: "Can you fix the problems for me?",
        answer:
          "Yes! After your audit you can get a fixed quote, and I'll build, test, and ship the fixes. You know the price before any work starts.",
      },
      {
        question: "What kinds of businesses is this for?",
        answer:
          "Online stores and software businesses of any size. If you have visitors who aren't buying, there's money to find.",
      },
      {
        question: "Is the checklist really free?",
        answer:
          "Yep! Just enter your email and you'll go straight to it, with the e-book ready to download. No sales call. No catch.",
      },
    ] satisfies OffersFAQItem[],
  },
} as const;

export type OffersCopy = typeof offersCopy;

/** /contact intake form. */
export const contactCopy = {
  eyebrow: "Contact",
  headline: "Let's grow your sales together.",
  subheadline: "Tell me what you need. I read every message and I'll point you to the best next step.",
  intents: [
    { value: "audit", label: "Get a $800 Revenue Leak Audit" },
    { value: "fixes", label: "Get a fixed quote to fix my store or app" },
    { value: "mentoring", label: "Join the developer-to-sales-engineer class waitlist" },
    { value: "newsletter", label: "Get the weekly notes (videos, lessons, and book updates)" },
    { value: "general", label: "Speaking, or something else" },
  ],
  roleLabel: "Your current role",
  rolePlaceholder: "e.g. Software Engineer, Tech Lead",
  placeholders: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    company: "Your store or app's website (optional)",
    message: "What's going on? Share anything that helps (optional)",
    mentoringMessage: "Where are you in your career, and what do you want help with? (optional)",
  },
  submit: { idle: "Send", loading: "Sending…" },
  success: {
    title: "Thanks! Got it.",
    body: "I'll reply by email soon. Want to reach me right now? Email",
    bookCallText: "Book a call now",
  },
  consent: CONSENT_TEXT,
};
