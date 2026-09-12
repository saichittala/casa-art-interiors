"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import ConsultationModal from "../components/ConsultationModal";
import ChoiceChips, { ChoiceOption } from "../components/ui/ChoiceChips";
import { submitLeadToGoogleSheet, openWhatsAppLeadChat } from "../lib/leadSubmission";
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

const PROPERTY_OPTIONS: ChoiceOption[] = [
  { value: "Magna Solitaire Apartment", label: "Magna Solitaire" },
  { value: "2 BHK Apartment", label: "2 BHK" },
  { value: "3 BHK Apartment", label: "3 BHK" },
  { value: "4 BHK / Duplex", label: "4 BHK / Duplex" },
  { value: "Luxury Villa", label: "Villa / Penthouse" },
];

export default function ContactPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
    budget: "",
    timeToStart: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cleanPhone = form.phone.trim();
    const formattedPhone = cleanPhone.startsWith("+91") ? cleanPhone : `+91 ${cleanPhone}`;

    const leadPayload = {
      name: form.name || "Client",
      phone: formattedPhone,
      email: form.email,
      propertyType: form.projectType,
      location: form.location || "Hyderabad",
      budget: form.budget,
      timeToStart: form.timeToStart,
      message: form.message,
      source: "Contact Page Form",
    };

    await submitLeadToGoogleSheet(leadPayload);

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      openWhatsAppLeadChat(leadPayload);
    }, 800);
  };

  return (
    <>
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

            <div className="contact-grid">
              {/* Left Column: Direct Info */}
              <div className="contact-info-stack">
                <div className="contact-info-card">
                  <div className="icon-wrapper">
                    <MapPinIcon size={24} color="var(--brand-primary, #ff6364)" />
                  </div>
                  <div>
                    <h3 className="card-title">Experience Center &amp; Modular Factory</h3>
                    <p className="card-desc" style={{ marginTop: "6px", lineHeight: "1.6" }}>
                      Plot 14-B, Neopolis Industrial Corridor, Kokapet,<br />
                      Financial District, Hyderabad, Telangana 500075
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="icon-wrapper">
                    <PhoneIcon size={24} color="var(--brand-primary, #ff6364)" />
                  </div>
                  <div>
                    <h3 className="card-title">Direct Phone &amp; WhatsApp</h3>
                    <p className="card-desc" style={{ marginTop: "6px" }}>
                      +91 88979 69521 &nbsp;|&nbsp; +91 91000 12345
                    </p>
                    <p className="card-desc" style={{ marginTop: "4px", fontSize: "14px" }}>
                      Mon - Sun: 9:30 AM to 8:30 PM IST
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="icon-wrapper">
                    <MailIcon size={24} color="var(--brand-primary, #ff6364)" />
                  </div>
                  <div>
                    <h3 className="card-title">Email Inquiries</h3>
                    <p className="card-desc" style={{ marginTop: "6px" }}>
                      hello@casaartinteriors.com
                    </p>
                  </div>
                </div>

                {/* WhatsApp Quick Box */}
                <div className="contact-whatsapp-box">
                  <div>
                    <div className="contact-whatsapp-title">
                      Instant WhatsApp Consultation
                    </div>
                    <div className="contact-whatsapp-sub">
                      Send your floor plan directly to our chief interior architect.
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/918897969521?text=${encodeURIComponent("Hi Casa Art Interiors! 👋\nI’d love to transform my space.\n\nCan you help me with a quote + next steps?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Contact Form */}
              <div className="contact-form-card">
                {submitted ? (
                  <div className="form-success-state">
                    <div className="form-success-icon featured-icon featured-icon-brand">
                      <CheckCircleIcon size={32} color="var(--brand-primary, #ff6364)" />
                    </div>
                    <h2 className="form-success-title">
                      Inquiry Submitted!
                    </h2>
                    <p className="form-success-desc">
                      Thank you for reaching out to Casa Art Interiors. Opening WhatsApp chat for express communication with our design team...
                    </p>
                    <button
                      className="btn btn-primary btn-md"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className="contact-form-card-title">
                      Send Us A Message
                    </h2>
                    <p className="contact-form-card-subtitle">
                      Fill in your details below and our team will prepare a preliminary estimate.
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Ananya Rao"
                          className="form-input"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">WhatsApp Number *</label>
                          <div className="phone-input-group">
                            <span className="phone-prefix">+91</span>
                            <span className="phone-separator" />
                            <input
                              type="tel"
                              required
                              placeholder="98765 43210"
                              className="phone-input"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            />
                          </div>
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

                      <div className="form-group">
                        <label className="form-label">Site / Property Location *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Magna Solitaire, Kokapet / Narsingi"
                          className="form-input"
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                        />
                      </div>

                      {/* Interactive Choice Chips */}
                      <ChoiceChips
                        label="Property / Project Type"
                        options={PROPERTY_OPTIONS}
                        selectedValue={form.projectType}
                        onChange={(val) => setForm({ ...form, projectType: val })}
                        variant="light"
                      />

                      <div className="form-group">
                        <label className="form-label">Your Message or Specific Requirements</label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about your floor plan, preferred style, or required completion timeline..."
                          className="form-textarea"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary btn-lg w-full"
                        style={{ width: "100%" }}
                      >
                        <span>{isSubmitting ? "Submitting..." : "Submit Inquiry"}</span>
                      </button>

                      <div className="modal-privacy-note">
                        <LockIcon size={14} color="var(--brand-primary, #ff6364)" />
                        <span>Strictly confidential. No promotional spam.</span>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map / Location Highlight */}
        <section className="section-py contact-map-section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: "32px" }}>
              <div className="section-eyebrow">
                Visit Us In Person
              </div>
              <h2 className="display-md">
                Experience Center &amp; Manufacturing Plant
              </h2>
              <p className="text-lg" style={{ marginTop: "12px" }}>
                Walk through live room setups, inspect German hardware, and witness custom woodwork being crafted in real-time.
              </p>
            </div>

            <div className="contact-map-box">
              <iframe
                title="Casa Art Interiors Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.887258936997!2d78.337482!3d17.393245!2m3!1f0f0f0f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb945037d0c325%3A0xb3ff76c24bc91eb!2sKokapet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}
