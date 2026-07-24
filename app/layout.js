import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { organization, webSite, stringifySchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.smartsoftsolutions.org'),
  title: {
    default: "SmartSoft Solutions | Bookkeeping, Accounting, Payroll & Tax Services USA & Canada",
    template: "%s | SmartSoft Solutions"
  },
  description: "SmartSoft Solutions provides professional bookkeeping, accounting, invoicing, payroll processing, and tax preparation services for small businesses in the USA and Canada. Accurate, affordable, and CPA-supervised financial services.",
  keywords: [
    "bookkeeping services USA", "accounting firm USA", "payroll services USA", "tax preparation USA",
    "invoicing services", "online bookkeeper", "small business accounting USA", "QuickBooks bookkeeping",
    "CPA accounting services", "payroll processing Canada", "bookkeeping services Canada",
    "tax filing USA Canada", "IRS tax preparation", "accounting services small business",
    "virtual bookkeeper USA", "remote accounting services", "business tax preparation",
    "payroll management", "accounts receivable", "accounts payable", "financial reporting"
  ],
  authors: [{ name: "SmartSoft Solutions" }],
  creator: "SmartSoft Solutions",
  publisher: "SmartSoft Solutions",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.smartsoftsolutions.org',
    siteName: 'SmartSoft Solutions',
    title: 'SmartSoft Solutions | Accounting & Technology Services',
    description: 'Professional accounting, bookkeeping, payroll, tax, website designing, digital marketing, and SEO services for small businesses across USA, Canada, and India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SmartSoft Solutions - Accounting & Technology Services',
      },
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'SmartSoft Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartSoft Solutions | Accounting & Technology Services',
    description: 'Accounting, bookkeeping, payroll, tax, website design, digital marketing & SEO for USA, Canada & India.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    telephone: '+1-707-708-4062',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <meta name="google-site-verification" content="2XUc_M2JA9i0tn_jLcEAgvJykTx-E0-BgqFoef2Oma8" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="IN" />
        <meta name="telephone" content="+1-707-708-4062" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3TNTSBN');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-white`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3TNTSBN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Global Organization + WebSite schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifySchema([
              organization({
                logo: '/images/logo.png',
                description: 'SmartSoft Solutions is a trusted provider of bookkeeping, accounting, invoicing, payroll management, and tax preparation services for small businesses in the USA and Canada.',
              }),
              webSite({ url: 'https://www.smartsoftsolutions.org', description: 'SmartSoft Solutions - Professional Bookkeeping, Accounting, Payroll & Tax Services for USA & Canada' }),
            ]),
          }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
