"use client";

export default function ClientsSection() {
    const trustBadges = [
        { text: "Next.js Builds", icon: "⚡" },
        { text: "React & TypeScript", icon: "⚛️" },
        { text: "E-commerce Ready", icon: "🛒" },
        { text: "Firebase & Supabase", icon: "🔥" },
        { text: "SEO-Friendly Sites", icon: "📈" },
        { text: "Mobile-First UX", icon: "📱" },
        { text: "Fixed Project Quotes", icon: "💎" },
        { text: "Production Deploys", icon: "🚀" },
        { text: "Remote Delivery", icon: "🌎" },
        { text: "Maintainable Code", icon: "🧩" },
        { text: "Weekly Progress Demos", icon: "✅" },
        { text: "Clear Handoff", icon: "🤝" },
    ];

    const doubled = [...trustBadges, ...trustBadges];

    return (
        <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 uppercase">
                        TOOLS WE <span className="text-yellow-500">SHIP WITH</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                        Modern stack, clear process, and production standards — so your website or app is ready for real customers.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                    <div className="flex overflow-hidden">
                        <div className="flex animate-trust-marquee">
                            {doubled.map((badge, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 mx-4"
                                >
                                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 px-6 py-4 flex items-center gap-3 border border-gray-100 hover:border-yellow-300 min-w-max group">
                                        <span className="text-2xl">{badge.icon}</span>
                                        <span className="text-sm md:text-base font-bold text-gray-800 group-hover:text-yellow-600 transition-colors uppercase tracking-tight whitespace-nowrap">
                                            {badge.text}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { stat: "3", label: "Core Offer Types" },
                        { stat: "2–6 wks", label: "Typical Site Timeline" },
                        { stat: "100%", label: "Fixed Quotes" },
                        { stat: "Global", label: "Remote Clients" },
                    ].map((item) => (
                        <div key={item.stat} className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                            <p className="text-3xl md:text-4xl font-black text-yellow-500 mb-1">{item.stat}</p>
                            <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">{item.label}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg md:text-xl font-bold text-gray-800">
                        Next.js · React · Node.js · TypeScript · Firebase · Supabase
                    </p>
                </div>

            </div>

            <style jsx>{`
        @keyframes trust-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-trust-marquee {
          animation: trust-marquee 35s linear infinite;
        }
        .animate-trust-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
