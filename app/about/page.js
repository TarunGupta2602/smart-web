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
            <div className="relative h-[400px] md:h-[200px] lg:h-[300px]  hidden lg:block flex items-center justify-center overflow-hidden">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-yellow-400">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase">Our Mission</h3>
                            </div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                We are committed to build world class products based on its philosophy that great products help building
                                successful companies. This is designed to drive customer satisfaction, making the workplace a fun place for
                                our employees and creating significant shareholder value.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-gray-400">
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
                                Our mission is to create an environment that helps companies to capitalize on the diversity of its people
                                and the inclusion of ideas and solutions to meet the needs of its increasing global and diverse customer base.
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
                                With thousands of successful projects delivered across the world, we believe in giving life to your brand
                                through our experience, passion and capabilities. We take pride in our ability to deliver excellent software
                                solutions to our clients around the world.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                As a corporate principle we believe in winning repeat business from our existing customers through our
                                hard-work and dedication. We realize that any inefficiency and loss to our customer's business is our loss,
                                and we take this loss personally.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Our strict adherence to internal processes, guidelines, and the use of a premier quality assurance team
                                ensures that our customers stay happy while we deliver the highest caliber of software development and
                                customer service. Our culture, passion for quality, and the simple "customer comes first" philosophy ensures
                                that clients can depend on us to continuously deliver on the promises we make.
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 text-center uppercase">
                            OUR <span className="text-yellow-400">SKILLS</span>
                        </h3>
                        <p className="text-base md:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                            We have expertise in all kinds of technology which is required in development of projects,
                            here are some of our main skillsets.
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
                                            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
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