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
    title: "What you'll find here",
    caption: "A quick hello, from Nick.",
    // YouTube: "Welcome to my channel, I'm Nick!" (rel=0 keeps suggested videos to this channel)
    src: "https://www.youtube.com/embed/qInhbf1h5vk?rel=0",
    published: true,
  },
  /** /audits: a short walkthrough of the audit and done-for-you fixes. */
  offers: {
    title: "Which offer is right for you?",
    caption: "A quick walkthrough of the free checklist and each tier of the offer ladder.",
    src: "",
    published: false,
  },
  /** /resources/enterprise-checklist: the unedited whiteboard walkthrough people get after signing up. */
  enterpriseChecklist: {
    title: "The 2026 Enterprise Infrastructure & Architecture Checklist",
    caption: "An over-the-shoulder Excalidraw walkthrough of the top 3 architectural flaws, API latency bottlenecks, and checkout form leaks.",
    src: "",
    published: false,
  },
  /** /welcome/architecture-audit: set as the Calendly event's after-booking redirect. */
  welcomeAudit: {
    title: "Welcome! Let’s get your audit ready",
    src: "",
    published: false,
  },
} satisfies Record<string, VideoMedia>;

export const caseStudyImages = {
  redtailLuxe: {
    src: "/case-studies/redtailluxe.jpg",
    alt: "Redtail Luxe luxury watch store",
    published: true,
  },
  tradeShowPlatform: {
    src: "/case-studies/Expocad.png",
    alt: "Expocad trade show platform event dashboard",
    published: true,
  },
  cmFlorals: {
    src: "/case-studies/CMF.png",
    alt: "CM Florals online store homepage",
    published: true,
  },
  grandWood: {
    src: "/case-studies/Grand.png",
    alt: "Grand Wood and Glass online store homepage",
    published: true,
  },
  connectingDots: {
    src: "/case-studies/connectingdots.jpg",
    alt: "Connecting Dots LatinX community website",
    published: true,
  },
  doWell: {
    src: "/case-studies/doWell.png",
    alt: "Do Well 2 Transform coaching website",
    published: true,
  },
  claroflow: {
    src: "/case-studies/claroflow.png",
    alt: "ClaroFlow SaaS landing page",
    published: true,
  },
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
