'use client';

import Headline from "../components/Headline";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import ServiceOffers from "../components/ServiceOffers";
import CaseStudies from "../components/CaseStudies";
import VideoSection from "../components/Video";
import ProofMetrics from "../components/ProofMetrics";
import LeadMagnetBanner from "../components/LeadMagnetBanner";
import { videos } from "../media";

import CtaBanner from "../offers/components/CtaBanner";
import FAQ from "../offers/components/FAQ";
import About from "../offers/components/About";
import WhoThisIsFor from "../offers/components/WhoThisIsFor";
import Framework from "../offers/components/Framework";
import { offersCopy } from "../offers/copy";

export default function AuditsPage() {
  const { ctaBanners } = offersCopy;

  return (
    <main className="min-h-screen bg-page text-white">
      <Headline
        eyebrow={offersCopy.headline.eyebrow}
        headlineText={offersCopy.headline.headlineText}
        subheadlineText={offersCopy.headline.subheadlineText}
        ctas={[...offersCopy.headline.ctas]}
      />

      <VideoSection video={videos.offers} id="audits-video" />

      <ServiceOffers />

      <ProofMetrics />

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

      {/* Not ready for an audit yet? The free checklist is the low-commitment way in. */}
      <LeadMagnetBanner />

      <FAQ id={offersCopy.faq.id} title={offersCopy.faq.title} items={offersCopy.faq.items} className="bg-gradient-purple-black" />

      <CtaBanner {...ctaBanners.bottom} />

      <Footer />
    </main>
  );
}
