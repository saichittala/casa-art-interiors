"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import ConsultationModal from "../components/ConsultationModal";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import {
  FactoryIcon,
  SettingsIcon,
  ShieldCheckIcon,
  DiamondIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  WhatsAppIcon,
  PhoneIcon
} from "../components/Icons";

export default function AboutPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <main>
        {/* About Hero (2-Column: Left Content, Right Image) */}
        <section className="section-py inner-page-hero">
          <div className="container">
            <div className="about-hero-grid">
              {/* Left Column Content */}
              <div>
                <div className="section-eyebrow" style={{ marginBottom: "16px" }}>
                  About Casa Art Interiors
                </div>
                <h1 className="display-lg" style={{ marginBottom: "20px", textTransform: "capitalize" }}>
                  Crafting Timeless Spaces With In-House Precision
                </h1>
                <p className="text-xl" style={{ color: "var(--text-dark-secondary)", lineHeight: "1.65", marginBottom: "32px" }}>
                  We are a bespoke interior design studio and modular manufacturing house based in Hyderabad, bridging the gap between visionary architecture and flawless factory execution.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                  <button onClick={() => setConsultationOpen(true)} className="btn btn-primary btn-lg">
                    <span>Book Free Consultation</span>
                  </button>
                  <a href="tel:+918897969521" className="btn btn-secondary btn-lg" style={{ gap: "8px" }}>
                    <PhoneIcon size={16} />
                    <span>Call +91 88979 69521</span>
                  </a>
                </div>
              </div>

              {/* Right Column Image */}
              <div className="about-hero-img-box">
                <img
                  src="/assets/casa-art/hero-living.jpg"
                  alt="Casa Art Luxury Interior Design Studio Hyderabad"
                  className="about-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Philosophy Section (Zig-Zag: Left Image, Right Content) */}
        <section className="section-py" style={{ backgroundColor: "var(--bg-light-secondary)", borderTop: "1px solid var(--border-light-subtle)", borderBottom: "1px solid var(--border-light-subtle)" }}>
          <div className="container">
            <div className="about-philosophy-grid">
              {/* Left Column Image */}
              <div className="about-philosophy-img-box">
                <img
                  src="/assets/casa-art/dining-interior.jpg"
                  alt="Casa Art Dining Interior"
                  className="about-philosophy-img"
                />
              </div>

              {/* Right Column Content */}
              <div>
                <div className="section-eyebrow">
                  Our Philosophy
                </div>
                <h2 className="display-md" style={{ marginBottom: "24px", color: "var(--text-dark-primary)" }}>
                  Designed Around Your Life, Built to Last Generations.
                </h2>
                <p className="text-md" style={{ marginBottom: "16px", color: "var(--text-dark-secondary)" }}>
                  Casa Art Interiors was founded on a clear realization: homeowners in Hyderabad deserve luxury interior spaces without the unpredictability, delays, and exorbitant middleman markups of traditional agencies.
                </p>
                <p className="text-md" style={{ marginBottom: "32px", color: "var(--text-dark-secondary)" }}>
                  By uniting our senior architectural design team with our own dedicated modular manufacturing facility in Neopolis-Kokapet, we provide single-source accountability from initial 3D concept to final keys handover.
                </p>

                <div className="about-stats-grid">
                  <div style={{ padding: "18px", background: "var(--bg-light)", borderRadius: "var(--radius-brand-18)", border: "1px solid var(--border-light-subtle)", transition: "background-color var(--duration-fast) var(--ease-apple), border-color var(--duration-fast) var(--ease-apple)" }}>
                    <div style={{ fontSize: "var(--fs-28)", fontWeight: "800", color: "var(--brand-primary)", marginBottom: "8px" }}>200+</div>
                    <div style={{ fontSize: "var(--fs-14)", fontWeight: "700", color: "var(--text-dark-primary)" }}>Completed Homes</div>
                  </div>
                  <div style={{ padding: "18px", background: "var(--bg-light)", borderRadius: "var(--radius-brand-18)", border: "1px solid var(--border-light-subtle)", transition: "background-color var(--duration-fast) var(--ease-apple), border-color var(--duration-fast) var(--ease-apple)" }}>
                    <div style={{ fontSize: "var(--fs-28)", fontWeight: "800", color: "var(--brand-primary)", marginBottom: "8px" }}>100%</div>
                    <div style={{ fontSize: "var(--fs-14)", fontWeight: "700", color: "var(--text-dark-primary)" }}>In-House Factory Build</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factory Advantage Section */}
        <section className="section-py">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">
                The Kokapet Factory
              </div>
              <h2 className="display-md">German Engineering Meets Master Craftsmanship</h2>
              <p className="text-lg">
                Located on Khanapur Village Road in Neopolis-Kokapet, our modular factory is equipped with automated CNC panel cutters, multi-spindle boring machines, and zero-joint edge-banders.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="featured-icon featured-icon-brand">
                  <SettingsIcon size={24} color="var(--brand-primary)" />
                </div>
                <h3 className="feature-title">Millimeter Precision</h3>
                <p className="feature-desc">
                  Computer numerical control (CNC) eliminates manual measurement errors, ensuring every modular cabinet aligns flawlessly.
                </p>
              </div>

              <div className="feature-card">
                <div className="featured-icon featured-icon-brand">
                  <ShieldCheckIcon size={24} color="var(--brand-primary)" />
                </div>
                <h3 className="feature-title">Certified Calibrated Ply</h3>
                <p className="feature-desc">
                  We exclusively utilize genuine boiling waterproof (BWP) marine-grade plywood and high-density moisture-resistant (HDHMR) boards.
                </p>
              </div>

              <div className="feature-card">
                <div className="featured-icon featured-icon-brand">
                  <DiamondIcon size={24} color="var(--brand-primary)" />
                </div>
                <h3 className="feature-title">Official Hardware Partners</h3>
                <p className="feature-desc">
                  Direct alliances with Hafele, Blum, Hettich, and Saint-Gobain ensure 100% genuine hardware backed by manufacturer warranties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Magna Solitaire Partnership Banner (Ultra-Minimalist High Conversion CTA) */}
        <section className="cta-dark-section" style={{ padding: "clamp(60px, 8vw, 90px) 0" }}>
          <div className="container" style={{ textAlign: "center", maxWidth: "720px" }}>
            <div className="section-eyebrow" style={{ color: "var(--brand-primary)", marginBottom: "14px" }}>
              Official Interior Partner
            </div>
            <h2 className="cta-dark-title" style={{ fontSize: "24px", fontWeight: "700", lineHeight: "1.25", marginBottom: "16px" }}>
              Designing Magna Solitaire Residences
            </h2>
            <p className="cta-dark-desc" style={{ fontSize: "18px", color: "var(--text-light-secondary)", marginBottom: "28px", lineHeight: "1.6" }}>
              Tailored turnkey luxury interior packages designed specifically for Magna Solitaire floor plans.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => setConsultationOpen(true)}
                className="btn btn-primary btn-lg"
                style={{ padding: "14px 32px" }}
              >
                <span>Get Free Consultation</span>
              </button>
              <a
                href={`https://wa.me/918897969521?text=${encodeURIComponent("Hi Casa Art Interiors! 👋\nI’d love to transform my space.\n\nCan you help me with a quote + next steps?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ padding: "14px 24px", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}
