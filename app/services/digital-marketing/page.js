import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Digital Marketing Services | Grow Your Online Presence | SmartSoft Solutions",
    description: "Digital marketing services for small businesses — social media, content, email campaigns, and paid ads that drive traffic, leads, and measurable growth.",
    keywords: [
        "digital marketing services", "social media marketing", "content marketing",
        "email marketing campaigns", "PPC advertising", "online marketing USA Canada"
    ],
    alternates: {
        canonical: `${SITE_URL}/services/digital-marketing`,
    },
    openGraph: {
        title: "Digital Marketing Services | SmartSoft Solutions",
        description: "Practical digital marketing that builds visibility, generates leads, and supports long-term brand growth.",
        url: `${SITE_URL}/services/digital-marketing`,
        type: 'website',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
    },
    other: {
        category: 'Digital Marketing',
        classification: 'Technology',
    },
};

export default function DigitalMarketingServicePage() {
    const pageSchema = webPage({
        name: 'Digital Marketing Services',
        description: 'Social, content, email, and paid digital marketing campaigns for USA and Canada small businesses.',
        url: `${SITE_URL}/services/digital-marketing`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Digital Marketing', url: `${SITE_URL}/services/digital-marketing` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Digital Marketing', url: '/services/digital-marketing' }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-500 selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([pageSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-6 pt-4 pb-2" />

            <section className="relative min-h-[40vh] flex items-center bg-slate-950 text-white overflow-hidden py-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px] animate-pulse"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 self-center lg:self-start">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-yellow-400">Technology Services</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            DIGITAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 italic font-serif">MARKETING.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                            Reach the right audience with focused campaigns across social, search, content, and email — measured by leads and revenue, not vanity metrics.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 tracking-tight">
                                MARKETING THAT <br />
                                <span className="text-yellow-500 italic font-serif">DRIVES GROWTH.</span>
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-sm font-medium">
                                We plan and run digital campaigns tailored to your offer, audience, and budget — so every channel supports a clear path from awareness to inquiry.
                            </p>
                            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">✓</span>
                                    Social Media Strategy & Content Calendars
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">✓</span>
                                    Paid Ads (Meta, Google) & Retargeting
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">✓</span>
                                    Email Nurture Sequences & Lead Magnets
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">✓</span>
                                    Campaign Reporting & Conversion Tracking
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white border border-slate-800 shadow-2xl relative">
                            <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center">
                                <div>
                                    <h4 className="text-xs uppercase text-slate-400 font-bold">Campaign Snapshot</h4>
                                    <p className="text-[10px] text-yellow-500 font-serif italic">Channel performance overview</p>
                                </div>
                                <span className="bg-green-500/25 border border-green-500 text-green-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase">Active</span>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Qualified Leads (30 days):</span>
                                    <span className="text-green-400 font-bold">+42%</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Avg. Cost Per Lead:</span>
                                    <span className="text-yellow-400 font-bold">Optimized</span>
                                </div>
                                <div className="flex justify-between text-xs border-t border-white/5 pt-3">
                                    <span className="text-white font-bold">Channels Live:</span>
                                    <span className="text-yellow-400 font-black">Social · Ads · Email</span>
                                </div>
                            </div>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] text-slate-400">
                                Insight: Consistent creative testing and clear landing pages improve lead quality over time.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-slate-450">Ready to grow online?</h3>
                    <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">START YOUR MARKETING PLAN</h2>
                    <p className="text-slate-600 text-sm max-w-xl mx-auto mb-10 font-medium">
                        Get a free digital marketing review and a practical plan matched to your goals and market.
                    </p>
                    <Link href="/contact?service=Digital%20Marketing" className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-xs rounded-full shadow-lg transition-all">
                        Request Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
