"use client";

import React, { useState } from "react";
import {
  XCloseIcon,
  CheckCircleIcon,
  LockIcon,
  ArrowRightIcon,
  SparklesIcon,
  WhatsAppIcon
} from "./Icons";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "3 BHK Apartment",
    location: "Hyderabad",
    scope: "Complete Home Interior",
    budget: "₹15 Lakhs - ₹25 Lakhs",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(
      `Hello Casa Art Interiors, I would like to book a free consultation.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Property:* ${formData.propertyType}\n*Location:* ${formData.location}\n*Scope:* ${formData.scope}\n*Budget Range:* ${formData.budget}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/918897969521?text=${text}`, "_blank");
    }, 1000);
  };

  return (
    <div className={`modal-backdrop ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <XCloseIcon size={20} color="#FFFFFF" />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "32px 16px" }}>
            <div className="featured-icon featured-icon-brand" style={{ width: "56px", height: "56px", margin: "0 auto 20px" }}>
              <CheckCircleIcon size={28} color="var(--brand-primary)" />
            </div>
            <h3 className="modal-title" style={{ marginBottom: "14px", color: "#FFFFFF", fontSize: "var(--fs-24)", fontWeight: "700", lineHeight: "1.25" }}>
              Consultation Request Received!
            </h3>
            <p className="text-md" style={{ marginBottom: "24px", color: "rgba(255, 255, 255, 0.7)" }}>
              Our senior interior architect will connect with you within 2 business hours. Opening WhatsApp chat for priority booking...
            </p>
            <button className="btn btn-primary btn-md" onClick={onClose}>
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="section-eyebrow" style={{ marginBottom: "12px", color: "var(--brand-primary)" }}>
              Free 3D Plan & Site Visit
            </div>
            <h3 className="modal-title" style={{ marginBottom: "14px", color: "#FFFFFF", fontSize: "var(--fs-24)", fontWeight: "700", lineHeight: "1.25" }}>
              Book an Interior Consultation
            </h3>
            <p className="text-sm" style={{ marginBottom: "24px", color: "rgba(255, 255, 255, 0.7)" }}>
              Discuss your floor plan with our design team and get an exact factory-direct estimate.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Property Type</label>
                  <select
                    className="form-select"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="Magna Solitaire Apartment">Magna Solitaire Apartment</option>
                    <option value="2 BHK Apartment">2 BHK Apartment</option>
                    <option value="3 BHK Apartment">3 BHK Apartment</option>
                    <option value="4 BHK / Duplex">4 BHK / Duplex</option>
                    <option value="Luxury Villa">Luxury Villa / Penthouse</option>
                    <option value="Commercial Office">Commercial / Studio</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Project Scope</label>
                  <select
                    className="form-select"
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  >
                    <option value="Complete Home Interior">Complete Home Interior</option>
                    <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                    <option value="Living & Dining Renovation">Living & Dining Renovation</option>
                    <option value="Custom Luxury Woodwork">Custom Luxury Woodwork</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Estimated Budget</label>
                  <select
                    className="form-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="₹8 Lakhs - ₹15 Lakhs">₹8 Lakhs - ₹15 Lakhs</option>
                    <option value="₹15 Lakhs - ₹25 Lakhs">₹15 Lakhs - ₹25 Lakhs</option>
                    <option value="₹25 Lakhs - ₹40 Lakhs">₹25 Lakhs - ₹40 Lakhs</option>
                    <option value="₹40 Lakhs+ Luxury">₹40 Lakhs+ Luxury</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Site / Community Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Kokapet / Financial District"
                    className="form-input"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: "100%", marginTop: "8px" }}
              >
                <span>Confirm Consultation Booking</span>
              </button>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "12px", fontSize: "var(--fs-14)", color: "var(--text-dark-muted)" }}>
                <LockIcon size={14} color="var(--brand-primary)" />
                <span>Zero spam. Free 3D plan & site assessment included.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
