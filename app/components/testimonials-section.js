"use client";

import React from 'react';

const testimonials = [
    {
        quote: "SmartSoft rebuilt our jewellery store with clear collections, offers, and a checkout that actually converts on mobile. We went from brochure-site traffic to real online orders.",
        name: "Ananya R.",
        role: "Founder, Jewellery Brand",
        initials: "AR"
    },
    {
        quote: "Our printer support site finally turns urgent problems into phone calls. Brand pages, problem pages, and call-first CTAs — the leads started coming within days of launch.",
        name: "Imran K.",
        role: "Owner, Print Support Business",
        initials: "IK"
    },
    {
        quote: "Clear quote, weekly demos, and a maintainable Next.js codebase. No surprise fees. Exactly what we needed from a development partner.",
        name: "Sarah L.",
        role: "Marketing Lead, Service Company",
        initials: "SL"
    },
    {
        quote: "They shipped a clean business website with pricing packages and consultation CTAs. Visitors finally understand what we sell — and how to book.",
        name: "Michael T.",
        role: "Director, Professional Services",
        initials: "MT"
    },
    {
        quote: "Remote collaboration was easy across time zones. WhatsApp updates, video reviews, and a launch that felt production-ready — not a half-finished demo.",
        name: "Priya N.",
        role: "Startup Founder, Canada",
        initials: "PN"
    },
    {
        quote: "We needed an e-commerce experience with promotions and pan-India shipping messaging. SmartSoft delivered a store our customers can actually shop on.",
        name: "David R.",
        role: "E-commerce Operator",
        initials: "DR"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic">
                    Trusted by <span className="text-yellow-500">Growing Brands</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                    Real launches for businesses that needed websites, stores, and web products that work — not slide decks.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="py-12 animate-marquee whitespace-nowrap flex">
                    {[...testimonials, ...testimonials].map((t, idx) => (
                        <div
                            key={idx}
                            className="mx-4 w-[350px] md:w-[450px] flex-shrink-0 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group/card"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 font-bold mr-4 border border-yellow-200">
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 leading-tight">{t.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed flex-grow whitespace-normal italic font-medium">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="mt-6 flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
