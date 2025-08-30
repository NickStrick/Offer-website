"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    
    <div className="flex min-h-[50vh] items-center justify-center p-6 bg-gradient-black-purple ">
      <motion.div className=" z-1  max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1.2, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}>
      <div className="max-w-2xl text-center">
         <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">View our Services</h1>
        <div className="mt-2 text-gray-300 text-xl md:text-2xl">Get your free landing page, or a fully packaged online traffic system.</div>
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
          <Link href="/free"
            className="min-w-[100%] sm:min-w-[360px] btn-gradient  w-full transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
          >
            Free Website
          </Link>
          <Link href="/core"
            className="min-w-[100%] sm:min-w-[360px] btn-gradient w-full transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
          >
            Full Package
          </Link>
        </div>
      </div>
      </motion.div>
    </div>
    
  );
}
