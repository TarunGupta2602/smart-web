import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import { breadcrumbList, stringifySchema } from "@/lib/schema";

export const metadata = {
  title: "SmartSoft Solutions | Website & App Development for USA Small Business",
  description: "SmartSoft Solutions specializes in website development, mobile app development, and professional content writing for USA small businesses and startups. Get fast, secure, and SEO-optimized digital solutions to grow your business online.",
  keywords: [
    "Website Development USA", "Mobile App Development USA", "Content Writing Services USA", "Small Business Websites", "Startup Web Solutions", "SEO Web Design", "Affordable App Development", "Professional Content Writing", "Fast Website Launch", "Custom Web Development"
  ],
  alternates: {
    canonical: 'https://smartsoftsolutions.org',
  },
  openGraph: {
    title: "SmartSoft Solutions | Website & App Development for USA Small Business",
    description: "Get custom websites, mobile apps, and content writing services for your small business or startup. Fast delivery, SEO-focused, and affordable pricing.",
    url: 'https://smartsoftsolutions.org',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions - Website & App Development' },
      { url: '/images/logo.png', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' }
    ],
    type: 'website',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SmartSoftSolutions',
    title: 'SmartSoft Solutions | Website & App Development for USA Small Business',
    description: 'Get custom websites, mobile apps, and content writing services for your small business or startup. Fast delivery, SEO-focused, and affordable pricing.',
    images: ['/og-image.jpg']
  }
};

export default function Homepage() {
  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: 'https://www.smartsoftsolutions.org/' }
  ]);

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(breadcrumbSchema) }}
        />
        <section className="mb-12 md:mb-16 lg:mb-20">
          <HeroSlider />
        </section>
        <section className="mb-12 md:mb-16 lg:mb-20">
          <ServicesSection />
        </section>
        <section className="mb-12 md:mb-16 lg:mb-20">
          <PricingIndustriesSection />
        </section>
        <section className="mb-12 md:mb-16 lg:mb-20">
          <ClientsSection />
        </section>
        <section className="mb-12 md:mb-16 lg:mb-20">
          <FAQSection />
        </section>
      </div>
    </main>
  );
// ...existing code...
}