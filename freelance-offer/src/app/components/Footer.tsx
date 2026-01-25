'use client';
import Link from "next/link";
import Image from "next/image";
import CTAImage from "../../../public/SDLogoTrans.png";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-black-dark text-white px-6 py-12">
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
          {/* <Link href="/free" className="hover:text-green-600 transition">
            {language === 'es' ? 'Inicio' : 'Free Stuff'}
          </Link> */}
          <Link href="/custom-website" className="hover:text-green-600 transition">
            {language === 'es' ? '' : 'Custom Site'}
          </Link>
          <Link href="/core" className="hover:text-green-600 transition">
            {language === 'es' ? 'Acerca de' : 'Traffic System'}
          </Link>
          <Link href="https://www.nickolasstricker.com" className="hover:text-green-600 transition">
            {language === 'es' ? 'Acerca de' : 'Portfolio'}
          </Link>
          
        </div>

        {/* Social Media */}
        <div className="flex min-w-[12%] text-transparent opacity-0 overflow-hidden">NS </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-green-1000 mb-2">
        &copy; {new Date().getFullYear()} 
            <span className="ml-2">{`Stricker Digital. All rights reserved.`}</span>
      </div>
      <div className="text-center text-xs text-gray-400">
        {`The information contained within this website is the property of nickolasstricker.com. Any use of the images, content, or ideas expressed herein without the express written consent of nickolasstricker.com is prohibited.`}
      </div>
    </footer>
  );
}
