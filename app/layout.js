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
    default: "SmartSoft Solutions | Digital Engineering & Strategic Growth",
    template: "%s | SmartSoft Solutions"
  },
  description: "Elite digital engineering, high-performance web architecture, and strategic branding solutions. SmartSoft Solutions empowers businesses with world-class software and ROI-driven digital marketing.",
  keywords: ["Digital Engineering", "Software Development", "Web Design", "SEO Strategy", "Brand Growth", "Cloud Infrastructure"],
  authors: [{ name: "SmartSoft Solutions" }],
  creator: "SmartSoft Solutions",
  publisher: "SmartSoft Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.smartsoftsolutions.org',
    siteName: 'SmartSoft Solutions',
    title: 'SmartSoft Solutions | Digital Engineering & Strategic Growth',
    description: 'Elite digital engineering, high-performance web architecture, and strategic branding solutions. SmartSoft Solutions empowers businesses with world-class software and ROI-driven digital marketing.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SmartSoft Solutions - Engineering Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartSoft Solutions | Digital Engineering',
    description: 'Elite digital engineering and strategic branding solutions.',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <meta name="google-site-verification" content="2XUc_M2JA9i0tn_jLcEAgvJykTx-E0-BgqFoef2Oma8" />
        <meta name="geo.region" content="US" />
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
              organization({ logo: '/favicon.ico', description: 'SmartSoft Solutions is a leading digital engineering firm and one-stop shop for web development, software solutions, and brand marketing.' }),
              webSite({ url: 'https://www.smartsoftsolutions.org', description: 'SmartSoft Solutions - Digital Engineering & Strategic Growth Experts' }),
            ]),
          }}
        />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
