import carolePhoto from "../../../public/testimonials/carole-headshot.png";
import josePhoto from "../../../public/testimonials/jose-headshot.jpg";
import lukeRottaPhoto from "../../../public/testimonials/lukerotta.jpg";

export type RevenueConsultFAQItem = {
  question: string;
  answer: string;
};

export type RevenueConsultTestimonialItem = {
  quote: string;
  name: string;
  role?: string;
  avatarUrl?: string;
};

export type RevenueConsultHowItWorksStep = {
  eyebrow: string;
  title: string;
  description: string;
};

export type RevenueConsultTier = {
  name: string;
  price: string;
  tagline?: string;
  description?: string;
  bullets: readonly string[];
  ctaText: string;
  ctaVariant?: "gradient" | "inverted";
};

export type RevenueConsultAddOn = {
  title: string;
  price: string;
  description: string;
  bullets?: readonly string[];
  ctaText: string;
};

export type RevenueConsultReviewCtaCopy = {
  id?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
};

export type RevenueConsultClaimModalCopy = {
  submitUrl: string;
  bookCallUrl: string;
  closeLabel: string;
  title: string;
  description: string;
  placeholders: {
    firstName: string;
    lastName: string;
    email: string;
  };
  submit: {
    idle: string;
    loading: string;
  };
  consent: string;
};

export type RevenueConsultAboutCopy = {
  title: string;
  cards: {
    left: { title: string; bodyLines: readonly string[] };
    right: { title: string; bodyLines: readonly string[] };
  };
};

export const revenueConsultCopy = {
  headline: {
    headlineText: "Website Revenue Consult",
  },

  intro: {
    title: "Find the fastest way to increase revenue from your website",
    paragraphs: [
      "In 10 minutes I’ll show you what I would fix first and recommend the best next step.",
      "If your site feels confusing, slow, or you’re not sure what to improve—start with the free review.",
    ],
    navButtons: [
      { href: "#tiers", label: "Pricing", variant: "gradient" as const },
      { href: "#how-it-works", label: "How it works", variant: "inverted" as const },
      { href: "#add-ons", label: "Add-ons", variant: "inverted" as const },
      { href: "#faq", label: "FAQ", variant: "inverted" as const },
    ],
  },

  claimModal: {
    submitUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSei5MW9D_2R8OzjDQdy78j_x7Z3Hx0NXO1ohwoljdZ6xHQg9Q/formResponse",
    bookCallUrl: "https://calendly.com/strickerdigital/30-min-website-consult",
    closeLabel: "✖",
    title: "Book Your Free 10-Minute Revenue Review",
    description:
      "Enter your info so I can confirm your slot. After you submit, you’ll be taken to the scheduling page.",
    placeholders: {
      firstName: "First name",
      lastName: "Last name",
      email: "Your best email",
    },
    submit: {
      idle: "Book my free review",
      loading: "Booking…",
    },
    consent:
      "By providing your information today, you are giving consent for us to contact you by mail, phone, text, or email. We do not sell your personal information, and you can withdraw consent at any time.",
  },

  reviewCtas: {
    top: {
      ctaText: "Book a Free 10-Minute Revenue Review",
      title: "Book a Free 10-Minute Revenue Review",
      subtitle:
        "In 10 minutes I will show you what may be costing you revenue and share 2–3 quick fixes.",
      secondaryText: "",
      secondaryHref: "#tiers",
      className: "bg-gradient-purple-black",
    },
    middle: {
      id: "book",
      ctaText: "Book a Free 10-Minute Revenue Review",
      title: "Not sure where to start?",
      subtitle:
        "That’s why the free review exists. In 10 minutes I’ll show you what I would fix first and recommend the best next step.",
      secondaryText: "",
      secondaryHref: "#tiers",
      className: "bg-gradient-black-dark",
    },
    bottom: {
      ctaText: "Book a Free 10-Minute Revenue Review",
      title: "Book a Free 10-Minute Revenue Review",
      subtitle:
        "Most people start with the free review, then choose a quick conversion upgrade or a full system rebuild.",
      secondaryText: "",
      secondaryHref: "#tiers",
      className: "bg-gradient-black-dark",
    },
  },

  howItWorks: {
    id: "how-it-works",
    title: "How it works",
    subtitle: "A simple way to improve your website and grow revenue.",
    steps: [
      {
        eyebrow: "Step 1",
        title: "Free Revenue Review",
        description: "In 10 minutes I’ll show you what to fix first and share 2–3 quick wins.",
      },
      {
        eyebrow: "Step 2",
        title: "Conversion Upgrade",
        description:
          "Fast improvements (3–5 days) that make your site easier to use and help more visitors take action.",
      },
      {
        eyebrow: "Step 3",
        title: "Revenue-Ready Website System",
        description:
          "A full website system built to improve clarity, trust, and conversion with tracking in place.",
      },
    ],
  },

  tiers: {
    id: "tiers",
    title: "Offer tiers",
    subtitle:
      "Choose the tier that fits your situation. If you’re not sure, start with the free review.",
    cards: [
      {
        name: "Tier 1 — Free",
        price: "$0",
        tagline: "10-Minute Website Revenue Review",
        bullets: ["Find what may be losing you revenue", "Get 2–3 clear improvement ideas", "Leave with a simple next step"],
        ctaText: "Book the Free Review",
        ctaVariant: "gradient",
      },
      {
        name: "Tier 2",
        price: "$400",
        tagline: "Website Conversion Upgrade (3–5 days)",
        description: "Small changes that can make a big difference in results.",
        bullets: [
          "Clearer homepage layout",
          "Easier mobile experience",
          "Better offer clarity",
          "Stronger trust signals",
          "Simple style refresh",
        ],
        ctaText: "Start with the free review",
        ctaVariant: "inverted",
      },
      {
        name: "Tier 3",
        price: "$2,000",
        tagline: "Revenue-Ready Website System",
        description: "A complete system built to help your site convert consistently.",
        bullets: [
          "Clear conversion-focused page structure",
          "Fast mobile experience",
          "Pages built to turn visitors into buyers",
          "Analytics + tracking setup",
          "Training so you can manage the site",
        ],
        ctaText: "Start with the free review",
        ctaVariant: "inverted",
      },
    ],
  },

  addOns: {
    id: "add-ons",
    title: "Optional add-ons",
    subtitle: "These help you grow faster after the foundation is fixed.",
    items: [
      {
        title: "Local Visibility Growth System",
        price: "$1,000/mo",
        description: "Helps more people find you online.",
        bullets: [
          "Google Business profile setup and improvement",
          "Local search optimization",
          "Keyword tracking",
          "Review collection system",
          "Monthly performance report",
        ],
        ctaText: "Ask about add-ons on the review",
      },
      {
        title: "AI Customer Support Assistant",
        price: "$1,000/mo",
        description:
          "An AI helper that answers customer questions and helps people take action—even after hours.",
        bullets: [
          "Answer common questions",
          "Suggest services or packages",
          "Help visitors find what they need",
          "Respond to late-night traffic",
          "Capture leads",
        ],
        ctaText: "Ask about add-ons on the review",
      },
    ],
  },

  whoThisIsFor: {
    title: "Who this is for",
    intro: "Best for businesses and professionals that:",
    bullets: [
      "Have an existing website",
      "Want more leads or sales from it",
      "Feel the site is outdated or unclear",
      "Get lots of repeat questions from prospects",
      "Want a simple plan that works",
    ],
  },

  about: {
    title: "Learn more about us",
    cards: {
      left: {
        title: "Who We Are",
        bodyLines: [
          "I’m Nick—a full-stack developer who builds websites and online business systems.",
          "In my 8 years of event industry experience as a website lead, I’ve built projects focused on improving conversion based on monthly analytics.",
        ],
      },
      right: {
        title: "Based in Chicago",
        bodyLines: [
          "Chicago is our base of operations. I like to meet clients in person and get to know them before we work together.",
          "As partners, we bring your vision to life and make informed decisions based on data.",
          "I’ll guide the project toward what works while staying true to your brand.",
        ],
      },
    },
  },

  testimonials: {
    title: "Reviews & Testimonials",
    subtitle: "A few words from past clients.",
    items: [
      {
        quote:
          "Took an idea a created what I imagined just by him understanding what my business needed through our conversations. I loved the visual accents, instant awareness to the Customer of toggles and info points that he included.",
        name: "Carole Murray",
        role: "Founder of CM Florals",
        avatarUrl: carolePhoto.src,
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
          "Nick provided expert advice for my web design and digital marketing strategy. He was professional, efficient, and delivered high-quality work on time.",
        name: "Luke Rotta",
        role: "Founder of Redtail Luxe",
        avatarUrl: lukeRottaPhoto.src,
      },
    ] satisfies RevenueConsultTestimonialItem[],
  },

  faq: {
    id: "faq",
    title: "Frequently asked questions",
    items: [
      {
        question: "What happens after I submit?",
        answer:
          "You’ll be redirected to the scheduling page to pick a time for your review.",
      },
      {
        question: "Do you guarantee results?",
        answer:
          "Results depend on many factors. What I guarantee is clear recommendations and a conversion-focused plan.",
      },
      {
        question: "How fast are the upgrades?",
        answer:
          "Most conversion upgrades take 3–5 days once we have what we need.",
      },
    ] satisfies RevenueConsultFAQItem[],
  },

  share: {
    subtitle: "Share this offer with a business owner (scan or copy the link below)",
    className: "bg-gradient-black-purple",
  },
} as const;

export type RevenueConsultCopy = typeof revenueConsultCopy;
