"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { name: "Website Development (HTML, CSS, JS, React, Next.js)", percentage: 99 },
        { name: "Mobile App Development (Android, iOS, React Native)", percentage: 98 },
        { name: "Content Writing (SEO, Blogs, Copywriting)", percentage: 95 }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-100 md:h-125 lg:h-150 flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/about-us-banner.jpg"
                    alt="About Us Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase">
                        ABOUT <span className="text-yellow-400">US</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                        Building Digital Excellence Since Day One
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-6">

                    {/* Introduction */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase">
                            GET TO KNOW ABOUT US & <span className="text-yellow-500">OUR THINKING</span>
                        </h2>
                    </div>

                    {/* Content with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                        <div className="order-2 lg:order-1">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                                    SmartSoft Solutions is dedicated to empowering startups and small businesses in the USA with world-class website development, mobile app development, and professional content writing services. Our team combines technical expertise and creative vision to deliver digital solutions that help your business stand out and grow online.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                                    We believe in transparent communication, reliable delivery, and building lasting partnerships. By focusing on your unique needs, we ensure every project is tailored for maximum impact, whether you need a modern website, a custom mobile app, or compelling content that drives results.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative h-75 md:h-100 lg:h-125 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/about-img.jpg"
                                    alt="About SmartSoft Solutions"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <div className="bg-linear-to-br from-yellow-50 to-yellow-100 p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-yellow-400">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">Our Mission</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Our mission is to help small businesses and startups in the USA thrive by providing affordable, high-quality web and app development, and content writing services. We are committed to delivering solutions that drive growth, enhance online presence, and create lasting value for our clients.
                            </p>
                        </div>

                        <div className="bg-linear-to-br from-gray-50 to-gray-100 p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-gray-400">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">Our Vision</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                To be the trusted digital partner for small businesses across the USA, recognized for our integrity, innovation, and ability to turn ideas into impactful digital solutions. We envision a future where every business, regardless of size, can access the tools and expertise needed to succeed online.
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-20">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center uppercase">
                            Our <span className="text-yellow-500">Commitment</span>
                        </h3>
                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                We are passionate about helping small businesses achieve their goals through technology and content. Every project is handled with care, creativity, and a focus on measurable results. Our clients trust us to deliver solutions that are not only functional, but also elevate their brand and connect with their audience.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                We value long-term relationships, honest communication, and continuous improvement. Your success is our priority, and we are committed to going the extra mile to ensure your satisfaction.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                With a proven track record and a customer-first mindset, SmartSoft Solutions is your reliable partner for web development, app development, and content writing in the USA.
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 text-center uppercase">
                            OUR <span className="text-yellow-400">SKILLS</span>
                        </h3>
                        <p className="text-base md:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                            Our core skills are focused on website development, mobile app development, and content writing. We use the latest technologies and best practices to deliver outstanding results for small businesses and startups.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-white font-bold text-sm md:text-base">{skill.name}</span>
                                        <span className="text-yellow-400 font-bold text-lg">{skill.percentage}%</span>
                                    </div>
                                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-linear-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
