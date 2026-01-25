import AboutContent from "./AboutContent";
import { organization, stringifySchema } from "@/lib/schema";

export const metadata = {
    title: "About Us | Our Story & Thinking",
    description: "Learn about SmartSoft Solutions, our core philosophy, global reach, and our commitment to building world-class digital products with a customer-first approach.",
    alternates: {
        canonical: 'https://smartsoftsolutions.org/about',
    },
};

export default function AboutPage() {
    const expertiseItems = [
        {
            name: "Digital Engineering",
            description: "High-performance web architecture, mobile ecosystem development, and custom internal software logic.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            color: "bg-orange-50 text-orange-600"
        },
        {
            name: "Full-Scale Marketing",
            description: "Internet marketing, brand positioning, and product growth strategies for global markets.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: "bg-blue-50 text-blue-600"
        },
        {
            name: "Cloud Infrastructure",
            description: "Redundant hosting nodes, domain management, and mission-critical server stability at scale.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            color: "bg-purple-50 text-purple-600"
        }
    ];

    const team = [
        { img: "/images/about-img2.jpg", name: "Executive Lead" },
        { img: "/images/about-img3.jpg", name: "Technical Architect" },
        { img: "/images/about-img4.jpg", name: "Security Specialist" },
        { img: "/images/about-img5.jpg", name: "Lead UI/UX" },
        { img: "/images/about-img6.jpg", name: "Project Manager" },
        { img: "/images/about-img7.jpg", name: "Cloud Engineer" },
        { img: "/images/about-img8.jpg", name: "DevOps Lead" },
    ];

    const aboutSchema = organization({
        name: 'SmartSoft Solutions - About Us',
        description: 'SmartSoft Solutions is dedicated to continuous delivery and trust, building world-class products that drive customer satisfaction and shareholder value.'
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema(aboutSchema) }}
            />
            <AboutContent expertiseItems={expertiseItems} team={team} />
        </>
    );
}
