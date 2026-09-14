import Link from "next/link";

export default function ServicesSection() {
    const services = [
        {
            slug: "website-designing",
            title: "Business Websites",
            description: "Sites that explain your offer and capture leads — mobile-ready, fast, and SEO-friendly so visitors become clients.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="6" y="12" width="52" height="40" rx="6" fill="#FDE68A" fillOpacity="0.3" />
                    <rect x="14" y="22" width="36" height="4" rx="2" fill="#F59E0B" />
                    <rect x="14" y="30" width="24" height="3" rx="1.5" fill="#FCD34D" fillOpacity="0.8" />
                    <rect x="14" y="38" width="28" height="3" rx="1.5" fill="#FCD34D" fillOpacity="0.6" />
                </svg>
            )
        },
        {
            slug: "website-designing",
            title: "E-commerce Stores",
            description: "Catalogs, carts, offers, and checkout so you can sell online — built for conversion and real payments.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="10" y="14" width="44" height="36" rx="6" fill="#FDE68A" fillOpacity="0.25" />
                    <rect x="18" y="24" width="12" height="14" rx="2" fill="#F59E0B" fillOpacity="0.4" />
                    <rect x="34" y="24" width="12" height="14" rx="2" fill="#F59E0B" fillOpacity="0.25" />
                    <rect x="18" y="42" width="28" height="5" rx="2.5" fill="#F59E0B" />
                </svg>
            )
        },
        {
            slug: "website-designing",
            title: "Web Apps",
            description: "Login, dashboards, and product flows with Firebase or Supabase — tools your team can use every day.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="8" y="10" width="48" height="44" rx="6" fill="#FDE68A" fillOpacity="0.2" />
                    <rect x="14" y="18" width="16" height="28" rx="3" fill="#F59E0B" fillOpacity="0.25" />
                    <rect x="34" y="18" width="16" height="10" rx="2" fill="#F59E0B" fillOpacity="0.4" />
                    <rect x="34" y="32" width="16" height="14" rx="2" fill="#FCD34D" fillOpacity="0.35" />
                </svg>
            )
        },
        {
            slug: "digital-marketing",
            title: "Digital Marketing",
            description: "Social, ads, content, and email campaigns that grow visibility and generate qualified leads.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="32" cy="32" r="22" fill="#FDE68A" fillOpacity="0.2" />
                    <path d="M20 40 L28 28 L36 34 L44 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            )
        },
        {
            slug: "seo",
            title: "SEO Services",
            description: "Technical SEO, keyword strategy, and on-page work that improves rankings and sustainable traffic.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="28" cy="28" r="14" fill="#FDE68A" fillOpacity="0.25" stroke="#F59E0B" strokeWidth="2" />
                    <line x1="38" y1="38" x2="50" y2="50" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                </svg>
            )
        },
    ];

    const detailedServices = [
        {
            slug: "website-designing",
            title: "Business Websites",
            description: "A site that explains your offer and captures leads — mobile-ready, fast, and SEO-friendly so visitors can become clients.",
            badge: "Outcome: More enquiries",
            bgColor: "from-yellow-50 to-amber-50",
            accentColor: "border-yellow-400/50"
        },
        {
            slug: "website-designing",
            title: "E-commerce Stores",
            description: "Catalogs, carts, offers, and checkout so you can sell online — built for conversion and real payments like Razorpay.",
            badge: "Outcome: Take orders",
            bgColor: "from-orange-50 to-yellow-50",
            accentColor: "border-orange-400/50"
        },
        {
            slug: "website-designing",
            title: "Web Apps & Dashboards",
            description: "Login, dashboards, and product flows with Firebase or Supabase — software your team and customers can use every day.",
            badge: "Outcome: Save manual work",
            bgColor: "from-amber-50 to-orange-50",
            accentColor: "border-amber-400/50"
        },
        {
            slug: "digital-marketing",
            title: "Digital Marketing",
            description: "Social, paid ads, content, and email campaigns that grow visibility and generate qualified leads — measured against real outcomes.",
            badge: "Growth",
            bgColor: "from-yellow-50 to-amber-50",
            accentColor: "border-yellow-400/50"
        },
        {
            slug: "seo",
            title: "SEO Services",
            description: "Technical SEO, keyword strategy, and on-page optimization that improve organic rankings, local visibility, and lasting traffic.",
            badge: "Organic reach",
            bgColor: "from-orange-50 to-yellow-50",
            accentColor: "border-orange-400/50"
        },
        {
            slug: "bookkeeping",
            title: "Business Operations Support",
            description: "Need books, payroll, or tax help alongside your site? We still support growing businesses with financial operations when needed.",
            badge: "Also available",
            bgColor: "from-amber-50 to-orange-50",
            accentColor: "border-amber-400/50"
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-yellow-50 border border-yellow-200 backdrop-blur-md mb-8 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-600">Hire for websites, stores & web apps</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-[0.9]">
                        PAID BUILDS THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase">ship live</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Freelance-quality Next.js and React builds delivered as a company — quoted up front, built to launch, for businesses that need a live product.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/${service.slug}`}
                            className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center"
                        >
                            <div className="flex justify-center mb-5">
                                <div className="relative w-14 h-14 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-yellow-400 opacity-10 blur-xl rounded-full group-hover:opacity-30 transition-opacity"></div>
                                    <div className="relative w-full h-full">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xs md:text-sm font-black text-slate-900 mb-2 text-center uppercase tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-xs text-slate-500 text-center leading-relaxed hidden md:block">
                                {service.description.split('.')[0]}.
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="bg-slate-900 p-10 md:p-14 rounded-3xl shadow-2xl mb-20 text-center relative overflow-hidden group flex flex-col items-center">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-yellow-400/20 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl -ml-24 -mb-24 group-hover:bg-orange-500/20 transition-colors"></div>

                    <p className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">
                        HAVE A PROJECT? LET&apos;S PRICE IT <br />
                        <a href="tel:17077084062" className="text-yellow-500 hover:text-white transition-colors duration-300 tracking-normal inline-block mt-2">
                            1-707-708-4062
                        </a>
                    </p>
                    <p className="text-lg text-slate-400 mb-8 font-bold uppercase tracking-[0.2em]">
                        Clear quote — usually within two business days
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-yellow-500 transition-all duration-500 hover:scale-105 shadow-md"
                    >
                        REQUEST A QUOTE
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {detailedServices.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gradient-to-br ${service.bgColor} rounded-[2.5rem] p-8 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(234,179,8,0.2)] transition-all duration-700 hover:-translate-y-4 border border-slate-100 hover:${service.accentColor} flex flex-col h-full overflow-hidden`}
                        >
                            <div className="mb-6">
                                <div className="inline-block bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm mb-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{service.badge}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase leading-none tracking-tighter group-hover:text-yellow-600 transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <div className="flex gap-1.5 mb-4">
                                    <div className="h-1 rounded-full bg-yellow-500 w-12 group-hover:w-20 transition-all duration-700"></div>
                                    <div className="h-1 rounded-full bg-yellow-500 w-1.5"></div>
                                </div>
                                <p className="text-base text-slate-600 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-200/60 w-full group/btn">
                                <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-yellow-600 transition-colors">
                                    Learn More
                                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </Link>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
