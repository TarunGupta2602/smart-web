import ProjectsContent from "./ProjectsContent";
import Breadcrumb from "../components/Breadcrumb";
import { itemList, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Strategic Case Studies | Impactful Technical Delivery | SmartSoft Solutions",
    description: "Explore our successful projects in enterprise software, digital retail, and Fintech. See how SmartSoft Solutions delivers impactful results for global brands. Discover our technical delivery and business impact.",
    keywords: ["Enterprise Software Case Studies", "Digital Retail Projects", "Fintech Solutions", "Technical Delivery Success", "Global Brand Projects", "SmartSoft Solutions Projects", "Case Studies"],
    alternates: {
        canonical: `${SITE_URL}/projects`,
    },
    openGraph: {
        title: "Our Success Stories | Case Studies | SmartSoft Solutions",
        description: "See how we've transformed businesses through high-impact technical delivery. Discover our technical delivery and business impact.",
        url: `${SITE_URL}/projects`,
        images: [
            { url: '/images/banner.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions Projects' },
            { url: '/images/logo.png', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' }
        ],
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@SmartSoftSolutions',
        title: 'Our Success Stories | Case Studies | SmartSoft Solutions',
        description: 'See how we\'ve transformed businesses through high-impact technical delivery. Discover our technical delivery and business impact.',
        images: ['/images/banner.jpg']
    }
};

export default function ProjectsPage() {
    const caseStudies = [
        {
            title: "Global Supply Chain Optimizer",
            category: "Enterprise Software",
            image: "/images/po4.png",
            challenge: "Simplifying complex logistics across 12 countries with real-time tracking.",
            outcome: "35% increase in operational efficiency and 20% reduction in fuel costs.",
            tags: ["React Native", "Node.js", "AWS Cloud"]
        },
        {
            title: "Apex E-Commerce Ecosystem",
            category: "Digital Retail",
            image: "/images/p9.jpg",
            challenge: "Migrating a legacy retail brand to a high-speed, headless commerce architecture.",
            outcome: "150% growth in mobile conversions within the first quarter.",
            tags: ["Next.js", "Shopify API", "Tailwind"]
        },
        {
            title: "Secure FinTech Gateway",
            category: "Financial Services",
            image: "/images/p4.jpg",
            challenge: "Architecting a multi-layered encryption system for global transactions.",
            outcome: "Zero security breaches reported over 5 million processed transactions.",
            tags: ["Cybersecurity", "PostgreSQL", "Dedicated Auth"]
        }
    ];
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Projects', url: `${SITE_URL}/projects` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Projects', url: '/projects' }
    ];

    const techStack = [
        { name: "Frontend Mastery", description: "Crafting fluid pixels with React, Next.js, and advanced CSS animations.", icon: "🎨" },
        { name: "Backend Robustness", description: "Scalable architectures built on Node.js, Python, and Go for high loads.", icon: "⚙️" },
        { name: "Cloud Excellence", description: "Zero-downtime deployments using AWS, Azure, and Google Cloud Platform.", icon: "☁️" },
        { name: "Mobile Innovation", description: "Native and hybrid app development for iOS and Android ecosystems.", icon: "📱" }
    ];

    const projectSchema = itemList(caseStudies.map(s => `https://www.smartsoftsolutions.org/projects#${s.title.toLowerCase().replace(/ /g, '-')}`), "SmartSoft Solutions Case Studies");

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([projectSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="container mx-auto px-6 pt-4 pb-2" />
            <ProjectsContent caseStudies={caseStudies} techStack={techStack} />
        </>
    );
}
