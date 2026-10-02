'use client';
import Footer from "./components/Footer";
import Headline from "./components/Headline";
import Testimonals from "./components/Testimonials";
import Philosophy from "./components/Philosophy";
import HelperBtnGroup from "./components/HelperBtnGroup";
import DualOfferLadders from "./components/DualOfferLadders";
import CaseStudies from "./components/CaseStudies";
import ProofMetrics from "./components/ProofMetrics";
import LibraryTeaser from "./components/LibraryTeaser";
import LeadMagnetBanner from "./components/LeadMagnetBanner";
import VideoSection from "./components/Video";
import { videos } from "./media";
import CtaBanner from "./offers/components/CtaBanner";
import { checklistCopy, contactHref, offersCopy } from "./offers/copy";

export default function Home() {
  return (
    <main className="min-h-screen bg-page text-white">
      <Headline
        eyebrow="Code. Communication. Revenue."
        headlineText="I find where your software is losing money. Then I help you fix it."
        subheadlineText="Hi, I'm Nick! I love two things: building software that sells, and helping engineers get heard. Let's grow your revenue, and your career."
        ctas={[
          { label: "Apply for $5k Audit", href: contactHref.audit },
          { label: "Get my free checklist", href: `#${checklistCopy.id}`, variant: "inverted" },
        ]}
      />
      <LeadMagnetBanner />
      <VideoSection video={videos.intro} id="intro-video" />
      <DualOfferLadders />
      <ProofMetrics />
      <Philosophy />
      <CaseStudies />
      <LibraryTeaser />
      <Testimonals {...{
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
      }} />
      <HelperBtnGroup reviewsHref="#testimonials" bio={offersCopy.about.cards.left.bodyLines} />
      <CtaBanner {...offersCopy.ctaBanners.bottom} />
      <Footer />
    </main>
  );
}

