'use client';

import Headline from "../components/Headline";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import DualOfferLadders from "../components/DualOfferLadders";
import CaseStudies from "../components/CaseStudies";
import VideoSection from "../components/Video";
import { videos } from "../media";
import ProofMetrics from "../components/ProofMetrics";
import LeadMagnetBanner from "../components/LeadMagnetBanner";

import CtaBanner from "./components/CtaBanner";
import FAQ from "./components/FAQ";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import WhoThisIsFor from "./components/WhoThisIsFor";
import Framework from "./components/Framework";

import { offersCopy } from "./copy";

export default function OffersPage() {
  const { ctaBanners } = offersCopy;

  return (
    <main className="min-h-screen bg-page text-white">
      <Headline
        eyebrow={offersCopy.headline.eyebrow}
        headlineText={offersCopy.headline.headlineText}
        subheadlineText={offersCopy.headline.subheadlineText}
        ctas={[...offersCopy.headline.ctas]}
      />

      <LeadMagnetBanner />

      <VideoSection video={videos.offers} id="offers-video" />

      <DualOfferLadders />

      <ProofMetrics />

      <HowItWorks
        id={offersCopy.howItWorks.id}
        title={offersCopy.howItWorks.title}
        subtitle={offersCopy.howItWorks.subtitle}
        steps={offersCopy.howItWorks.steps}
        className="bg-gradient-purple-black"
      />

      <Framework
        id={offersCopy.framework.id}
        title={offersCopy.framework.title}
        subtitle={offersCopy.framework.subtitle}
        items={offersCopy.framework.items}
      />

      <CaseStudies />

      <WhoThisIsFor
        title={offersCopy.whoThisIsFor.title}
        intro={offersCopy.whoThisIsFor.intro}
        bullets={offersCopy.whoThisIsFor.bullets}
        className="bg-page"
      />

      <CtaBanner {...ctaBanners.middle} />

      <Testimonials
        {...{
          type: "testimonials",
          title: offersCopy.testimonials.title,
          subtitle: offersCopy.testimonials.subtitle,
          items: offersCopy.testimonials.items,
          style: {
            variant: "carousel",
            columns: 3,
            showQuoteIcon: true,
            rounded: "xl",
            background: "default",
          },
        }}
      />

      <About copy={offersCopy.about} />

      <FAQ id={offersCopy.faq.id} title={offersCopy.faq.title} items={offersCopy.faq.items} className="bg-gradient-purple-black" />

      <CtaBanner {...ctaBanners.bottom} />

      <Footer />
    </main>
  );
}
