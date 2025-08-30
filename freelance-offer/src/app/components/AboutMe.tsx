'use client';
import { motion } from "framer-motion";
import Image from "next/image";

import aboutImg1 from "../../../public/citysquare.jpg";
import aboutImg2 from "../../../public/smallGroup.jpg";
import Pfp from "../../../public/face.jpg";
// import aboutAwards from "../../../public/awards.png";

export default function About() {

  return (<>
  <section id="About"  className="bg-gradient-purple-black  hero-section section-half-height pt-4 flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    
  
    {/* Right: Text */}
    <motion.div className="w-full md:w-1/2 relative z-1"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}>
      <h1 className="hero-title text-white drop-shadow-md mb-4">
       Who we work with
      </h1>
      <p className="hero-subtitle text-green-200 max-w-xl break-words text-lg">
        Event Organizers, Coaches, and Professionals who need a modern sign-up website or landing page and a way to get traffic.
        <span className="flex mt-2">We&apos;re based in Chicago, and we work with anyone who wants a system to get clients, attenddees, or just eye balls on you and your business.</span>
        <span className="flex mt-2">Whether you&apos;re a independent, a small business, or part of a larger organization, we tailor our services to meet your unique needs and goals.</span>
    </p>

          
    </motion.div>
    <motion.div className="md:w-1/2 max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap px-2 gradient-border-right"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: 70 },
          visible: { opacity: 1, x: 0 },
        }}><div className="gradient-border-inner">
      <Image
      priority={true}
      width={500}
      height={500}
        src={aboutImg1.src}
        alt="Connecting the Dots"
        className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
      /></div>
    </motion.div>
  </section>
  <section className="bg-gradient-purple-black hero-section section-half-height pt-4  flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    <motion.div className="md:w-1/2 max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap px-2 gradient-border-left"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}>
          <div className="gradient-border-inner">
      <Image
      priority={true}
      width={500}
      height={500}
        src={aboutImg2.src}
        alt="Connecting the Dots"
        className="w-auto rounded-lg shadow-lg max-h-[80vh] object-cover"
      /></div>
    </motion.div>
  
    {/* Right: Text */}
    <motion.div className="w-full md:w-1/2 relative z-1"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: 70 },
          visible: { opacity: 1, x: 0 },
        }}>
          <h1 className="hero-title text-white drop-shadow-md mb-4">
       What we do
      </h1>
      <p className="hero-subtitle text-[var(--color-purple)] max-w-xl text-lg">
        We build websites for you with a simple 3-step system to attract, sign up, and keep attendees and clients. 
        Our websites are used for centralized info, and our systems create scalable, reliable ways to get more attendees or clients for you.

        {/* <span className="flex mt-2">
          Fully custom Content with your brand or logo. 
          Strategies & guides to get traffic flowing to your website. 
          Designed using psychology and marketing research, making clicks irresistable.
          Systems to track data, allowing us to determine what’s holding you back and make improvements.
        </span> */}
        <span className="flex mt-2">
          Completely done for you and at no risk with a money back guarantee. The end result being something that lives on it&apos;s own and customization for you or your team to edit the content completely to your liking.
        </span>
      </p>

    </motion.div>
    
  </section>
  
  <section id="Headline"  className="bg-gradient-black-dark hero-section pt-4 pb-10 section-half-height flex flex-col md:flex-row items-center justify-center h-screen text-center md:text-left px-2 md:px-6 gap-8">
    {/* Left: Image */}
    
  
    {/* Right: Text */}
    <motion.div className="w-full md:w-1/2 relative z-1"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}>
      <h1 className="hero-title text-white drop-shadow-md mb-4">
        Nice to meet you!
      </h1>
      <p className="hero-subtitle text-green-200 max-w-xl text-lg">
        Hi, I&apos;m Nick Stricker, a full-stack developer and buisness student based in Chicago. I deliver digital solutions for coaches, professionals, and event organizers.
        <span className="flex mt-2">I&apos;ve spent the last 8 years building websites professionally with a variety of clients. 5 of those years have been in the event industry, optimizing attendee sign ups and engagement.
        I&apos;ve worked with non-profits, coaches, trainers, professionals and small buisnesses.
        </span>
        <span className="flex mt-2">
        I Have 6 web developer cetifications granted by Google, Amazon Web Services, Meta, and Bloomtech.</span>
        <span className="flex mt-2">
        I&apos;m here to help you launch quickly and start seeing results from day one.</span>
        </p>    

          
    </motion.div>
    <motion.div className="md:w-1/2 max-w-[500px] mt-2 flex justify-center flex-row flex-nowrap px-2 gradient-border"
      initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: 70 },
          visible: { opacity: 1, x: 0 },
        }}><div className="gradient-border-inner">
      <Image
      priority={true}
      width={300}
      height={300}
        src={Pfp.src}
        alt="Connecting the Dots"
        className="w-auto shadow-lg max-h-[80vh] object-cover rounded-full"
      /></div>
    </motion.div>
  </section>
    </>
  );
}
