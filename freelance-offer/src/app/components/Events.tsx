'use client';
import { motion } from "framer-motion";
import Link from "next/link";

import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import LIImg from "../../../public/linkedin.png";
import instaImg from "../../../public/Instagram.png";
import facebookImg from "../../../public/facebook.png";


type EventItem = {
  date: string;
  title: { en: string; es: string };
  registerLink?: string; // Optional link for registration
  featuring?: string[]; // Optional featuring information
  description?: string; // Optional description
};
interface EventsProps {
  events: EventItem[];
}

function formatEventDate(dateStr: string, language: "en" | "es") {
  if (dateStr.toLowerCase() === "tbd") {
    return language === "es" ? "Por definir" : "TBD";
  }

  const date = new Date(dateStr); // e.g. "6/18/2025"
  if (isNaN(date.getTime())) return dateStr; // fallback if parsing fails

  // Use Intl.DateTimeFormat for locale-aware formatting
  return new Intl.DateTimeFormat(language === "es" ? "es-ES" : "en-US", {
    month: "long",  // Full month name
    day: "numeric",
    year: "numeric", // Optional: remove if you only want month/day
  }).format(date);
}

export default function Events({ events }: EventsProps) {
  const { language } = useLanguage();

  function handleRegister(event: EventItem) {
    // Handle registration logic here, e.g., open a modal or redirect to a registration page
    const title = language === 'es' ? event.title.es : event.title.en;
    console.log(`Register for event: ${event.date} ${title}`);
    // If the event has a registerLink, open in new tab
    if (event.registerLink && event.registerLink.trim() !== "") {
      window.open(event.registerLink, "_blank", "noopener,noreferrer");
    } else {
      alert(language === 'es' ? "No hay enlace de registro para este evento." : "No registration link available for this event.");
    }
  }
  let nowDate = new Date();

  return (
    <section className="bg-events text-white px-6 py-24 space-y-20 pt-[150px]"  id="events">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl font-bold text-purple-300 text-center mb-4">
            {language === 'es' ? 'Eventos y Programas' : 'Events & Programs'}
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            {language === 'es'
              ? 'Explora sesiones próximas organizadas por nuestro equipo y colaboradores. Desde noches de networking hasta talleres de desarrollo profesional, creamos espacios para el crecimiento, la conexión y la comunidad.'
              : 'Explore upcoming sessions hosted by our team and partners. From networking nights to skill-building workshops, we create space for growth, connection, and community.'}
          </p>
        </motion.div>

        {/* Upcoming Events List */}
         {/* Upcoming Events List */}
        <motion.ul
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {events.map((event, index) => (
            <li key={index} className={`items-center gap-4 border-l-4 border-purple-400 min-h-[56px] grid grid-cols-[auto_1fr_auto]${nowDate > new Date(event.date) ? " border-transparent ":''}`}>
              <div className={`text-xl font-semibold event-date pl-2 ${nowDate > new Date(event.date) ? "text-purple-400" : ""}`}>
                {/* <Image
                  src={eventImg}
                  height={20}
                  width={20}
                  alt="event icon"
                  className="w-[20px] h-[20px] inline-block mr-4 mb-2"
                /> */}
                <span className={`${nowDate > new Date(event.date) ? "text-purple-400" : ""}`}> {formatEventDate(event.date, language)}:</span>
                {nowDate > new Date(event.date) ?  <div className="text-purple-400">(Past Event)</div> : <></>}
              </div>
              <span className="event-title">
                <span className={`text-lg font-semibold `}>
                  {language === "es" ? event.title.es : event.title.en}
                  
                </span>
                {event.description&&event.description.length?
                <span className="text-sm text-[lightgray] pl-3">{event.description}</span>:<></>}
                {event.featuring&&event.featuring.length?
                <span className="text-sm text-[lightgray] pt-1">
                  <span className="text-[var(--color-accent)] italic ">featuring:
                    </span> {event.featuring.length > 1
                  ? `${event.featuring.slice(0, -1).join(", ")}${event.featuring.length > 2?',':''} and ${event.featuring.slice(-1)}`
                  : event.featuring[0]}</span>:<></>}
              </span>
              <span className="event-register">
                {event.registerLink&&nowDate <= new Date(event.date)?<button
                  onClick={() => handleRegister(event)}
                  className={`btn-gradient-language transition-all duration-300 ease-in-out  px-16 py-3 text-xs rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover `}
                >
                  Register
                </button>:<></>}
              </span>
            </li>
          ))}
        </motion.ul>

        {/* Contact & Newsletter */}
        <div id="newsletter" className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-gradient-white-gray text-neutral-900 p-6 rounded-lg shadow-lg flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">
              {language === 'es' ? 'Mantente Informado' : 'Stay Updated'}
            </h3>
            <p className="mb-4 text-neutral-900">
              {/* {language === 'es'
                ? 'Suscríbete a nuestro boletín para recibir noticias sobre eventos, recursos e historias de la comunidad.'
                : 'Join our newsletter for upcoming events, resources, and stories from the community.'} */}
                {language === 'es'
                ? 'Sigue nuestras redes sociales para conocer próximos eventos, recursos y historias de la comunidad.'
                : 'Follow our social media for upcoming events, resources, and stories from the community.'}
            </p>
            {/* <form>
              <input
                type="email"
                placeholder={language === 'es' ? 'Tu correo electrónico' : 'Your email'}
                className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
              />
              <button type="submit" className="btn-gradient w-full">
                {language === 'es' ? 'Suscribirse' : 'Subscribe'}
              </button>
            </form> */}
            <div className="flex items-center gap-6 mt-auto self-center">
          <a
            href="https://www.instagram.com/connectingdotsforlatinx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instaImg}
              alt="Instagram"
              width={60}
              height={60}
              className=" hover:scale-110 focus:outline-none transition-all duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://www.facebook.com/people/Connecting-Dots-for-Latinx-Professionals/61577340749137/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={facebookImg}
              alt="Facebook"
              width={60}
              height={60}
              className=" hover:scale-110 focus:outline-none transition-all duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/connecting-dots-for-latinx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LIImg}
              alt="LinkedIn"
              width={60}
              height={60}
              className=" hover:scale-110 focus:outline-none transition-all duration-300 ease-in-out"
            />
          </a>
          
        </div>
          </motion.div>
          <motion.div
            className="bg-gradient-white-gray text-neutral-900 p-6 rounded-lg shadow-lg flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">
              {language === 'es' ? 'Contáctanos' : 'Get In Touch'}
            </h3>
            <p className="mb-4 text-neutral-900">
              {language === 'es'
    ? '¿Quieres colaborar, asociarte con nosotros o ser voluntario? Envíanos un mensaje directo o un correo electrónico a nuestros fundadores, y nos pondremos en contacto contigo.'
    : 'Want to collaborate, partner with us, or volunteer? DM or email our founders and we\'ll reach out.'}

            </p>
            <Link href="/founders" className="btn-gradient inline-block mt-auto text-neutral-900 w-full text-center">
              {language === 'es' ? 'Formulario de Contacto →' : 'Contact Us →'}
            </Link>
          </motion.div>
        </div>

        {/* Ways to Get Involved */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4 ">
             {language === 'es' 
      ? <><span className="hero-highlight">Conecta los puntos</span> para ver el panorama completo</>
      : <><span className="hero-highlight">Connect the dots</span> to the bigger picture</>}
          </h3>
          <p>
    {language === 'es'
      ? 'Cada vez que asistes a un evento, te conviertes en mentor o compartes tu historia, agregas un punto más conectado hacia un futuro más brillante para los profesionales latinos. Construyamos ese futuro juntos.'
      : 'Everytime you join an event, become a mentor, or share your story, that\'s one more dot connected toward a brighter future for Latinx professionals. Let\'s build that future together.'}
  </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className=" p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-purple-300">
            {language === 'es' ? 'Lo Que Dicen Nuestros Participantes' : 'What Our Participants Say'}
          </h3>
          <blockquote className="italic border-l-4 border-purple-400 pl-4 text-purple-100">
            {language === 'es'
              ? '"Conocí a personas que cambiaron por completo mi trayectoria profesional. Los eventos son empoderadores y la gente realmente se preocupa." \n– Norma Ortiz'
              : '"I made connections that completely changed my professional journey. The events are empowering, and the people truly care." \n– Norma Ortiz'}
          </blockquote>
          <blockquote className="italic border-l-4 border-purple-400 pl-4 text-purple-100">
            {language === 'es'
              ? '"No es solo networking — es construir relaciones reales basadas en cultura y apoyo." \n– Nickolas Stricker'
              : '"It’s not just networking — it’s building real relationships rooted in culture and support." \n– Nickolas Stricker'}
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
