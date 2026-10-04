'use client';

import Headline from "../components/Headline";
import Footer from "../components/Footer";
import JourneySection from "../components/JourneySection";
import Philosophy from "../components/Philosophy";
import MentoringWaitlist from "../components/MentoringWaitlist";
import LibraryTeaser from "../components/LibraryTeaser";
import MeetNick from "../components/MeetNick";
import { journeyCopy } from "../offers/copy";

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-page text-white">
      <Headline
        eyebrow="Follow along"
        headlineText={journeyCopy.headline}
        subheadlineText="Free videos, weekly notes, and soon, classes for developers moving into sales engineering. Every lesson is tested in the real world first."
        ctas={[
          { label: "Watch on YouTube", href: journeyCopy.youtubeUrl },
          { label: "Get the weekly notes", href: `#${journeyCopy.id}`, variant: "inverted" },
        ]}
      />
      <JourneySection className="bg-page" />
      <Philosophy />
      <MentoringWaitlist />
      <LibraryTeaser />
      <MeetNick />
      <Footer />
    </main>
  );
}
