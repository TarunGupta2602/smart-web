import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import TestimonialsSection from "./components/testimonials-section";
import { breadcrumbList, faqPage, localBusiness, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, HOME_FAQS, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Development Company | E-commerce & Web Apps",
  description:
    "SmartSoft Solutions is a website development company for business websites, e-commerce stores, and web apps. Next.js & React builds with fixed quotes, SEO-ready launches, and remote delivery for USA, Canada, and worldwide clients.",
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
      <FAQSection />
      <TestimonialsSection />
    </div>
  );
}
