'use client';
import Link from "next/link";
import Image from "next/image";
import LIImg from "../../../public/linkedin.png";
import instaImg from "../../../public/Instagram.png";
import CTAImage from "../../../public/NStransDark.png";
import facebookImg from "../../../public/facebook.png";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-white-gray text-black px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

        {/* Logo */}
        <div className="flex-shrink-0 mr-auto md:mr-0">
          <Image src={CTAImage} alt="NS  Logo" width={140} height={60} />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-green-600 transition">
            {language === 'es' ? 'Inicio' : 'Home'}
          </Link>
          <Link href="/#About" className="hover:text-green-600 transition">
            {language === 'es' ? 'Acerca de' : 'About'}
          </Link>
          {/* <Link href="/founders" className="hover:text-green-600 transition">
            {language === 'es' ? `Conéctate` : `Contact`}
          </Link> */}
          
        </div>

        {/* Social Media */}
        <div className="flex min-w-[12%] text-transparent opacity-0 overflow-hidden">NS </div>
        {/* <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/connectingdotsforlatinx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instaImg}
              alt="Instagram"
              width={60}
              height={60}
              className=" hover:scale-110 focus:outline-none transition-all duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://www.facebook.com/people/Connecting-Dots-for-Latinx-Professionals/61577340749137/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={facebookImg}
              alt="Facebook"
              width={60}
              height={60}
              className=" hover:scale-110 focus:outline-none transition-all duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/connecting-dots-for-latinx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LIImg}
              alt="LinkedIn"
              width={60}
              height={60}
              className=" hover:scale-110 focus:outline-none transition-all duration-300 ease-in-out"
            />
          </a>
          
        </div> */}
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-green-1000">
        &copy; {new Date().getFullYear()} 
            {` Nick Stricker Digital. All rights reserved.`}
      </div>
      <div className="text-center text-xs text-gray-500">
        {`The information contained within this website is the property of nickolasstricker.com. Any use of the images, content, or ideas expressed herein without the express written consent of nickolasstricker.com is prohibited.`}
      </div>
    </footer>
  );
}
