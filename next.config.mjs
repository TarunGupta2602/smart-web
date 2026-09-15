import { legacyRedirects } from "./lib/legacy-redirects.mjs";

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fqtwfnlujnjtikqtpydd.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.smartsoftsolutions.org",
      },
      {
        protocol: "https",
        hostname: "smartsoftsolutions.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "videos.pexels.com",
      },
    ],
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
