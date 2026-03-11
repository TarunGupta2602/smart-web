"use client";

export default function ClientsSection() {
    const clients = [
        "/images/client6.jpg",
        "/images/client7.jpg",
        "/images/client8.jpg",
        "/images/hosting-server-price.png",
        "/images/hosting-company.png",
        "/images/client6.jpg", // Duplicate for seamless loop
        "/images/client7.jpg",
        "/images/client8.jpg",
        "/images/hosting-server-price.png",
        "/images/hosting-company.png",
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 uppercase">
                        CLIENTS <span className="text-yellow-500">WEBSITE & APP SUCCESS</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                        We help USA small businesses and startups launch custom websites, mobile apps, and professional content. See some of our happy clients below.
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                    {/* Scrolling Content */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-marquee">
                            {clients.map((client, index) => (
                                <div
                                    key={index}
                                    className="shrink-0 mx-6 md:mx-8 lg:mx-12"
                                >
                                    <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 flex items-center justify-center border border-gray-200">
                                        <img
                                            src={client}
                                            alt={`Client ${index + 1}`}
                                            className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex animate-marquee" aria-hidden="true">
                            {clients.map((client, index) => (
                                <div
                                    key={`duplicate-${index}`}
                                    className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12"
                                >
                                    <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 md:p-6 flex items-center justify-center border border-gray-200">
                                        <img
                                            src={client}
                                            alt={`Client ${index + 1}`}
                                            className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-12">
                    <p className="text-lg md:text-xl font-bold text-gray-800">
                        Join hundreds of satisfied clients who trust us for website, app, and content writing services.
                    </p>
                </div>

            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
