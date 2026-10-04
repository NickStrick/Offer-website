// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The consult page was replaced by the productized offers page.
      { source: "/revenue-consult", destination: "/audits", permanent: true },
      // The offers page became the audits page.
      { source: "/offers", destination: "/audits", permanent: true },
      // The old custom-website page's Digital Vault + books now live on the library page.
      { source: "/custom-website", destination: "/library", permanent: true },
      // Retired offer pages from the previous business model.
      { source: "/core", destination: "/audits", permanent: true },
      { source: "/free", destination: "/audits", permanent: true },
      { source: "/FloristOffer", destination: "/audits", permanent: true },
      { source: "/floristoffer", destination: "/audits", permanent: true },
    ];
  },
};

export default nextConfig;
