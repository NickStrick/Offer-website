'use client';
import Headline from "../components/Headline";
import Footer from "../components/Footer";
import MeetNick from "../components/MeetNick";

import DigitalVault from "./components/DigitalVault";
import BookLibrary from "./components/BookLibrary";
import { libraryCopy } from "./copy";

export default function LibraryPage() {
  const { headline } = libraryCopy;

  return (
    <main className="min-h-screen bg-page text-white">
      <Headline
        eyebrow={headline.eyebrow}
        headlineText={headline.headlineText}
        subheadlineText={headline.subheadlineText}
        ctas={[...headline.ctas]}
      />

      <DigitalVault />
      <BookLibrary />
      <MeetNick />

      <Footer />
    </main>
  );
}
