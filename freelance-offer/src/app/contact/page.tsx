'use client';
import Link from "next/link";
import Image from "next/image";

import joseImage from "../../../public/founders/omar.jpg";
import fernandoImage from "../../../public/founders/fernando.jpg";
import instaImg from "../../../public/Instagram.png";
import LIImg from "../../../public/linkedin.png";
import facebookImg from "../../../public/facebook.png";

import locImg from "../../../public/location.png";

import foundersImg1 from "../../../public/founders/fernando&omar.png";
import foundersImg2 from "../../../public/founders/omar&fernando2.jpg";
import foundersImg3 from "../../../public/founders/fernando&omar3.jpg";

import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function FoundersPage() {
  const { language } = useLanguage();

  return (
    <>
      <div className="min-h-screen text-white">
        <section className="text-center py-12 px-6 bg-connect">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === 'es' ? 'Conéctate con Nosotros' : 'Connect With Us'}
          </h2>
          <p className="mb-4">
              {language === 'es'
    ? '¿Quieres colaborar, asociarte con nosotros o ser voluntario? Envíanos un mensaje directo o un correo electrónico a nuestros fundadores, y nos pondremos en contacto contigo.'
    : 'Want to collaborate, partner with us, or volunteer?  \nDM or email our founders and we\'ll reach out.'}

            </p>
          <ul className="text-lg flex justify-center items-center flex-row flex-wrap">
            <li className="p-4">
              <a
                href="https://www.instagram.com/connectingdotsforlatinx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                <Image
                  src={instaImg}
                  height={70}
                  width={70}
                  alt="Instagram"
                  className="w-[60px] h-[60px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="p-4">
              <a
                href="https://www.facebook.com/people/Connecting-Dots-for-Latinx-Professionals/61577340749137/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                <Image
                  src={facebookImg}
                  height={70}
                  width={70}
                  alt="Facebook"
                  className="w-[60px] h-[60px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="p-4">
              <a
                href="https://www.linkedin.com/company/connecting-dots-for-latinx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:underline"
              >
                <Image
                  src={LIImg}
                  height={70}
                  width={70}
                  alt="LinkedIn"
                  className="w-[60px] h-[60px] active:opacity-40 focus:opacity-50 hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            
          </ul>
          <div className="mt-10">
             
            <h3 className="text-1x1 md:text-2xl  text-wrap font-bold text-white mb-6 email-connect max-w-[100%]" >
              <span> </span> <span className="break-words text-1x1 md:text-2xl font-bold max-w-[100%] text-wrap text-white mb-6 hero-underline">connectingdotsforlatinx@gmail.com</span> 
            </h3>
            <h3 className="text-1x1 md:text-2xl  text-wrap font-bold text-white mb-6 email-connect max-w-[100%]" >
              
                <Image
                  src={locImg}
                  height={20}
                  width={20}
                  alt="location"
                  className="w-[20px] h-[20px] inline-block mr-4 mb-2"
                />
                <span className="break-words text-1x1 md:text-2xl font-bold max-w-[100%] text-wrap text-white mb-6">Chicago, IL</span> 
            </h3>
              {/* <Link
              href="/#events"
              className="btn-gradient inline-block px-6 py-3 font-semibold rounded transition"
            >
              {language === 'es' ? 'Suscríbete a nuestro boletín' : 'Subscribe to our Newsletter'}  
            </Link> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
