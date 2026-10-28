'use client';
import Image from "next/image";

import Footer from "./components/Footer";
import SplitHero from "./components/SplitHero";
import AudienceScenarios from "./components/AudienceScenarios";
import BlueprintFlow from "./components/BlueprintFlow";
import PillarStories from "./components/PillarStories";
import Testimonals from "./components/Testimonials";
import ServiceOffers from "./components/ServiceOffers";
import CaseStudies from "./components/CaseStudies";
import ProofMetrics from "./components/ProofMetrics";
import MeetNick from "./components/MeetNick";
import JourneySection from "./components/JourneySection";
import MentoringWaitlist from "./components/MentoringWaitlist";
import { videos } from "./media";
import CtaBanner from "./offers/components/CtaBanner";
import { offersCopy } from "./offers/copy";
import Pfp from "../../public/face.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-page text-white">
      <SplitHero
        video={videos.intro}
        intro={
          <>
            <Image src={Pfp} alt="" width={36} height={36} className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-green-500/40" />
            <span>
              Hi, I&apos;m Nick 👋 Full-stack engineer, 2,500 cold calls, and live demos for big companies.
            </span>
          </>
        }
      />
      <AudienceScenarios />
      <BlueprintFlow />
      <ServiceOffers />
      <ProofMetrics />
      <CaseStudies />
      <PillarStories />
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
