/** Shared lead checks and the Ads/GTM event. Create a Google Ads conversion on the event name `generate_lead`. */

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

export function trackLead(source) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead", lead_source: source });
}
