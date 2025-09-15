
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FloatingText() {

  // Removed keyboard shortcut; open by button only
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section className="bg-gradient-black-purple text-white px-6 py-20">
   <motion.div className=" mt-2 flex justify-center flex-col flex-nowrap px-2 gradient-border"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: 70 },
          visible: { opacity: 1, x: 0 },
        }}>
        <div className="card p-6 z-2 text-center">
            <h1 className=" text-2xl md:text-3xl font-extrabold tracking-tight mb-8">Learn more about us</h1>
            <div className=" flex justify-center flex-wrap gap-3 flex-row">
                <Link href="https://www.nickolasstricker.com/projects" target="_blank" className="btn min-w-[245px]  btn-inverted">Previous Projects</Link>
                <Link href="https://www.nickolasstricker.com/skills#certificate" target="_blank" className="btn min-w-[245px]  btn-inverted">Certifications</Link>
                <Link href="/#testimonials" className="btn min-w-[245px]  btn-inverted">Reviews</Link>
            </div>
        </div>
    </motion.div>
    </section>
    )
}
