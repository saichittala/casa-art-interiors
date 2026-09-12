"use client";

import React from "react";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  const waMsg = encodeURIComponent("Hi Casa Art Interiors! 👋\nI’d love to transform my space.\n\nCan you help me with a quote + next steps?");
  return (
    <a
      href={`https://wa.me/918897969521?text=${waMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={26} color="#FFFFFF" />
    </a>
  );
}
