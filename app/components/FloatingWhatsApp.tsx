"use client";

import React from "react";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918897969521?text=Hi%20Casa%20Art%20Interiors%2C%20I%20would%20like%20to%20get%20a%20quote%20and%20discuss%20my%20interior%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={26} color="#FFFFFF" />
    </a>
  );
}
