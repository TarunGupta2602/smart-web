import Link from "next/link";
import Image from "next/image";
import { INDIA_CITIES, cityPath } from "@/lib/india-cities";
import { CONTACT_ADDRESS_LINE, CONTACT_MAPS_URL, GOOGLE_BUSINESS_URL } from "@/lib/seo";
import brandMark from "../icon.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const featuredCities = INDIA_CITIES.slice(0, 12);

    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">
                    <div className="lg:col-span-4 space-y-5">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <Image
                                src={brandMark}
                                alt="SmartSoft Solutions"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                            <span className="font-display text-[15px] font-semibold tracking-tight text-slate-900">
                                SmartSoft Solutions
                            </span>
                        </Link>
                        <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                            Website development for business sites, e-commerce stores, and web apps —
                            fixed quotes, SEO-ready launches, and delivery across India via WhatsApp, email, and video.
                        </p>
                        <div className="text-sm text-slate-500 space-y-3">
                            <p>
                                <span className="text-slate-400 block text-xs mb-0.5">Address</span>
                                <a
                                    href={CONTACT_MAPS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-slate-900 transition-colors"
                                >
                                    {CONTACT_ADDRESS_LINE}
                                </a>
                            </p>
                            <p>
                                <a
                                    href={GOOGLE_BUSINESS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0f3d68] hover:underline text-sm font-medium"
                                >
                                    Google Business Profile
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-xs font-semibold text-slate-900 mb-4 tracking-wide uppercase">Company</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Services", href: "/services" },
                                { name: "Work", href: "/projects" },
                                { name: "Pricing", href: "/pricing" },
                                { name: "About", href: "/about" },
                                { name: "Free review", href: "/free-website-audit" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-semibold text-slate-900 mb-4 tracking-wide uppercase">Services</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Business websites", href: "/services/website-designing" },
                                { name: "E-commerce & web apps", href: "/services/website-designing" },
                                { name: "Digital marketing", href: "/services/digital-marketing" },
                                { name: "SEO", href: "/services/seo" },
                                { name: "India cities", href: "/website-development-company-in" },
                                { name: "Live projects", href: "/projects" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-semibold text-slate-900 mb-4 tracking-wide uppercase">Contact</h3>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <a href="tel:+917456096455" className="hover:text-slate-900 transition-colors">
                                    +91 74560 96455
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/917456096455" className="hover:text-slate-900 transition-colors">
                                    WhatsApp +91 74560 96455
                                </a>
                            </li>
                            <li>
                                <a href="mailto:smartsoft.solutions0@gmail.com" className="hover:text-slate-900 transition-colors">
                                    smartsoft.solutions0@gmail.com
                                </a>
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="inline-flex mt-6 px-4 py-2 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                        >
                            Get a quote
                        </Link>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 mb-8">
                    <h3 className="text-xs font-semibold text-slate-900 mb-4 tracking-wide uppercase">
                        Website development in India
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {featuredCities.map((city) => (
                            <Link
                                key={city.slug}
                                href={cityPath(city.slug)}
                                className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                            >
                                {city.name}
                            </Link>
                        ))}
                        <Link
                            href="/website-development-company-in"
                            className="text-xs font-medium text-[#0f3d68] hover:underline"
                        >
                            All cities
                        </Link>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="text-xs text-slate-400">
                        © {currentYear} SmartSoft Solutions · Building business websites since 2018. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5 text-xs text-slate-400">
                        <Link href="/privacy-policy" className="hover:text-slate-700">Privacy</Link>
                        <Link href="/terms-of-service" className="hover:text-slate-700">Terms</Link>
                        <Link href="/refund-policy" className="hover:text-slate-700">Refunds</Link>
                        <Link href="/cookie-policy" className="hover:text-slate-700">Cookies</Link>
                        <Link href="/sitemap.xml" className="hover:text-slate-700">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
