import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();



    return (
        <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-zinc-800/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
                                <img
                                    src="/favicon.ico"
                                    alt="SmartSoft"
                                    className="h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <span className="text-2xl font-black tracking-tighter text-white group-hover:text-yellow-500 transition-colors uppercase">
                                    SmartSoft <span className="text-yellow-500 group-hover:text-white italic font-serif lowercase">Solutions</span>
                                </span>
                            </Link>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                                Elevating digital presence for USA businesses. We craft high-performance websites and apps that drive growth and build lasting impact.
                            </p>
                        </div>
                        <div className="flex space-x-5">

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Pricing', href: '/pricing' },
                                { name: 'NYC Services', href: '/website-development-new-york' },
                                { name: 'LA Services', href: '/app-development-los-angeles' },
                                { name: 'Blogs', href: '/blog' },
                                { name: 'About', href: '/about' },
                                { name: 'Contact', href: '/contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Privacy Policy', href: '/privacy-policy' },
                                { name: 'Terms of Service', href: '/terms-of-service' },
                                { name: 'Refund Policy', href: '/refund-policy' },
                                { name: 'Cookie Policy', href: '/cookie-policy' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="lg:col-span-4">
                        <div className="relative group overflow-hidden bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-700">
                            <div className="absolute top-0 right-0 -tranzinc-y-1/2 tranzinc-x-1/2 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <h3 className="text-white font-bold text-lg mb-2 relative z-10">Get a Free Quote</h3>
                            <p className="text-xs text-zinc-500 mb-6 relative z-10">
                                Modern solutions for American startups & small businesses. Delivery in as fast as 48 hours.
                            </p>

                            <div className="space-y-4 relative z-10">
                                <a
                                    href="tel:17077084062"
                                    className="flex items-center justify-center w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-yellow-500/20"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    +1-707-708-4062
                                </a>
                                <div className="text-center">
                                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">Free Consultation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-500 text-xs text-center md:text-left">
                        &copy; {currentYear} SmartSoft Solutions Inc. All rights reserved.
                        <span className="hidden md:inline mx-2">•</span>
                        <br className="md:hidden" />
                        Built with Excellence for USA Small Businesses.
                    </p>
                    <div className="flex items-center space-x-6 text-xs text-zinc-500">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                        <div className="flex items-center bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            System Status: Optimized
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
