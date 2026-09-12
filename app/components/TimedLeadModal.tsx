"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ChoiceChips, { ChoiceOption } from "./ui/ChoiceChips";
import { XCloseIcon, CheckCircleIcon, LockIcon } from "./Icons";
import { submitLeadToGoogleSheet, openWhatsAppLeadChat } from "../lib/leadSubmission";

const PROPERTY_OPTIONS: ChoiceOption[] = [
  { value: "Magna Solitaire Apartment", label: "Magna Solitaire" },
  { value: "2 BHK Apartment", label: "2 BHK" },
  { value: "3 BHK Apartment", label: "3 BHK" },
  { value: "4 BHK / Duplex", label: "4 BHK / Duplex" },
  { value: "Luxury Villa", label: "Villa / Penthouse" },
];

const BUDGET_OPTIONS: ChoiceOption[] = [
  { value: "₹8L - ₹15L", label: "₹8L - ₹15L" },
  { value: "₹15L - ₹25L", label: "₹15L - ₹25L" },
  { value: "₹25L - ₹40L", label: "₹25L - ₹40L" },
  { value: "₹40L+", label: "₹40L+" },
];

const TIMELINE_OPTIONS: ChoiceOption[] = [
  { value: "Immediate (< 30 days)", label: "Immediate (<30d)" },
  { value: "1-3 Months", label: "1-3 Months" },
  { value: "Planning Stage (> 3 months)", label: "Planning Stage" },
];

export default function TimedLeadModal() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Magna Solitaire, Hyderabad",
    propertyType: "",
    budget: "",
    timeToStart: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);

    const hasBeenShown = sessionStorage.getItem("lead_modal_shown");
    if (hasBeenShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("lead_modal_shown", "true");
    }, 60000); // 1 minute (60,000ms)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim() || !formData.location.trim()) {
      return;
    }

    setIsSubmitting(true);

    const cleanPhone = formData.phone.trim();
    const formattedPhone = cleanPhone.startsWith("+91") ? cleanPhone : `+91 ${cleanPhone}`;

    const leadPayload = {
      name: formData.name.trim() || "Valued Client",
      phone: formattedPhone,
      location: formData.location.trim(),
      propertyType: formData.propertyType,
      budget: formData.budget,
      timeToStart: formData.timeToStart,
      source: "Timed 1-Min Auto Lead Modal",
    };

    await submitLeadToGoogleSheet(leadPayload);

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      openWhatsAppLeadChat(leadPayload);
    }, 800);
  };

  if (!mounted || !isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`modal-backdrop ${isOpen ? "open" : ""}`} onClick={handleClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close Modal">
          <XCloseIcon size={20} color="#FFFFFF" />
        </button>

        {submitted ? (
          <div className="form-success-state">
            <div className="form-success-icon featured-icon featured-icon-brand">
              <CheckCircleIcon size={28} color="var(--brand-primary, #ff6364)" />
            </div>
            <h3 className="form-success-title">
              Consultation Locked In!
            </h3>
            <p className="form-success-desc">
              Our principal designer will review your preferences and share a customized 3D plan &amp; pricing sheet.
            </p>
            <button
              className="btn btn-primary btn-md"
              style={{ marginTop: "20px" }}
              onClick={handleClose}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="section-eyebrow" style={{ marginBottom: "12px" }}>
              Exclusive Design Consultation
            </div>

            <h3 className="modal-title" style={{ marginBottom: "8px" }}>
              Transform Your Interior Space
            </h3>
            <p className="modal-body-text" style={{ marginBottom: "22px" }}>
              Get a complimentary 3D layout consultation and factory-direct pricing quote from Casa Art Interiors.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row" style={{ marginBottom: "14px" }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ananya Rao"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">
                    WhatsApp Phone *
                  </label>
                  <div className="phone-input-group">
                    <span className="phone-prefix">+91</span>
                    <span className="phone-separator" />
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      className="phone-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "14px" }}>
                <label className="form-label">
                  Project Location / Apartment *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Magna Solitaire, Kokapet"
                  className="form-input"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <ChoiceChips
                label="Property Type"
                options={PROPERTY_OPTIONS}
                selectedValue={formData.propertyType}
                onChange={(val) => setFormData({ ...formData, propertyType: val })}
                variant="dark"
              />

              <ChoiceChips
                label="Budget Range"
                options={BUDGET_OPTIONS}
                selectedValue={formData.budget}
                onChange={(val) => setFormData({ ...formData, budget: val })}
                variant="dark"
              />

              <ChoiceChips
                label="Timeline to Start"
                options={TIMELINE_OPTIONS}
                selectedValue={formData.timeToStart}
                onChange={(val) => setFormData({ ...formData, timeToStart: val })}
                variant="dark"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg"
                style={{ width: "100%", marginTop: "8px" }}
              >
                <span>{isSubmitting ? "Submitting Request..." : "Book Consultation"}</span>
              </button>

              <div className="modal-privacy-note">
                <LockIcon size={14} color="var(--brand-primary, #ff6364)" />
                <span>Your information is strictly private. Free 3D plan included.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
