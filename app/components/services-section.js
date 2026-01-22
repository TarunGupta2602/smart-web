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
            icon: "/images/icon11.png"
        },
        {
            title: "E-COMMERCE CATALOG WEBSITES",
            description: "We have e-commerce technology to develop ecommerce catalog website with all product details. You can list your catalog with all necessary details. You select designs as per your business or industry needs & get yourself online",
            icon: "/images/icon22.jpg"
        },
        {
            title: "SMALL BUSINESS & PROFESSION WEBSITES",
            description: "We can make websites as per your business needs. If you are professional or indivisual or small business then we are best for you in terms of Quality & Cost budget. we make websites for all industry and professions be it servies or goods.",
            icon: "/images/icon33.png"
        },
        {
            title: "DIGITAL MARKETING & ANDROID IOS APPS",
            description: "We can also do internet marketing of your business or profession. we can do digital marketing online like running your ads on google or bing or yahoo search engines. We also make android apps or ios apps for business or profession or services.",
            icon: "/images/icon111.png"
        }
    ];

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 uppercase">
                        GET YOUR WEBSITE CREATED IN MINIMUM TIME AT{" "}
                        <span className="text-yellow-500">LOWEST PRICES</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        We Specialize in Website Design / Development, Website Promotions, Website Marketing On Search Engine,
                        Android Apps Design & Development, iOS Apps Design & Development, Software Development, Graphic Design,
                        Logo Designs Etc.
                    </p>
                </div>

                {/* Main Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-400"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="relative w-20 h-20 md:w-24 md:h-24">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center uppercase">
                                {service.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 md:p-8 rounded-xl shadow-lg mb-16 text-center">
                    <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                        DIAL OUR TOLL FREE NOW{" "}
                        <a href="tel:17867538470" className="underline hover:text-white transition-colors">
                            1-786-753-8470
                        </a>
                    </p>
                    <p className="text-base md:text-lg text-gray-800 mb-4">
                        GET IN TOUCH WITH LIVE EXPERTS
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors"
                    >
                        CONTACT US
                    </Link>
                </div>

                {/* Detailed Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {detailedServices.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-yellow-400 relative overflow-hidden"
                        >
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center p-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 uppercase leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
