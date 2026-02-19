/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
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
