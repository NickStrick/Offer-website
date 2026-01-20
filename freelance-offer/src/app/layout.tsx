import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

import { LanguageProvider } from './context/LanguageContext';
import AnalyticsListener from "./components/AnalyticsListener";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.strickerdigital.com"),
  title: "Stricker Digital",
  description: "Website & Marketing strategies tailored to you by a seasoned professional.",
  openGraph: {
    title: "Stricker Digital",
    description: "Website & Marketing strategies tailored to you by a seasoned professional.",
    url: "https://www.strickerdigital.com",
    siteName: "Stricker Digital",
    images: [
      {
        url: "/SDLogocircle.png",   // your image in /public
        width: 1200,
        height: 1200,
        alt: "Stricker Digital Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stricker Digital",
    description: "Website & Marketing strategies tailored to you by a seasoned professional.",
    images: ["/SDLogocircle.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><LanguageProvider>
        <main className="overflow-hidden">{children}</main>
      </LanguageProvider>
      {/* Google Analytics */}
      <Suspense fallback={null}>
        <AnalyticsListener />
      </Suspense>
        {GA_ID ? (
          <>
            <Script
              id="ga-src"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
      </body>
       
    </html>
  );
}
