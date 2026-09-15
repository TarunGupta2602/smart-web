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
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'videos.pexels.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/blog-uploads', destination: '/blog', permanent: true },
      { source: '/blog-uploads/:path*', destination: '/blog', permanent: true },
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
