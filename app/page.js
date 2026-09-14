import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import TestimonialsSection from "./components/testimonials-section";
import IndiaCitiesSection from "./components/india-cities-section";
import { breadcrumbList, faqPage, localBusiness, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, HOME_FAQS, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Development Company | E-commerce & Web Apps",
  description:
    "SmartSoft Solutions is a website development company for business websites, e-commerce stores, and web apps across India (Delhi, Mumbai, Bangalore & more), Canada, and worldwide. Next.js & React builds with fixed quotes and SEO-ready launches.",
  path: "/",
  keywords: [
    "website development company",
    "business website design",
    "e-commerce website development",
    "Next.js development company",
    "hire web developer",
    "custom web app development",
    "SEO friendly website development",
    "online store development",
    "website development company in Delhi",
    "website development company in Mumbai",
    "website development company in Bangalore",
  ],
});

export default function Homepage() {
  const schemas = [
    breadcrumbList([{ name: "Home", url: `${SITE_URL}/` }]),
    localBusiness({
      name: "SmartSoft Solutions",
      description:
        "Website development company building business websites, e-commerce stores, and web apps with Next.js and React.",
      url: SITE_URL,
    }),
    faqPage(HOME_FAQS),
  ];

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(schemas) }}
      />
      <HeroSlider />
      <ServicesSection />
      <PricingIndustriesSection />
      <ClientsSection />
      <IndiaCitiesSection />
      <FAQSection />
      <TestimonialsSection />
    </div>
  );
}
