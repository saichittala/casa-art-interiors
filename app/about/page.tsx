"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
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

  return (
    <>
      <Header onOpenConsultation={() => setConsultationOpen(true)} />

      <main>
        {/* About Hero (2-Column: Left Content, Right Image) */}
        <section className="section-py inner-page-hero">
          <div className="container">
            <div className="about-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "48px", alignItems: "center" }}>
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
              <div style={{
                borderRadius: "0px",
                overflow: "hidden",
                height: "100%",
                minHeight: "440px",
                maxHeight: "520px",
                border: "1px solid var(--brand-border-subtle)",
                boxShadow: "0px 16px 40px rgba(23, 23, 22, 0.08)"
              }}>
                <img
                  src="/assets/casa-art/hero-living.jpg"
                  alt="Casa Art Luxury Interior Design Studio Hyderabad"
                  style={{ width: "100%", height: "100%", minHeight: "440px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <section className="section-py" style={{ backgroundColor: "var(--bg-light-secondary)", borderTop: "1px solid var(--border-light-subtle)", borderBottom: "1px solid var(--border-light-subtle)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
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

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={{ padding: "18px", background: "var(--bg-light)", borderRadius: "var(--radius-none)", border: "1px solid var(--border-light-subtle)", transition: "background-color var(--duration-fast) var(--ease-apple), border-color var(--duration-fast) var(--ease-apple)" }}>
                    <div style={{ fontSize: "28px", fontWeight: "800", color: "var(--brand-primary)", marginBottom: "8px" }}>200+</div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-dark-primary)" }}>Completed Homes</div>
                  </div>
                  <div style={{ padding: "18px", background: "var(--bg-light)", borderRadius: "var(--radius-none)", border: "1px solid var(--border-light-subtle)", transition: "background-color var(--duration-fast) var(--ease-apple), border-color var(--duration-fast) var(--ease-apple)" }}>
                    <div style={{ fontSize: "28px", fontWeight: "800", color: "var(--brand-primary)", marginBottom: "8px" }}>100%</div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-dark-primary)" }}>In-House Factory Build</div>
                  </div>
                </div>
              </div>

              <div style={{ borderRadius: "var(--radius-none)", overflow: "hidden", border: "1px solid var(--brand-border-subtle)", boxShadow: "0px 12px 32px rgba(23, 23, 22, 0.08)" }}>
                <img
                  src="/assets/casa-art/dining-interior.jpg"
                  alt="Casa Art Dining Interior"
                  style={{ width: "100%", height: "460px", objectFit: "cover" }}
                />
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

        {/* Magna Solitaire Partnership Banner */}
        <section className="cta-dark-section">
          <div className="container" style={{ textAlign: "center", maxWidth: "840px" }}>
            <div className="section-eyebrow" style={{ color: "var(--brand-primary)", marginBottom: "16px" }}>
              Featured Developer Partnership
            </div>
            <h2 className="cta-dark-title">
              Official Interior Partner for Magna Solitaire
            </h2>
            <p className="cta-dark-desc">
              We are proud to be the official interior design partner for Magna Solitaire. Our dedicated teams provide custom turnkey packages tailored specifically to the unique floor plans and luxury standards of the development.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <button onClick={() => setConsultationOpen(true)} className="btn btn-primary btn-xl">
                <span>Book Consultation for Magna Solitaire</span>
              </button>
              <Link href="/contact" className="btn btn-secondary-gray btn-xl" style={{ background: "var(--bg-light-card)", color: "var(--text-dark-primary)" }}>
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}
