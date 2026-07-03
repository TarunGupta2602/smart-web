"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            content: {
                badge: "Bookkeeping & Accounting",
                mainHeadline: "ACCURATE BOOKS,",
                highlightedWord: "zero stress",
                subHeadline: "FOR YOUR BUSINESS",
                subtitle: "Professional bookkeeping and accounting services for USA & Canada small businesses. Monthly reconciliation, financial statements, and CPA-supervised reports.",
                cta: "Get Started",
                icon: (
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <rect x="10" y="10" width="100" height="100" rx="16" fill="#FDE68A" fillOpacity="0.15" />
                        <rect x="25" y="25" width="70" height="8" rx="4" fill="#F59E0B" />
                        <rect x="25" y="42" width="50" height="6" rx="3" fill="#FCD34D" fillOpacity="0.7" />
                        <rect x="25" y="56" width="60" height="6" rx="3" fill="#FCD34D" fillOpacity="0.7" />
                        <rect x="25" y="70" width="45" height="6" rx="3" fill="#FCD34D" fillOpacity="0.7" />
                        <circle cx="85" cy="80" r="22" fill="#F59E0B" fillOpacity="0.2" />
                        <text x="85" y="86" textAnchor="middle" fontSize="22" fill="#F59E0B" fontWeight="bold">$</text>
                        <rect x="25" y="90" width="55" height="6" rx="3" fill="#FCD34D" fillOpacity="0.5" />
                    </svg>
                )
            },
        },
        {
            id: 2,
            content: {
                badge: "Payroll Services",
                mainHeadline: "PAYROLL DONE",
                highlightedWord: "right & on time",
                subHeadline: "EVERY PAY PERIOD",
                subtitle: "Stress-free payroll processing for small businesses. Direct deposit, tax withholding, W-2s and T4s for USA & Canada employees. Always accurate, always on time.",
                cta: "Request a Quote",
                icon: (
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <rect x="10" y="15" width="100" height="90" rx="12" fill="#FDE68A" fillOpacity="0.12" />
                        <rect x="20" y="28" width="80" height="14" rx="7" fill="#F59E0B" fillOpacity="0.25" />
                        <circle cx="34" cy="35" r="8" fill="#F59E0B" />
                        <text x="34" y="39" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">$</text>
                        <rect x="48" y="31" width="44" height="4" rx="2" fill="#FCD34D" fillOpacity="0.8" />
                        <rect x="48" y="38" width="30" height="3" rx="1.5" fill="#FCD34D" fillOpacity="0.5" />
                        <rect x="20" y="52" width="80" height="14" rx="7" fill="#F59E0B" fillOpacity="0.15" />
                        <circle cx="34" cy="59" r="8" fill="#F59E0B" fillOpacity="0.6" />
                        <rect x="48" y="55" width="44" height="4" rx="2" fill="#FCD34D" fillOpacity="0.6" />
                        <rect x="48" y="62" width="30" height="3" rx="1.5" fill="#FCD34D" fillOpacity="0.4" />
                        <rect x="20" y="76" width="80" height="14" rx="7" fill="#F59E0B" fillOpacity="0.1" />
                        <circle cx="34" cy="83" r="8" fill="#F59E0B" fillOpacity="0.4" />
                        <rect x="48" y="79" width="44" height="4" rx="2" fill="#FCD34D" fillOpacity="0.4" />
                        <rect x="48" y="86" width="30" height="3" rx="1.5" fill="#FCD34D" fillOpacity="0.3" />
                    </svg>
                )
            },
        },
        {
            id: 3,
            content: {
                badge: "Tax Preparation & Filing",
                mainHeadline: "MAXIMIZE YOUR",
                highlightedWord: "tax refund",
                subHeadline: "USA & CANADA FILING",
                subtitle: "Expert tax preparation and e-filing for individuals and small businesses. Federal, state, and provincial returns. IRS authorized & CRA compliant — get every deduction you deserve.",
                cta: "File My Taxes",
                icon: (
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M25 15 L75 15 L95 35 L95 105 L25 105 Z" fill="#FDE68A" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="2" />
                        <path d="M75 15 L75 35 L95 35" fill="none" stroke="#F59E0B" strokeWidth="2" />
                        <rect x="35" y="48" width="50" height="5" rx="2.5" fill="#F59E0B" fillOpacity="0.6" />
                        <rect x="35" y="60" width="40" height="4" rx="2" fill="#FCD34D" fillOpacity="0.5" />
                        <rect x="35" y="71" width="45" height="4" rx="2" fill="#FCD34D" fillOpacity="0.5" />
                        <circle cx="75" cy="88" r="14" fill="#F59E0B" />
                        <path d="M69 88 L73 92 L81 84" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )
            },
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[780px]">
            {/* Ambient background glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-400/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
                {/* Subtle graph line decoration */}
                <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
                    <polyline points="0,180 200,140 400,160 600,80 800,120 1000,60 1200,100 1440,40" stroke="#F59E0B" strokeWidth="3" fill="none" />
                </svg>
            </div>

            {/* Slides Container */}
            <div
                className="relative z-10 w-full h-full flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id} className="w-full flex-shrink-0 flex items-center px-4 md:px-12 lg:px-20 py-16 md:py-20">
                        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl">

                            {/* Text Section */}
                            <div className="order-2 lg:order-1 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-md mb-6 lg:mb-8">
                                    <span className="flex h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-yellow-400">{slide.content.badge}</span>
                                </div>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 lg:mb-6 leading-[1] tracking-tighter uppercase">
                                    {slide.content.mainHeadline}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase block mt-1 lg:mt-2">
                                        {slide.content.highlightedWord}
                                    </span>
                                    <span className="block mt-1 lg:mt-2 text-2xl md:text-4xl lg:text-5xl text-slate-300">{slide.content.subHeadline}</span>
                                </h1>

                                <p className="text-sm md:text-lg text-slate-300 leading-relaxed mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
                                    {slide.content.subtitle}
                                </p>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                                    <Link
                                        href="/services"
                                        className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black uppercase text-xs md:text-sm tracking-widest rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                                    >
                                        {slide.content.cta}
                                    </Link>
                                    <a
                                        href="tel:17077084062"
                                        className="px-6 md:px-8 py-3 md:py-4 bg-white/10 border border-white/20 text-white font-black uppercase text-xs md:text-sm tracking-widest rounded-full hover:bg-white/20 transition-all duration-500"
                                    >
                                        📞 Call Us Free
                                    </a>
                                </div>

                                {/* Trust badges */}
                                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                                    {["IRS Authorized", "CPA Supervised", "QuickBooks Pro"].map((badge) => (
                                        <span key={badge} className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                            ✓ {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* SVG Illustration */}
                            <div className="order-1 lg:order-2 flex items-center justify-center">
                                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px]">
                                    {/* Glow ring */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/10 blur-2xl scale-110" />
                                    <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(234,179,8,0.2)]">
                                        {slide.content.icon}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-500 hidden md:flex"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-500 hidden md:flex"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`group relative h-1.5 transition-all duration-500 rounded-full ${currentSlide === index ? "w-12 bg-yellow-500" : "w-3 bg-white/20 hover:bg-white/40"}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
