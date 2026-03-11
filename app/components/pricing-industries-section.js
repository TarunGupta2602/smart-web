import Link from "next/link";

export default function PricingIndustriesSection() {
    const industries = [
        { name: "Small Business Websites", icon: "�" },
        { name: "Startup Web Solutions", icon: "🚀" },
        { name: "Mobile App Development", icon: "📱" },
        { name: "Content Writing", icon: "✍️" }
    ];

    return (
    <section className="py-16 md:py-20 lg:py-24 bg-linear-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">

                {/* Pricing Header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-block bg-yellow-400 px-8 py-3 rounded-full mb-6">
                        <p className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wide">
                            Affordable Website & App Packages
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase leading-tight">
                        LAUNCH YOUR WEBSITE OR APP FROM <span className="text-yellow-500">$199.99</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
                        Our plans are designed for USA small businesses and startups. Get a custom website, mobile app, or content writing service at a transparent price.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-2">
                        Call Now <a href="tel:17077084062" className="font-bold text-gray-900 hover:text-yellow-500 transition-colors text-xl">1-707-708-4062</a> <span className="text-sm">(Toll Free)</span>
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
                        We deliver fast, SEO-optimized websites and apps. Plans can be customized for your needs.
                    </p>
                    <Link
                        href="/pricing"
                        className="inline-block bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-12 py-5 rounded-full font-bold text-lg uppercase shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Get Your Quote
                    </Link>
                </div>

                {/* Industry Expertise Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase">
                            OUR INDUSTRY <span className="text-yellow-500">EXPERTISE</span>
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
                            As experts in the various industries we service, we have designed, developed, integrated, and implemented
                            a wide variety of software solutions for niche markets.
                        </p>
                        <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mt-6"></div>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-yellow-400"
                            >
                                <div className="text-center">
                                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {industry.icon}
                                    </div>
                                    <h4 className="text-sm md:text-base font-bold text-gray-800 leading-tight uppercase">
                                        {industry.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center bg-linear-to-r from-yellow-50 to-orange-50 p-8 md:p-12 rounded-3xl border-2 border-yellow-200">
                        <p className="text-xl md:text-2xl text-gray-800 mb-6 font-bold">
                            Need a custom website, app, or content writing? <span className="text-yellow-600">We serve USA small businesses and startups!</span>
                        </p>
                        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Contact us to discuss your project and get a free consultation from our experts.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-base uppercase hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
