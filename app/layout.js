import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { organization, webSite, stringifySchema } from "@/lib/schema";

const companySans = IBM_Plex_Sans({
  variable: "--font-company-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://www.smartsoftsolutions.org'),
  title: {
    default: "SmartSoft Solutions | Website Development, E-commerce & Business Web Apps",
    template: "%s | SmartSoft Solutions"
  },
  description: "SmartSoft Solutions builds business websites, e-commerce stores, and web apps with Next.js and React. Marketing sites, online stores, and full-stack products for companies that need a live launch — not a demo.",
  keywords: [
    "website development company", "business website design", "e-commerce website development",
    "Next.js development agency", "React web development", "Shopify alternative custom store",
    "web app development", "digital marketing services", "SEO company",
    "freelance website agency USA", "website design Canada", "custom web development India",
    "conversion focused websites", "online store development", "Firebase Supabase apps"
  ],
  authors: [{ name: "SmartSoft Solutions" }],
  creator: "SmartSoft Solutions",
  publisher: "SmartSoft Solutions",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.smartsoftsolutions.org',
    siteName: 'SmartSoft Solutions',
    title: 'SmartSoft Solutions | Websites, E-commerce & Web Apps',
    description: 'We build marketing sites, e-commerce stores, and full-stack web apps with Next.js, React, Firebase, and Supabase — quoted up front, built to launch.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SmartSoft Solutions - Website Development & Digital Services',
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
    title: 'SmartSoft Solutions | Websites, E-commerce & Web Apps',
    description: 'Business websites, online stores, and web apps built with Next.js & React. Live products, clear quotes.',
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
        className={`${companySans.variable} antialiased text-slate-900 bg-white font-sans`}
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
                description: 'SmartSoft Solutions builds business websites, e-commerce stores, and web apps with Next.js and React for companies that need a live product — not a demo.',
                email: 'smartsoftsols@gmail.com',
              }),
              webSite({ url: 'https://www.smartsoftsolutions.org', description: 'SmartSoft Solutions — Website development, e-commerce, and digital services for growing businesses' }),
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
