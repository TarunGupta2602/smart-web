import Link from "next/link";

export default function ServicesSection() {
    const services = [
        {
            slug: "bookkeeping",
            title: "Bookkeeping",
            description: "Accurate monthly bookkeeping, bank reconciliation, transaction categorization, and financial records management for USA & Canada businesses.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="8" y="6" width="48" height="52" rx="6" fill="#FDE68A" fillOpacity="0.3" />
                    <rect x="16" y="16" width="32" height="4" rx="2" fill="#F59E0B" />
                    <rect x="16" y="26" width="24" height="3" rx="1.5" fill="#FCD34D" fillOpacity="0.8" />
                    <rect x="16" y="34" width="28" height="3" rx="1.5" fill="#FCD34D" fillOpacity="0.8" />
                    <rect x="16" y="42" width="20" height="3" rx="1.5" fill="#FCD34D" fillOpacity="0.6" />
                    <circle cx="44" cy="44" r="10" fill="#F59E0B" fillOpacity="0.2" />
                    <text x="44" y="48" textAnchor="middle" fontSize="12" fill="#F59E0B" fontWeight="bold">$</text>
                </svg>
            )
        },
        {
            slug: "accounting",
            title: "Accounting",
            description: "Full-service accounting including profit & loss statements, balance sheets, cash flow analysis, and year-end financial reporting.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="6" y="6" width="52" height="52" rx="8" fill="#FDE68A" fillOpacity="0.2" />
                    <polyline points="12,48 24,32 34,38 44,20 54,24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="24" cy="32" r="3" fill="#F59E0B" />
                    <circle cx="34" cy="38" r="3" fill="#F59E0B" />
                    <circle cx="44" cy="20" r="3" fill="#F59E0B" />
                    <circle cx="54" cy="24" r="3" fill="#F59E0B" />
                    <line x1="12" y1="52" x2="54" y2="52" stroke="#FCD34D" strokeWidth="2" strokeOpacity="0.5" />
                </svg>
            )
        },
        {
            slug: "invoicing",
            title: "Invoicing",
            description: "Professional invoice creation, billing automation, accounts receivable tracking, and payment reminders to keep your cash flow healthy.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M12 8 L44 8 L52 16 L52 56 L12 56 Z" fill="#FDE68A" fillOpacity="0.25" stroke="#F59E0B" strokeWidth="2" />
                    <path d="M44 8 L44 16 L52 16" fill="none" stroke="#F59E0B" strokeWidth="2" />
                    <rect x="19" y="24" width="26" height="3" rx="1.5" fill="#F59E0B" fillOpacity="0.7" />
                    <rect x="19" y="32" width="18" height="2.5" rx="1.25" fill="#FCD34D" fillOpacity="0.6" />
                    <rect x="19" y="39" width="22" height="2.5" rx="1.25" fill="#FCD34D" fillOpacity="0.6" />
                    <rect x="30" y="45" width="12" height="4" rx="2" fill="#F59E0B" />
                </svg>
            )
        },
        {
            slug: "payroll",
            title: "Payroll",
            description: "Complete payroll processing, direct deposit setup, tax withholding, W-2 and T4 preparation for USA and Canada employees.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect x="6" y="10" width="52" height="44" rx="8" fill="#FDE68A" fillOpacity="0.2" />
                    <rect x="14" y="20" width="36" height="8" rx="4" fill="#F59E0B" fillOpacity="0.3" />
                    <circle cx="22" cy="24" r="5" fill="#F59E0B" />
                    <text x="22" y="27" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">$</text>
                    <rect x="30" y="22" width="16" height="2.5" rx="1.25" fill="#FCD34D" fillOpacity="0.8" />
                    <rect x="30" y="26" width="10" height="2" rx="1" fill="#FCD34D" fillOpacity="0.5" />
                    <rect x="14" y="36" width="36" height="7" rx="3.5" fill="#F59E0B" fillOpacity="0.15" />
                    <rect x="14" y="47" width="36" height="7" rx="3.5" fill="#F59E0B" fillOpacity="0.1" />
                </svg>
            )
        },
        {
            slug: "tax-preparation",
            title: "Tax Preparation & Filing",
            description: "Federal and state tax returns (USA) and provincial tax returns (Canada). IRS e-file authorized, CRA compliant. Maximize deductions, minimize liability.",
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M10 8 L40 8 L54 22 L54 56 L10 56 Z" fill="#FDE68A" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1.5" />
                    <path d="M40 8 L40 22 L54 22" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                    <rect x="17" y="30" width="30" height="3" rx="1.5" fill="#F59E0B" fillOpacity="0.6" />
                    <rect x="17" y="38" width="22" height="2.5" rx="1.25" fill="#FCD34D" fillOpacity="0.5" />
                    <circle cx="42" cy="46" r="9" fill="#F59E0B" />
                    <path d="M38 46 L41 49 L47 43" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
    ];

    const detailedServices = [
        {
            slug: "bookkeeping",
            title: "Bookkeeping",
            description: "We keep your books clean and up-to-date every month. Bank reconciliation, expense tracking, and organized financial records — so you always know where your money stands.",
            badge: "Monthly Service",
            bgColor: "from-yellow-50 to-amber-50",
            accentColor: "border-yellow-400/50"
        },
        {
            slug: "accounting",
            title: "Accounting & Reporting",
            description: "CPA-supervised financial statements, profit & loss reports, balance sheets, and cash flow management. Turn your numbers into actionable business insights.",
            badge: "CPA Supervised",
            bgColor: "from-orange-50 to-yellow-50",
            accentColor: "border-orange-400/50"
        },
        {
            slug: "invoicing",
            title: "Invoicing & Billing",
            description: "Professional invoicing, automated payment reminders, and accounts receivable management. Get paid faster and stop chasing late payments.",
            badge: "Automated Billing",
            bgColor: "from-amber-50 to-orange-50",
            accentColor: "border-amber-400/50"
        },
        {
            slug: "payroll",
            title: "Payroll Processing",
            description: "Full-service payroll for US and Canadian businesses. Direct deposit, tax withholding, W-2 / T4 filing, and compliance — handled completely for you.",
            badge: "USA & Canada",
            bgColor: "from-yellow-50 to-amber-50",
            accentColor: "border-yellow-400/50"
        },
        {
            slug: "tax-preparation",
            title: "Tax Preparation",
            description: "Individual and business tax returns for the USA (Federal + State) and Canada (Federal + Provincial). IRS e-file authorized and CRA compliant. Every deduction found.",
            badge: "IRS Authorized",
            bgColor: "from-orange-50 to-yellow-50",
            accentColor: "border-orange-400/50"
        },
        {
            slug: "financial-consulting",
            title: "Financial Consulting",
            description: "Strategic financial planning, budgeting, and tax-saving advice tailored for small business owners. We help you plan for growth and reduce your tax burden legally.",
            badge: "Expert Advice",
            bgColor: "from-amber-50 to-orange-50",
            accentColor: "border-amber-400/50"
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-yellow-50 border border-yellow-200 backdrop-blur-md mb-8 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-yellow-600">Professional Financial Services</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-[0.9]">
                        EXPERT FINANCIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif lowercase">services</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Bookkeeping, accounting, invoicing, payroll, and tax services for USA & Canada small businesses. Accurate, affordable, and fully managed by our expert team.
                    </p>
                </div>

                {/* Main Services Icons Grid */}
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

                {/* CTA Banner */}
                <div className="bg-slate-900 p-10 md:p-14 rounded-3xl shadow-2xl mb-20 text-center relative overflow-hidden group flex flex-col items-center">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-yellow-400/20 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl -ml-24 -mb-24 group-hover:bg-orange-500/20 transition-colors"></div>

                    <p className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">
                        SPEAK TO A FINANCIAL EXPERT NOW <br />
                        <a href="tel:17077084062" className="text-yellow-500 hover:text-white transition-colors duration-300 tracking-normal inline-block mt-2">
                            1-707-708-4062
                        </a>
                    </p>
                    <p className="text-lg text-slate-400 mb-8 font-bold uppercase tracking-[0.2em]">
                        Free consultation — no obligation
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-yellow-500 transition-all duration-500 hover:scale-105 shadow-md"
                    >
                        GET FREE CONSULTATION
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>

                {/* Detailed Services Grid */}
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
                                    Get Started
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
