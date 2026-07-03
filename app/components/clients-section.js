"use client";

export default function ClientsSection() {
    const trustBadges = [
        { text: "500+ Clients Served", icon: "⭐" },
        { text: "IRS Authorized e-File", icon: "🏛️" },
        { text: "QuickBooks ProAdvisor", icon: "📊" },
        { text: "CPA Supervised", icon: "🎓" },
        { text: "Canada Revenue Compliant", icon: "🍁" },
        { text: "99% Client Retention", icon: "🤝" },
        { text: "Xero Certified", icon: "✅" },
        { text: "Same-Day Response", icon: "⚡" },
        { text: "100% Accuracy Guarantee", icon: "🔐" },
        { text: "USA & Canada Licensed", icon: "🌎" },
        { text: "Bank-Level Data Security", icon: "🔒" },
        { text: "Zero Hidden Fees", icon: "💎" },
    ];

    const doubled = [...trustBadges, ...trustBadges];

    return (
        <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 uppercase">
                        TRUSTED BY <span className="text-yellow-500">HUNDREDS OF BUSINESSES</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                        Small businesses and entrepreneurs across the USA and Canada trust SmartSoft Solutions for accurate bookkeeping, payroll, and tax services.
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                    {/* Scrolling Trust Badges */}
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

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { stat: "500+", label: "Happy Clients" },
                        { stat: "99%", label: "Accuracy Rate" },
                        { stat: "10+", label: "Years Experience" },
                        { stat: "USA & CA", label: "Coverage" },
                    ].map((item) => (
                        <div key={item.stat} className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                            <p className="text-3xl md:text-4xl font-black text-yellow-500 mb-1">{item.stat}</p>
                            <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-12">
                    <p className="text-lg md:text-xl font-bold text-gray-800">
                        Join hundreds of satisfied clients who trust us for bookkeeping, payroll, and tax services.
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
