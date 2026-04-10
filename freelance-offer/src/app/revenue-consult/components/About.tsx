"use client";
import { motion } from "framer-motion";

import HelperBtnGroup from "../../components/HelperBtnGroup";
import { SeperatorWave } from "../../components/SeperatorWave";

import backgroundImage2 from "../../../../public/city.jpg";
import type { RevenueConsultAboutCopy } from "../copy";

const topWaveType = "1-hill";
const bottomWaveType = "1-hill";

export default function About({ copy }: { copy: RevenueConsultAboutCopy }) {
  return (
    <>
      <HelperBtnGroup reviewsHref="#testimonials" />
      <SeperatorWave type={bottomWaveType} flip={true} color={"var(--bg)"} />
      <section
        className="hero-section bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
          height: "fit-content",
        }}
      >
        <div className="hero-overlay absolute inset-0 z-0" />

        <div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-12 md:flex-row z-10 pt-8 pb-8">
          <motion.div
            className="card-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">{copy.cards.left.title}</h2>
            <p className="text-lg text-black">
              {copy.cards.left.bodyLines[0]}
              {copy.cards.left.bodyLines.slice(1).map((line) => (
                <span key={line} className="flex mt-2">
                  {line}
                </span>
              ))}
            </p>
          </motion.div>

          <motion.div
            className="card-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className="text-3xl font-bold text-black mb-4 ">{copy.cards.right.title}</h2>
            <p className="text-lg text-black">
              {copy.cards.right.bodyLines[0]}
              {copy.cards.right.bodyLines.slice(1).map((line) => (
                <span key={line} className="flex mt-2">
                  {line}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </section>
      <SeperatorWave type={topWaveType} flip={false} color={"var(--bg-wave)"} />
    </>
  );
}

