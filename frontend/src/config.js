// Central store configuration — edit these for your business.

// WhatsApp number in international format, digits only (no +, spaces or dashes).
export const WHATSAPP_NUMBER = "2348133532111";

// Your store name and contact details.
export const STORE = {
  name: "AutoHub",
  tagline: "Quality Cars & Genuine Parts",
  phone: "+234 813 353 2111",
  address: "12 Adeola Odeku St, Victoria Island, Lagos",
  email: "sales@autohub.ng",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  freeDeliveryNote: "Free Lagos delivery on cars • Nationwide parts shipping",
};

// Base URL of the FastAPI backend.
export const API_BASE =
  import.meta.env.VITE_API_BASE || "http://localhost:8000";

// Build a WhatsApp order link with a prefilled message.
export function whatsappLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Format an amount in Naira.
export function formatNaira(amount) {
  return "₦" + Number(amount).toLocaleString("en-NG");
}
