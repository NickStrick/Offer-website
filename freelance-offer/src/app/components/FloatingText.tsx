
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

import backgroundImage2 from "../../../public/conserve.jpg"; // Adjust the path as needed

export default function FloatingText() {

  // Removed keyboard shortcut; open by button only
  useEffect(() => {
    return () => {};
  }, []);

  return (<>
<section
      className="hero-section bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay tint for contrast */}
      <div className="hero-overlay absolute inset-0 z-0" />

      {/* Hero content */}
      <motion.div className="relative z-10 px-4 max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0 },
      }}>
        <h1 className="hero-title text-white above floating-text">
        Dedicated to Helping You Get Clients and Attendees
        </h1>
        <p className="hero-subtitle mt-6 text-lg floating-text">
        Elevate your brand and get your stuff booked with a stunning website and effective digital marketing strategies.
        </p>
      </motion.div>
    </section>
    </>)
}
