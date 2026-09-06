"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationModal from "../components/ConsultationModal";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BuildingIcon,
  ClockIcon,
  LockIcon,
  WhatsAppIcon
} from "../components/Icons";

export default function ContactPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "3 BHK Apartment",
    location: "Hyderabad",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Hello Casa Art Interiors, I would like to enquire:\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n*Type:* ${form.projectType}\n*Location:* ${form.location}\n*Message:* ${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/918897969521?text=${msg}`, "_blank");
    }, 1000);
  };

  return (
    <>
      <Header onOpenConsultation={() => setConsultationOpen(true)} />

      <main>
        {/* Contact Hero & Main Details */}
        <section className="section-py inner-page-hero">
          <div className="container">
            <div className="section-header" style={{ marginBottom: "40px" }}>
              <div className="section-eyebrow">
                Connect With Us
              </div>
              <h1 className="display-lg">
                Let’s Discuss Your Dream Interior
              </h1>
              <p className="text-xl" style={{ marginTop: "16px" }}>
                Visit our factory experience center in Neopolis-Kokapet, call our design team, or send us a WhatsApp message to book a free site visit.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "48px", alignItems: "start" }}>
              {/* Contact Information */}
              <div>
                <div className="section-eyebrow">
                  Office & Manufacturing Facility
                </div>
                <h2 className="display-sm" style={{ marginBottom: "24px", color: "var(--text-dark-primary)" }}>
                  Casa Art Interiors
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "28px" }}>
                  {/* Address */}
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "16px", background: "var(--bg-light)", borderRadius: "var(--radius-none)", border: "1px solid var(--border-light-subtle)", transition: "background-color var(--duration-fast) var(--ease-apple), border-color var(--duration-fast) var(--ease-apple)" }}>
                    <div className="featured-icon featured-icon-brand" style={{ flexShrink: 0 }}>
                      <MapPinIcon size={18} color="var(--brand-primary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: "14.5px", fontWeight: "600", color: "var(--text-dark-primary)", marginBottom: "8px", lineHeight: "1.3" }}>
                        Factory & Experience Center Address
                      </div>
                      <p className="text-md" style={{ color: "var(--text-dark-muted)", margin: 0, lineHeight: "1.5" }}>
                        Plot No. 291/E2, Beside Delhivery Warehouse,<br />
                        Khanapur Village Road, Neopolis-Kokapet,<br />
                        Hyderabad, Telangana
                      </p>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "16px", background: "var(--bg-light)", borderRadius: "var(--radius-none)", border: "1px solid var(--border-light-subtle)", transition: "background-color var(--duration-fast) var(--ease-apple), border-color var(--duration-fast) var(--ease-apple)" }}>
                    <div className="featured-icon featured-icon-brand" style={{ flexShrink: 0 }}>
                      <PhoneIcon size={18} color="var(--brand-primary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: "14.5px", fontWeight: "600", color: "var(--text-dark-primary)", marginBottom: "8px", lineHeight: "1.3" }}>
                        Phone / WhatsApp
                      </div>
                      <a href="tel:+918897969521" className="text-md" style={{ color: "var(--text-dark-primary)", fontWeight: "600", display: "block", lineHeight: "1.3" }}>
                        +91 88979 69521
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "16px", background: "var(--bg-light)", borderRadius: "var(--radius-none)", border: "1px solid var(--border-light-subtle)", transition: "background-color var(--duration-fast) var(--ease-apple), border-color var(--duration-fast) var(--ease-apple)" }}>
                    <div className="featured-icon featured-icon-brand" style={{ flexShrink: 0 }}>
                      <MailIcon size={18} color="var(--brand-primary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: "14.5px", fontWeight: "600", color: "var(--text-dark-primary)", marginBottom: "8px", lineHeight: "1.3" }}>
                        Email Inquiries
                      </div>
                      <a href="mailto:casaartinteriors@gmail.com" className="text-md" style={{ color: "var(--text-dark-primary)", fontWeight: "600", display: "block", lineHeight: "1.3" }}>
                        casaartinteriors@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "18px", background: "var(--bg-light)", borderRadius: "var(--radius-none)", border: "1px solid var(--brand-border-subtle)", boxShadow: "0px 8px 24px rgba(23, 23, 22, 0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <BuildingIcon size={16} color="var(--brand-primary)" />
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-dark-primary)" }}>
                      Official Partner: Magna Solitaire
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-dark-muted)", margin: 0 }}>
                    Residents of Magna Solitaire receive priority on-site design consultation and specialized floor-plan packages.
                  </p>
                </div>
              </div>

              {/* Consultation Booking Form Card */}
              <div style={{ background: "var(--bg-light)", padding: "28px", borderRadius: "var(--radius-none)", border: "1px solid var(--border-light-subtle)", boxShadow: "0px 16px 48px rgba(23, 23, 22, 0.06)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 16px" }}>
                    <div className="featured-icon featured-icon-brand" style={{ width: "56px", height: "56px", margin: "0 auto 20px" }}>
                      <CheckCircleIcon size={28} color="var(--brand-primary)" />
                    </div>
                    <h3 className="display-xs" style={{ marginBottom: "8px", color: "var(--text-dark-primary)" }}>
                      Thank You! Message Sent.
                    </h3>
                    <p className="text-md" style={{ color: "var(--text-dark-muted)", margin: 0 }}>
                      Our senior designer will connect with you shortly. Opening WhatsApp chat...
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="display-xs" style={{ marginBottom: "8px", color: "var(--text-dark-primary)" }}>Send Us a Message</h3>
                    <p className="text-sm" style={{ marginBottom: "26px", color: "var(--text-dark-muted)" }}>
                      Share your project details and receive an immediate callback with customized interior estimates.
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Rao"
                          className="form-input"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">WhatsApp Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9876543210"
                            className="form-input"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Email Address</label>
                          <input
                            type="email"
                            placeholder="e.g. ananya@gmail.com"
                            className="form-input"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Property / Project Type</label>
                          <select
                            className="form-select"
                            value={form.projectType}
                            onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                          >
                            <option value="Magna Solitaire Apartment">Magna Solitaire Apartment</option>
                            <option value="2 BHK Apartment">2 BHK Apartment</option>
                            <option value="3 BHK Apartment">3 BHK Apartment</option>
                            <option value="4 BHK / Duplex">4 BHK / Duplex</option>
                            <option value="Luxury Villa">Luxury Villa / Penthouse</option>
                            <option value="Commercial Office">Commercial Space</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Site Location</label>
                          <input
                            type="text"
                            placeholder="e.g. Kokapet / Narsingi"
                            className="form-input"
                            value={form.location}
                            onChange={(e) => setForm({ ...form, location: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Your Message or Requirements</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your floor plan, preferred style, or required completion timeline..."
                          className="form-textarea"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ width: "100%" }}
                      >
                        <span>Submit Consultation Request</span>
                      </button>

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "14px", fontSize: "14px", color: "var(--text-dark-muted)" }}>
                        <LockIcon size={14} color="var(--brand-primary)" />
                        <span>Zero spam. Free 3D plan & site assessment included.</span>
                      </div>
                    </form>
                  </div>
                )}
              </div>
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
