import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: "Offers & Pricing",
  description: "Career and communication programs for technical builders, plus fixed-price architecture audits and enterprise implementations for B2B platforms.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
