
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import Pfp from "../../../public/face.jpg";

import Socails from "./Socials"

type HelperBtnGroupProps = {
  reviewsHref?: string;
};



export default function HelperBtnGroup({
  reviewsHref = "/#testimonials",
}: HelperBtnGroupProps) {

  // Removed keyboard shortcut; open by button only
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section className="bg-gradient-black-purple text-white px-6 py-16 mt-[-2px]">
      <motion.div
        className="mx-auto max-w-2xl flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="p-1.5 rounded-full bg-gradient-to-tr from-[var(--color-purple)] via-[var(--color-highlight)] to-[var(--color-accent)]">
          <Image
            priority={true}
            width={320}
            height={320}
            src={Pfp.src}
            alt="Nick Stricker"
            className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shadow-2xl"
          />
        </div>

        <h1 className="mt-6 text-2xl md:text-3xl font-extrabold tracking-tight">Learn more about us</h1>

        <Socails />

        <div className="flex justify-center flex-wrap gap-3">
          <Link href="https://www.nickolasstricker.com/projects" target="_blank" className="btn min-w-[220px] btn-inverted">Previous Projects</Link>
          <Link href="https://www.nickolasstricker.com/skills#certificate" target="_blank" className="btn min-w-[220px] btn-inverted">Certifications</Link>
          <Link href={reviewsHref} className="btn min-w-[220px] btn-inverted">Reviews</Link>
        </div>
      </motion.div>
    </section>
    )
}
