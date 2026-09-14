import ProjectsContent from "./ProjectsContent";
import Breadcrumb from "../components/Breadcrumb";
import { localBusiness, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Selected Work | Websites & E-commerce Projects",
    description: "Real client projects from SmartSoft Solutions — e-commerce stores, lead-gen websites, and business sites built with Next.js and React.",
    keywords: ["web development portfolio", "e-commerce case study", "Next.js projects", "business website examples"],
    alternates: {
        canonical: `${SITE_URL}/projects`,
    },
    openGraph: {
        title: "Selected Work | SmartSoft Solutions",
        description: "E-commerce, lead-gen, and business websites shipped for real clients.",
        url: `${SITE_URL}/projects`,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions' }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@SmartSoftSolutions',
        title: 'Selected Work | SmartSoft Solutions',
        description: 'E-commerce, lead-gen, and business websites shipped for real clients.',
        images: ['/og-image.jpg']
    },
};

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
