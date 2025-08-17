'use client';
import Image from "next/image";

// import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// const InstagramEmbed = dynamic(() => import('./components/InstagramEmbed'), {
//   ssr: false,
// });
import CTAImage from "../../../public/NStrans.png"; // Adjust the path as needed
import backgroundImage from "../../../public/pfp5.jpg"; // Adjust the path as needed

import About from "./components/About";
import Tiers from "./components/TieredMonthlyOffers";
import Footer from "../components/Footer";
import ClaimBtnModal from "./components/CoreOfferModal";

import { useLanguage } from "../context/LanguageContext";

type EventItem = {
  date: string;
  title: { en: string; es: string };
  registerLink?: string; // Optional link for registration
  featuring?: string[]; // Optional featuring information
  description?: string;
};
// Example event data 
  /*const [eventList, setEvents] = useState([
  { date: "6/18/2025", 
    title: { en: "Latinx Comedy Night", es: "Noche de Comedia Latinx" }, 
    registerLink: "https://www.eventbrite.com/e/latinx-comedy-night-tickets-1234567890",
    featuring: ["Angelica Saavedra", "Sian Duprey", "Rudy Lozano Jr."]
  }
]); */

export default function Home2() {
  const [eventList, setEvents] = useState<EventItem[]>([]);
  const [rawJSON, setRawJSON] = useState(JSON.stringify({ events: eventList }));

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("https://softball-science-data.vercel.app/locker/6"); // <-- your endpoint here
        const json = await res.json();
        if (json.data && json.data[0]?.value) {
          const parsed = JSON.parse(json.data[0].value);
          setEvents(parsed.events || []);
          setRawJSON(json.data[0].value); // keep original JSON string
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    }

    fetchEvents();
  }, []);

  const { language } = useLanguage();
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <section
      className="hero-section bg-fixed section-half-height sm:bg-[length:135%] sm:bg-[100%_calc(50%-10px)] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        // backgroundSize: "cover",
        // backgroundPosition: "calc(50% - 70px) calc(50% - 20px)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay tint for contrast */}
      <div className="hero-overlay absolute inset-0 z-0" />

      {/* Hero content */}
      <motion.div className=" z-10 px-4 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1.2, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}>
       
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ml-[0] sm:ml-[230px] mt-[80px] sm:mt-[0px]">I Deliver Fully Custom, Feature Rich, Conversion focused websites.</h1>
      </motion.div>
       <Image src={CTAImage} alt="LinkedIn" className="w-100 h-100 ease-in-out absolute top-0 left-0" height={150} width={150} />
    </section>
      
<ClaimBtnModal />
<About />
<ClaimBtnModal />
{/* <Tiers /> */}
<Footer />
    </main>
  );
}

