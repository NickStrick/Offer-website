'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";

import HelperBtnGroup from "../../components/HelperBtnGroup";

import aboutImg1 from "../../../../public/meetingbox.jpg";
import aboutImg2 from "../../../../public/features.png";
import backgroundImage2 from "../../../../public/city.jpg";
// import aboutAwards from "../../../public/awards.png";

export default function About() {
  const { language } = useLanguage();

  return (<>
  <section id="About"  className="bg-gradient-purple-black hero-section section-half-height pt-4 flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    
  
    {/* Right: Text */}
    <motion.div className="w-full md:w-1/2 relative z-1"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}>
      <h1 className="hero-title text-white drop-shadow-md mb-4">
       {language === 'es' ? 'Para quién es esto' : 'Who this is for'}
      </h1>
      <p className="hero-subtitle text-green-200 max-w-xl text-lg">
  {language === 'es'
    ? 'Para freelancers, fundadores y pequeñas empresas que necesitan una landing page moderna que convierta y una breve asesoría para afinar su estrategia—sin aprender diseño ni código.'
    : 'For Coaches, founders, and event organizers who need more bookings, on-going analytics and conversion tracking, system to get consistent traffic to your site, a vision for their brand, and a partner that will stop at nothing to make that vision a reality.'}
</p>

          
    </motion.div>
    <motion.div className=" max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap px-2 gradient-border-right"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: 70 },
          visible: { opacity: 1, x: 0 },
        }}><div className="gradient-border-inner">
      <Image
      priority={true}
      width={600}
      height={600}
        src={aboutImg1.src}
        alt="Connecting the Dots"
        className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
      /></div>
    </motion.div>
  </section>
  <section className="bg-gradient-black-dark pb-10 hero-section section-half-height pt-y flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    <motion.div className="max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap px-2 gradient-border-left"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}><div className="gradient-border-inner">
      <Image
      priority={true}
      width={500}
      height={500}
        src={aboutImg2.src}
        alt="Connecting the Dots"
        className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
      /></div>
    </motion.div>
  
    {/* Right: Text */}
    <motion.div className="w-full md:w-1/2 relative z-1"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: 70 },
          visible: { opacity: 1, x: 0 },
        }}>
          <h1 className="hero-title text-white drop-shadow-md mb-4">
       {language === 'es' ? 'La solución que necesitas' : 'The Solution you need'}
      </h1>
      <p className="hero-subtitle text-green-200 max-w-xl text-lg">
        I deliver fast, custom sites with built-in analytics and conversion tracking, plus expert advice to help you get the most out of your web presence. Feature rich, conversion focused, and built to grow with you.
         <span className="flex mt-2">Using our 3 step process:</span>
        <span className="flex mt-2">1. We generate and execute a plan to get traffic flowing to your website.</span>
        <span className="flex mt-2">2. We design a website using tried and true formulas and well researched tactics that give you credibility, converts traffic to clients or attendees.</span>
        <span className="flex mt-2">3. We lay out a process to improve metrics and traffic conversion over time.</span>
      </p>
    </motion.div>
    
  </section>
   <HelperBtnGroup />
    <section
      className="hero-section bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
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
    </>
  );
}
