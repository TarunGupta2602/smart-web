"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "/images/website-designing.png",
            content: {
                line1: "WE MAKE",
                line2: "WEBSITES IN",
                line3: "48HRS.",
                subtitle1: "Any Creative Project is Unique",
                subtitle2: "We Promise Quality Work",
                subtitle3: "Call Now 1-786-753-8470",
                cta: "CHAT WITH US Or Call 1-786-753-8470"
            },
        },
        {
            id: 2,
            image: "/images/website making.png",
            content: {
                line1: "WE BELIEVE",
                line2: "IN QUALITY",
                line3: "DESIGN",
                subtitle1: "Get Ecommerce Website",
                subtitle2: "With Product Store &",
                subtitle3: "Online Payment System",
                cta: "CHAT WITH US Or Call 1-786-753-8470"
            },
        },
        {
            id: 3,
            image: "/images/domain.png",
            content: {
                line1: "DOMAINS",
                line2: "ONE STOP",
                line3: "SHOP",
                subtitle1: "All Domains Available",
                subtitle2: ".com .net .org .edu .info etc.",
                subtitle3: "Choose As Per Need",
                cta: "CHAT WITH US Or Call 1-786-753-8470"
            },
        },
        {
            id: 4,
            image: "/images/webhosting.png",
            content: {
                line1: "HOSTING",
                line2: "IN BUDGET",
                line3: "PRICES",
                subtitle1: "Website Hosting Available",
                subtitle2: "In Very Low Rates",
                subtitle3: "All Servers Online",
                cta: "CHAT WITH US Or Call 1-786-753-8470"
            },
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:h-[700px] flex items-center bg-white overflow-hidden">
            {/* Background Image with Subtle White Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/banner.jpg"
                    alt="Banner Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Light white overlay for better content visibility */}
                <div className="absolute inset-0 bg-white/40" />
            </div>

            {/* Slides */}
            <div
                className="relative z-10 w-full h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0 h-full flex items-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">
                        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-6 items-center max-w-7xl">

                            {/* Text Section - Left Side */}
                            <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1">
                                {/* Main Title with Yellow Highlight Boxes - Each line separate */}
                                <div className="space-y-0.5 sm:space-y-1">
                                    <div className="w-fit">
                                        <div className="bg-[#FFEB3B] px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 inline-block">
                                            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-black leading-none tracking-tight uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', fontWeight: 900 }}>
                                                {slide.content.line1}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="bg-[#FFEB3B] px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 inline-block">
                                            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-black leading-none tracking-tight uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', fontWeight: 900 }}>
                                                {slide.content.line2}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="bg-[#FFEB3B] px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 inline-block">
                                            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-black leading-none tracking-tight uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', fontWeight: 900 }}>
                                                {slide.content.line3}
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                {/* Subtitle with Dark Gray Background */}
                                <div className="w-fit max-w-full">
                                    <div className="bg-[#424242] px-4 sm:px-5 md:px-6 py-3 sm:py-4 inline-block">
                                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                            {slide.content.subtitle1}<br />
                                            {slide.content.subtitle2}<br />
                                            {slide.content.subtitle3}
                                        </p>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-2">
                                    <Link
                                        href="/contact"
                                        className="inline-block bg-black text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                                        style={{ fontFamily: 'Arial, sans-serif' }}
                                    >
                                        <span className="hidden sm:inline">{slide.content.cta}</span>
                                        <span className="sm:hidden">CHAT WITH US</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Image Section - Right Side */}
                            <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={slide.image}
                                        alt={slide.content.line1}
                                        fill
                                        className="object-contain scale-100 sm:scale-105 lg:scale-110"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows - Hidden on mobile */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="hidden sm:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/90 text-white p-2 md:p-3 transition-colors rounded-full"
                aria-label="Previous slide"
            >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="hidden sm:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/90 text-white p-2 md:p-3 transition-colors rounded-full"
                aria-label="Next slide"
            >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 sm:h-2.5 rounded-full transition-all ${currentSlide === index
                            ? "bg-[#FFEB3B] w-6 sm:w-8"
                            : "bg-gray-600 w-2 sm:w-2.5 hover:bg-gray-500"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
}
