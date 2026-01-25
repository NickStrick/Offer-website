'use client';
import { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import FloatingText from "./components/FloatingText";
// import Tiers from "./components/TieredMonthlyOffers";
import Footer from "./components/Footer";
import ClaimBtnModal from "./components/OfferBtnGroup";
import Headline from "./components/Headline";
import Share from "./components/Share";
import Testimonals from "./components/Testimonials";
import {SeperatorWave} from './components/SeperatorWave';

import { useLanguage } from "./context/LanguageContext";

import josePhoto from "../../public/testimonials/jose-headshot.jpg"
import connorPhoto from "../../public/testimonials/connor-headshot.png"
import lukePhoto from "../../public/testimonials/luke-headshot.jpg"
import fernandoPhoto from "../../public/testimonials/fernando-headshot.jpg"
import lukeRottaPhoto from "../../public/testimonials/lukerotta.jpg"
import carolePhoto from "../../public/testimonials/carole-headshot.png"
import amandaPhoto from "../../public/testimonials/amanda-headshot.jpg"

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
const topWaveType = '1-hill'
const bottomWaveType = '1-hill'
const myTestimonialList = [
  {
    quote:'Nick is a great web developer who takes his job seriously and is willing to meet his clients where they are at. He makes the working relationship enjoyable and provides great recommendations and feedback. He has tremendous attention to detail and has a creative mind. I highly recommend reaching to Nick for anything related to web development and assistance with other related services.', 
    name:'Jose Ortiz', 
    role:'Co-Founder of Connecting Dots for Latinx Professionals',
    avatarUrl:josePhoto.src
  },
    
  {
    quote:'Took an idea a created what I imagined just by him understanding what my business needed through our conversations. I loved the visual accents, instant awareness to the Customer of toggles and info points that he included.', 
    name:'Carole Murray', 
    role: 'Founder of CM Florals',
    avatarUrl:carolePhoto.src
  },
  {
      quote:'Nick provided expert advice for my web design and digital marketing strategy. He was professional, efficient, and delivered high-quality work on time. I highly recommend his services to anyone looking to enhance their online presence.', 
      name:'Luke Rotta', 
      role:'Founder of Redtail Luxe',
      avatarUrl:lukeRottaPhoto.src
    },
  {
      quote:'Nick is an outstanding professional. He is knowledge, skillful, responsible, detailed oriented, and all around a supportive and very cool guy. I highly recommend reaching out to Nick if you need a dynamic website that addresses your company\'s need.', 
      name:'Fernando Rayas', 
      role:'Co-Founder of Connecting Dots for Latinx Professionals',
      avatarUrl:fernandoPhoto.src
    },
   {
    quote:'Nick had my professional profile website running in 2 days, in time for my book release! Outstanding communication, delivery, and expertise.', 
    role:'Board Certified Behavior Analyst', 
    name:'Amanda Grau',
    avatarUrl:amandaPhoto.src
  },
  {
    quote:'Perfect For all my coaching needs, Nick knew exactly what i needed for my private coaching business and gave me the most perfect personalized website for me.', 
    role:'Private Baseball Hitting Coach', 
    name:'Luke Stricker',
    avatarUrl:lukePhoto.src
  },
  {
    role:'Stage Guitarist, Music Teacher', 
    quote:'Nick nailed my vision from the get go. I highly reccomend him. The perfect solution to market my music teaching, and promote my bands.', 
    name:'Connor M',
    avatarUrl:connorPhoto.src
  }
]
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
  const btnGroup2Props = {
  customClass: 'bg-gradient-purple-black',
  title: 'Built in days, not weeks.',
  subtext: 'What takes others months to build, we build for you in mere days!'
}
  const { language } = useLanguage();
  console.log("language", language, rawJSON);
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Headline />
      <SeperatorWave type={topWaveType} flip={false} color={'var(--bg-wave)'} />
      <ClaimBtnModal />
      <AboutMe />
      <SeperatorWave type={bottomWaveType} flip={true} color={'var(--bg-wave)'} />
      <FloatingText />
      <SeperatorWave type={topWaveType} flip={false} color={'var(--bg-wave)'} />
      <Testimonals {...{
  type:"testimonials",
  title : 'Reviews & Testimonials',
  subtitle : 'This is what our previous clients had to say about us.',
  items : myTestimonialList,
  style : {
variant: "carousel",
columns: 2,
showQuoteIcon: true,
rounded: "xl",
background: "default",
},
}} />
      <ClaimBtnModal  {...btnGroup2Props}/>
      <Share />
      <Footer />
    </main>
  );
}

