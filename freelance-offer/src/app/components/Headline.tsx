'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

import CTAImage from "../../../public/SDLogoTrans.png";
import Leafs from "../../../public/SDLogoLeafs.png";
import headBackgorundImage from "../../../public/colorsky.jpg";

type HeadlineCta = {
  label: string;
  href: string;
  variant?: "gradient" | "inverted";
};

type HeadlineProps = {
  headlineText?: string;
  subheadlineText?: string;
  ctas?: HeadlineCta[];
};

export default function Headline({
  headlineText = "Grow the right way. Your Web & Business Partner",
  subheadlineText,
  ctas,
}: HeadlineProps) {
  const router = useRouter();

  return (<>
  <section
      className="hero-section bg-fixed section-half-height min-h-[40vh] h-fit py-16 sm:bg-[length:135%] sm:bg-[100%_calc(50%-10px)] bg-cover bg-center"
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
        <div className="relative mx-auto mt-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 mr-[0]  mt-[80px] sm:mt-[0px] gradient-text-color md:ml-[-60px]">
              Stricker Digital
            </h1>
        {/* <Image src={BannerImg} alt="stricker Ditial Banner" className="border-2 border-solid border-[var(--color-purple)] z-2 w-[300px] md:w-[600px] h-auto rounded-full ease-in-out mx-auto" height={520} width={1840}  priority={true}/> */}
        <Image src={Leafs} alt="stricker Ditial Logo leafs" className="md:p-6 z-1 w-[60px] md:w-[150px] h-100 ease-in-out absolute leaf" height={150} width={150} />
         </div>
         <h1 className="text-3xl md:text-5xl font-bold mb-4 mr-[0] sm:mt-[0px]">
           <span className="flex text-3xl md:text-5xl pb-[5px] mt-[20px] gradient-text">
            {headlineText}</span>
         </h1>
         {subheadlineText ? (
           <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto gradient-text">
             {subheadlineText}
           </p>
         ) : null}
         {ctas?.length ? (
           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
             {ctas.map((cta) => (
               <a
                 key={cta.label}
                 href={cta.href}
                 className={`${cta.variant === "inverted" ? "btn-inverted" : "btn-gradient"} px-8 py-4 rounded-full min-w-[220px] text-center`}
               >
                 {cta.label}
               </a>
             ))}
           </div>
         ) : null}
       </motion.div>

       <Image src={CTAImage} alt="stricker Ditial Logo" className="md:p-6 z-2 w-[60px] md:w-[150px] h-100 ease-in-out absolute top-0 left-0" height={150} width={150} onClick={() => router.push("/")}/>
    </section>
    
  
    
    </>
  );
}
