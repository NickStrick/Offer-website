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
       {language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
      </h1>
      <p className="hero-subtitle text-green-200 max-w-xl">
       {language === 'es'
              ? 'Elevar a los profesionales Latinx fomentando la comunidad, celebrando la identidad y creando oportunidades inclusivas para el liderazgo y el crecimiento.'
              : 'To elevate Latinx professionals by fostering community, celebrating identity, and creating inclusive opportunities for leadership and growth.'}
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
       {language === 'es' ? 'Nuestra Misión' : 'Our Mission'}
      </h1>
      <p className="hero-subtitle text-green-200 max-w-xl">
       {language === 'es'
              ? 'Elevar a los profesionales Latinx fomentando la comunidad, celebrando la identidad y creando oportunidades inclusivas para el liderazgo y el crecimiento.'
              : 'To elevate Latinx professionals by fostering community, celebrating identity, and creating inclusive opportunities for leadership and growth.'}
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
            {language === 'es' ? 'Nuestra Historia' : 'Our Story'}
          </h2>
          <p className="text-lg">
            {language === 'es'
              ? 'Creemos en el poder de la narración. Nuestro viaje nace de la comunidad, impulsado por la representación, y basado en la idea de que cada conexión puede inspirar. Nos apropiamos de nuestra historia y la compartimos con orgullo — porque nos pertenece a todos.'
              : 'We believe in the power of storytelling. Our journey is one rooted in community, driven by representation, and built on the idea that every connection has the power to inspire. We own our story and share it proudly — because it belongs to all of us.'}
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
            {language === 'es' ? 'Por Qué Comenzamos' : 'Why We Started'}
          </h2>
          <p className="text-lg">
            {language === 'es'
              ? 'Comenzamos este trabajo porque vimos una brecha: falta de representación, acceso y mentoría para los profesionales Latinx. Nuestro objetivo es cambiar eso. Al crear espacios para la conexión significativa y el desarrollo del liderazgo, esperamos elevar a otros como deseamos haber sido elevados nosotros.'
              : 'We started this work because we saw a gap — a lack of representation, access, and mentorship for Latinx professionals. Our goal is to change that. By creating spaces for meaningful connection and leadership development, we hope to uplift others the way we wished to be uplifted ourselves.'}
          </p>
        </motion.div>


      </div>
    </section>
    </>
  );
}
