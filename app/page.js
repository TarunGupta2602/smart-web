import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import TestimonialsSection from "./components/testimonials-section";
import { breadcrumbList, stringifySchema } from "@/lib/schema";

export const metadata = {
  title: "SmartSoft Solutions | Business Websites, E-commerce & Web Apps",
  description: "SmartSoft Solutions builds marketing websites, e-commerce stores, and full-stack web apps with Next.js, React, Firebase, and Supabase. Clear quotes, live launches, remote delivery for USA, Canada, and beyond.",
  keywords: [
    "website development company", "business website design", "e-commerce development",
    "Next.js agency", "React web apps", "digital marketing", "SEO services",
    "custom online store", "web development USA Canada", "hire web development company"
  ],
  alternates: {
    canonical: 'https://www.smartsoftsolutions.org',
  },
  openGraph: {
    title: "SmartSoft Solutions | Websites, E-commerce & Web Apps",
    description: "Paid builds for marketing sites, online stores, and web apps. You get a live product, not a demo.",
    url: 'https://www.smartsoftsolutions.org',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions - Website Development' },
      { url: '/images/logo.png', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' },
    ],
    type: 'website',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SmartSoftSolutions',
    title: 'SmartSoft Solutions | Websites, E-commerce & Web Apps',
    description: 'Business websites, online stores, and web apps built to launch.',
    images: ['/og-image.jpg']
  },
  other: {
    category: 'Website Development & Digital Services',
    classification: 'Technology',
  },
};

export default function Homepage() {
  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: 'https://www.smartsoftsolutions.org/' }
  ]);

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(breadcrumbSchema) }}
        />
        <section className="mb-2 md:mb-6 lg:mb-2">
          <HeroSlider />
        </section>
        <section className="mb-2 md:mb-6 lg:mb-2">
          <ServicesSection />
        </section>
        <section className="mb-2 md:mb-6 lg:mb-2">
          <PricingIndustriesSection />
        </section>
        <section className="mb-2 md:mb-6 lg:mb-2">
          <ClientsSection />
        </section>
        <section className="mb-2 md:mb-6 lg:mb-2">
          <FAQSection />
        </section>
        <TestimonialsSection />
      </div>
    </main>
  );
}
