import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: "Contact",
  description: "Apply for a cohort, request a $5k enterprise audit, or ask about an implementation retainer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
