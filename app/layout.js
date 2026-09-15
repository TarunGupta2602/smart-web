import { Syne, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { organization, webSite, stringifySchema } from "@/lib/schema";
import { CORE_KEYWORDS, SITE_URL } from "@/lib/seo";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SmartSoft Solutions | Website Development Company for Business & E-commerce",
    template: "%s | SmartSoft Solutions",
  },
  description:
    "SmartSoft Solutions builds business websites, e-commerce stores, and web apps with Next.js and React. Fixed quotes, SEO-ready launches, and remote delivery for growing companies.",
  keywords: CORE_KEYWORDS,
  authors: [{ name: "SmartSoft Solutions", url: SITE_URL }],
  creator: "SmartSoft Solutions",
  publisher: "SmartSoft Solutions",
  category: "Website Development",
  applicationName: "SmartSoft Solutions",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "SmartSoft Solutions",
    title: "SmartSoft Solutions | Website Development, E-commerce & Web Apps",
    description:
      "Business websites, online stores, and web apps built with Next.js & React. Clear quotes. Live launches.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmartSoft Solutions — Website Development & Digital Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartSoft Solutions | Website Development & E-commerce",
    description:
      "Business websites, online stores, and web apps built with Next.js & React.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "48x48" },
      { url: "/favicon-32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=3", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico?v=3"],
    apple: [{ url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "2XUc_M2JA9i0tn_jLcEAgvJykTx-E0-BgqFoef2Oma8",
  },
  other: {
    telephone: "+1-707-708-4062",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3TNTSBN');`,
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} antialiased text-slate-900 bg-white font-sans`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3TNTSBN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifySchema([
              organization({
                logo: "/images/logo.png",
                description:
                  "SmartSoft Solutions is a website development company that builds business websites, e-commerce stores, and web apps with Next.js and React.",
              }),
              webSite({
                url: SITE_URL,
                description:
                  "SmartSoft Solutions — website development, e-commerce, SEO, and digital marketing for growing businesses.",
              }),
            ]),
          }}
        />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
