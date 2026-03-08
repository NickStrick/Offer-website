'use client';
import { useRef } from "react";
import Headline from "../components/Headline";
import Footer from "../components/Footer";
import Share from "../components/Share";
import Testimonials from "../components/Testimonials";
import { SeperatorWave } from "../components/SeperatorWave";
import RevenueReviewCTA from "./components/RevenueReviewCTA";
import FAQ, { type FAQItem } from "./components/FAQ";
import About from "./components/About";
import ClaimBtnModal, { type ClaimBtnModalHandle } from "./components/ClaimBtnModal";

import headBackgorundImage from "../../../public/colorsky.jpg";

import carolePhoto from "../../../public/testimonials/carole-headshot.png";
import josePhoto from "../../../public/testimonials/jose-headshot.jpg";
import lukeRottaPhoto from "../../../public/testimonials/lukerotta.jpg";

const topWaveType = "1-hill";

const faqItems: FAQItem[] = [
  {
    question: "Why hire you instead of using Shopify or Wix?",
    answer:
      "Shopify and Wix are tools. The difference is strategy and setup. Most florist websites lose orders because they aren't designed for conversion, delivery logic, and local search visibility.",
  },
  {
    question: "Is $2,000 expensive?",
    answer:
      "For most florists, just a handful of additional direct orders per month can cover the investment. The goal is a system that consistently generates online revenue.",
  },
  {
    question: "What if I'm not ready for a full rebuild?",
    answer:
      "Many clients start with the $400 Conversion Upgrade to improve their current website before committing to the full 30-day system.",
  },
  {
    question: "What does the AI chatbot actually do?",
    answer:
      "It answers customer questions instantly (delivery areas, hours, product suggestions), helps shoppers find bouquets or gifts, captures leads/order requests, and handles after-hours inquiries.",
  },
  {
    question: "Will the AI chatbot replace my staff?",
    answer:
      "No. It handles repetitive questions and simple tasks so your team can focus on in-store customers and arrangements.",
  },
  {
    question: "Do you guarantee sales?",
    answer:
      "Sales depend on many factors. What we guarantee is a revenue-ready system with proper structure, tracking, and customer experience improvements.",
  },
  {
    question: "How long does the website build take?",
    answer:
      "Typically 30 days once the project begins and required materials are received.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "Access to the website platform, product info, delivery policies, and quick feedback during development.",
  },
  {
    question: "Is the monthly service required?",
    answer:
      "No. The core website system works on its own. Monthly services are optional for businesses that want ongoing growth and automation.",
  },
];

const myTestimonialList = [
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
];

export default function FloristOfferPage() {
  const claimBtnModalRef = useRef<ClaimBtnModalHandle>(null);
  const openLead = () => claimBtnModalRef.current?.openLead();

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Headline headlineText="The Florist Online Revenue System." />
      <SeperatorWave type={topWaveType} flip={false} color={"var(--bg-wave)"} />

      <section className=" px-6 py-14 text-white bg-gradient-black-purple">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Turn Your Florist Website Into a 24/7 Order Machine
          </h2>
          <p className="mt-5 text-lg opacity-90 max-w-3xl mx-auto">
            I help florists get more direct online orders with a website that is clear, fast, and easy
            to use.
          </p>
          <p className="mt-5 text-lg opacity-90 max-w-3xl mx-auto">
            If your website feels old, confusing, or customers still call to place orders, start with a
            quick review and get a clear next step.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="#tiers" className="btn-gradient px-8 py-4 rounded-full min-w-[200px]">
              Pricing
            </a>
            <a href="#how-it-works" className="btn-inverted px-8 py-4 rounded-full min-w-[200px]">
              How it works
            </a>
            
            <a href="#add-ons" className="btn-inverted px-8 py-4 rounded-full min-w-[200px]">
              Add-ons
            </a>
            <a href="#faq" className="btn-inverted px-8 py-4 rounded-full min-w-[200px]">
              FAQ
            </a>
          </div>
        </div>
      </section>
      <ClaimBtnModal ref={claimBtnModalRef} />

      <RevenueReviewCTA
        ctaHref="#book"
        onCtaClick={openLead}
        title="Book a Free 10-Minute Revenue Review"
        subtitle="In 10 minutes I will show you what may be costing you online orders and share 2-3 quick fixes."
        
      />

      {/* <SeperatorWave type={bottomWaveType} flip={true} color={"var(--bg-wave)"} /> */}

      <section id="how-it-works" className="bg-gradient-black-dark px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <header className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">How it works</h2>
            <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
              A simple way to improve your website and grow online orders.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred">
              <div className="text-accent text-sm font-bold uppercase tracking-wide">Step 1</div>
              <h3 className="mt-2 text-2xl font-bold">Free Website Review</h3>
              <p className="mt-3 text-lg opacity-90 max-w-none">
                In 10 minutes I will show you what may be costing you online orders and share 2-3 quick
                fixes.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred" >
              <div className="text-accent text-sm font-bold uppercase tracking-wide">Step 2</div>
              <h3 className="mt-2 text-2xl font-bold">$400 Conversion Upgrade</h3>
              <p className="mt-3 text-lg opacity-90 max-w-none">
                Fast improvements (3-5 days) that make your website easier to use and help more visitors
                place orders.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred">
              <div className="text-accent text-sm font-bold uppercase tracking-wide">Step 3</div>
              <h3 className="mt-2 text-2xl font-bold">$2,000 Revenue-Ready Website System</h3>
              <p className="mt-3 text-lg opacity-90 max-w-none">
                A full online ordering system built to help your shop get steady direct orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SeperatorWave type={topWaveType} flip={true} color={"var(--bg-wave)"} />

      <section id="tiers" className=" px-6 py-16 text-white bg-fixed"
      style={{
        backgroundImage: `url(${headBackgorundImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
        <div className="mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text">Offer tiers</h2>
            <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto gradient-text">
              Choose the tier that fits your situation. If you&apos;re not sure, start with the free review.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred price-card">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold">Tier 1 - Free</h3>
                <div className="text-accent text-xl font-extrabold">$0</div>
              </div>
              <p className="mt-2 text-lg opacity-90 max-w-none">10-Minute Website Revenue Review</p>
              <ul className="mt-5 list-disc pl-5 space-y-2 text-lg opacity-90">
                <li>Find what may be losing you orders</li>
                <li>Get 2-3 clear improvement ideas</li>
                <li>Leave with a simple next step</li>
              </ul>
              <div className="btn-container">
                <button
                  type="button"
                  onClick={openLead}
                  className="btn-gradient w-full text-center px-8 py-4 rounded-full"
                >
                  Book the Free Review
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 bg-blurred p-6 price-card">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold">Tier 2</h3>
                <div className="text-accent text-xl font-extrabold">$400</div>
              </div>
              <p className="mt-2 text-lg opacity-90 max-w-none">Website Conversion Upgrade (3-5 days)</p>
              <p className="mt-4 text-lg opacity-90 max-w-none">
                Small changes that can make a big difference in how customers order.
              </p>
              <p className="mt-4 text-lg opacity-90 max-w-none">Includes improvements like:</p>
              <ul className="mt-5 list-disc pl-5 space-y-2 text-lg opacity-90">
                <li>Clearer homepage layout</li>
                <li>Easier mobile ordering</li>
                <li>Better delivery info</li>
                <li>Stronger trust signals (reviews, badges)</li>
                <li>Simple style refresh</li>
              </ul>
              <div className="btn-container">
                <button
                  type="button"
                  onClick={openLead}
                  className="btn-inverted w-full text-center px-8 py-4 rounded-full"
                >
                  Start with the free review
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 bg-blurred p-6 price-card">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold">Tier 3</h3>
                <div className="text-accent text-xl font-extrabold">$2,000</div>
              </div>
              <p className="mt-2 text-lg opacity-90 max-w-none">Revenue-Ready Website System</p>
              <p className="mt-4 text-lg opacity-90 max-w-none">
                A complete website built to help your shop get more online orders.
              </p>
              <p className="mt-4 text-lg opacity-90 max-w-none">Includes:</p>
              <ul className="mt-5 list-disc pl-5 space-y-2 text-lg opacity-90">
                <li>Clear online ordering system</li>
                <li>Easy delivery and pickup options</li>
                <li>Fast mobile experience</li>
                <li>Pages built to turn visitors into buyers</li>
                <li>Tracking so you can see results</li>
                <li>Training so you can manage the site</li>
              </ul>
              <div className="btn-container">
                <button
                  type="button"
                  onClick={openLead}
                  className="btn-inverted w-full text-center px-8 py-4 rounded-full"
                >
                  Start with the free review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeperatorWave type={topWaveType} flip={false} color={"var(--bg-wave)"} />

      <section id="add-ons" className="bg-gradient-black-purple px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Optional add-ons</h2>
            <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
              These help your shop grow even faster.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred price-card">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold">Local Visibility Growth System</h3>
                <div className="text-accent text-xl font-extrabold">$1,000/mo</div>
              </div>
              <p className="mt-4 text-lg opacity-90 max-w-none">
                Helps more people find your shop online.
              </p>
              <ul className="mt-5 list-disc pl-5 space-y-2 text-lg opacity-90">
                <li>Google Business profile setup and improvement</li>
                <li>Local search optimization</li>
                <li>Keyword tracking</li>
                <li>Review collection system</li>
                <li>Monthly performance report</li>
              </ul>
              <div className="btn-container">
                <button
                  type="button"
                  onClick={openLead}
                  className="btn-inverted w-full text-center px-8 py-4 rounded-full"
                >
                  Ask about add-ons on the review
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred price-card">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold">AI Customer Support Assistant</h3>
                <div className="text-accent text-xl font-extrabold">$1,000/mo</div>
              </div>
              <p className="mt-4 text-lg opacity-90 max-w-none">
                An AI helper that answers customer questions and helps people place orders - even when your
                shop is closed.
              </p>
              <p className="mt-4 text-lg opacity-90 max-w-none">It can:</p>
              <ul className="mt-5 list-disc pl-5 space-y-2 text-lg opacity-90">
                <li>Answer delivery questions</li>
                <li>Suggest bouquets or gifts</li>
                <li>Help customers find what they need</li>
                <li>Respond to late-night shoppers</li>
                <li>Capture leads or order requests</li>
              </ul>
              <div className="btn-container">
                <button
                  type="button"
                  onClick={openLead}
                  className="btn-inverted w-full text-center px-8 py-4 rounded-full"
                >
                  Ask about add-ons on the review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <SeperatorWave type={topWaveType} flip={false} color={"var(--bg-wave)"} /> */}

      <section className="bg-gradient-purple-black px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <header className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Who this is for</h2>
          </header>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred">
            <p className="text-lg opacity-90 max-w-none">
              Best for florists and gift shops that:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-lg opacity-90">
              <li>Have a physical shop</li>
              <li>Want more online orders</li>
              <li>Get lots of phone orders</li>
              <li>Feel their website is outdated</li>
              <li>Want a simple system that works</li>
            </ul>
          </div>
        </div>
      </section>

      <RevenueReviewCTA
        id="book"
        ctaHref="#book"
        onCtaClick={openLead}
        className="bg-gradient-black-dark"
        title="Not sure where to start?"
        subtitle="That's why the free review exists. In 10 minutes I will show you what I would fix first and recommend the best next step."
        secondaryHref="#tiers"
      />

      {/* <HelperBtnGroup reviewsHref="#testimonials" /> */}
      <About />

      <Testimonials
        {...{
          type: "testimonials",
          title: "Reviews & Testimonials",
          subtitle: "A few words from past clients.",
          items: myTestimonialList,
          style: {
            variant: "carousel",
            columns: 2,
            showQuoteIcon: true,
            rounded: "xl",
            background: "default",
          },
        }}
      />

      <FAQ items={faqItems} />

      <RevenueReviewCTA
        ctaHref="#book"
        onCtaClick={openLead}
        className="bg-gradient-black-dark"
        title="Book a Free 10-Minute Revenue Review"
        subtitle="Most florists either start with the $400 Conversion Upgrade or move into the Revenue-Ready Website System."
        secondaryHref="#tiers"
      />

      <Share subtitle="Share this offer with a florist owner (scan or copy the link below)" className="bg-gradient-black-purple" />
      <Footer />
    </main>
  );
}
