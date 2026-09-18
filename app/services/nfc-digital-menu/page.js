import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/page-hero";
import PageCta from "../../components/page-cta";
import Reveal from "../../components/reveal";
import RelatedLinks from "../../components/related-links";
import { webPage, breadcrumbList, service, faqPage, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { PAGE_VIDEOS } from "@/lib/page-media";

export const metadata = buildPageMetadata({
  title: "NFC QR Digital Menu for Restaurants",
  description:
    "NFC card + QR digital menu and table ordering for Indian restaurants. Guests tap or scan, open the menu on their phone, and order — no app. Free pilot for 1–2 restaurants.",
  path: "/services/nfc-digital-menu",
  keywords: [
    "NFC digital menu India",
    "QR code restaurant menu",
    "table ordering system for restaurants",
    "contactless restaurant menu",
    "digital menu no app",
    "restaurant order dashboard",
    "NFC menu card",
  ],
});

const HERO_POSTER =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=70";

const faqs = [
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

export default function NfcDigitalMenuPage() {
  const pageSchema = webPage({
    name: "NFC + QR digital menu and table ordering",
    description:
      "Tap-or-scan restaurant menus with unique table links, guest cart checkout, and a live staff dashboard.",
    url: `${SITE_URL}/services/nfc-digital-menu`,
  });
  const serviceSchema = service({
    name: "NFC + QR Digital Menu for Restaurants",
    description:
      "Contactless digital menus and table ordering for Indian restaurants. NFC card with QR backup, unique table links, and a real-time order dashboard. No guest app.",
    url: "/services/nfc-digital-menu",
    serviceType: "Restaurant digital menu and table ordering",
    areaServed: "India",
  });
  const breadcrumbSchema = breadcrumbList(
    [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Services", url: `${SITE_URL}/services` },
      { name: "NFC digital menu", url: `${SITE_URL}/services/nfc-digital-menu` },
    ],
    SITE_URL
  );
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "NFC digital menu", url: "/services/nfc-digital-menu" },
  ];

  return (
    <div className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema([pageSchema, serviceSchema, breadcrumbSchema, faqPage(faqs)]),
        }}
      />

      <PageHero
        eyebrow="Restaurant product · Free pilot"
        title="Tap the table. Open the menu. Place the order — no app."
        description="Each table gets an NFC card with a QR backup. Guests see prices, photos, and availability on their phone. Orders land on a staff dashboard with the table number."
        videoSrc={PAGE_VIDEOS.meeting}
        posterSrc={HERO_POSTER}
        primaryCta={{ href: "/contact?service=NFC%20digital%20menu", label: "Apply for a free pilot" }}
        secondaryCta={{ href: "/blog/nfc-qr-digital-menu-table-ordering-india", label: "How it works" }}
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Built for Indian restaurant tables
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Printed menus go stale. A PDF behind a QR code still needs a waiter to take the order.
              SmartSoft’s NFC + QR menu is a table-ordering system: the guest orders from the phone,
              and the floor team sees the table in real time.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "NFC tap, QR backup",
                text: "Guests tap the card if their phone supports NFC, or scan the printed QR. Same unique table link either way.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Full digital menu",
                text: "Categories, prices, photos, and in-stock flags — so the guest is not guessing from a smudged card.",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Live kitchen board",
                text: "New orders appear with table number, items, quantity, and total. Staff move them through accepted → preparing → ready → completed.",
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index + 1}>
                <article className="h-full border border-slate-200 overflow-hidden bg-white">
                  <div className="media-frame relative aspect-[16/10] bg-slate-100">
                    <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </article>
              </Reveal>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Sit down", text: "NFC card and QR are on the table. No download, no login wall for a first order." },
              { step: "02", title: "Browse & cart", text: "The guest opens the live menu, adds dishes, and sends the order from their phone." },
              { step: "03", title: "Floor sees it", text: "The dashboard shows table number, line items, quantity, and total as soon as it is placed." },
              { step: "04", title: "Status updates", text: "Staff mark accepted, preparing, ready, then completed — so the floor stays in sync." },
            ].map((item, index) => (
              <Reveal key={item.step} delay={index + 1}>
                <p className="text-xs font-medium text-[#0f3d68] mb-2">{item.step}</p>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              What ships in the pilot
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Unique NFC + QR link per table",
                "Digital menu with prices, photos, and availability",
                "Guest cart and place-order flow in the browser",
                "Staff dashboard with live orders and table numbers",
                "Order statuses: accepted, preparing, ready, completed",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#0f3d68]">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={2}>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              After the pilot works
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We will not bolt on extras until real tables are ordering. Then paid features can include:
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "UPI / card payments at the table",
                "WhatsApp alerts for new orders",
                "Kitchen display screen",
                "Sales analytics by item and hour",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#0f3d68]">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Free pilot for 1–2 restaurants
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              We are looking for owners who will use this with real customers — not a demo lunch.
              Tell us city, covers, and whether tables already have QR standees. If the fit is right,
              we set up the basic system at no charge for the pilot.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?service=NFC%20digital%20menu"
                className="inline-flex px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
              >
                Apply for the pilot
              </Link>
              <Link
                href="/blog/nfc-qr-digital-menu-table-ordering-india"
                className="inline-flex px-5 py-2.5 rounded-md border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-300 transition-colors"
              >
                Read the restaurant guide
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-8">Frequently asked questions</h2>
          </Reveal>
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {faqs.map((faq) => (
              <Reveal key={faq.question}>
                <div className="py-5">
                  <h3 className="text-base font-medium text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">{faq.answer}</p>
                </div>
              </Reveal>
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
