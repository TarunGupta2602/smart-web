import ProjectsContent from "./ProjectsContent";
import Breadcrumb from "../components/Breadcrumb";
import { localBusiness, breadcrumbList, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
    title: "Website & E-commerce Portfolio | Selected Client Work",
    description:
        "Selected website development and e-commerce projects by SmartSoft Solutions — jewellery stores, lead-generation sites, and business websites built with Next.js and React.",
    path: "/projects",
    keywords: [
        "web development portfolio",
        "e-commerce website examples",
        "Next.js projects",
        "business website case studies",
    ],
});

export default function ProjectsPage() {
    const projects = [
        {
            title: "The Luxe Jewels",
            category: "E-commerce",
            timeline: "Live store",
            result: "Online orders enabled",
            description: "A live jewellery brand site with product discovery, promotions like Buy 2 Get 1 Free, and pan-India shipping messaging. Built for product catalogs, collections, gift price edits, and conversion-focused mobile shopping UX.",
            tags: ["Next.js", "React", "E-commerce", "Razorpay"]
        },
        {
            title: "ZamZam Print",
            category: "Business Website",
            timeline: "Lead-gen launch",
            result: "Call-first lead flow",
            description: "Turns urgent printer issues into phone leads with clear service pages for HP, Canon, Brother, Epson, and more. Brand and problem-based support pages with call-first CTAs and a callback request flow.",
            tags: ["Next.js", "React", "SEO", "Lead gen"]
        },
        {
            title: "Service Business Marketing Site",
            category: "Business Website",
            timeline: "Few weeks",
            result: "Clear package conversion",
            description: "A service business website that sells packages clearly and routes visitors to free consultation or call. Structured service and pricing sections with strong CTAs so prospects understand the offer before they enquire.",
            tags: ["Next.js", "React", "Marketing site", "Conversion"]
        }
    ];

    const projectSchema = localBusiness({
        name: 'SmartSoft Solutions Selected Work',
        description: 'Portfolio of business websites, e-commerce stores, and lead-generation sites.'
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Work', url: `${SITE_URL}/projects` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Work', url: '/projects' }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([projectSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="container mx-auto px-6 pt-4 pb-2" />
            <ProjectsContent projects={projects} />
        </>
    );
}
