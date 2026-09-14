import Link from "next/link";

export default function PricingIndustriesSection() {
    const clientTypes = [
        { name: "Local Service Businesses", icon: "🏢" },
        { name: "E-commerce Brands", icon: "🛒" },
        { name: "Startups & SaaS", icon: "🚀" },
        { name: "Professional Practices", icon: "💼" },
        { name: "Restaurants & Cafes", icon: "🍽️" },
        { name: "Retail & Jewellery", icon: "💎" },
        { name: "Agencies & Consultants", icon: "🤝" },
        { name: "Remote Product Teams", icon: "💻" },
    ];

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-block bg-yellow-400 px-8 py-3 rounded-full mb-6">
                        <p className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wide">
                            Clear project quotes
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase leading-tight">
                        FROM BRIEF TO <span className="text-yellow-500">PAID LAUNCH</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
                        Share your goal and budget range. We reply with scope, timeline, and a fixed quote — before any build starts.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-2">
                        Call <a href="tel:17077084062" className="font-bold text-gray-900 hover:text-yellow-500 transition-colors text-xl">1-707-708-4062</a>
                        <span className="mx-2">·</span>
                        <a href="https://wa.me/917456096455" className="font-bold text-gray-900 hover:text-yellow-500 transition-colors">WhatsApp</a>
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
                        Marketing sites often ship in a few weeks; stores and apps take longer based on features. Timeline is always in the quote.
                    </p>
                    <Link
                        href="/pricing"
                        className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-12 py-5 rounded-full font-bold text-lg uppercase shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        View Packages
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
                    {[
                        { label: "Business Website", price: "Quote", desc: "Marketing site with leads & SEO basics" },
                        { label: "E-commerce Store", price: "Quote", desc: "Catalog, cart, checkout & payments" },
                        { label: "Custom Web App", price: "Quote", desc: "Auth, dashboards & product flows" },
                    ].map((plan) => (
                        <div key={plan.label} className="bg-white border-2 border-yellow-100 hover:border-yellow-400 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                            <h4 className="text-sm font-black uppercase tracking-widest text-slate-700 mb-2">{plan.label}</h4>
                            <p className="text-4xl font-black text-yellow-500 mb-2">{plan.price}</p>
                            <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
                            <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-yellow-600 transition-colors">
                                Request Quote →
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase">
                            WHO WE <span className="text-yellow-500">BUILD FOR</span>
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
                            We ship websites and web products for businesses that need more customers, clearer offers, and software that actually launches.
                        </p>
                        <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {clientTypes.map((type, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-yellow-400"
                            >
                                <div className="text-center">
                                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                                        {type.icon}
                                    </div>
                                    <h4 className="text-sm md:text-base font-bold text-gray-800 leading-tight uppercase">
                                        {type.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-gradient-to-r from-yellow-50 to-orange-50 p-8 md:p-12 rounded-3xl border-2 border-yellow-200">
                        <p className="text-xl md:text-2xl text-gray-800 mb-6 font-bold">
                            Need a website, store, or web app? <span className="text-yellow-600">We deliver remotely worldwide.</span>
                        </p>
                        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Based in Canada and India — we work with clients via WhatsApp, email, and video calls across time zones.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-base uppercase hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Get a Project Quote
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
