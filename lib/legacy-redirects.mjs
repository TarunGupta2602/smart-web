/**
 * Permanent redirects for retired URLs still in Google Search Console.
 * Maps high-impression 404s to the closest live destination.
 */

const R = (source, destination) => ({ source, destination, permanent: true });

export const legacyRedirects = [
  // CMS / finance services (already partially covered)
  R("/blog-uploads", "/blog"),
  R("/blog-uploads/:path*", "/blog"),
  R("/services/bookkeeping", "/services"),
  R("/services/accounting", "/services"),
  R("/services/invoicing", "/services"),
  R("/services/payroll", "/services"),
  R("/services/tax-preparation", "/services"),
  R("/services/financial-consulting", "/services"),

  // Old geo / portfolio paths
  R("/portfolio", "/projects"),
  R("/app-development-los-angeles", "/services/website-designing"),
  R("/website-development-new-york", "/website-development-company-in"),

  // Website hiring / cost / need-a-site → new SEO guides
  R(
    "/blog/choose-right-web-development-company-2026-guide",
    "/blog/how-to-choose-website-development-company-in-india"
  ),
  R(
    "/blog/best-website-design-company-usa-smartsoft-solutions",
    "/blog/how-to-choose-website-development-company-in-india"
  ),
  R(
    "/blog/how-much-does-a-website-cost-2026-pricing-guide",
    "/blog/business-website-cost-in-india"
  ),
  R(
    "/blog/why-your-business-needs-website-2026-cost-guide",
    "/blog/business-website-cost-in-india"
  ),
  R("/blog/do-you-need-website-for-business-2026", "/blog/how-to-choose-website-development-company-in-india"),
  R("/blog/why-small-business-needs-website-2026", "/blog/how-to-choose-website-development-company-in-india"),
  R("/blog/small-business-needs-website-usa-2026", "/blog/how-to-choose-website-development-company-in-india"),
  R("/blog/launch-seo-ready-website-fast-2026", "/blog/seo-checklist-for-new-business-website"),

  // SEO / ranking / speed → SEO checklist or Next.js guide
  R("/blog/why-website-not-ranking-google-seo-fixes", "/blog/seo-checklist-for-new-business-website"),
  R("/blog/website-not-getting-traffic-fix-seo-content", "/blog/seo-checklist-for-new-business-website"),
  R("/blog/website-not-showing-up-on-google-fixes", "/blog/seo-checklist-for-new-business-website"),
  R("/blog/website-speed-seo-google-rankings-2026", "/blog/seo-checklist-for-new-business-website"),
  R("/blog/website-loading-slow-fix-speed-optimization-usa", "/blog/nextjs-for-business-websites"),
  R("/blog/website-loading-slow-speed-optimization-guide", "/blog/nextjs-for-business-websites"),
  R("/blog/website-not-loading-slow-fix-guide-usa", "/blog/nextjs-for-business-websites"),
  R("/blog/why-is-my-website-slow-speed-optimization-usa", "/blog/nextjs-for-business-websites"),

  // Site-down / access errors → e-commerce checklist (reliability) + SEO hub
  R("/blog/website-not-working-site-wont-load-fixes", "/blog/ecommerce-website-development-checklist"),
  R("/blog/website-not-loading-fix-cant-access-website", "/blog/ecommerce-website-development-checklist"),
  R("/blog/website-not-loading-fix-guide", "/blog/ecommerce-website-development-checklist"),
  R("/blog/website-not-loading-fix-site-wont-open", "/blog/ecommerce-website-development-checklist"),
  R("/blog/website-not-loading-not-responding-fix", "/blog/ecommerce-website-development-checklist"),
  R("/blog/this-site-cant-be-reached-error-fix", "/blog/ecommerce-website-development-checklist"),

  // Apps / marketing / content → matching services
  R("/blog/why-businesses-need-mobile-apps-2026", "/services/website-designing"),
  R("/blog/social-media-marketing-problems-solutions", "/services/digital-marketing"),
  R("/blog/why-businesses-need-content-writing-services-usa", "/services/digital-marketing"),

  // Retired finance content
  R("/blog/how-much-does-bookkeeping-cost-for-a-small-business-2026", "/services"),
  R("/blog/small-business-tax-deductions-2026", "/services"),
  R("/blog/w2-vs-1099-worker-classification-guide", "/services"),

  // Off-topic tech-support blogs (Chrome / Edge / Windows / WiFi / router) → blog hub
  R("/blog/microsoft-edge-not-responding-working-opening-fix", "/blog"),
  R("/blog/microsoft-edge-problems-solutions-fixes", "/blog"),
  R("/blog/google-chrome-not-opening-fix", "/blog"),
  R("/blog/google-chrome-not-opening-fixi", "/blog"),
  R("/blog/chrome-not-responding-fix-windows", "/blog"),
  R("/blog/windows-11-problems-issues-2026-fixes", "/blog"),
  R("/blog/windows-11-not-updating-fixes", "/blog"),
  R("/blog/wifi-not-working-windows-10-fixes", "/blog"),
  R("/blog/router-not-working-fix-usa-guide", "/blog"),
  R("/blog/blue-screen-of-death-bsod-fix-guide", "/blog"),
];
