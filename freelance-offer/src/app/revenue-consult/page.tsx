'use client';

import { useRef } from "react";
import Headline from "../components/Headline";
import Footer from "../components/Footer";
import Share from "../components/Share";
import Testimonials from "../components/Testimonials";
import { SeperatorWave } from "../components/SeperatorWave";

import RevenueReviewCTA from "./components/RevenueReviewCTA";
import FAQ from "./components/FAQ";
import About from "./components/About";
import ClaimBtnModal, { type ClaimBtnModalHandle } from "./components/ClaimBtnModal";
import HowItWorks from "./components/HowItWorks";
import OfferTiers from "./components/OfferTiers";
import AddOns from "./components/AddOns";
import WhoThisIsFor from "./components/WhoThisIsFor";

import headBackgorundImage from "../../../public/colorsky.jpg";

import { revenueConsultCopy } from "./copy";

const topWaveType = "1-hill";

export default function RevenueConsultPage() {
  const claimBtnModalRef = useRef<ClaimBtnModalHandle>(null);
  const openLead = () => claimBtnModalRef.current?.openLead();

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Headline headlineText={revenueConsultCopy.headline.headlineText} />
      <SeperatorWave type={topWaveType} flip={false} color={"var(--bg-wave)"} />

      <section className="px-6 py-14 text-white bg-gradient-black-purple">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">{revenueConsultCopy.intro.title}</h2>
          {revenueConsultCopy.intro.paragraphs.map((p) => (
            <p key={p} className="mt-5 text-lg opacity-90 max-w-3xl mx-auto">
              {p}
            </p>
          ))}

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {revenueConsultCopy.intro.navButtons.map((b) => (
              <a
                key={b.href}
                href={b.href}
                className={`${b.variant === "gradient" ? "btn-gradient" : "btn-inverted"} px-8 py-4 rounded-full min-w-[200px]`}
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ClaimBtnModal ref={claimBtnModalRef} copy={revenueConsultCopy.claimModal} />

      <RevenueReviewCTA
        ctaHref={`#${revenueConsultCopy.reviewCtas.middle.id ?? "book"}`}
        onCtaClick={openLead}
        title={revenueConsultCopy.reviewCtas.top.title}
        subtitle={revenueConsultCopy.reviewCtas.top.subtitle}
        ctaText={revenueConsultCopy.reviewCtas.top.ctaText}
        secondaryHref={revenueConsultCopy.reviewCtas.top.secondaryHref}
        secondaryText={revenueConsultCopy.reviewCtas.top.secondaryText}
        className={revenueConsultCopy.reviewCtas.top.className}
      />

      <HowItWorks
        id={revenueConsultCopy.howItWorks.id}
        title={revenueConsultCopy.howItWorks.title}
        subtitle={revenueConsultCopy.howItWorks.subtitle}
        steps={revenueConsultCopy.howItWorks.steps}
      />

      <SeperatorWave type={topWaveType} flip={true} color={"var(--bg-wave)"} />

      <OfferTiers
        id={revenueConsultCopy.tiers.id}
        title={revenueConsultCopy.tiers.title}
        subtitle={revenueConsultCopy.tiers.subtitle}
        tiers={revenueConsultCopy.tiers.cards}
        onCta={openLead}
        backgroundImageSrc={headBackgorundImage.src}
      />

      <SeperatorWave type={topWaveType} flip={false} color={"var(--bg-wave)"} />

      <AddOns
        id={revenueConsultCopy.addOns.id}
        title={revenueConsultCopy.addOns.title}
        subtitle={revenueConsultCopy.addOns.subtitle}
        items={revenueConsultCopy.addOns.items}
        onCta={openLead}
      />

      <WhoThisIsFor
        title={revenueConsultCopy.whoThisIsFor.title}
        intro={revenueConsultCopy.whoThisIsFor.intro}
        bullets={revenueConsultCopy.whoThisIsFor.bullets}
      />

      <RevenueReviewCTA
        id={revenueConsultCopy.reviewCtas.middle.id}
        ctaHref={`#${revenueConsultCopy.reviewCtas.middle.id ?? "book"}`}
        onCtaClick={openLead}
        className={revenueConsultCopy.reviewCtas.middle.className}
        title={revenueConsultCopy.reviewCtas.middle.title}
        subtitle={revenueConsultCopy.reviewCtas.middle.subtitle}
        ctaText={revenueConsultCopy.reviewCtas.middle.ctaText}
        secondaryHref={revenueConsultCopy.reviewCtas.middle.secondaryHref}
        secondaryText={revenueConsultCopy.reviewCtas.middle.secondaryText}
      />

      <About copy={revenueConsultCopy.about} />

      <Testimonials
        {...{
          type: "testimonials",
          title: revenueConsultCopy.testimonials.title,
          subtitle: revenueConsultCopy.testimonials.subtitle,
          items: revenueConsultCopy.testimonials.items,
          style: {
            variant: "carousel",
            columns: 2,
            showQuoteIcon: true,
            rounded: "xl",
            background: "default",
          },
        }}
      />

      <FAQ id={revenueConsultCopy.faq.id} title={revenueConsultCopy.faq.title} items={revenueConsultCopy.faq.items} />

      <RevenueReviewCTA
        ctaHref={`#${revenueConsultCopy.reviewCtas.middle.id ?? "book"}`}
        onCtaClick={openLead}
        className={revenueConsultCopy.reviewCtas.bottom.className}
        title={revenueConsultCopy.reviewCtas.bottom.title}
        subtitle={revenueConsultCopy.reviewCtas.bottom.subtitle}
        ctaText={revenueConsultCopy.reviewCtas.bottom.ctaText}
        secondaryHref={revenueConsultCopy.reviewCtas.bottom.secondaryHref}
        secondaryText={revenueConsultCopy.reviewCtas.bottom.secondaryText}
      />

      <Share subtitle={revenueConsultCopy.share.subtitle} className={revenueConsultCopy.share.className} />
      <Footer />
    </main>
  );
}

