// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The consult page was replaced by the productized offers page.
      { source: "/revenue-consult", destination: "/offers", permanent: true },
      // The old custom-website page's Digital Vault + books now live on the library page.
      { source: "/custom-website", destination: "/library", permanent: true },
      // Retired offer pages from the previous business model.
      { source: "/core", destination: "/offers", permanent: true },
      { source: "/free", destination: "/offers", permanent: true },
      { source: "/FloristOffer", destination: "/offers", permanent: true },
      { source: "/floristoffer", destination: "/offers", permanent: true },
    ];
  },
};

export default nextConfig;
