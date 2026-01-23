"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [lightboxImage, setLightboxImage] = useState(null);

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

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-yellow-500 selection:text-black">
            {/* SEO Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Portfolio Digital Agency Success"
                        fill
                        className="object-cover opacity-60 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-[#0a0a0b]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Award Winning Digital Agency</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                            CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">DIGITAL</span><br />
                            EXCELLENCE.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-3xl">
                            We bridge the gap between imagination and reality. Our portfolio represents the pinnacle of web development,
                            SEO strategy, and conversion-focused design.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a href="#work" className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black uppercase text-sm tracking-widest rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                                View Projects
                            </a>
                            <a href="/contact" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black uppercase text-sm tracking-widest rounded-full transition-all duration-500">
                                Contact Experts
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll to Explore</span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-yellow-500 to-transparent"></div>
                </div>
            </section>

            {/* Statistics / Value Prop */}
            <section className="py-24 border-y border-white/5 bg-white/2">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {[
                            { val: "500+", label: "Projects Delivered", sub: "Global Excellence" },
                            { val: "350+", label: "Trusted Partners", sub: "Long-term Value" },
                            { val: "15+", label: "Niche Industries", sub: "Deep Expertise" },
                            { val: "98%", label: "ROI Satisfaction", sub: "Quality Guaranteed" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <span className="text-4xl md:text-6xl font-black text-white">{stat.val}</span>
                                <span className="text-sm uppercase tracking-widest font-bold text-yellow-500">{stat.label}</span>
                                <span className="text-xs text-gray-600 italic">{stat.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Navigation */}
            <section id="work" className="sticky top-0 z-40 py-8 bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 ${selectedCategory === cat.id
                                    ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
                            >
                                {cat.icon}
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {filteredProjects.map((proj, idx) => (
                            <div
                                key={proj.id}
                                className="group relative flex flex-col gap-6 cursor-pointer"
                                onClick={() => setLightboxImage(proj.image)}
                            >
                                {/* Premium Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10">
                                    <Image
                                        src={proj.image}
                                        alt={proj.title}
                                        fill
                                        className="object-cover transition-all duration-[1s] ease-out group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                                    {/* Project Category Tag */}
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">{proj.category}</span>
                                    </div>

                                    {/* Hover Action */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Typography Content */}
                                <div className="px-4">
                                    <h3 className="text-2xl font-black mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                                        {proj.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {proj.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {proj.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom SEO Call to Action */}
            <section className="py-32 relative overflow-hidden bg-white/2 border-t border-white/5">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
                            HAVE A PROJECT <span className="italic font-serif text-yellow-500">IN MIND?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                            Join over 350+ worldwide brands that trust us to bring their digital vision to life.
                            Let's discuss how we can skyrocket your business ROI today.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <a href="/contact" className="group px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-yellow-500 transition-all duration-500 flex items-center gap-4">
                                Project Consultation
                                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-[10px] uppercase tracking-widest text-gray-600 font-black">Quick Call Assistance</span>
                                <a href="tel:17867538470" className="text-2xl font-black text-white hover:text-yellow-500 transition-colors tracking-tight">
                                    1-786-753-8470
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-8 transition-all duration-500 animate-in fade-in"
                    onClick={() => setLightboxImage(null)}
                >
                    <button className="absolute top-10 right-10 w-16 h-16 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center border border-white/10 transition-all">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <div className="relative w-full h-full max-w-7xl max-h-[85vh] rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 animate-in zoom-in duration-500">
                        <Image
                            src={lightboxImage}
                            alt="Full View Project"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
