import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
    const services = [
        {
            title: "DIGITAL MARKETING",
            description: "We provide fast Digital Marketing Services to power the speed of your Business. Get yourself Promoted",
            icon: "/images/icon5.png"
        },
        {
            title: "MOBILE FRIENDLY",
            description: "We make website mobile, ipad friendly so that everyone can access it on any device easily",
            icon: "/images/icon4.png"
        },
        {
            title: "WEBSITE DEVELOPMENT",
            description: "Get your website designed & developed by us with full functionality in less time",
            icon: "/images/icon3.png"
        },
        {
            title: "GRAPHIC DESIGN",
            description: "No need to worry about your website images and graphics we will take care of it as well",
            icon: "/images/icon2.png"
        }
    ];

    const detailedServices = [
        {
            title: "SHOPPING STORE WEBSITES",
            description: "We are experts in shopping store websites with full functionality from order system to payments and to shipping. You can have all of your products listed on website and your target customers can purchase them online. It applies to all industries and professions",
            icon: "/images/p7.jpg"
        },
        {
            title: "E-COMMERCE CATALOG WEBSITES",
            description: "We have e-commerce technology to develop ecommerce catalog website with all product details. You can list your catalog with all necessary details. You select designs as per your business or industry needs & get yourself online",
            icon: "/images/p8.jpg"
        },
        {
            title: "SMALL BUSINESS & PROFESSION WEBSITES",
            description: "We can make websites as per your business needs. If you are professional or indivisual or small business then we are best for you in terms of Quality & Cost budget. we make websites for all industry and professions be it servies or goods.",
            icon: "/images/p3.jpg"
        },
        {
            title: "DIGITAL MARKETING & ANDROID IOS APPS",
            description: "We can also do internet marketing of your business or profession. we can do digital marketing online like running your ads on google or bing or yahoo search engines. We also make android apps or ios apps for business or profession or services.",
            icon: "/images/p4.jpg"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 backdrop-blur-md mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-600">Enterprise Grade Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-[0.9]">
                        PREMIUM DELIVERY at <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase">Lowest Prices</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                        We bridge the gap between complex engineering and user-centric design, providing the infrastructure
                        that powers high-growth companies worldwide through specialized digital solutions.
                    </p>
                </div>

                {/* Main Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="flex justify-center mb-8">
                                <div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-yellow-400 opacity-10 blur-xl rounded-full group-hover:opacity-30 transition-opacity"></div>
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="relative w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-black text-slate-900 mb-4 text-center uppercase tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-500 text-center leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="bg-slate-900 p-12 rounded-[3rem] shadow-2xl mb-24 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-yellow-400/20 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -ml-32 -mb-32 group-hover:bg-orange-500/20 transition-colors"></div>

                    <p className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter">
                        DIAL OUR TOLL FREE NOW <br />
                        <a href="tel:17867538470" className="text-yellow-500 hover:text-white transition-colors duration-300 tracking-normal inline-block mt-2">
                            1-786-753-8470
                        </a>
                    </p>
                    <p className="text-lg text-slate-400 mb-10 font-bold uppercase tracking-[0.2em]">
                        Get free consultation from live experts
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 bg-white text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-yellow-500 transition-all duration-500 hover:scale-105"
                    >
                        START YOUR PROJECT
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>

                {/* Detailed Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {detailedServices.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-[3rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-slate-100"
                        >
                            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                                {/* Simplified Image Container */}
                                <div className="flex-shrink-0 w-full md:w-2/5 aspect-[4/6] relative overflow-hidden rounded-3xl">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 uppercase leading-tight tracking-tighter group-hover:text-yellow-600 transition-colors duration-500">
                                        {service.title}
                                    </h3>

                                    <div className="flex gap-1 mb-6">
                                        <div className="h-1.5 rounded-full bg-yellow-500 w-12 group-hover:w-20 transition-all duration-700"></div>
                                        <div className="h-1.5 rounded-full bg-yellow-500 w-2"></div>
                                    </div>

                                    <p className="text-base text-slate-600 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
