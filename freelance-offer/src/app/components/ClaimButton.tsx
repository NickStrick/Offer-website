'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
// import Image from "next/image";

export default function ClaimButton() {
    const { language } = useLanguage();

    const handleClick = () => {
        console.log("Claim button clicked");
        // Open a modal
    }
    return (<>
        <section className=" bg-gradient-black-dark text-white px-6 py-20">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}
            >
                <button onClick={handleClick} type="button"  className={`btn-gradient-language transition-all duration-300 ease-in-out  px-16 py-3 text-xs rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover `}>
                {language === 'es' ? 'Suscribirse' : 'Claim your Free Professional Website'}
                </button>
            </motion.div>
        </section>
        </>
    );
}
