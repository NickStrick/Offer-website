import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: "Contact",
  description: "Get a 48-Hour Blueprint, talk about a Fractional Solutions Architect, get a fixed quote, or join the weekly notes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
