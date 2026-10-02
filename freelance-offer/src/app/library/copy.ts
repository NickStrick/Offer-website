import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBolt, faCloud, faKey, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";

import { contactHref } from "../offers/copy";

export type VaultFeature = {
  icon: IconDefinition;
  title: string;
  description: string;
};

export type Book = {
  id: string;
  title: string;
  badge: string;
  subtag: string;
  description: string;
  ctaText: string;
  /** Saved with the signup so you can tell the lists apart in the form responses. */
  listName: string;
};

export const libraryCopy = {
  headline: {
    eyebrow: "Library",
    headlineText: "Books and software I'm building",
    subheadlineText: "A private portal for your clients, plus two books about getting better at anything.",
    ctas: [
      { label: "Explore the books", href: "#books" },
      { label: "See the Digital Vault", href: "#digital-vault", variant: "inverted" as const },
    ],
  },

  vault: {
    id: "digital-vault",
    eyebrow: "Micro-SaaS Platform",
    status: "In development",
    title: "The Digital Vault",
    overview:
      "A custom Next.js and AWS serverless private portal framework featuring single-use authentication, dynamic section matrices, and zero-latency performance.",
    features: [
      {
        icon: faKey,
        title: "Single-Use Authentication",
        description: "Auth0-verified, single-use access for high-touch clientele.",
      },
      {
        icon: faTableCellsLarge,
        title: "Dynamic Section Matrices",
        description: "Configurable, editable page sections so operators control content without touching code.",
      },
      {
        icon: faBolt,
        title: "Zero-Latency Performance",
        description: "Built from scratch on a serverless architecture for near-instant loads.",
      },
      {
        icon: faCloud,
        title: "Next.js & AWS Infrastructure",
        description: "Custom engineered infrastructure with no shared attack surface.",
      },
    ] satisfies VaultFeature[],
    ctaText: "Inquire about a Vault build",
    ctaHref: contactHref.retainer,
  },

  books: {
    id: "books",
    eyebrow: "Coming Soon",
    title: "Books & Digital IP (Coming Soon)",
    subtitle: "Systems thinking applied to rapid skill acquisition, vocal authority, and stoic execution.",
    items: [
      {
        id: "iteration-loop",
        title: "The Iteration Loop",
        badge: "Coming Soon / In Draft",
        subtag: "A Software Engineer's Philosophy on Building Skills, Businesses, and Mindset from Scratch",
        description:
          "Treating life's unexpected setbacks, unclosed deals, and broken systems as programmatic bugs to be logged, analyzed, and patched in real time.",
        ctaText: "Join Beta Reader Waitlist",
        listName: "Beta Reader: The Iteration Loop",
      },
      {
        id: "amor-fati",
        title: "Amor Fati in the Arena",
        badge: "Coming Soon",
        subtag: "Engineering Resilience in High-Stakes Business Ecosystems",
        description:
          "Mastering boardroom presentation gravity, overcoming rejection, and turning operational friction into your primary competitive advantage.",
        ctaText: "Notify Me Upon Release",
        listName: "Release Notify: Amor Fati in the Arena",
      },
    ] satisfies Book[],
  },

  signupModal: {
    title: "Join the list",
    description: "Leave your email and you'll be the first to know. No spam.",
    placeholders: { firstName: "First name (optional)", email: "Email" },
    submit: { idle: "Join the list", loading: "Joining…" },
    success: { title: "You're on the list.", body: "I'll email you as soon as there's news." },
  },
};
