"use client";

import React from 'react';

const testimonials = [
    {
        quote: "SmartSoft Solutions delivered our website in just 48 hours. The process was smooth and the result exceeded our expectations!",
        name: "Sarah M.",
        role: "Startup Founder",
        initials: "SM"
    },
    {
        quote: "The mobile app they built for us is fast, reliable, and beautifully designed. Highly recommended for small businesses.",
        name: "James T.",
        role: "Small Business Owner",
        initials: "JT"
    },
    {
        quote: "Their content writing team helped us boost our online presence and attract more customers. Great service and communication.",
        name: "Priya S.",
        role: "Marketing Lead",
        initials: "PS"
    },
    {
        quote: "Affordable, professional, and always available for support. We trust SmartSoft for all our digital needs.",
        name: "Michael D.",
        role: "Agency Partner",
        initials: "MD"
    },
    {
        quote: "The best experience I've had with a development agency. They really understand small business needs.",
        name: "Emma L.",
        role: "E-commerce Owner",
        initials: "EL"
    },
    {
        quote: "Technical expertise combined with great design. Our conversion rate increased significantly after the launch.",
        name: "Robert K.",
        role: "Tech Startup CEO",
        initials: "RK"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic">
                    Trusted by <span className="text-blue-600">Innovators</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                    Don't just take our word for it. Here's what our clients have to say about working with SmartSoft Solutions.
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
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold mr-4 border border-blue-100">
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 leading-tight">{t.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed flex-grow whitespace-normal italic font-medium">
                                "{t.quote}"
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

                {/* Gradient overlays for smooth fade */}
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
