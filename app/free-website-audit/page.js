import AuditContent from "./AuditContent";
import Breadcrumb from "../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Free Website Review for Indian Businesses",
  description:
    "Free written website review from SmartSoft Solutions — speed, mobile, offers, and enquiry path. No quote required. Based in Ghaziabad, working across India.",
  path: "/free-website-audit",
  keywords: [
    "free website audit",
    "free website review India",
    "website review for small business",
    "Next.js website audit",
    "business website health check",
  ],
});

export default function FreeWebsiteAuditPage() {
  const pageSchema = webPage({
    name: "Free website review",
    description:
      "Written review of your live website: mobile clarity, speed, offers, and enquiry path. No project quote required.",
    url: `${SITE_URL}/free-website-audit`,
  });

  const breadcrumbSchema = breadcrumbList(
    [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Free website review", url: `${SITE_URL}/free-website-audit` },
    ],
    SITE_URL
  );

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Free website review", url: "/free-website-audit" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema([pageSchema, breadcrumbSchema]) }}
      />
      <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-6 pt-4 pb-2" />
      <AuditContent />
    </>
  );
}
