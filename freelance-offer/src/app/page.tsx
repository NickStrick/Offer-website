'use client';
import { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import FloatingText from "./components/FloatingText";
// import Tiers from "./components/TieredMonthlyOffers";
import Footer from "./components/Footer";
import ClaimBtnModal from "./components/OfferBtnGroup";
import Headline from "./components/Headline";

import { useLanguage } from "./context/LanguageContext";

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
  console.log("language", language, rawJSON);
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Headline />
      <AboutMe />
      <FloatingText />
      <ClaimBtnModal />
      <Footer />
    </main>
  );
}

