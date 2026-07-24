import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-flex items-center gap-3 group mb-2">
                            <Image
                                src="/favicon.ico"
                                alt="SmartSoft Solutions - Bookkeeping & Accounting"
                                width={44}
                                height={44}
                                className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-yellow-400 transition-colors uppercase">
                                SmartSoft{" "}
                                <span className="text-yellow-400 group-hover:text-white italic font-serif lowercase transition-colors">
                                    Solutions
                                </span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Professional bookkeeping, accounting, invoicing, payroll, and tax services for small businesses across the USA and Canada. CPA-supervised, accurate, and affordable.
                        </p>

                        {/* Physical Addresses */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-slate-500 text-sm">
                                <svg className="w-4 h-4 mt-0.5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <address className="not-italic leading-relaxed">
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-yellow-500/80 mb-1">Canada</span>
                                    24 Ranchlands Bay NW<br />
                                    Calgary, AB T3G 1S4<br />
                                    Canada
                                </address>
                            </div>
                            <div className="flex items-start gap-3 text-slate-500 text-sm">
                                <svg className="w-4 h-4 mt-0.5 text-yellow-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <address className="not-italic leading-relaxed">
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-yellow-500/80 mb-1">India Branch</span>
                                    H-25 Sec 63<br />
                                    Basement Floor<br />
                                    Noida 201301<br />
                                    India
                                </address>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["IRS Authorized", "CRA Compliant", "QuickBooks Pro"].map((badge) => (
                                <span key={badge} className="text-[10px] text-yellow-400 font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                                    ✓ {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.2em]">Navigation</h3>
                        <ul className="space-y-3.5">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Services", href: "/services" },
                                { name: "Pricing", href: "/pricing" },
                                { name: "Blog", href: "/blog" },
                                { name: "About", href: "/about" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 overflow-hidden h-0.5 bg-yellow-400 rounded-full transition-all duration-200" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.2em]">Our Services</h3>
                        <ul className="space-y-3.5">
                            {[
                                { name: "Bookkeeping", href: "/services/bookkeeping" },
                                { name: "Accounting", href: "/services/accounting" },
                                { name: "Invoicing", href: "/services/invoicing" },
                                { name: "Payroll", href: "/services/payroll" },
                                { name: "Tax Preparation", href: "/services/tax-preparation" },
                                { name: "Financial Consulting", href: "/services/financial-consulting" },
                                { name: "Website Designing", href: "/services/website-designing" },
                                { name: "Digital Marketing", href: "/services/digital-marketing" },
                                { name: "SEO", href: "/services/seo" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 overflow-hidden h-0.5 bg-yellow-400 rounded-full transition-all duration-200" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.2em]">Legal</h3>
                        <ul className="space-y-3.5">
                            {[
                                { name: "Privacy Policy", href: "/privacy-policy" },
                                { name: "Terms of Service", href: "/terms-of-service" },
                                { name: "Refund Policy", href: "/refund-policy" },
                                { name: "Cookie Policy", href: "/cookie-policy" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 overflow-hidden h-0.5 bg-yellow-400 rounded-full transition-all duration-200" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div className="lg:col-span-2">
                        <div className="relative group overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-yellow-400/30">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <h3 className="text-white font-black text-base mb-2 relative z-10">Book Free Consultation</h3>
                            <p className="text-xs text-slate-500 mb-6 relative z-10 leading-relaxed">
                                Expert bookkeeping, payroll & tax services for USA & Canada businesses.
                            </p>

                            <div className="space-y-3 relative z-10">
                                <a
                                    href="tel:17077084062"
                                    className="flex items-center justify-center w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-[11px] uppercase tracking-widest transition-all shadow-lg shadow-yellow-500/20 hover:shadow-yellow-400/30 gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    +1-707-708-4062
                                </a>
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-black rounded-xl text-[11px] uppercase tracking-widest transition-all"
                                >
                                    Contact Us
                                </Link>
                                <div className="text-center">
                                    <span className="text-[10px] text-slate-600 uppercase tracking-widest font-medium">Free Consultation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-xs text-center md:text-left leading-relaxed">
                        &copy; {currentYear} SmartSoft Solutions Inc. All rights reserved.
                        <span className="hidden md:inline mx-2">•</span>
                        <br className="md:hidden" />
                        Professional Bookkeeping, Accounting, Payroll &amp; Tax Services — USA &amp; Canada.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-slate-600">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                        <div className="flex items-center bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />
                            Available for New Clients
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
