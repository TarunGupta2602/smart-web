"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import brandMark from "../icon.png";
import { hasVideoHero } from "@/lib/page-media";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "NFC menu", href: "/services/nfc-digital-menu", badge: "New" },
        { name: "Work", href: "/projects" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
    ];
    const isNfc = pathname.startsWith("/services/nfc-digital-menu");

    const onHero = hasVideoHero(pathname) && !scrolled;

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${
                    onHero
                        ? "bg-transparent border-b border-transparent py-4"
                        : scrolled
                          ? "bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3"
                          : "bg-white border-b border-transparent py-4"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2.5 shrink-0">
                        <Image
                            src={brandMark}
                            alt="SmartSoft Solutions"
                            width={40}
                            height={40}
                            priority
                            className="object-contain"
                        />
                        <span className={`font-display text-[15px] font-semibold tracking-tight ${onHero ? "text-white" : "text-slate-900"}`}>
                            SmartSoft Solutions
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive =
                                link.href === "/services/nfc-digital-menu"
                                    ? isNfc
                                    : link.href === "/services"
                                      ? pathname.startsWith("/services") && !isNfc
                                      : pathname === link.href || pathname.startsWith(link.href + "/");
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                                        onHero
                                            ? isActive
                                                ? "text-white font-medium"
                                                : "text-white/75 hover:text-white"
                                            : isActive
                                              ? "text-slate-900 font-medium"
                                              : "text-slate-500 hover:text-slate-900"
                                    }`}
                                >
                                    {link.name}
                                    {link.badge ? (
                                        <span
                                            className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                                                onHero ? "bg-white/20 text-white" : "bg-[#0f3d68] text-white"
                                            }`}
                                        >
                                            {link.badge}
                                        </span>
                                    ) : null}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden lg:flex items-center gap-5">
                        <Link
                            href="/free-website-audit"
                            className={`text-sm transition-colors ${onHero ? "text-white/80 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}
                        >
                            Free review
                        </Link>
                        <a
                            href="tel:+917456096455"
                            className={`hidden xl:inline text-sm transition-colors ${onHero ? "text-white/80 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}
                        >
                            +91 74560 96455
                        </a>
                        <Link
                            href="/contact"
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                onHero
                                    ? "bg-white text-[#0f3d68] hover:bg-slate-100"
                                    : "bg-[#0f3d68] hover:bg-[#0a2f52] text-white"
                            }`}
                        >
                            Get a quote
                        </Link>
                    </div>

                    <button
                        className="lg:hidden flex flex-col justify-center gap-1.5 w-9 h-9 items-center"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`h-0.5 w-5 rounded-full transition-all duration-300 ${onHero ? "bg-white" : "bg-slate-900"} ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`h-0.5 w-5 rounded-full transition-all duration-300 ${onHero ? "bg-white" : "bg-slate-900"} ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`h-0.5 w-5 rounded-full transition-all duration-300 ${onHero ? "bg-white" : "bg-slate-900"} ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="absolute inset-0 bg-slate-900/20" onClick={() => setIsOpen(false)} />
                <div
                    className={`absolute right-0 top-0 h-full w-[280px] bg-white border-l border-slate-200 flex flex-col transition-transform duration-200 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                        <span className="text-sm font-medium text-slate-900">Menu</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 flex items-center justify-center text-slate-500"
                            aria-label="Close menu"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                        <Link
                            href="/services/nfc-digital-menu"
                            onClick={() => setIsOpen(false)}
                            className="block mx-0 mb-3 rounded-lg border border-[#0f3d68]/20 bg-[#0f3d68]/5 px-3 py-3"
                        >
                            <span className="flex items-center justify-between gap-2">
                                <span className="text-sm font-semibold text-slate-900">NFC QR menu</span>
                                <span className="rounded-full bg-[#0f3d68] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                                    New
                                </span>
                            </span>
                            <span className="mt-1 block text-xs text-slate-600">Tap-to-order for restaurants · free pilot</span>
                        </Link>
                        {navLinks
                            .filter((link) => link.href !== "/services/nfc-digital-menu")
                            .map((link) => {
                            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                            return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-3 rounded-md text-sm ${
                                    isActive
                                        ? "bg-slate-50 text-slate-900 font-medium"
                                        : "text-slate-600 hover:bg-slate-50"
                                }`}
                            >
                                {link.name}
                            </Link>
                            );
                        })}
                    </nav>
                    <div className="px-5 py-5 border-t border-slate-100 space-y-3">
                        <Link
                            href="/free-website-audit"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center w-full py-2.5 rounded-md border border-slate-200 text-slate-800 text-sm font-medium"
                        >
                            Free website review
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center w-full py-2.5 rounded-md bg-[#0f3d68] text-white text-sm font-medium"
                        >
                            Get a quote
                        </Link>
                        <a href="tel:+917456096455" className="block text-center text-sm text-slate-500">
                            +91 74560 96455
                        </a>
                    </div>
                </div>
            </div>

            <div className={`${hasVideoHero(pathname) ? "h-0" : "h-[65px] lg:h-[69px]"}`} />
        </>
    );
}
