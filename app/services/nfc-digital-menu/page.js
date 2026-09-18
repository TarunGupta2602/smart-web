import Link from "next/link";
import NfcMenuHero from "../../components/nfc-menu-hero";
import NfcStickyCta from "../../components/nfc-sticky-cta";
import PageCta from "../../components/page-cta";
import Reveal from "../../components/reveal";
import RelatedLinks from "../../components/related-links";
import { webPage, breadcrumbList, service, faqPage, stringifySchema, videoObject, howTo } from "@/lib/schema";
import { buildPageMetadata, SITE_URL, CONTACT_WHATSAPP_URL } from "@/lib/seo";
import { NFC_PROMO } from "@/lib/page-media";

const pageMeta = buildPageMetadata({
  title: "NFC QR Digital Menu for Restaurants",
  description:
    "Tap NFC or scan QR to open a live restaurant menu, order from the table, and send tickets to a staff dashboard. No guest app. Free India pilot.",
  path: "/services/nfc-digital-menu",
  image: {
    url: NFC_PROMO.poster,
    width: NFC_PROMO.width,
    height: NFC_PROMO.height,
    alt: NFC_PROMO.title,
  },
  keywords: [
    "NFC QR digital menu for restaurants",
    "NFC digital menu India",
    "QR code restaurant menu",
    "table ordering system for restaurants",
    "contactless restaurant menu",
    "digital menu no app",
    "restaurant order dashboard",
    "QR table ordering India",
    "NFC menu card restaurant",
    "complete restaurant ordering system",
  ],
});

export const metadata = {
  ...pageMeta,
  openGraph: {
    ...pageMeta.openGraph,
    videos: [
      {
        url: `${SITE_URL}${NFC_PROMO.src}`,
        secureUrl: `${SITE_URL}${NFC_PROMO.src}`,
        type: "video/mp4",
        width: NFC_PROMO.width,
        height: NFC_PROMO.height,
      },
    ],
  },
};

const faqs = [
  {
    question: "Is this just a QR that opens a PDF menu?",
    answer:
      "No. We are building the complete table-ordering system: NFC tap plus QR backup, live menu with photos and availability, cart and place-order, unique table identity, and a staff dashboard with status updates. A PDF behind a QR is still a printed menu on a phone.",
  },
  {
    question: "Does the guest need to install an app?",
    answer:
      "No. The guest taps the NFC card or scans the QR code. The restaurant menu opens in the phone browser. They can browse, add to cart, and place the order from there.",
  },
  {
    question: "How does the kitchen know which table ordered?",
    answer:
      "Each table has a unique link encoded on its NFC card and QR code. When an order is placed, the dashboard shows the table number with items, quantity, and total.",
  },
  {
    question: "Will NFC tap work on iPhone?",
    answer:
      "Recent iPhones can open NFC URL tags. Android tap is widely supported. Every table also has a QR backup that opens the same unique link, so a guest is never stuck if tap fails.",
  },
  {
    question: "What is included in the free pilot?",
    answer:
      "We will run the basic system with 1–2 restaurants: table links, digital menu with prices and photos, cart and order, and a staff dashboard with live orders and status updates. Payments, WhatsApp alerts, kitchen display, and analytics come after the pilot works with real customers.",
  },
  {
    question: "Can we hide items that are out of stock?",
    answer:
      "Yes. Staff can mark item availability so guests see what is actually being served that day — not a stale printed card.",
  },
  {
    question: "Do you print the NFC cards?",
    answer:
      "The software is the product. NFC cards and table QR standees can be sourced with you as part of the pilot setup. We encode each table’s unique link so tap and scan both land on the same menu.",
  },
];

const systemParts = [
  { t: "NFC card", d: "Tap the table. The live menu opens in the browser — no download." },
  { t: "QR backup", d: "Same unique link if the phone cannot tap. Nobody is stuck." },
  { t: "Live menu", d: "Prices, photos, categories, and in-stock flags you can change today." },
  { t: "Guest cart", d: "Add dishes, notes, and place the order from the phone." },
  { t: "Table identity", d: "Each table has its own URL so the kitchen knows where it came from." },
  { t: "Staff dashboard", d: "New orders with quantity and total, in real time." },
  { t: "Order status", d: "Accepted, preparing, ready, completed — one tap on the floor." },
  { t: "Pilot in India", d: "Free setup for 1–2 restaurants with real customers." },
];

const flowSteps = [
  { step: "01", title: "Sit down", text: "NFC card and QR are on the table. No download, no login wall for a first order." },
  { step: "02", title: "Tap or scan", text: "NFC opens the unique table URL. QR is the backup for the same link." },
  { step: "03", title: "Browse the menu", text: "The guest sees live prices, photos, and what is actually in stock." },
  { step: "04", title: "Cart and send", text: "Items go to cart. Place order from the browser — the ticket is the phone." },
  { step: "05", title: "Floor sees it", text: "The dashboard shows table number, line items, quantity, and total." },
  { step: "06", title: "Status updates", text: "Staff mark accepted, preparing, ready, then completed so the floor stays in sync." },
];

const compareRows = [
  {
    name: "Printed menu",
    points: ["Guest reads a card", "Reprint to change prices", "Waiters warn about 86’d items", "Waiter writes the table", "Handwritten kitchen ticket"],
  },
  {
    name: "QR → PDF",
    points: ["Scan, then pinch-zoom a file", "Re-upload to change prices", "Stale list on the phone", "No table identity", "Order still taken verbally"],
  },
  {
    name: "SmartSoft NFC + QR",
    highlight: true,
    points: ["Tap or scan, then order", "Change prices in the dashboard", "Hide items that are 86’d", "Unique NFC + QR link per table", "Live dashboard with status"],
  },
];

const WHATSAPP_HREF = `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(
  "Hi, I want the NFC + QR digital menu pilot for my restaurant."
)}`;

export default function NfcDigitalMenuPage() {
  const pageSchema = webPage({
    name: "NFC QR digital menu for restaurants",
    description:
      "End-to-end restaurant ordering: NFC card, QR backup, live menu, cart, unique table links, and a staff dashboard with order status.",
    url: `${SITE_URL}/services/nfc-digital-menu`,
  });
  const serviceSchema = service({
    name: "NFC + QR Table Ordering System",
    description:
      "A full restaurant ordering product for India: NFC tap and QR backup, live digital menu, cart, unique table links, and a real-time staff dashboard. Not a PDF menu. No guest app.",
    url: "/services/nfc-digital-menu",
    serviceType: "Restaurant digital menu and table ordering",
    areaServed: "India",
  });
  const breadcrumbSchema = breadcrumbList(
    [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Services", url: `${SITE_URL}/services` },
      { name: "NFC QR digital menu", url: `${SITE_URL}/services/nfc-digital-menu` },
    ],
    SITE_URL
  );
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "NFC QR digital menu", url: "/services/nfc-digital-menu" },
  ];
  const videoSchema = videoObject({
    name: NFC_PROMO.title,
    description: NFC_PROMO.description,
    thumbnailUrl: `${SITE_URL}${NFC_PROMO.poster}`,
    uploadDate: "2026-09-18",
    duration: NFC_PROMO.durationIso,
    contentUrl: `${SITE_URL}${NFC_PROMO.src}`,
    embedUrl: `${SITE_URL}/services/nfc-digital-menu`,
  });
  const howToSchema = howTo({
    name: "How NFC + QR table ordering works",
    description:
      "Guests tap an NFC card or scan a QR code, browse a live restaurant menu, place an order from their phone, and staff see the table number on a dashboard.",
    image: `${SITE_URL}${NFC_PROMO.poster}`,
    totalTime: "PT2M",
    step: flowSteps.map((item) => ({ name: item.title, text: item.text })),
  });

  return (
    <div className="bg-white text-slate-900 pb-24 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema([
            pageSchema,
            serviceSchema,
            breadcrumbSchema,
            faqPage(faqs),
            videoSchema,
            howToSchema,
          ]),
        }}
      />

      <NfcMenuHero breadcrumbs={breadcrumbItems} />
      <NfcStickyCta />

      <section className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-8 md:py-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { dt: "Guest app", dd: "None — phone browser" },
              { dt: "Table identity", dd: "Unique NFC + QR URL" },
              { dt: "Kitchen view", dd: "Live order dashboard" },
              { dt: "Pilot", dd: "Free for 1–2 restaurants" },
            ].map((item) => (
              <div key={item.dt} className="border-l border-slate-200 pl-4">
                <dt className="text-xs uppercase tracking-wide text-slate-500 mb-1">{item.dt}</dt>
                <dd className="text-sm font-medium text-slate-900">{item.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              A digital menu that actually takes the order
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Most Indian restaurants still print a card or stick a QR that opens a PDF. That is not ordering.
              SmartSoft is building the <span className="font-medium text-slate-900">complete NFC + QR table system</span>:
              live menu, cart, unique table links, and a floor dashboard — so the phone takes the ticket and the
              kitchen knows which table it came from.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal className="max-w-2xl mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
              Printed card vs QR PDF vs tap-to-order
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If the kitchen still writes tickets by hand, the QR did not change the operation.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compareRows.map((col) => (
              <div
                key={col.name}
                className={`rounded-2xl p-6 ${
                  col.highlight
                    ? "bg-[#081220] text-white shadow-lg"
                    : "bg-white border border-slate-200 text-slate-900"
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${col.highlight ? "text-sky-200" : "text-slate-500"}`}>
                  {col.highlight ? "The complete system" : "Still a brochure"}
                </p>
                <h3 className="font-display text-lg font-semibold mb-4">{col.name}</h3>
                <ul className="space-y-2.5">
                  {col.points.map((point) => (
                    <li key={point} className={`text-sm leading-relaxed flex gap-2 ${col.highlight ? "text-slate-200" : "text-slate-600"}`}>
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${col.highlight ? "bg-sky-300" : "bg-slate-300"}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal className="max-w-2xl mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
              What the complete system includes
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If any of these is missing, you still have a brochure. We ship the loop as one product.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemParts.map((item, index) => (
              <div
                key={item.t}
                className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors"
              >
                <p className="text-xs font-semibold text-[#0f3d68] mb-3">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-base font-semibold text-slate-900 mb-2">{item.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
              How a table order flows
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unique links are the whole trick. Table 12 never shares Table 7’s URL.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flowSteps.map((item, index) => (
              <Reveal key={item.step} delay={(index % 3) + 1}>
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6">
                  <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0f3d68] text-white text-xs font-semibold mb-4">
                    {item.step}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#081220] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">What ships in the pilot</h2>
            <ul className="space-y-3 text-sm text-slate-200">
              {[
                "Unique NFC + QR link per table",
                "Digital menu with prices, photos, and availability",
                "Guest cart and place-order flow in the browser",
                "Staff dashboard with live orders and table numbers",
                "Order statuses: accepted, preparing, ready, completed",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={2}>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">After the pilot works</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              We will not bolt on extras until real tables are ordering. Then paid features can include:
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              {[
                "UPI / card payments at the table",
                "WhatsApp alerts for new orders",
                "Kitchen display screen",
                "Sales analytics by item and hour",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-300/70 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0f3d68] mb-3">Limited pilot</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                Free pilot: the complete system on real tables
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We are looking for 1–2 Indian restaurants that will run this with real customers — tap, scan,
                order, dashboard. Not a PDF demo. Tell us city, covers, and whether tables already have QR
                standees. If the fit is right, we set up the full basic loop at no charge.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact?service=NFC%20digital%20menu"
                  className="inline-flex px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                >
                  Apply for the pilot
                </Link>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-5 py-2.5 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:border-slate-400 transition-colors"
                >
                  WhatsApp +91 74560 96455
                </a>
                <Link
                  href="/blog/nfc-qr-digital-menu-table-ordering-india"
                  className="inline-flex px-5 py-2.5 rounded-md text-slate-700 text-sm font-medium hover:text-slate-900"
                >
                  Read the restaurant guide →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-8">Frequently asked questions</h2>
          </Reveal>
          <div className="divide-y divide-slate-200 border border-slate-200 bg-white rounded-2xl overflow-hidden">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group" open={index === 0}>
                <summary className="py-5 px-5 md:px-6 flex items-start justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-medium text-slate-900">{faq.question}</h3>
                  <span className="text-slate-400 text-lg leading-none mt-0.5 shrink-0 group-open:hidden">+</span>
                  <span className="text-slate-400 text-lg leading-none mt-0.5 shrink-0 hidden group-open:inline">−</span>
                </summary>
                <p className="px-5 md:px-6 pb-5 text-sm text-slate-600 leading-relaxed max-w-3xl">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks excludeHref="/services/nfc-digital-menu" />
      <PageCta
        title="Want this on your tables?"
        description="Apply for the free 1–2 restaurant pilot — or send a brief if you already know you want a paid build."
        primaryHref="/contact?service=NFC%20digital%20menu"
        primaryLabel="Apply for a free pilot"
      />
    </div>
  );
}
