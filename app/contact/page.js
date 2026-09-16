import ContactContent from "./ContactContent";
import Breadcrumb from "../components/Breadcrumb";
import { organization, breadcrumbList, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
    title: "Contact for a Website Quote",
    description:
        "Contact SmartSoft Solutions in Ghaziabad (SK2 Shastri Nagar). Call or WhatsApp +91 74560 96455, or email smartsoft.solutions0@gmail.com.",
    path: "/contact",
    keywords: [
        "hire website developer",
        "website development quote",
        "contact web development company",
        "e-commerce development quote",
        "remote website developer India",
    ],
});

export default function ContactPage() {
    const contactSchema = organization({
        name: 'SmartSoft Solutions',
        description: 'Contact SmartSoft Solutions for website, e-commerce, and web app project quotes.',
        email: 'smartsoft.solutions0@gmail.com',
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Contact', url: `${SITE_URL}/contact` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([contactSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="container mx-auto px-6 pt-4 pb-2" />
            <ContactContent />
        </>
    );
}
