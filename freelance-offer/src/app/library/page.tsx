'use client';
import Headline from "../components/Headline";
import Footer from "../components/Footer";
import Share from "../components/Share";

import BookLibrary from "./components/BookLibrary";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-page text-white">
      <Headline
        eyebrow="The Technical Library"
        headlineText="The Technical Library"
        subheadlineText="Systems thinking applied to engineering, skill acquisition, and business resilience. Two books, currently in development."
      />

      <BookLibrary />

      <Share subtitle="Share the library with someone building something hard" className="bg-gradient-black-purple" />
      <Footer />
    </main>
  );
}
