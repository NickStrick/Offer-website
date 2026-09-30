// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The consult page was replaced by the productized offers page.
      { source: "/revenue-consult", destination: "/offers", permanent: true },
    ];
  },
};

export default nextConfig;
