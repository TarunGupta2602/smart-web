/**
 * Lead spam checks + GTM events.
 * In GTM / GA4, mark these as conversions:
 * - generate_lead (form submit)
 * - whatsapp_click (WhatsApp taps)
 */

export function leadLooksLikeSpam({ name = "", email = "", message = "" }) {
  const text = `${name}\n${email}\n${message}`;
  const links = text.match(/https?:\/\/|www\./gi) || [];
  if (links.length > 1) return "Please describe your project without extra links.";

  if (/\b(free shipping|check out our|click here|crypto|bitcoin|guest post|backlink)\b/i.test(text)) {
    return "This looks like an advertisement, not a project brief. Tell us what you need built.";
  }

  const words = message.trim().split(/\s+/).filter(Boolean);
  if (words.length < 4) return "Add a short note about the site or store you need.";

  const local = String(email).split("@")[0] || "";
  if ((local.match(/\./g) || []).length >= 4) {
    return "Use a normal email address, or leave email blank and send your phone number.";
  }

  return "";
}

function pushEvent(event, source) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, lead_source: source });
}

export function trackLead(source) {
  pushEvent("generate_lead", source);
}

export function trackWhatsApp(source) {
  pushEvent("whatsapp_click", source);
}
