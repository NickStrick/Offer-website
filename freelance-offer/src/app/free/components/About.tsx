'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";

import aboutImg1 from "../../../../public/handsSmall.jpg";
import aboutImg2 from "../../../../public/site.jpg";
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
      <p className="hero-subtitle text-green-200 max-w-xl">
  {language === 'es'
    ? 'Para freelancers, fundadores y pequeñas empresas que necesitan una landing page moderna que convierta y una breve asesoría para afinar su estrategia—sin aprender diseño ni código.'
    : 'For Coaches, freelancers, founders, and event organizers who need a modern, high-converting landing page and a quick strategy tune-up—without learning design or code.'}
</p>

          
    </motion.div>
    <motion.div className="md:w-1/2 max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap px-2 gradient-border-right"
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
      width={500}
      height={500}
        src={aboutImg1.src}
        alt="Connecting the Dots"
        className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
      /></div>
    </motion.div>
  </section>
  <section className="bg-gradient-black-dark pb-10 hero-section section-half-height pt-4 flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    <motion.div className="md:w-1/2 max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap px-2 gradient-border-left"
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
      <p className="hero-subtitle text-green-200 max-w-xl">
 You’ll get a free landing page you can plug your offer into, plus a free 20-minute consult to map your funnel and quick wins. 
    <span className="flex mt-2">No fine print—if you think i did an awesome job, we can talk next steps and what would improve your existing process afterward.</span>
</p>

    </motion.div>
    
  </section>
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
      <div className="max-w-5xl mx-auto  flex flex-col items-center justify-between gap-12 md:flex-row z-10 pt-6 pb-6">


        {/* Our Story */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-green-300 mb-4">
            {language === 'es' ? 'Quiénes somos' : 'Who We Are'}
          </h2>
          <p className="text-lg">I’m Nick—a full-stack developer who builds booking sites, professional profile sites and funnels for coaches, professionals, and event organziers. 
            <span className="flex mt-2">
            In my 8 years of event industry experience as a website lead, I\'ve built projects focused on converting traffic to clients, and improving conversion based on monthly analytics.
            </span>
          </p>

        </motion.div>

        {/* Why We Started */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-green-300 mb-4">
            {language === 'es' ? '¿Por qué es gratis?' : 'Why is it free?'}
          </h2>
          <p className="text-lg">
            You get real value upfront; I earn your trust. 
            <span className="flex mt-2">
              All I ask is that you give me feedback on the process and let me know if you found it valuable.
            </span>
            <span className="flex mt-2">
              Some clients choose a paid upgrade—custom design, copy polish, integrations, and ongoing support—but there’s never any pressure.
            </span>
          </p>

        </motion.div>


      </div>
    </section>
    </>
  );
}
