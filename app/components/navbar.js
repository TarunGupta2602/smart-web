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
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                        ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/30 py-3 border-b border-white/5"
                        : "bg-slate-950/90 backdrop-blur-md py-4 border-b border-white/10"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-5 sm:px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <Image
                            src="/favicon.ico"
                            alt="SmartSoft Solutions"
                            width={40}
                            height={40}
                            className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="text-xl font-black tracking-tighter text-white group-hover:text-yellow-400 transition-colors uppercase leading-tight">
                            SmartSoft{" "}
                            <span className="text-yellow-400 group-hover:text-white italic font-serif lowercase transition-colors">
                                Solutions
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative text-[11px] font-black uppercase tracking-[0.15em] transition-colors duration-200 py-1.5 group ${isActive ? "text-yellow-400" : "text-slate-300 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="tel:17077084062"
                            className="hidden xl:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            +1-707-708-4062
                        </a>
                        <Link
                            href="/contact"
                            className="px-5 py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-[10px] uppercase tracking-widest shadow-lg shadow-yellow-400/20 hover:shadow-yellow-300/30 transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                            Free Consultation
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden flex flex-col justify-center gap-1.5 w-9 h-9 rounded-lg hover:bg-white/10 items-center transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        id="mobile-menu-button"
                    >
                        <span className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
                {/* Drawer Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-[300px] bg-slate-950 border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                        <span className="text-sm font-black uppercase tracking-widest text-yellow-400">
                            Menu
                        </span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                            aria-label="Close menu"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex-1 px-6 py-8 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${isActive
                                            ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                                            : "text-slate-300 hover:bg-white/5 hover:text-white border border-transparent"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Drawer Footer */}
                    <div className="px-6 py-6 border-t border-white/10 space-y-3">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center w-full py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-[11px] uppercase tracking-widest transition-all"
                        >
                            Free Consultation
                        </Link>
                        <a
                            href="tel:17077084062"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-bold text-xs transition-all"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            +1-707-708-4062
                        </a>
                    </div>
                </div>
            </div>

            {/* Spacer for fixed navbar */}
            <div className="h-[65px] lg:h-[73px]" />
        </>
    );
}
