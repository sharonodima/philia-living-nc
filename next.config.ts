import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ['about', 'services', 'benefits', 'team', 'testimonials', 'contact'].map(section => ({
      source: `/${section}`,
      destination: `/#${section}`,
      permanent: false,
    }));
  },
};

export default nextConfig;
