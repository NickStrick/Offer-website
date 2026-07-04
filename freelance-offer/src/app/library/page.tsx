'use client';
import Headline from "../components/Headline";
import Footer from "../components/Footer";
import Share from "../components/Share";
import { SeperatorWave } from "../components/SeperatorWave";

import BookLibrary from "./components/BookLibrary";

const topWaveType = "1-hill";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Headline
        headlineText="The Technical Library"
        subheadlineText="Systems thinking applied to engineering, skill acquisition, and business resilience—two books, currently in development."
      />
      <SeperatorWave type={topWaveType} flip={false} color={"var(--bg-dark)"} />

      <BookLibrary />

      <Share subtitle="Share the library with someone building something hard" className="bg-gradient-black-purple" />
      <Footer />
    </main>
  );
}
