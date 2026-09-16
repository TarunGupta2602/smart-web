import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import TestimonialsSection from "./components/testimonials-section";
import IndiaCitiesSection from "./components/india-cities-section";
import FeaturedProjects from "./components/featured-projects";
import HomeBlogSection from "./components/home-blog-section";
import RelatedLinks from "./components/related-links";
import { breadcrumbList, faqPage, localBusiness, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, HOME_FAQS, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Website Development Company in India",
  description:
    "Website development company in Ghaziabad for business sites, e-commerce & web apps across India. From ₹5,000 — Next.js builds, fixed quotes, SEO-ready launches.",
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
    "website development company Ghaziabad",
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
        "Website development company in Ghaziabad building business websites, e-commerce stores, and web apps with Next.js and React. Packages from ₹5,000.",
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
      <FeaturedProjects />
      <PricingIndustriesSection />
      <ClientsSection />
      <IndiaCitiesSection />
      <HomeBlogSection />
      <FAQSection />
      <TestimonialsSection />
      <RelatedLinks excludeHref="/" />
    </div>
  );
}
