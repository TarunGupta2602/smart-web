import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://smartsoftsolutions.org'),
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
    url: 'https://smartsoftsolutions.org',
    siteName: 'SmartSoft Solutions',
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-white`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
