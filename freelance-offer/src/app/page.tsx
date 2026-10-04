'use client';
import Image from "next/image";

import Footer from "./components/Footer";
import Headline from "./components/Headline";
import Testimonals from "./components/Testimonials";
import ServiceOffers from "./components/ServiceOffers";
import CaseStudies from "./components/CaseStudies";
import ProofMetrics from "./components/ProofMetrics";
import MeetNick from "./components/MeetNick";
import JourneySection from "./components/JourneySection";
import MentoringWaitlist from "./components/MentoringWaitlist";
import VideoSection from "./components/Video";
import { videos } from "./media";
import CtaBanner from "./offers/components/CtaBanner";
import { offersCopy } from "./offers/copy";
import Pfp from "../../public/face.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-page text-white">
      <Headline
        eyebrow="Revenue Leak Audits · Done-for-you fixes"
        headlineText="More sales from the visitors you already have."
        subheadlineText="Your store or app might be quietly losing buyers to slow pages and clunky checkouts. Let's find the leaks, fix them, and turn more of your visitors into paying customers."
        ctas={[
          { label: "Get your $800 audit", href: "#audit" },
          { label: "See what's included", href: "#services", variant: "inverted" },
        ]}
        intro={
          <>
            <Image src={Pfp} alt="" width={36} height={36} className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-green-500/40" />
            <span>
              Hi, I&apos;m Nick 👋 Senior full-stack engineer, 6 years building and fixing online stores and apps.
            </span>
          </>
        }
      />
      <VideoSection video={videos.intro} id="intro-video" />
      <ServiceOffers />
      <ProofMetrics />
      <CaseStudies />
      <MeetNick />
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
      <JourneySection className="bg-page" />
      <MentoringWaitlist />
      <CtaBanner {...offersCopy.ctaBanners.bottom} />
      <Footer />
    </main>
  );
}
