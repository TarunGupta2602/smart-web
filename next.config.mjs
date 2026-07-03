/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fqtwfnlujnjtikqtpydd.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'www.smartsoftsolutions.org',
      },
      {
        protocol: 'https',
        hostname: 'smartsoftsolutions.org',
      },
    ],
  },
};

export default nextConfig;
