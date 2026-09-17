/** Shared public pricing bands — keep homepage, pricing page, and CTAs in sync. */

export const PRICE_WEBSITE = "₹10,000";
export const PRICE_STORE = "₹15,000";
export const PRICE_APP = "₹25,000";

export const PRICING_SHORT = `${PRICE_WEBSITE} / ${PRICE_STORE} / ${PRICE_APP}`;

export const PRICING_PACKAGES = [
  {
    name: "Business website",
    priceFrom: PRICE_WEBSITE,
    priceNote: "A production Next.js site — not a template dump",
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
    priceFrom: PRICE_STORE,
    priceNote: "Catalogue size and payments change the quote",
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
    priceFrom: PRICE_APP,
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
  `Business websites from ${PRICE_WEBSITE} · E-commerce from ${PRICE_STORE} · Web apps from ${PRICE_APP}`;
