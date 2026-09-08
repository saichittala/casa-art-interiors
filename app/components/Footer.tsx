import React from "react";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  SparklesIcon
} from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div>
            <img
              src="/assets/logo-white.png"
              alt="Casa Art Interiors"
              className="footer-logo-img"
            />
            <p className="footer-desc">
              Bespoke luxury interior design studio and in-house modular manufacturing. 
              Designing and building timeless residential and commercial spaces across Hyderabad.
            </p>
            <div className="section-eyebrow" style={{ color: "var(--brand-primary)", marginTop: "12px", marginBottom: 0 }}>
              Official Partner • Magna Solitaire
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#process">Process</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              <li><Link href="/services/kitchens">Modular Kitchens</Link></li>
              <li><Link href="/services/bedrooms">Master Bedrooms</Link></li>
              <li><Link href="/services/living-rooms">Living Rooms</Link></li>
              <li><Link href="/services/dining-rooms">Dining Rooms</Link></li>
              <li><Link href="/services/puja">Puja Rooms</Link></li>
              <li><Link href="/services/partitions">Partitions &amp; Dividers</Link></li>
              <li><Link href="/services/study-rooms">Study Rooms</Link></li>
              <li><Link href="/services/office-spaces">Office &amp; Commercial</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Details */}
          <div>
            <h4 className="footer-heading">Factory & Office</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "var(--fs-14)", color: "var(--text-light-muted)" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{ marginTop: "2px", flexShrink: 0 }}>
                  <MapPinIcon size={18} color="var(--brand-primary)" />
                </div>
                <span>
                  <strong style={{ color: "var(--text-light-primary)" }}>Facility Address:</strong><br />
                  Plot No. 291/E2, Beside Delhivery Warehouse, Khanapur Village Road, Neopolis-Kokapet, Hyderabad, Telangana
                </span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <PhoneIcon size={18} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
                <a href="tel:+918897969521" style={{ color: "var(--text-light-primary)", fontWeight: "600" }}>
                  +91 88979 69521
                </a>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <MailIcon size={18} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
                <a href="mailto:casaartinteriors@gmail.com" style={{ color: "var(--text-light-secondary)" }}>
                  casaartinteriors@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Divider */}
        <div className="footer-divider">
          <p>© {new Date().getFullYear()} CASA ART INTERIORS. All rights reserved.</p>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <span>Design</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>In-House Manufacturing</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>Turnkey Execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
