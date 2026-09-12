// Lead Submission Utility for Google Sheets Integration

// Replace with your published Google Apps Script Webhook URL when ready:
export const GOOGLE_SCRIPT_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  propertyType: string;
  location: string;
  budget: string;
  timeToStart: string;
  scope?: string;
  message?: string;
  source?: string;
  timestamp?: string;
}

export async function submitLeadToGoogleSheet(payload: LeadPayload): Promise<boolean> {
  const formattedPhone = payload.phone.trim().startsWith("+")
    ? payload.phone.trim()
    : `+91 ${payload.phone.trim()}`;

  const data = {
    ...payload,
    name: payload.name?.trim() || "Valued Client",
    phone: formattedPhone,
    timestamp: new Date().toISOString(),
    source: payload.source || "Website Form",
  };

  try {
    if (GOOGLE_SCRIPT_WEBHOOK_URL) {
      await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors mode for client-side fetches
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      console.log("Lead captured locally (Set NEXT_PUBLIC_GOOGLE_SCRIPT_URL to connect Google Sheet):", data);
    }
    return true;
  } catch (err) {
    console.error("Error submitting lead to Google Sheet:", err);
    return false;
  }
}

export function openWhatsAppLeadChat(payload: LeadPayload) {
  const text = encodeURIComponent(
    `Hi Casa Art Interiors! 👋\nI’d love to transform my space.\n\nCan you help me with a quote + next steps?\n\n*Name:* ${payload.name}\n*Phone:* ${payload.phone}\n*Location:* ${payload.location}\n*Property Type:* ${payload.propertyType}\n*Budget Range:* ${payload.budget}\n*Timeline to Start:* ${payload.timeToStart}${payload.message ? `\n*Message:* ${payload.message}` : ""}`
  );
  window.open(`https://wa.me/918897969521?text=${text}`, "_blank");
}
