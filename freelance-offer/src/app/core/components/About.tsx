'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";

import aboutImg1 from "../../../../public/cafe-group.jpg";
import aboutImg2 from "../../../../public/features.png";
// import aboutAwards from "../../../public/awards.png";

export default function About() {
  const { language } = useLanguage();

  return (<>
  <section id="About"  className="bg-gradient-purple-black hero-section section-half-height flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    
  
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
       {language === 'es' ? 'Para quién es esto' : 'Who this is for'}
      </h1>
      <p className="hero-subtitle text-green-200 max-w-xl">
  {language === 'es'
    ? 'Para freelancers, fundadores y pequeñas empresas que necesitan una landing page moderna que convierta y una breve asesoría para afinar su estrategia—sin aprender diseño ni código.'
    : 'For Coaches, founders, and event organizers who need more bookings, on-going analytics and conversion tracking, a vision for their brand, and a partner that will stop at nothing to make that vision a reality.'}
</p>

          
    </motion.div>
    <motion.div className="w-full md:w-1/2 max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}>
      <Image
      priority={true}
      width={600}
      height={600}
        src={aboutImg1.src}
        alt="Connecting the Dots"
        className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
      />
    </motion.div>
  </section>
  <section className="bg-gradient-purple-black hero-section section-half-height flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    <motion.div className="w-full md:w-1/2 max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}>
      <Image
      priority={true}
      width={500}
      height={500}
        src={aboutImg2.src}
        alt="Connecting the Dots"
        className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
      />
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
  {language === 'es'
    ? 'Te entrego una landing page gratuita lista para personalizar con tu oferta y una consultoría gratuita de 20 minutos para mapear tu embudo y tus quick wins. Sin letra pequeña: si te gusta mi enfoque, podemos hablar del proyecto completo después.'
    : 'Your go to consultant for building high-converting websites and funnels that get results. I deliver fast, custom sites with built-in analytics and conversion tracking, plus expert advice to help you get the most out of your web presence. Feature rich, conversion focused, and built to grow with you.'}
</p>

    </motion.div>
    
  </section>
    <section className=" bg-gradient-black-dark text-white px-6 py-20">
      <div className="max-w-5xl mx-auto  flex flex-col items-center justify-between gap-12 md:flex-row">


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
          <p className="text-lg">
  {language === 'es'
    ? 'Soy Nick, desarrollador full-stack que lanza sitios y embudos de marketing rápido. Me enfoco en velocidad y valor: hosting ágil, UX fluida y analítica integrada para que sepas qué funciona desde el día uno.'
    : 'I\’m Nick—a full-stack developer who ships booking sites, marketing sites and funnels for coaches, founders, and event organziers. In my 7 years of event industry experience as a website lead, I\'ve built projects focused on converting traffic to clients, and improving conversion based on monthly analytics.'}
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
            {language === 'es'
              ? 'Tú recibes valor real desde el inicio; yo gano tu confianza. Algunos clientes luego eligen una mejora de pago—diseño a medida, copy, integraciones y soporte continuo—pero no hay presión.'
              : 'I want to bring your vision to life as your partner, and help you make informed descisions based on data. I will use my experience to guide the project towards what works for you and your buisness, while staying true to your vision.'}
          </p>

        </motion.div>


      </div>
    </section>
    </>
  );
}
