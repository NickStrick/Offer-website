import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: "Follow Along",
  description:
    "Free videos and weekly notes on communication, sales, and building a business, plus a waitlist for developer-to-sales-engineer classes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
