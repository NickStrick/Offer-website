'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
// import Image from "next/image";

import HelperBtnGroup from "../../components/HelperBtnGroup";

import backgroundImage2 from "../../../../public/city.jpg";
// import aboutAwards from "../../../public/awards.png";
import {SeperatorWave} from '../../components/SeperatorWave';
const topWaveType = '1-hill'
const bottomWaveType = '1-hill'

export default function About() {
  const { language } = useLanguage();

  return (<>
   <HelperBtnGroup reviewsHref="#testimonials" />
   <SeperatorWave type={bottomWaveType} flip={true} color={'var(--bg)'} />
    <section
      className="hero-section bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        height: "fit-content",
      }}
    >
      {/* Overlay tint for contrast */}
      <div className="hero-overlay absolute inset-0 z-0" />

      <div className="max-w-5xl mx-auto  flex flex-col items-center justify-between gap-12 md:flex-row z-10 pt-8 pb-8">


        {/* Our Story */}
        <motion.div
        className="card-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-black mb-4">
            {language === 'es' ? 'Quiénes somos' : 'Who We Are'}
          </h2>
          <p className="text-lg text-black">I’m Nick—a full-stack developer who builds booking sites, professional profile sites and funnels for coaches, professionals, and event organziers. 
            <span className="flex mt-2">
            In my 8 years of event industry experience as a website lead, I&apos;ve built projects focused on converting traffic to clients, and improving conversion based on monthly analytics.
            </span>
          </p>

        </motion.div>

        {/* Why We Started */}
        <motion.div
        className="card-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-black mb-4 ">
            {language === 'es' ? '¿Por qué es gratis?' : 'Based in Chicago'}
          </h2>
          <p className="text-lg text-black">
            Chicago is our base of operations, I like to meet my clients in person and get to know them before we work together. 
            <span className="flex mt-2">As partners, we bring your vision to life, and help you make informed descisions based on data. 
            </span><span className="flex mt-2">I will use my experience to guide the project towards what works for you and your business, while staying true to your vision.  </span>
          </p>

        </motion.div>


      </div>
    </section>
    <SeperatorWave type={topWaveType} flip={false} color={'var(--bg-wave)'} />
    </>
  );
}
