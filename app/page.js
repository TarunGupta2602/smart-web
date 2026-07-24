import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import TestimonialsSection from "./components/testimonials-section";
import { breadcrumbList, stringifySchema } from "@/lib/schema";

export const metadata = {
  title: "SmartSoft Solutions | Bookkeeping, Accounting, Payroll & Tax Services for USA & Canada Small Business",
  description: "SmartSoft Solutions offers professional bookkeeping, accounting, invoicing, payroll processing, and tax preparation services for small businesses across the USA and Canada. CPA-supervised, accurate, affordable, and fully remote.",
  keywords: [
    "bookkeeping services USA", "accounting services USA", "payroll services USA", "tax preparation USA",
    "invoicing services USA", "small business bookkeeper", "online accounting firm USA",
    "bookkeeping services Canada", "payroll processing Canada", "tax filing USA Canada",
    "QuickBooks bookkeeper", "virtual accountant USA", "CPA services small business",
    "accounts payable receivable USA", "IRS tax preparation service", "business accounting USA",
    "remote bookkeeping USA", "affordable accounting services", "monthly bookkeeping service",
    "tax return preparation USA Canada"
  ],
  alternates: {
    canonical: 'https://www.smartsoftsolutions.org',
  },
  openGraph: {
    title: "SmartSoft Solutions | Accounting & Technology Services USA, Canada & India",
    description: "Expert accounting, bookkeeping, payroll, tax, website designing, digital marketing, and SEO for small businesses. Serving USA, Canada, and India.",
    url: 'https://www.smartsoftsolutions.org',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions - Accounting & Technology Services' },
      { url: '/images/logo.png', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' },
    ],
    type: 'website',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SmartSoftSolutions',
    title: 'SmartSoft Solutions | Accounting & Technology Services',
    description: 'Accounting, bookkeeping, payroll, tax, website design, digital marketing & SEO for USA, Canada & India.',
    images: ['/og-image.jpg']
  },
  other: {
    category: 'Accounting & Technology',
    classification: 'Financial & Technology',
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