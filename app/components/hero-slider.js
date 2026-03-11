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
                mainHeadline: "WEBSITE",
                highlightedWord: "DEVELOPMENT",
                subHeadline: "FOR SMALL BUSINESS",
                subtitle: "Custom, fast, and SEO-optimized websites for USA startups and small businesses.",
                cta: "Get Started"
            },
        },
        {
            id: 2,
            image: "/images/website making.png",
            content: {
                mainHeadline: "MOBILE APP",
                highlightedWord: "DEVELOPMENT",
                subHeadline: "LAUNCH YOUR APP",
                subtitle: "Affordable, high-performance mobile apps for iOS & Android. Quick delivery, expert support.",
                cta: "Request a Quote"
            },
        },
        {
            id: 3,
            image: "/contnetw-removebg-preview.png",
            content: {
                mainHeadline: "CONTENT",
                highlightedWord: "WRITING",
                subHeadline: "BOOST YOUR BRAND",
                subtitle: "Professional content writing for websites, blogs, and marketing. Engage and convert your audience.",
                cta: "Contact Us"
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
        <section className="relative w-full h-150 md:h-175 lg:h-200 overflow-hidden bg-[#0a0a0b] flex items-center justify-center">
            {/* Background Image with Cinematic Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/banner.jpg"
                    alt="Success Stories Background"
                    fill
                    className="object-cover opacity-60 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>

            </div>

            {/* Slides Container */}
            <div
                className="relative z-10 w-full h-full flex items-center transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id} className="w-full flex-shrink-0 h-full flex items-center px-4 md:px-12 lg:px-20">
                        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl">

                            {/* Text Section */}
                            <div className="order-2 lg:order-1 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-black backdrop-blur-md mb-6 lg:mb-8">
                                    <span className="flex h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black">Premium Web Solutions</span>
                                </div>

                                <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-black mb-4 lg:mb-6 leading-[1] md:leading-[0.9] tracking-tighter uppercase">
                                    {index === 0 ? (
                                        <p className="text-inherit font-inherit">
                                            {slide.content.mainHeadline} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase block mt-1 lg:mt-2">{slide.content.highlightedWord}</span>
                                        </p>
                                    ) : (
                                        <>
                                            {slide.content.mainHeadline} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase block mt-1 lg:mt-2">{slide.content.highlightedWord}</span>
                                        </>
                                    )}
                                    <span className="block mt-1 lg:mt-2">{slide.content.subHeadline}</span>
                                </h1>

                                <p className="text-sm md:text-xl text-black leading-relaxed mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
                                    {slide.content.subtitle}
                                </p>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black uppercase text-xs md:text-sm tracking-widest rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                                    >
                                        {slide.content.cta}
                                    </Link>
                                    <a
                                        href="tel:17077084062"
                                        className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black uppercase text-xs md:text-sm tracking-widest rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                                    >
                                        Call Us Now
                                    </a>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="relative h-55 sm:h-70 md:h-112 lg:h-138 w-full flex items-center justify-center order-1 lg:order-2">
                                <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-700">
                                    <Image
                                        src={slide.image}
                                        alt={slide.content.highlightedWord}
                                        fill
                                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
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
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`group relative h-1.5 transition-all duration-500 ${currentSlide === index ? "w-12 bg-yellow-500" : "w-3 bg-white/20 hover:bg-white/40"}`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            0{index + 1}
                        </span>
                    </button>
                ))}
            </div>
        </section>
    );
}
