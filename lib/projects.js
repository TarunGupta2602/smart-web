/**
 * Portfolio case studies with live visit URLs.
 * Homepage / testimonials only show `featured` work (B2B-facing).
 * Product builds stay on /projects, listed after client work.
 */

export const PORTFOLIO_PROJECTS = [
  {
    title: "The Luxe Jewels",
    category: "E-commerce",
    featured: true,
    timeline: "Live store",
    result: "Mobile catalogue + checkout taking real pan-India orders",
    challenge:
      "An anti-tarnish jewellery brand needed a store that felt premium on phone screens, explained offers clearly, and collected payments without a clunky theme.",
    approach:
      "We designed collection-led browsing, Buy 2 Get 1 messaging, gift price edits, and a checkout flow built for Indian payments and shipping expectations.",
    description:
      "Anti-tarnish jewellery brand store with collections, Buy 2 Get 1 offers, gift price edits, and pan-India shipping messaging — built for mobile shopping and conversion.",
    tags: ["Next.js", "React", "E-commerce", "Razorpay"],
    liveUrl: "https://www.theluxejewels.in",
    image: "/projects/luxe-jewels.jpg",
  },
  {
    title: "ZamZam Print",
    category: "Business Website",
    featured: true,
    timeline: "Lead-gen launch",
    result: "Urgent printer issues converted into call-first leads",
    challenge:
      "People searching for printer help are impatient. The site had to answer brand/problem queries fast and push phone or callback — not bury the CTA.",
    approach:
      "We built brand and problem pages (HP, Canon, Brother, Epson, and more), call-first CTAs, and a callback request flow aimed at high-intent visitors.",
    description:
      "Remote printer support site with brand and problem pages for HP, Canon, Brother, Epson and more — call-first CTAs and a callback request flow for high-intent visitors.",
    tags: ["Next.js", "React", "SEO", "Lead gen"],
    liveUrl: "https://www.zamzamprint.com",
    image: "/projects/zamzam-print.jpg",
  },
  {
    title: "Parvah",
    category: "Web App",
    featured: false,
    timeline: "Live product",
    result: "Browser-based real-time video product with matching and moderation tools",
    challenge:
      "A product team needed a custom web app with live sessions, queue matching, and a content layer for discovery — beyond a marketing site.",
    approach:
      "We shipped peer-to-peer WebRTC sessions, queue matching, report and skip controls, and SEO landing pages on a Next.js stack.",
    description:
      "Custom Next.js web app with real-time video sessions, matching, and moderation tools — an example of product engineering we take on after a clear feature map.",
    tags: ["Next.js", "WebRTC", "Real-time", "SEO"],
    liveUrl: "https://parvah.online",
    image: "/projects/parvah.jpg",
  },
];

export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.filter((project) => project.featured);

export function getPortfolioProjects() {
  return [...PORTFOLIO_PROJECTS].sort((a, b) => Number(b.featured) - Number(a.featured));
}
