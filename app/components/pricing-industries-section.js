import Link from "next/link";

export default function PricingIndustriesSection() {
    const industries = [
        "AGRICULTURE & OTHER RELATED INDUSTRY PRODUCTS",
        "AVIATION AND AIRLINE INDUSTRY SERVICES",
        "BANKING INDUSTRY AND LOANS & FINANCE",
        "SCHOOL, COLLEGES, COACHING, TRAINING CENTER",
        "E-COMMERCE, ONLINE RETAIL, ONLINE SHOPPING",
        "REAL ESTATE, CONSTRUCTION, CONTRACTORS",
        "ALL KIND OF SPORTS GOODS & SERVICES",
        "EVENT MANAGEMENT INDUSTRY",
        "SYSTEM GAMING & ONLINE GAMING BUSINESS",
        "DOCTOR, MEDICAL, HOSPITAL, DISPENSARY, MEDICINE",
        "LEGAL CONSULTANT, LAWYER, ADVOCATE",
        "ENTERTAINMENT, BROADCAST, FILMS",
        "TRANSPORT, MOVERS, CAR RENTAL, TAXI",
        "OTHER SMALL HOME BUSINESS & INDIVIDUAL WEBSITE"
    ];

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">

                {/* Pricing Header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-block bg-yellow-400 px-8 py-3 rounded-full mb-6">
                        <p className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wide">
                            Special Offer
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 uppercase leading-tight">
                        GET A WEBSITE IN{" "}
                        <span className="relative inline-block">
                            <span className="text-yellow-500">$199.99</span>
                            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-200 -z-10"></div>
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
                        Our Website Plan Starts From <span className="font-bold text-yellow-500 text-2xl">$199.99</span>
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-2">
                        Call Now{" "}
                        <a href="tel:17867538470" className="font-bold text-gray-900 hover:text-yellow-500 transition-colors text-xl">
                            1-786-753-8470
                        </a>{" "}
                        <span className="text-sm">(Toll Free)</span>
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
                        We Make Website In Your Budget. Our Plans Can Be Customised As Per Your Needs.
                    </p>
                    <Link
                        href="/pricing"
                        className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-12 py-5 rounded-full font-bold text-lg uppercase shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Check Our Price & Plans - Get Quote
                    </Link>
                </div>

                {/* Industry Expertise Section */}
                <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase">
                            OUR INDUSTRY EXPERTISE
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
                            As experts in the various industries we service, we have designed, developed, integrated, and implemented
                            a wide variety of software solutions for niche markets.
                        </p>
                        <div className="inline-block bg-yellow-100 px-6 py-3 rounded-lg mt-4">
                            <p className="text-sm md:text-base text-gray-800 font-semibold uppercase">
                                ✓ WE HAVE SERVED THESE INDUSTRIES SO FAR, AND WILL CONTINUE TO SERVE MORE
                            </p>
                        </div>
                    </div>

                    {/* Industries List - Clean Text-Based Design */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-50 to-white hover:from-yellow-50 hover:to-yellow-100 p-5 md:p-6 rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                                    {index + 1}
                                </div>

                                {/* Checkmark Icon */}
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-yellow-500 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h4 className="text-sm md:text-base font-bold text-gray-800 leading-tight uppercase flex-1">
                                        {industry}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-lg md:text-xl text-gray-700 mb-6">
                            Don't see your industry? <span className="font-bold">We serve ALL industries!</span>
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-base uppercase hover:bg-gray-800 transition-colors shadow-lg"
                        >
                            Contact Us For Your Industry
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
