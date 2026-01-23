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
                        <p className="text-gray-300 text-sm leading-7 text-justify">
                            We Are A Development Company. We Have Expertise In Website Development & Designing, Website Making Company, Software Development, Graphics Designing, Android Apps Development, Digital Marketing, Internet Marketing, Brand Marketing, Product Marketing Etc. We Make Websites At Lowest Possible Price. We Also Provide Domain And Hosting Servers At Lowest Cost.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Portfolio', 'Projects', 'Pricing', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                                        className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
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
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span className="text-gray-300 text-sm leading-6">H-25, Basement Floor, Sector 63, Noida, 201301</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 mt-0.5 mr-3 shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm font-medium">Phone: +1-786-753-8470</p>
                                    <p className="text-gray-400 text-xs mt-1">Call / Chat To Get Free Consultation</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 mt-0.5 mr-3 shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-gray-300 text-sm break-all">smartsoft-solutions@outlook.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Get A Quote */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 p-6 rounded-2xl shadow-xl text-gray-900 transform hover:-translate-y-1 transition-transform duration-300">
                            <h4 className="text-lg font-bold mb-2">Get A Quote</h4>
                            <p className="text-gray-800 text-xs leading-5 mb-4">
                                Get A Quote From The Live Experts On Call On Spot. You Can Also Get A Quote On Your Email About Your Project. Get Your Project Started Right Away.
                            </p>
                            <div className="space-y-3">
                                <p className="text-xs font-semibold text-gray-900 bg-white/40 p-2 rounded">
                                    We Can Deliver Your Project In Just 48 Hrs If It Is A Basic Website Project.
                                </p>
                                <a href="tel:17867538470" className="block w-full text-center py-2.5 bg-gray-900 text-white font-bold rounded-lg text-sm hover:bg-gray-800 transition-colors">
                                    Call Now +1-786-753-8470
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        &copy; {currentYear} SmartSoftSolutions. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
