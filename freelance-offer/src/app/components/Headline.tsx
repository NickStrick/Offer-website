'use client';
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ClaimBtnModal from "./OfferBtnGroup";

import aboutImg1 from "../../../public/handsSmall.jpg";
import CTAImage from "../../../public/NStrans.png";
import Pfp from "../../../public/face.jpg";
import headBackgorundImage from "../../../public/conserve.jpg";
// import aboutAwards from "../../../public/awards.png";

export default function Headline() {
  const router = useRouter();
  const { language } = useLanguage();

  return (<>
  <section
      className="hero-section bg-fixed section-half-height min-h-[40vh] max-h-[40vh] sm:bg-[length:135%] sm:bg-[100%_calc(50%-10px)] bg-cover bg-center"
      style={{
        backgroundImage: `url(${headBackgorundImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay tint for contrast */}
      <div className="hero-overlay absolute inset-0 z-0" />

      {/* Hero content */}
      <motion.div className=" z-[0] relative px-4 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1.2, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}>
       
        <h1 className="text-3xl md:text-5xl font-bold mb-4 mr-[0]  mt-[80px] sm:mt-[0px]">Stricker Digital  
          <span className="flex text-3xl md:text-5xl pb-[5px] mt-[20px] gradient-text">Your Web & Business Partner</span>
        </h1>
      </motion.div>
      
       <Image src={CTAImage} alt="stricker Ditial" className="z-2 w-[60px] md:w-[150px] h-100 ease-in-out absolute top-0 left-0" height={150} width={150} onClick={() => router.push("/")}/>
    </section>
    <ClaimBtnModal />
  
    
    </>
  );
}
