import HeroSlider from "./components/hero-slider";
import ShowreelSection from "./components/showreel-section";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import TestimonialsSection from "./components/testimonials-section";
import IndiaCitiesSection from "./components/india-cities-section";
import FeaturedProjects from "./components/featured-projects";
import HomeBlogSection from "./components/home-blog-section";
import RelatedLinks from "./components/related-links";
import { breadcrumbList, faqPage, localBusiness, stringifySchema, videoObject } from "@/lib/schema";
import { buildPageMetadata, HOME_FAQS, SITE_URL } from "@/lib/seo";
import { SHOWREEL } from "@/lib/page-media";

const homeMetadata = buildPageMetadata({
  title: "Website Development Company in India",
  description:
    "Website development in Ghaziabad for business sites, e-commerce & web apps across India. From ₹5,000. Next.js builds with fixed quotes.",
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

export const metadata = {
  ...homeMetadata,
  openGraph: {
    ...homeMetadata.openGraph,
    videos: [
      {
        url: `${SITE_URL}${SHOWREEL.src}`,
        secureUrl: `${SITE_URL}${SHOWREEL.src}`,
        type: "video/mp4",
        width: SHOWREEL.width,
        height: SHOWREEL.height,
      },
    ],
  },
};

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
    videoObject({
      name: SHOWREEL.title,
      description: SHOWREEL.description,
      thumbnailUrl: `${SITE_URL}${SHOWREEL.poster}`,
      uploadDate: "2026-09-17",
      duration: SHOWREEL.durationIso,
      contentUrl: `${SITE_URL}${SHOWREEL.src}`,
      embedUrl: `${SITE_URL}/#showreel`,
    }),
  ];

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(schemas) }}
      />
      <HeroSlider />
      <ShowreelSection />
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
