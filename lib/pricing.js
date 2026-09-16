/** Shared public pricing bands — keep homepage, pricing page, and CTAs in sync. */

export const PRICING_PACKAGES = [
  {
    name: "Business website",
    priceFrom: "₹5,000",
    priceNote: "Final quote depends on pages & design depth",
    description: "A focused marketing site that explains your offer, builds trust, and captures leads.",
    includes: [
      "Custom Next.js / React design",
      "Service and about pages",
      "Lead forms and CTAs",
      "Mobile-first performance",
      "Basic on-page SEO",
      "Production deploy and handoff",
    ],
  },
  {
    name: "E-commerce store",
    priceFrom: "₹10,000",
    priceNote: "Catalogue size & payments change the quote",
    description: "Catalogs, collections, offers, cart, and checkout so you can sell online.",
    featured: true,
    includes: [
      "Product catalog and collections",
      "Cart and checkout flow",
      "Payment integration",
      "Promotions and offer messaging",
      "Mobile shopping UX",
      "Launch support",
    ],
  },
  {
    name: "Custom web app",
    priceFrom: "₹15,000",
    priceNote: "Quoted after a clear feature map",
    description: "Login, dashboards, and product flows with Firebase or Supabase.",
    includes: [
      "Auth and user roles",
      "Dashboards and workflows",
      "Firebase or Supabase backend",
      "Weekly progress demos",
      "Maintainable codebase",
      "Deploy and documentation",
    ],
  },
];

export const PRICING_SUMMARY =
  "Business websites from ₹5,000 · E-commerce from ₹10,000 · Web apps from ₹15,000";
