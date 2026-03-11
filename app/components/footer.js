import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white pt-16 pb-8 border-t border-gray-700">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

                    {/* Column 1: About Us */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-block mb-6 group">
                            <img
                                src="/images/logo.png"
                                alt="SmartSoft Solutions"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                            <h3 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wide">About Us</h3>
                            <p className="text-gray-300 text-sm leading-7 text-left">
                                SmartSoft Solutions empowers USA small businesses and startups with modern website development, mobile app solutions, and professional content writing. Our team delivers fast, secure, and scalable digital products designed to help you grow online and stand out in your market.
                            </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Pricing', href: '/pricing' },
                                { name: 'Blogs', href: '/blog' },
                                { name: 'About', href: '/about' },
                                { name: 'Contact', href: '/contact' },
                                { name: 'Privacy Policy', href: '/privacy-policy' },
                                { name: 'Terms of Service', href: '/terms-of-service' },
                                { name: 'Refund Policy', href: '/refund-policy' },
                                { name: 'Cookie Policy', href: '/cookie-policy' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
                        <ul className="space-y-5">
                           
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 mt-0.5 mr-3 shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                        <p className="text-gray-300 text-sm font-medium">Phone: +1-707-708-4062</p>
                                        <p className="text-yellow-400 text-xs mt-1">Free Consultation for USA Businesses</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 mt-0.5 mr-3 shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-gray-300 text-sm break-all">support@smartsoftsolutions.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Get A Quote */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 p-6 rounded-2xl shadow-xl text-gray-900 transform hover:-translate-y-1 transition-transform duration-300">
                                <h4 className="text-lg font-bold mb-2">Get a Free Quote</h4>
                                <p className="text-gray-800 text-xs leading-5 mb-4">
                                    Ready to launch your website or app? Get a free quote from our USA-based experts. Fast turnaround, clear pricing, and professional service for small businesses and startups.
                                </p>
                            <div className="space-y-3">
                                <p className="text-xs font-semibold text-gray-900 bg-white/40 p-2 rounded">
                                        Most projects delivered in just 48 hours.
                                </p>
                                <a href="tel:17077084062" className="block w-full text-center py-2.5 bg-gray-900 text-white font-bold rounded-lg text-sm hover:bg-gray-800 transition-colors">
                                        Call Now +1-707-708-4062
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            &copy; {currentYear} SmartSoft Solutions. Website & App Development for USA Small Businesses. All rights reserved.
                        </p>
                    
                </div>
            </div>
        </footer>
    );
}
