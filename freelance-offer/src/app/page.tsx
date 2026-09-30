'use client';
import { useRef } from "react";
import Footer from "./components/Footer";
import Headline from "./components/Headline";
import Testimonals from "./components/Testimonials";
import Philosophy from "./components/Philosophy";
import BlueprintPillars from "./components/BlueprintPillars";
import HelperBtnGroup from "./components/HelperBtnGroup";
import FeaturedOffers from "./components/FeaturedOffers";
import IntakeModal, { type IntakeModalHandle } from "./components/IntakeModal";
import CaseStudies from "./components/CaseStudies";
import VideoSection from "./components/Video";
import { videos } from "./media";
import CtaBanner from "./offers/components/CtaBanner";
import { offersCopy } from "./offers/copy";

import josePhoto from "../../public/testimonials/jose-headshot.jpg"
import connorPhoto from "../../public/testimonials/connor-headshot.png"
import lukePhoto from "../../public/testimonials/luke-headshot.jpg"
import fernandoPhoto from "../../public/testimonials/fernando-headshot.jpg"
import lukeRottaPhoto from "../../public/testimonials/lukerotta.jpg"
import carolePhoto from "../../public/testimonials/carole-headshot.png"
import amandaPhoto from "../../public/testimonials/amanda-headshot.jpg"

const myTestimonialList = [
  {
    quote:'Nick is a great web developer who takes his job seriously and is willing to meet his clients where they are at. He makes the working relationship enjoyable and provides great recommendations and feedback. He has tremendous attention to detail and has a creative mind. I highly recommend reaching to Nick for anything related to web development and assistance with other related services.', 
    name:'Jose Ortiz', 
    role:'Co-Founder of Connecting Dots for Latinx Professionals',
    avatarUrl:josePhoto.src
  },
    
  {
    quote:'Took an idea a created what I imagined just by him understanding what my business needed through our conversations. I loved the visual accents, instant awareness to the Customer of toggles and info points that he included.', 
    name:'Carole Murray', 
    role: 'Founder of CM Florals',
    avatarUrl:carolePhoto.src
  },
  {
      quote:'Nick provided expert advice for my web design and digital marketing strategy. He was professional, efficient, and delivered high-quality work on time. I highly recommend his services to anyone looking to enhance their online presence.', 
      name:'Luke Rotta', 
      role:'Founder of Redtail Luxe',
      avatarUrl:lukeRottaPhoto.src
    },
  {
      quote:'Nick is an outstanding professional. He is knowledge, skillful, responsible, detailed oriented, and all around a supportive and very cool guy. I highly recommend reaching out to Nick if you need a dynamic website that addresses your company\'s need.', 
      name:'Fernando Rayas', 
      role:'Co-Founder of Connecting Dots for Latinx Professionals',
      avatarUrl:fernandoPhoto.src
    },
   {
    quote:'Nick had my professional profile website running in 2 days, in time for my book release! Outstanding communication, delivery, and expertise.', 
    role:'Board Certified Behavior Analyst', 
    name:'Amanda Grau',
    avatarUrl:amandaPhoto.src
  },
  {
    quote:'Perfect For all my coaching needs, Nick knew exactly what i needed for my private coaching business and gave me the most perfect personalized website for me.', 
    role:'Private Baseball Hitting Coach', 
    name:'Luke Stricker',
    avatarUrl:lukePhoto.src
  },
  {
    role:'Stage Guitarist, Music Teacher', 
    quote:'Nick nailed my vision from the get go. I highly reccomend him. The perfect solution to market my music teaching, and promote my bands.', 
    name:'Connor M',
    avatarUrl:connorPhoto.src
  }
]
export default function Home() {
  const intakeModalRef = useRef<IntakeModalHandle>(null);
  const openIntake = () => intakeModalRef.current?.open();

  return (
    <main className="min-h-screen bg-page text-white">
      <Headline
        headlineText="System Architecture & Conversion Audits for B2B SaaS"
        subheadlineText="Fixed-scope diagnostics that map architectural debt onto recovered revenue. Delivered in 48 hours—engineered, not templated."
        ctas={[
          { label: "Apply for Architectural Audit", href: "/offers#apply" },
          { label: "Get a Free Video Audit", href: "#free-audit", variant: "inverted" },
        ]}
      />
      <VideoSection video={videos.intro} id="intro-video" />
      <Philosophy />
      <IntakeModal ref={intakeModalRef} />
      <FeaturedOffers onApply={openIntake} />
      <CaseStudies />
      <BlueprintPillars />
      <Testimonals {...{
        type: "testimonials",
        title: "What clients say",
        subtitle: "This is what our previous clients had to say about us.",
        items: myTestimonialList,
        style: {
          variant: "carousel",
          columns: 2,
          showQuoteIcon: true,
          rounded: "xl",
          background: "default",
        },
      }} />
      <HelperBtnGroup reviewsHref="#testimonials" />
      <CtaBanner ctaHref="/offers#apply" onCtaClick={openIntake} {...offersCopy.ctaBanners.bottom} />
      <Footer />
    </main>
  );
}

