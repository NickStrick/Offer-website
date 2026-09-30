// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The consult page was replaced by the productized offers page.
      { source: "/revenue-consult", destination: "/offers", permanent: true },
      // The old custom-website page's Digital Vault + books now live on the library page.
      { source: "/custom-website", destination: "/library", permanent: true },
    ];
  },
};

export default nextConfig;
