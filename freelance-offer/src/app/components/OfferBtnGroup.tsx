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
export type BtnsProps = {
  customClass?: string;
  title?: string;
  subtext?: string;
};
export default function LeadFlowDemo({customClass='bg-gradient-black-purple', title='We Grow your Audience for you.', subtext='Get your first month free. Speically curated, professionally built customizable website, or a fully packaged online traffic system.'}: BtnsProps) {

  // Removed keyboard shortcut; open by button only
  useEffect(() => {
    return () => {};
  }, []);

  return (
    
    <div className={`flex min-h-[50vh] items-center justify-center p-6 ${customClass} `}>
      <motion.div className=" z-1  max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1.2, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}>
      <div className="max-w-3xl text-center">
         <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h1>
        <div className="mt-2 text-gray-300 text-xl md:text-2xl">{subtext}</div>
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
          {/* <Link href="/free"
            className="min-w-[100%] sm:min-w-[365px] btn-gradient  w-full transition-all duration-300 ease-in-out text-2xl md:text-2xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
          >
            Free Website
          </Link> */}
          <Link href="/custom-website"
            className="min-w-[100%] sm:min-w-[385px] btn-gradient  w-full transition-all duration-300 ease-in-out text-2xl md:text-2xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
          >
           Customizable Website
          </Link>
          <Link href="/core"
            className="min-w-[100%] sm:min-w-[385px] btn-gradient w-full transition-all duration-300 ease-in-out text-2xl md:text-2xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
          >
            Traffic System
          </Link>
        </div>
      </div>
      </motion.div>
    </div>
    
  );
}
