/**
 * Permanent redirects for retired URLs still in Google Search Console.
 * Off-topic tech-support ghosts → homepage (company identity), NOT /blog dump.
 * Website performance / SEO ghosts → relevant India SEO or Next.js guides.
 */

const R = (source, destination) => ({ source, destination, permanent: true });

export const legacyRedirects = [
  R("/blog-uploads", "/blog"),
  R("/blog-uploads/:path*", "/blog"),
  R("/services/bookkeeping", "/services"),
  R("/services/accounting", "/services"),
  R("/services/invoicing", "/services"),
  R("/services/payroll", "/services"),
  R("/services/tax-preparation", "/services"),
  R("/services/financial-consulting", "/services"),

  R("/portfolio", "/projects"),
  R("/app-development-los-angeles", "/services/website-designing"),
  R("/website-development-new-york", "/website-development-company-in"),

  // Hiring / cost → India guides
  R("/blog/choose-right-web-development-company-2026-guide", "/blog/how-to-choose-website-development-company-in-india"),
  R("/blog/best-website-design-company-usa-smartsoft-solutions", "/blog/how-to-choose-website-development-company-in-india"),
  R("/blog/how-much-does-a-website-cost-2026-pricing-guide", "/blog/business-website-cost-in-india"),
  R("/blog/why-your-business-needs-website-2026-cost-guide", "/blog/business-website-cost-in-india"),
  R("/blog/do-you-need-website-for-business-2026", "/blog/small-business-website-vs-instagram-india"),
  R("/blog/why-small-business-needs-website-2026", "/blog/small-business-website-vs-instagram-india"),
  R("/blog/small-business-needs-website-usa-2026", "/blog/small-business-website-vs-instagram-india"),
  R("/blog/launch-seo-ready-website-fast-2026", "/blog/seo-checklist-for-new-business-website"),

  // SEO / ranking / speed → SEO or Next.js guides (topic match)
  R("/blog/why-website-not-ranking-google-seo-fixes", "/blog/seo-checklist-for-new-business-website"),
  R("/blog/website-not-getting-traffic-fix-seo-content", "/blog/seo-checklist-for-new-business-website"),
  R("/blog/website-not-showing-up-on-google-fixes", "/blog/seo-checklist-for-new-business-website"),
  R("/blog/website-speed-seo-google-rankings-2026", "/blog/seo-checklist-for-new-business-website"),
  R("/blog/website-loading-slow-fix-speed-optimization-usa", "/blog/nextjs-for-business-websites"),
  R("/blog/website-loading-slow-speed-optimization-guide", "/blog/nextjs-for-business-websites"),
  R("/blog/website-not-loading-slow-fix-guide-usa", "/blog/nextjs-for-business-websites"),
  R("/blog/why-is-my-website-slow-speed-optimization-usa", "/blog/nextjs-for-business-websites"),

  // Site won't load → performance / Next.js (NOT ecommerce checklist mismatch)
  R("/blog/website-not-working-site-wont-load-fixes", "/blog/nextjs-for-business-websites"),
  R("/blog/website-not-loading-fix-cant-access-website", "/blog/nextjs-for-business-websites"),
  R("/blog/website-not-loading-fix-guide", "/blog/nextjs-for-business-websites"),
  R("/blog/website-not-loading-fix-site-wont-open", "/blog/nextjs-for-business-websites"),
  R("/blog/website-not-loading-not-responding-fix", "/blog/nextjs-for-business-websites"),
  R("/blog/this-site-cant-be-reached-error-fix", "/blog/nextjs-for-business-websites"),

  R("/blog/why-businesses-need-mobile-apps-2026", "/services/website-designing#web-apps"),
  R("/blog/social-media-marketing-problems-solutions", "/services/digital-marketing"),
  R("/blog/why-businesses-need-content-writing-services-usa", "/services/digital-marketing"),

  R("/blog/how-much-does-bookkeeping-cost-for-a-small-business-2026", "/services"),
  R("/blog/small-business-tax-deductions-2026", "/services"),
  R("/blog/w2-vs-1099-worker-classification-guide", "/services"),

  // Pure tech-support ghosts → homepage (wipe wrong topical authority)
  R("/blog/microsoft-edge-not-responding-working-opening-fix", "/"),
  R("/blog/microsoft-edge-problems-solutions-fixes", "/"),
  R("/blog/google-chrome-not-opening-fix", "/"),
  R("/blog/google-chrome-not-opening-fixi", "/"),
  R("/blog/chrome-not-responding-fix-windows", "/"),
  R("/blog/windows-11-problems-issues-2026-fixes", "/"),
  R("/blog/windows-11-not-updating-fixes", "/"),
  R("/blog/wifi-not-working-windows-10-fixes", "/"),
  R("/blog/router-not-working-fix-usa-guide", "/"),
  R("/blog/blue-screen-of-death-bsod-fix-guide", "/"),
];
