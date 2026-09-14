import AboutContent from "./AboutContent";
import Breadcrumb from "../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "About Us | Website & Digital Product Team",
    description: "SmartSoft Solutions builds business websites, e-commerce stores, and web apps with Next.js and React. Meet the company behind live launches for growing brands.",
    keywords: ["about SmartSoft Solutions", "web development company", "Next.js agency", "e-commerce developers"],
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: "About SmartSoft Solutions",
        description: "We build websites and web apps that help businesses get customers.",
        url: `${SITE_URL}/about`,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions' },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "About SmartSoft Solutions",
        description: "We build websites and web apps that help businesses get customers.",
        images: ['/og-image.jpg'],
    },
};

export default function AboutPage() {
    const expertiseItems = [
        {
            name: "Next.js & React",
            description: "Modern frontends that load fast, rank well, and stay maintainable — marketing sites, stores, and product UIs.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            color: "bg-yellow-50 text-yellow-600"
        },
        {
            name: "E-commerce & Payments",
            description: "Catalogs, carts, offers, and checkout flows with real payment integrations so stores can take orders.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
            ),
            color: "bg-orange-50 text-orange-600"
        },
        {
            name: "Firebase & Supabase",
            description: "Auth, databases, and dashboards for web apps your team and customers can use every day.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
            ),
            color: "bg-slate-50 text-slate-600"
        }
    ];

    const team = [
        { initials: "TG", name: "Tarun G.", role: "Managing Director" },
        { initials: "AD", name: "Ankit D.", role: "Frontend Lead" },
        { initials: "RS", name: "Riya S.", role: "Product Designer" },
        { initials: "VK", name: "Vikram K.", role: "Full-Stack Engineer" },
        { initials: "NM", name: "Neha M.", role: "SEO & Content" },
        { initials: "AK", name: "Amit K.", role: "Integrations Lead" }
    ];

    const aboutPageSchema = webPage({
        name: 'About SmartSoft Solutions',
        description: 'SmartSoft Solutions builds business websites, e-commerce stores, and web apps that help companies get customers.',
        url: `${SITE_URL}/about`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'About', url: `${SITE_URL}/about` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([aboutPageSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-6 pt-4 pb-2" />
            <AboutContent expertiseItems={expertiseItems} team={team} />
        </>
    );
}
