import PortfolioContent from "./PortfolioContent";
import Breadcrumb from "../components/Breadcrumb";
import { collectionPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Our Digital Portfolio | Creative Excellence Showcase | SmartSoft Solutions",
    description: "Explore our diverse portfolio of award-winning digital projects, from e-commerce engines to custom enterprise apps. See how we craft digital excellence for global brands. Discover our creative process and results.",
    keywords: ["Digital Portfolio", "Web Development Showcase", "Creative Design Projects", "Enterprise App Showcase", "Global Brand Excellence", "Portfolio SmartSoft Solutions", "Digital Project Gallery"],
    alternates: {
        canonical: `${SITE_URL}/portfolio`,
    },
    openGraph: {
        title: "Digital Portfolio | Creative Excellence | SmartSoft Solutions",
        description: "A showcase of our world-class digital engineering and design projects. Explore our creative process and results.",
        url: `${SITE_URL}/portfolio`,
        images: [
          { url: '/images/banner.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions Portfolio' },
          { url: '/images/logo.png', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' }
        ],
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@SmartSoftSolutions',
        title: 'Digital Portfolio | Creative Excellence | SmartSoft Solutions',
        description: 'A showcase of our world-class digital engineering and design projects. Explore our creative process and results.',
        images: ['/images/banner.jpg']
    }
};

export default function PortfolioPage() {
    const categories = [
        {
            id: "all", name: "All Work", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )
        },
        {
            id: "websites", name: "Modern Websites", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9h18" /></svg>
            )
        },
        {
            id: "ecommerce", name: "E-Commerce", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            )
        },
        {
            id: "business", name: "Business Growth", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            )
        },
        {
            id: "custom", name: "Custom Apps", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            )
        }
    ];
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Portfolio', url: `${SITE_URL}/portfolio` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' }
    ];

    const projects = [
        {
            id: 1,
            title: "Next-Gen E-Commerce Engine",
            category: "ecommerce",
            description: "High-performance online marketplace featuring AI-driven product recommendations, multi-currency support, and lightning-fast checkout experiences.",
            image: "/images/p2.jpg",
            tags: ["React", "Custom API", "UI/UX"]
        },
        {
            id: 2,
            title: "Corporate Identity & Web Hub",
            category: "business",
            description: "A comprehensive digital ecosystem for multi-national firms, integrating CRM connectors and localized content management.",
            image: "/images/p3.jpg",
            tags: ["Enterprise", "Security", "SEO"]
        },
        {
            id: 3,
            title: "Interactive Creative Studio",
            category: "websites",
            description: "Award-winning portfolio featuring smooth 60fps animations, interactive case studies, and dynamic typography for visual impact.",
            image: "/images/pic1.jpg",
            tags: ["Full-Stack", "Node.js", "Analytics"]
        },
        {
            id: 4,
            title: "Smart Logistics Dashboard",
            category: "custom",
            description: "Custom ERP solution for logistics management, providing real-time fleet tracking and automated supply chain optimization.",
            image: "/images/po4.png",
            tags: ["Scalable", "Dashboard", "Real-time"]
        },
        {
            id: 5,
            title: "Healthcare Digital Patient Portal",
            category: "custom",
            description: "Secure, HIPAA-compliant patient management system with encrypted messaging and integrated telehealth scheduling platforms.",
            image: "/images/p5.jpg",
            tags: ["Healthcare", "Encrypted", "Cloud"]
        },
        {
            id: 6,
            title: "Global Marketing Agency Hub",
            category: "business",
            description: "Premium digital presence for marketing leaders, focused on conversion optimization and integrated lead generation funnels.",
            image: "/images/pic12.jpg",
            tags: ["Strategy", "Conversion", "B2B"]
        },
        {
            id: 7,
            title: "Luxury High-Street Fashion Store",
            category: "ecommerce",
            description: "Visually driven shopping experience for luxury clothing, featuring immersive lookbooks and seamless mobile interactions.",
            image: "/images/p8.jpg",
            tags: ["Retina Ready", "Mobile", "Cart"]
        },
        {
            id: 8,
            title: "Premium Real Estate Listings",
            category: "websites",
            description: "High-end property portal with virtual tours, map-based search, and automated agent lead qualification systems.",
            image: "/images/p6.jpg",
            tags: ["Maps", "Lead Gen", "Luxury"]
        },
        {
            id: 9,
            title: "Tech Startup Launch Platform",
            category: "websites",
            description: "Sleek, modern web architecture for emerging tech brands, designed to scale from MVP to enterprise-ready solutions.",
            image: "/images/pic2.jpg",
            tags: ["Startup", "Scale", "Modern"]
        },
        {
            id: 10,
            title: "Travel & Leisure Curator",
            category: "business",
            description: "Destination discovery engine with integrated booking APIs and community-driven travel itineraries.",
            image: "/images/p9.jpg",
            tags: ["API", "Travel", "Community"]
        },
        {
            id: 11,
            title: "Financial Advisory Console",
            category: "business",
            description: "Modern financial management interface for advisors, featuring complex data visualization and secure document vaults.",
            image: "/images/po2.png",
            tags: ["Finance", "Visualization", "Secure"]
        },
        {
            id: 12,
            title: "Hospitality Reservation Hub",
            category: "websites",
            description: "Custom hotel management platform with integrated PMS, direct booking engine, and loyalty program management.",
            image: "/images/po1.jpg",
            tags: ["Hospitality", "Booking", "CRM"]
        },
        {
            id: 13,
            title: "Smart Inventory Cloud",
            category: "ecommerce",
            description: "Back-end heavy inventory tracker for high-volume retailers, featuring predictive analytics for stock management.",
            image: "/images/po6.png",
            tags: ["Big Data", "Cloud", "Retail"]
        },
        {
            id: 14,
            title: "Social Events & Ticketing",
            category: "custom",
            description: "Dynamic event management tool with QR-based check-ins and integrated promotional marketing tools.",
            image: "/images/po3.jpg",
            tags: ["Events", "QR", "Marketing"]
        },
        {
            id: 15,
            title: "Automotive Virtual Showroom",
            category: "business",
            description: "interactive car customization tool and showroom, providing 3D-like views and direct dealer connectivity.",
            image: "/images/po5.jpg",
            tags: ["Auto", "Interactive", "3D"]
        },
        {
            id: 16,
            title: "Fitness Coaching Ecosystem",
            category: "custom",
            description: "All-in-one platform for trainers and clients, including workout builders and nutritional macro tracking.",
            image: "/images/pic3.jpg",
            tags: ["Fitness", "App", "Macros"]
        },
        {
            id: 17,
            title: "FinTech Transaction Suite",
            category: "custom",
            description: "Robust payment processing interface with multi-layer fraud detection and merchant analytics.",
            image: "/images/po8.png",
            tags: ["FinTech", "API", "Fraud Detection"]
        },
        {
            id: 18,
            title: "Digital Art Marketplace",
            category: "ecommerce",
            description: "Secure platform for digital creators to sell assets, featuring strictly managed licensing and instant downloads.",
            image: "/images/po7.jpg",
            tags: ["Assets", "Digital", "Marketplace"]
        }
    ];

    const portfolioSchema = collectionPage(projects.map(p => `https://smartsoftsolutions.org/portfolio#${p.title.toLowerCase().replace(/ /g, '-')}`), "SmartSoft Solutions Portfolio");

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([portfolioSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="container mx-auto px-6 pt-4 pb-2" />
            <PortfolioContent categories={categories} projects={projects} />
        </>
    );
}
