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
    title: "SmartSoft Solutions | Bookkeeping, Accounting, Payroll & Tax Services USA & Canada",
    description: "Get expert bookkeeping, accounting, invoicing, payroll & tax services for your small business. Serving USA and Canada. CPA-supervised, fast, and affordable.",
    url: 'https://www.smartsoftsolutions.org',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions - Bookkeeping & Accounting Services USA Canada' },
    ],
    type: 'website',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SmartSoftSolutions',
    title: 'SmartSoft Solutions | Bookkeeping, Accounting & Payroll Services USA Canada',
    description: 'Expert bookkeeping, accounting, payroll, invoicing & tax services for USA & Canada small businesses. CPA-supervised and affordable.',
    images: ['/og-image.jpg']
  }
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