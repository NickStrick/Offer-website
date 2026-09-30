/**
 * Central registry for site videos and case-study images.
 *
 * Nothing here renders on the live site until `published: true` and a `src` is set.
 * Case-study images that aren't published yet fall back to the Colorado sky photo (/colorsky.jpg).
 * Video placeholders are switched off entirely (SHOW_VIDEO_PLACEHOLDERS) until the videos are recorded.
 *
 * `src` accepts either:
 *  - a file in /public (e.g. "/videos/intro.mp4") → rendered with <video>
 *  - an embed URL (YouTube "https://www.youtube.com/embed/<id>", Loom "https://www.loom.com/embed/<id>",
 *    Vimeo "https://player.vimeo.com/video/<id>") → rendered in an <iframe>
 */

export type VideoMedia = {
  title: string;
  caption?: string;
  src: string;
  /** Optional poster image for self-hosted files, e.g. "/videos/intro-poster.jpg". */
  poster?: string;
  published: boolean;
};

export type ImageMedia = {
  src: string;
  alt: string;
  published: boolean;
};

export const videos = {
  /** Homepage — introductory video under the hero. */
  intro: {
    title: "Meet Stricker Digital",
    caption: "Who we are, who we work with, and how a 48-hour audit recovers leaked revenue.",
    src: "",
    published: false,
  },
  /** /offers — walkthrough of the free audit and the three tiers. */
  offers: {
    title: "Which offer is right for you?",
    caption: "A quick walkthrough of the free Loom audit and each paid tier.",
    src: "",
    published: false,
  },
  /** Shown in the free-audit form after someone submits. */
  welcomeFreeAudit: {
    title: "What happens with your free audit",
    src: "",
    published: false,
  },
  /** /welcome/micro-audit — set as the Stripe Payment Link's after-payment redirect. */
  welcomeMicroAudit: {
    title: "Welcome — your Micro-Audit is underway",
    src: "",
    published: false,
  },
  /** /welcome/enterprise-audit — set as the Calendly event's after-booking redirect. */
  welcomeEnterpriseAudit: {
    title: "Welcome — preparing for your Enterprise Audit",
    src: "",
    published: false,
  },
  /** /welcome/enterprise-retainer — send to clients after the retainer is signed. */
  welcomeEnterpriseRetainer: {
    title: "Welcome — kicking off your implementation",
    src: "",
    published: false,
  },
} satisfies Record<string, VideoMedia>;

export const caseStudyImages = {
  redtailLuxe: {
    src: "/case-studies/redtail-luxe.jpg",
    alt: "Redtail Luxe multi-step checkout flow",
    published: false,
  },
  tradeShowPlatform: {
    src: "/case-studies/trade-show-platform.jpg",
    alt: "Trade show analytics platform exhibitor directory",
    published: false,
  },
  slot3: { src: "", alt: "", published: false },
  slot4: { src: "", alt: "", published: false },
} satisfies Record<string, ImageMedia>;

export const isMediaReady = (m: { src: string; published: boolean }) => m.published && m.src.length > 0;

/** Stand-in shown wherever a specific image hasn't been uploaded yet (Colorado sky). */
export const fallbackImage = {
  src: "/colorsky.jpg",
  alt: "Colorado sky over the mountains",
};

/** The image to render: the real one once published, otherwise the fallback. */
export const imageOrFallback = (m: ImageMedia) => (isMediaReady(m) ? m : fallbackImage);

const isDev = process.env.NODE_ENV === "development";

/** Flip to true to preview where the videos will sit while running `npm run dev`. */
const SHOW_VIDEO_PLACEHOLDERS = false;

export const showMediaPlaceholders = isDev;
export const showVideoPlaceholders = isDev && SHOW_VIDEO_PLACEHOLDERS;
