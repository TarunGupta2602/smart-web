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
  async redirects() {
    return [
      { source: '/services/bookkeeping', destination: '/services', permanent: true },
      { source: '/services/accounting', destination: '/services', permanent: true },
      { source: '/services/invoicing', destination: '/services', permanent: true },
      { source: '/services/payroll', destination: '/services', permanent: true },
      { source: '/services/tax-preparation', destination: '/services', permanent: true },
      { source: '/services/financial-consulting', destination: '/services', permanent: true },
    ];
  },
};

export default nextConfig;
