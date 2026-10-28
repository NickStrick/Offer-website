import { AUDIT_CHECKOUT_PATH, AUDIT_PRICE } from "./copy";

/**
 * The Shifu Builder brand copy: Nick's personal brand inside Stricker Digital.
 * Three pillars: simple systems, calm communication, and daily reps.
 * Voice: plain words, short lines, "I", excited, no dashes.
 */

export const BRAND_NAME = "The Shifu Builder";

/** Homepage hero: a short promise, then "which one are you?" with a path for each customer. */
export const splitHero = {
  eyebrow: `Nick Stricker · ${BRAND_NAME}`,
  headlineStart: "Simple systems.",
  headlineEnd: "Clear demos. More sales.",
  /** The word that gets the green brush underline. */
  underlineWord: "Simple",
  subheadline:
    "I'm an engineer who also sells. I find what's tangled in your tech, draw it on one page, and fix it, so your product is easy to build, easy to show, and easy to buy.",
  question: "Which one are you?",
  paths: [
    {
      id: "saas",
      label: "I run a software company",
      note: "SaaS · apps · tech teams",
      pains: [
        "New features take weeks, not days",
        "Your demo makes sense to engineers, not buyers",
        "Nobody can draw how your system fits together",
      ],
      cta: "Show me how you help",
      href: "#saas",
    },
    {
      id: "stores",
      label: "I run an online store",
      note: "E-commerce · D2C brands",
      pains: [
        "Shoppers fill the cart, then leave at checkout",
        "Pages feel slow on phones",
        "Your platform fights you on every change",
      ],
      cta: "Show me how you help",
      href: "#stores",
    },
  ],
  /** Handwritten note beside the path cards. */
  handNote: "pick one, I'll show you what I'd fix first",
};

export type Scenario = {
  id: string;
  title: string;
  who: string;
  scene: string;
  whatIDo: string;
  whatChanges: string;
};

export type AudienceSection = {
  id: "saas" | "stores";
  eyebrow: string;
  title: string;
  subtitle: string;
  scenarios: readonly Scenario[];
  /** Real proof that backs this audience up, linked to the case studies. */
  proof?: { text: string; href: string; linkText: string };
};

/** "Sound familiar?" sections. Scenarios are examples of who I help, not real clients. */
export const audienceSections: readonly AudienceSection[] = [
  {
    id: "saas",
    eyebrow: "For software companies",
    title: "Your product is great. So why is it so hard to build and sell?",
    subtitle:
      "Most growing software teams don't have a code problem. They have a clarity problem. Here's what that looks like.",
    scenarios: [
      {
        id: "quiet-demo",
        title: "The demo that goes quiet",
        who: "A founder at $40k a month",
        scene:
          "Your engineer runs the demo. They click through every feature and explain how it works. The buyer nods, goes quiet, and never books the next call.",
        whatIDo:
          "I draw your product on one simple page. Then I rebuild the demo around one question: \"What problem are you hoping to solve today?\"",
        whatChanges: "Buyers get it in 2 minutes. Your team stops pitching features and starts solving problems.",
      },
      {
        id: "slow-features",
        title: "Every feature takes forever",
        who: "A team of 4 developers",
        scene:
          "A small change takes 2 weeks. Your cloud bill keeps going up. When something breaks, only one person knows where to look.",
        whatIDo:
          "I map your whole system, AWS and all, on one drawing. I circle the parts that are built too big and rank the fixes by time and money saved.",
        whatChanges: "Everyone sees the same map. Your team ships faster, and you stop paying for things you don't use.",
      },
    ],
  },
  {
    id: "stores",
    eyebrow: "For online stores",
    title: "People love your products. So why do they leave without buying?",
    subtitle:
      "You're paying to bring shoppers in. Every slow page and long form sends some of them away. Here's what that looks like.",
    scenarios: [
      {
        id: "empty-cart",
        title: "The cart that fills up and empties out",
        who: "A store doing $60k a month",
        scene:
          "Shoppers add to cart, hit checkout, and see a wall of boxes to fill in. Half of them close the tab. You never hear why.",
        whatIDo:
          "I walk your checkout like a buyer would. I cut every step down to 5 questions or fewer and move your reviews up where people can see them.",
        whatChanges: "Checkout feels quick and safe, so more of the shoppers you paid for actually buy.",
      },
      {
        id: "slow-pages",
        title: "The slow page nobody notices",
        who: "A brand running paid ads",
        scene:
          "Your product page takes 5 seconds to load on a phone. People tap your ad, wait, and tap back. You pay for every one of those clicks.",
        whatIDo:
          "I find what's slowing your pages down, like heavy plugins, big images, and extra scripts, and I strip out what you don't need.",
        whatChanges: "Pages load fast, and your ad money turns into sales instead of bounces.",
      },
    ],
    proof: {
      text: "This is exactly what I did for Redtail Luxe: 30% more shoppers finished checkout, month over month.",
      href: "#case-studies",
      linkText: "Read the story",
    },
  },
];

/** How the Blueprint works, drawn as a hand-sketched 3-step flow. */
export const blueprintFlow = {
  eyebrow: "How it works",
  title: "From tangled to clear in 48 hours.",
  subtitle: "Every engagement starts the same way: we draw it out. When you can see the whole thing, the fix gets obvious.",
  steps: [
    {
      label: "Your system today",
      note: "messy, slow, hard to explain",
      body: "You show me your app or store, and where you think it hurts.",
    },
    {
      label: "The Blueprint",
      note: "one page, hand-drawn",
      body: "I map it in Excalidraw and circle every slow spot, extra part, and lost sale.",
    },
    {
      label: "Your fix list",
      note: "ranked by money",
      body: "You get a clear plan, plus a call where we walk through it together.",
    },
  ],
  cta: { label: `Get your ${AUDIT_PRICE} Blueprint`, href: AUDIT_CHECKOUT_PATH },
};

export type PillarStory = {
  id: string;
  pillar: string;
  title: string;
  story: readonly string[];
  lesson: string;
};

/** The three pillars, each told through a true story from Nick's life. */
export const pillarStories = {
  eyebrow: "Why work with me",
  title: "Three things I practice every day.",
  subtitle: "I'm not just an engineer, and I'm not just a salesperson. I'm both, and I train like it.",
  stories: [
    {
      id: "simple-systems",
      pillar: "Simple systems",
      title: "My most popular game was the simplest one.",
      story: [
        "It wasn't a giant custom engine. I took a free Unreal Engine shooter template and turned it into a simple escape room puzzle.",
        "My friends played it for hours.",
        "Most software is built too big, too soon. I look for the simple version that works, and I build that.",
      ],
      lesson: "simple wins. every time.",
    },
    {
      id: "calm-communication",
      pillar: "Calm communication",
      title: "2,500 cold calls taught me to stay calm.",
      story: [
        "The first time someone cussed me out on a call, I wanted to throw my phone. By call 2,500, I knew it was never personal.",
        "Once, a big client said I was rushing a live demo and tried to hang up. I took a breath, asked what problem they wanted to solve, and drew it on a whiteboard. The call turned around.",
      ],
      lesson: "a \"no\" is just data.",
    },
    {
      id: "daily-reps",
      pillar: "Daily reps",
      title: "50 golf swings a day beat 100 lessons.",
      story: [
        "When I wanted to get better at golf, I took a wedge to my parents' backyard every lunch and hit 50 careful swings. One fix at a time: wrist, hips, tempo.",
        "I build software and sales skills the same way. Small, focused reps, every single day.",
      ],
      lesson: "mastery is just good reps, stacked.",
    },
  ] satisfies PillarStory[],
};
