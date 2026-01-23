"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { name: "Html/Html5/CSS/PHP", percentage: 99 },
        { name: "Wordpress Modules/Plugins", percentage: 100 },
        { name: "Drupal/Joomla", percentage: 98 },
        { name: "Hosting Servers/ Domains", percentage: 100 },
        { name: "Content Writing", percentage: 90 },
        { name: "Graphics Designing", percentage: 90 },
        { name: "Software Development", percentage: 100 },
        { name: "Cloud Services", percentage: 100 }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[250px] md:h-[300px] lg:h-[200px] hidden lg:flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/about-us-banner.jpg"
                    alt="About Us Banner"
                    fill
                    className="object-cover"
                    priority
                />
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
                                    We Are A Development Company. We Have Expertise In Website Development & Designing, Website Making Company,
                                    Software Development, Graphics Designing, Android Apps Development, Digital Marketing, Internet Marketing,
                                    Brand Marketing, Product Marketing Etc. We Make Websites At Lowest Possible Price. We Also Provide Domain
                                    And Hosting Servers At Lowest Cost.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                                    Our unique capability to serve as the one-stop shop solutions provider for its customers. Our ability in
                                    being a complete solutions provider removes the hassle of managing multiple vendors, logistics, and
                                    technological bottlenecks. It gives our customers the peace of mind that they have chosen a reliable,
                                    long-term partner capable of solving their development needs as their businesses grow.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        {/* Mission Card */}
                        <div className="group bg-gradient-to-br from-yellow-50 to-orange-50 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-yellow-200 hover:border-yellow-400">
                            <div className="flex items-center mb-6">
                                <div className="text-5xl mr-4">🎯</div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">Our Mission</h3>
                                    <div className="h-1 w-16 bg-yellow-500 rounded-full mt-2"></div>
                                </div>
                            </div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                We are committed to build world class products based on its philosophy that great products help building
                                successful companies. This is designed to drive customer satisfaction, making the workplace a fun place for
                                our employees and creating significant shareholder value.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400">
                            <div className="flex items-center mb-6">
                                <div className="text-5xl mr-4">👁️</div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">Our Vision</h3>
                                    <div className="h-1 w-16 bg-blue-500 rounded-full mt-2"></div>
                                </div>
                            </div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Our mission is to create an environment that helps companies to capitalize on the diversity of its people
                                and the inclusion of ideas and solutions to meet the needs of its increasing global and diverse customer base.
                            </p>
                        </div>
                    </div>

                    {/* Our Commitment */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-20 border-2 border-gray-100">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
                                Our <span className="text-yellow-500">Commitment</span>
                            </h3>
                            <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Commitment Point 1 */}
                            <div className="text-center p-6">
                                <div className="text-6xl mb-4">🏆</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence Delivered</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    With thousands of successful projects delivered across the world, we believe in giving life to your brand
                                    through our experience, passion and capabilities.
                                </p>
                            </div>

                            {/* Commitment Point 2 */}
                            <div className="text-center p-6">
                                <div className="text-6xl mb-4">❤️</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Customer First</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    We believe in winning repeat business through hard-work and dedication. Any inefficiency to our customer's
                                    business is our loss, and we take this personally.
                                </p>
                            </div>

                            {/* Commitment Point 3 */}
                            <div className="text-center p-6">
                                <div className="text-6xl mb-4">✅</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Our strict adherence to processes and premier quality assurance ensures the highest caliber of software
                                    development and customer service.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section - MOVED BEFORE TEAM */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
                                OUR <span className="text-yellow-500">EXPERTISE</span>
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                                We master the latest technologies and frameworks to deliver cutting-edge solutions.
                                Our comprehensive skill set ensures we can handle any project requirement.
                            </p>
                            <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Web Development */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
                                <div className="flex items-center mb-4">
                                    <div className="text-4xl mr-3">🌐</div>
                                    <h4 className="text-xl font-bold text-gray-900">Web Development</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700 font-medium">HTML/CSS/PHP</span>
                                        <span className="text-orange-600 font-bold">99%</span>
                                    </div>
                                    <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full" style={{ width: '99%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* CMS Platforms */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                                <div className="flex items-center mb-4">
                                    <div className="text-4xl mr-3">📦</div>
                                    <h4 className="text-xl font-bold text-gray-900">CMS Platforms</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700 font-medium">WordPress/Drupal/Joomla</span>
                                        <span className="text-blue-600 font-bold">100%</span>
                                    </div>
                                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Cloud & Hosting */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl">
                                <div className="flex items-center mb-4">
                                    <div className="text-4xl mr-3">☁️</div>
                                    <h4 className="text-xl font-bold text-gray-900">Cloud Services</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700 font-medium">Hosting & Domains</span>
                                        <span className="text-purple-600 font-bold">100%</span>
                                    </div>
                                    <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Software Development */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
                                <div className="flex items-center mb-4">
                                    <div className="text-4xl mr-3">💻</div>
                                    <h4 className="text-xl font-bold text-gray-900">Software Development</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700 font-medium">Custom Solutions</span>
                                        <span className="text-green-600 font-bold">100%</span>
                                    </div>
                                    <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Design Services */}
                            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl">
                                <div className="flex items-center mb-4">
                                    <div className="text-4xl mr-3">🎨</div>
                                    <h4 className="text-xl font-bold text-gray-900">Design Services</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700 font-medium">Graphics & Content</span>
                                        <span className="text-yellow-600 font-bold">90%</span>
                                    </div>
                                    <div className="h-2 bg-yellow-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Development */}
                            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl shadow-lg border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl">
                                <div className="flex items-center mb-4">
                                    <div className="text-4xl mr-3">📱</div>
                                    <h4 className="text-xl font-bold text-gray-900">Mobile Apps</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700 font-medium">Android Development</span>
                                        <span className="text-cyan-600 font-bold">95%</span>
                                    </div>
                                    <div className="h-2 bg-cyan-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Team Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
                                OUR <span className="text-yellow-500">TEAM</span>
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                                Meet the talented professionals who make it all happen. Our diverse team brings together expertise,
                                creativity, and passion to deliver exceptional results.
                            </p>
                            <div className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                            {[
                                { img: "/images/about-img2.jpg", name: "Team Member" },
                                { img: "/images/about-img3.jpg", name: "Team Member" },
                                { img: "/images/about-img4.jpg", name: "Team Member" },
                                { img: "/images/about-img5.jpg", name: "Team Member" },
                                { img: "/images/about-img6.jpg", name: "Team Member" },
                                { img: "/images/about-img7.jpg", name: "Team Member" },
                                { img: "/images/about-img8.jpg", name: "Team Member" }
                            ].map((member, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="text-white font-bold text-lg">{member.name}</h4>
                                        <p className="text-yellow-400 text-sm">Professional</p>
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