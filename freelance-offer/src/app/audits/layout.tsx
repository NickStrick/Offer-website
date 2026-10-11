import type { Metadata } from "next";
import { AUDIT_PRICE } from "../offers/copy";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: "Revenue Leak Audits",
  description:
    `An ${AUDIT_PRICE} fixed-price audit that finds what's costing your store or app sales, plus done-for-you fixes at a fixed quote.`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
