import ProjectsContent from "./ProjectsContent";
import { localBusiness, breadcrumbList, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { PORTFOLIO_PROJECTS } from "@/lib/projects";

export const metadata = buildPageMetadata({
    title: "Live Website & E-commerce Portfolio",
    description:
        "Live SmartSoft Solutions projects — jewellery e-commerce, lead-gen sites, and Parvah video chat — built with Next.js and React. Open each URL, then request a quote.",
    path: "/projects",
    keywords: [
        "web development portfolio",
        "e-commerce website examples",
        "Next.js projects",
        "business website case studies",
        "live website examples",
    ],
});

export default function ProjectsPage() {
    const projectSchema = localBusiness({
        name: 'SmartSoft Solutions Selected Work',
        description: 'Portfolio of live business websites, e-commerce stores, and lead-generation sites.',
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Work', url: `${SITE_URL}/projects` }
    ], SITE_URL);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([projectSchema, breadcrumbSchema]) }}
            />
            <ProjectsContent projects={PORTFOLIO_PROJECTS} />
        </>
    );
}
