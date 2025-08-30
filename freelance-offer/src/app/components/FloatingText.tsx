
"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import backgroundImage2 from "../../../public/colorsky.jpg"; // Adjust the path as needed

// ----------------------------- Types -----------------------------
export type Lead = {
  firstName: string;
  lastName: string;
  email: string;
};
export default function LeadFlowDemo() {

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
        <h1 className="hero-title text-white above">
        Dedicated to Helping You Get Clients and Attendees
        </h1>
        <p className="hero-subtitle mt-6">
        Elevate your brand and get your stuff booked with a stunning website and effective digital marketing strategies.
        </p>
      </motion.div>
    </section>
    </>)
}
