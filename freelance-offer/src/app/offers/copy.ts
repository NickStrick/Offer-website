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
  /** Struck-through "was" price shown next to a discounted price. */
  regularPrice?: string;
  /** Small badge above the price, e.g. a limited-time note. */
  priceBadge?: string;
  features: readonly { title: string; text: string }[];
  guarantee?: { title: string; body: string };
  ctaText: string;
  /** When set, the main button goes straight to checkout and the pop-up becomes a "questions first" link. */
  checkoutHref?: string;
  /** When true, the main button opens the Calendly booking pop-up instead. */
  bookCall?: boolean;
  /** Opens the application pop-up for this intent. */
  intent: "audit" | "fixes" | "fractional";
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

/** Founding price for the first 10 audit clients. Once those spots are filled, set AUDIT_PRICE back to
 *  AUDIT_REGULAR_PRICE: the struck-through price and founding badge then hide on their own. */
export const AUDIT_REGULAR_PRICE: string = "$800";
export const AUDIT_PRICE: string = "$400";
export const AUDIT_FOUNDING_NOTE = "Founding price for my first 10 clients";

/** Calendly booking page, shown in the "Book a call" pop-up (components/BookCallModal.tsx). */
export const BOOK_CALL_URL = "https://calendly.com/nickolasstricker/stricker-digital-discussion";

export const CONSENT_TEXT =
  "By providing your information today, you are giving consent for us to contact you by mail, phone, text, or email. We do not sell your personal information, and you can withdraw consent at any time.";

/** Contact links with the intent dropdown preselected. */
/** On-site Stripe checkout for the audit (see offers/products.ts). */
export const AUDIT_CHECKOUT_PATH = "/checkout/audit";

export const contactHref = {
  audit: "/contact?intent=audit",
  fractional: "/contact?intent=fractional",
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

/** Tier 1, the paid entry offer: the 48-Hour Blueprint (id stays "audit" so links and checkout keep working). */
export const auditOffer: ServiceOffer = {
  id: "audit",
  eyebrow: "Start here",
  title: "48-Hour Blueprint",
  headline: "See your whole system on one page.",
  subtitle: "In 48 hours you'll see what's slowing you down, what's costing you sales, and exactly what to fix first.",
  price: AUDIT_PRICE,
  regularPrice: AUDIT_PRICE !== AUDIT_REGULAR_PRICE ? AUDIT_REGULAR_PRICE : undefined,
  priceBadge: AUDIT_PRICE !== AUDIT_REGULAR_PRICE ? AUDIT_FOUNDING_NOTE : undefined,
  priceNote: "one fixed price, no surprise bills",
  features: [
    { title: "A hand-drawn map of your app or store", text: "made in Excalidraw, with every trouble spot circled" },
    { title: "Speed, checkout, and setup checked", text: "including the parts that are built too big" },
    { title: "Your demo and sales flow reviewed", text: "so buyers understand you faster" },
    { title: "Your fix list, ranked by money", text: "plus a 30-minute call to walk through it together" },
  ],
  guarantee: {
    title: "Clear answers, or your money back",
    body: "If your problems aren't crystal clear within 24 hours of delivery, you get a full refund. No questions asked.",
  },
  ctaText: "Get your Blueprint",
  checkoutHref: AUDIT_CHECKOUT_PATH,
  intent: "audit",
  modal: {
    title: `Get your ${AUDIT_PRICE} Blueprint`,
    description: "Tell me about your store or app, and I'll reply soon with next steps and a time for your kickoff.",
  },
};

/** Tier 2: ongoing part-time architect + pre-sales partner. Booked through a call. */
export const fractionalOffer: ServiceOffer = {
  id: "fractional",
  eyebrow: "Ongoing partner",
  title: "Fractional Solutions Architect",
  headline: "A part-time architect who can also sell.",
  subtitle:
    "I join your team a few hours a week. I help your engineers build the simple version, and help your sales team explain it so buyers say yes.",
  price: "From $5k",
  priceNote: "per month",
  features: [
    { title: "Weekly calls with your team", text: "to plan what to build and what to skip" },
    { title: "I join big demos and sales calls", text: "and turn tech talk into buyer words" },
    { title: "Your system stays on one map", text: "updated as you grow" },
  ],
  ctaText: "Book a call",
  bookCall: true,
  intent: "fractional",
  modal: {
    title: "Talk about a Fractional Solutions Architect",
    description: "Tell me about your team and what's getting stuck. I'll reply with a time to talk.",
  },
};

/** Tier 3: the build. Fixed quote, usually after a Blueprint. (id stays "fixes" for existing links.) */
export const fixOffer: ServiceOffer = {
  id: "fixes",
  eyebrow: "Done for you",
  title: "Systems Refactor",
  headline: "Want it fixed for you?",
  subtitle:
    "Skip the to-do list. I build, test, and ship the fixes from your Blueprint, from a faster checkout to a full rebuild on Next.js and AWS.",
  priceNote: "fixed quote · big rebuilds from $10k",
  features: [
    { title: "One fixed price", text: "agreed before any work starts" },
    { title: "Built, tested, and shipped", text: "by a senior full-stack engineer" },
    { title: "Fixes ranked by money", text: "so your sales grow first" },
  ],
  ctaText: "Get a fixed quote",
  intent: "fixes",
  modal: {
    title: "Get a fixed quote",
    description: "Share your store or app and what you'd like fixed. If you've had a Blueprint, mention it and I'll quote from your fix list.",
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
  tagline: "The Shifu Builder",
  body:
    "I'm a full-stack engineer who learned to sell. 6 years of building apps and stores, 2,500 cold calls, and live demos for big companies. I make tech simple, so it's easy to build and easy to buy. I share every lesson on YouTube as I go.",
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
    link: { href: "https://www.expocad.com/", label: "See Expocad" },
  },
  {
    id: "copper-fox-collective",
    published: true,
    eyebrow: "Local florist · Online store",
    title: "Giving a 45-year florist an online store",
    image: caseStudyImages.copperFox,
    friction: {
      label: "The problem",
      text: "A florist with 45 years of experience needed new customers to find her, order online, and ask about custom flowers.",
    },
    architecture: {
      label: "What I built",
      text: "A custom online store with easy inquiry forms, built in 4 weeks on Next.js and AWS. When she grew into her new Copper Fox Collective brand, the site grew right along with her.",
    },
    metric: {
      label: "The result",
      text: "One easy place for customers to shop and reach out, built just the way she pictured it.",
    },
    link: { href: "https://www.copperfoxcollective.com/", label: "See the live store" },
  },
  {
    id: "chelles-fiber-crafts",
    published: true,
    eyebrow: "Fiber arts shop · Custom online store",
    title: "Building a fiber arts shop its own store",
    image: caseStudyImages.chellesCrafts,
    friction: {
      label: "The problem",
      text: "A local fiber arts business needed a real online store to show off its handmade goods, keep track of stock, and take payments safely.",
    },
    architecture: {
      label: "What I built",
      text: "A custom store built from the ground up in 4 weeks, with product pages, a shopping cart, inventory tracking, and secure checkout. I handled all of it, front to back.",
    },
    metric: {
      label: "The result",
      text: "The shop now sells online 24/7, and the owner runs products and stock herself.",
    },
    link: { href: "https://www.chellescrafts.com/", label: "See the live store" },
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
    href: "https://www.connectingdotsforlatinx.com/",
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
  { value: "48 hrs", label: "from kickoff to your finished Blueprint" },
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
    eyebrow: "48-Hour Blueprint",
    title: "Your Blueprint kickoff is booked!",
    subtitle: "A few quick things to have ready so we get the most out of it.",
    video: videos.welcomeAudit,
    steps: [
      "Watch the short prep video above.",
      "Write down the pages that matter most (product pages, cart, checkout, signup) and anywhere you think buyers drop off.",
      "Have your analytics and a way for me to see your store or app (a staging link or a read-only login) ready to share.",
      "Your hand-drawn map, ranked fix list, and walkthrough call land within 48 hours of kickoff.",
    ],
    nextCta: { text: "See the done-for-you fixes", href: "/audits#fixes" },
  },
};

/** Copy for the /audits page. */
export const offersCopy = {
  headline: {
    eyebrow: "Blueprint · Fractional Architect · Refactor",
    headlineText: "Draw it. Simplify it. Sell it.",
    subheadlineText:
      "Your app or store is probably more tangled than it needs to be, and that's costing you speed and sales. Let's map it on one page, cut what you don't need, and make it easy to buy.",
    ctas: [
      { label: `Get your ${AUDIT_PRICE} Blueprint`, href: "#audit" },
      { label: "See what's included", href: "#framework", variant: "inverted" as const },
    ],
  },

  ctaBanners: {
    middle: {
      id: "apply",
      ctaText: `Get your ${AUDIT_PRICE} Blueprint`,
      ctaHref: AUDIT_CHECKOUT_PATH,
      title: "Ready to see it all on one page?",
      subtitle: "In 48 hours you'll know what's slowing you down, what's costing you sales, and what to fix first. One fixed price.",
      secondaryText: "Get the free checklist",
      secondaryHref: "#free-checklist",
      className: "bg-page",
    },
    bottom: {
      ctaText: `Get your ${AUDIT_PRICE} Blueprint`,
      ctaHref: AUDIT_CHECKOUT_PATH,
      title: "Simple wins. Let's find yours.",
      subtitle: "Draw it out, cut the extra, and watch more visitors turn into customers.",
      secondaryText: "Get a fixed quote",
      secondaryHref: contactHref.fixes,
      className: "bg-page",
    },
  } satisfies Record<string, OffersCtaBannerCopy>,

  framework: {
    id: "framework",
    title: "What your Blueprint checks",
    subtitle: "A deep look at how your app or store really works, not just how it looks.",
    items: [
      {
        icon: faStopwatch,
        title: "Speed check",
        description:
          "Find the slow spots in your pages and the tools they talk to (payments, plugins, APIs), the ones that make buyers give up and leave.",
      },
      {
        icon: faRoute,
        title: "Buyer path check",
        description:
          "Long checkouts, confusing signups, and demos full of tech talk all scare buyers off. You get a plan to make each step short and clear.",
      },
      {
        icon: faUserShield,
        title: "Setup check",
        description:
          "I look for the parts that are built too big, cost too much, or aren't locked down, and show you the simpler, safer way.",
      },
    ] satisfies OffersFrameworkItem[],
  },

  whoThisIsFor: {
    title: "Who this is for",
    intro: "This is for you if…",
    bullets: [
      "You run a growing software company, and building new things keeps getting slower",
      "Your demos make sense to engineers, but buyers go quiet",
      "You run an online store, and shoppers leave at checkout or on slow pages",
      "Nobody on your team can draw how all the pieces fit together",
      "You want clear answers and one fixed price, not surprise hourly bills",
    ],
  },

  about: {
    title: "Learn more about me",
    cards: {
      left: {
        title: "Who I Am",
        bodyLines: [
          "I’ve always loved two things: building tech and helping people. I started out making video games. Then I taught engineers how to work through tricky code. At Expocad, I ran live software demos for big companies at national trade shows.",
          "Then I made 2,500 cold calls for my own business. That’s where I learned to stay calm, listen, and explain tech in plain words.",
          "Now I run Stricker Digital as The Shifu Builder. I practice three things every day: simple systems, calm communication, and daily reps. I help software companies and online stores get simple, fast, and easy to buy, and I share every lesson on YouTube.",
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
        role: "Founder of Copper Fox Collective (formerly CM Florals)",
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
        question: `What do I get with the ${AUDIT_PRICE} Blueprint?`,
        answer:
          "A hand-drawn map of your app or store with every trouble spot circled, a fix list ranked by what grows sales first, and a 30-minute call to walk through it all together. Speed, checkout, setup, and your sales flow are all checked.",
      },
      // Only asked while the founding price is on
      ...(AUDIT_PRICE !== AUDIT_REGULAR_PRICE
        ? [
            {
              question: `Why is the Blueprint ${AUDIT_PRICE} right now?`,
              answer: `It's a founding price for my first 10 Blueprint clients. You get the full Blueprint for less, and I get to grow my list of happy customers. Once those 10 spots are filled, the price goes back to ${AUDIT_REGULAR_PRICE}.`,
            },
          ]
        : []),
      {
        question: "How fast is it?",
        answer: "Your Blueprint lands within 48 hours of kickoff, once I can see your app or store.",
      },
      {
        question: "What if it doesn't help?",
        answer:
          "If your problems aren't crystal clear within 24 hours of delivery, tell me and you get a full refund. No questions asked.",
      },
      {
        question: "Can you fix the problems for me?",
        answer:
          "Yes! After your Blueprint you can get a fixed quote, and I'll build, test, and ship the fixes. You know the price before any work starts.",
      },
      {
        question: "What's a Fractional Solutions Architect?",
        answer:
          "It's me, on your team a few hours a week. I help plan what to build (and what to skip), keep your system simple, and join big demos and sales calls to explain your product in plain words. It starts at $5k a month.",
      },
      {
        question: "What kinds of businesses is this for?",
        answer:
          "Growing software companies and online stores. If building feels slow, demos fall flat, or visitors aren't buying, there's money to find.",
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
  headline: "Let's make it simple.",
  subheadline: "Tell me what you need. I read every message and I'll point you to the best next step.",
  intents: [
    { value: "audit", label: `Get a ${AUDIT_PRICE} 48-Hour Blueprint` },
    { value: "fractional", label: "Talk about a Fractional Solutions Architect" },
    { value: "fixes", label: "Get a fixed quote to fix my app or store" },
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
