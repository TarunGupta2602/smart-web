"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Pricing", href: "/pricing" },
        { name: "Blogs", href: "/blog" },
        { name: "About Us", href: "/about" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white lg:bg-white/90 lg:backdrop-blur-md shadow-lg py-3"
                : "bg-white lg:bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/images/logo.png"
                        alt="SmartSoft Solutions"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-yellow-500 relative group py-2 ${pathname === link.href ? "text-yellow-500" : "text-gray-700"
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left transition-transform duration-300 ${pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform active:scale-95"
                    >
                        Get A Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 flex flex-col items-end gap-1.5">
                        <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </div>
                </button>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-40 bg-white lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex flex-col h-full pt-24 px-6 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="flex flex-col space-y-6 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-xl font-bold transition-colors duration-300 ${pathname === link.href ? "text-yellow-500" : "text-gray-800"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-lg shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Get A Quote
                            </Link>
                            <a href="mailto:support@smartsoftsolutions.org" className="text-gray-600 text-sm font-semibold flex items-center gap-2 hover:text-yellow-500 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                support@smartsoftsolutions.org
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
