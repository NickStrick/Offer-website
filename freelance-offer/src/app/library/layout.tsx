import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: "Library: The Digital Vault & Books",
  description: "The Digital Vault private portal platform and upcoming books on systems thinking, vocal authority, and stoic execution.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
