'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

import aboutImg1 from "../../../public/handsSmall.jpg";
import aboutImg2 from "../../../public/smallGroup.jpg";
// import aboutAwards from "../../../public/awards.png";

export default function About() {
  const { language } = useLanguage();

  return (<>
  <section id="About"  className="bg-gradient-purple-black hero-section section-half-height flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    
  
    {/* Right: Text */}
    <motion.div className="w-full md:w-1/2 relative z-10"
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
    : 'For Coaches, freelancers, founders, and event organizers who need a modern, high-converting landing page and a quick strategy tune-up—without learning design or code.'}
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
      width={500}
      height={500}
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
    <motion.div className="w-full md:w-1/2 relative z-10"
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
    : 'You’ll get a free landing page you can plug your offer into, plus a free 20-minute consult to map your funnel and quick wins. No fine print—if you like my approach, we can talk about the full build afterward.'}
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
    : 'I’m Nick—a full-stack developer who ships marketing sites and funnels fast. I focus on speed-to-value: fast hosting, snappy UX, and built-in analytics so you know what’s working from day one.'}
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
    : 'You get real value upfront; I earn your trust. Some clients choose a paid upgrade—custom design, copy polish, integrations, and ongoing support—but there’s never any pressure.'}
</p>

        </motion.div>


      </div>
    </section>
    </>
  );
}
