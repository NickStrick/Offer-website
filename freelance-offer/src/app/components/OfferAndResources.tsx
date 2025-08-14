'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function OfferAndResources() {
  const { language } = useLanguage();

  return (
    <>
      {/* Resources Section */}
      <section className="bg-gradient-purple-black text-white px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            {language === 'es' ? 'Recursos' : 'Resources'}
          </h2>
          <p className="text-lg">
            {language === 'es' ? (
              <>
                Descubre guías, herramientas e inspiración gratuitas a través de nuestro <strong>boletín</strong>, <strong>canal de YouTube</strong>, <strong>entrevistas</strong> y <strong>apariciones en podcasts</strong>. También ofrecemos acceso a contenido como <strong>artículos</strong>, <strong>blogs</strong>, <strong>módulos de formación</strong> y <strong>cursos seleccionados</strong> para apoyar tu desarrollo.
              </>
            ) : (
              <>
                Discover free guides, tools, and inspiration through our <strong>partnerships</strong>, <strong>Instagram</strong>, <strong>Linkedin</strong>, and <strong>Facebook group</strong>. We also provide access to a variety of content like <strong>evetn recordings</strong>, and curated <strong>trainings</strong> to support your journey.
              </>
            )}
          </p>
        </motion.div>
      </section>

      {/* We Offer Section */}
      <section className="bg-gradient-purple-black text-white px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            {language === 'es' ? 'Lo Que Ofrecemos' : 'We Offer'}
          </h2>

          <p className="text-lg">
            {language === 'es' ? (
              <>
                Nuestros programas incluyen <strong>talleres interactivos</strong> y <strong>eventos de networking</strong> diseñados para fomentar el desarrollo profesional y conversaciones significativas.
              </>
            ) : (
              <>
                Our programs include <strong>speeches, interactive trainings</strong> and <strong>networking events</strong> designed to foster professional development and meaningful conversations.
              </>
            )}
          </p>

          <p className="text-lg">
            {language === 'es' ? (
              <>
                Nos enorgullece apoyar a los líderes emergentes a través de iniciativas de <strong>mentoría</strong> como el <strong>Círculo de Liderazgo</strong> y nuestro <strong>Programa de Embajadores</strong> — empoderando a la próxima generación de profesionales Latinx.
              </>
            ) : (
              <>
                We are proud to support rising leaders through <strong>mentorship</strong> initiatives with <strong>one on one networking events</strong> and our <strong>latinx community partners</strong> — empowering the next generation of Latinx professionals.
              </>
            )}
          </p>
        </motion.div>
      </section>
    </>
  );
}
