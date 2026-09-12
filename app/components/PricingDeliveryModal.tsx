"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { XCloseIcon, WhatsAppIcon, ClockIcon } from "./Icons";

interface PricingDeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export default function PricingDeliveryModal({
  isOpen,
  onClose,
  onBookConsultation,
}: PricingDeliveryModalProps) {
  const [activeTab, setActiveTab] = useState<"pricing" | "delivery">("pricing");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const packages = [
    {
      bhk: "2BHK",
      price: "₹3,58,000",
      features: [
        "Cupboards in 2 Bedrooms",
        "Kitchen",
        "Study table",
        "Dressing table",
        "Crockery unit",
        "TV unit",
        "Pooja",
      ],
      material: "MADE IN MDF WITH LAMINATE",
    },
    {
      bhk: "3BHK",
      price: "₹5,44,610",
      features: [
        "Cupboards in 3 Bedrooms",
        "Kitchen",
        "Study table",
        "2 Dressing tables",
        "Crockery unit",
        "2 TV units",
        "Pooja",
      ],
      material: "MADE IN MDF WITH LAMINATE",
    },
    {
      bhk: "4BHK",
      price: "₹7,63,897",
      features: [
        "Cupboards in 4 Bedrooms",
        "Kitchen",
        "2 Study tables",
        "2 Dressing tables",
        "Crockery unit",
        "2 TV units",
        "Pooja",
      ],
      material: "MADE IN MDF WITH LAMINATE",
    },
  ];

  const content = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="pricing-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999999999,
            background: "rgba(4, 4, 4, 0.88)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
            overflowY: "auto",
          }}
        >
          <motion.div
            key="pricing-modal-box"
            initial={{ opacity: 0, scale: 0.92, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, y: 12, filter: "blur(6px)" }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1040px",
              background: "#0a0a0a",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "var(--radius-brand-24, 24px)",
              boxShadow: "0 32px 96px rgba(0, 0, 0, 0.95)",
              padding: "36px 32px 32px",
              color: "#FFFFFF",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Modal"
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                zIndex: 10,
              }}
            >
              <XCloseIcon size={20} color="#FFFFFF" />
            </button>

            {/* Modal Headline */}
            <h2
              style={{
                fontSize: "clamp(var(--fs-20), 2.8vw, 24px)",
                fontWeight: "800",
                textAlign: "center",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "28px",
                paddingRight: "40px",
                paddingLeft: "40px",
                fontFamily: "var(--font-heading)",
              }}
            >
              LOWEST PRICES AND FASTEST DELIVERY IN THE MARKET
            </h2>

            {/* Tab Switcher Controls (Brand 10% Tint for active tab) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 36px",
                maxWidth: "380px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                borderRadius: "12px",
                padding: "4px",
                gap: "4px",
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab("pricing")}
                style={{
                  flex: 1,
                  padding: "10px 18px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: activeTab === "pricing" ? "1px solid var(--brand-border, rgba(255, 99, 100, 0.4))" : "1px solid transparent",
                  background: activeTab === "pricing" ? "rgba(255, 99, 100, 0.12)" : "transparent",
                  color: activeTab === "pricing" ? "var(--brand-primary, #ff6364)" : "rgba(255, 255, 255, 0.65)",
                  textAlign: "center",
                }}
              >
                Unbeatable Pricing
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("delivery")}
                style={{
                  flex: 1,
                  padding: "10px 18px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: activeTab === "delivery" ? "1px solid var(--brand-border, rgba(255, 99, 100, 0.4))" : "1px solid transparent",
                  background: activeTab === "delivery" ? "rgba(255, 99, 100, 0.12)" : "transparent",
                  color: activeTab === "delivery" ? "var(--brand-primary, #ff6364)" : "rgba(255, 255, 255, 0.65)",
                  textAlign: "center",
                }}
              >
                Fastest Delivery
              </button>
            </div>

            {/* Tab 1: Unbeatable Pricing View */}
            {activeTab === "pricing" && (
              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px",
                    marginBottom: "32px",
                  }}
                >
                  {packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "16px",
                        padding: "24px 20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: "relative",
                        transition: "transform 0.3s ease, border-color 0.3s ease",
                      }}
                    >
                      <div>
                        {/* BHK Badge (Brand 10% Tint) */}
                        <div
                          style={{
                            display: "inline-block",
                            background: "rgba(255, 99, 100, 0.10)",
                            border: "1px solid rgba(255, 99, 100, 0.30)",
                            color: "var(--brand-primary, #ff6364)",
                            fontSize: "14px",
                            fontWeight: "700",
                            padding: "3px 12px",
                            borderRadius: "6px",
                            marginBottom: "14px",
                          }}
                        >
                          {pkg.bhk}
                        </div>

                        {/* Price Display */}
                        <div
                          style={{
                            fontSize: "28px",
                            fontWeight: "800",
                            color: "#FFFFFF",
                            marginBottom: "20px",
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          {pkg.price}
                        </div>

                        {/* Features Bullet List */}
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: "0 0 24px 0",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          {pkg.features.map((item, i) => (
                            <li
                              key={i}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                fontSize: "14px",
                                color: "rgba(255, 255, 255, 0.88)",
                                lineHeight: "1.4",
                              }}
                            >
                              <span
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  background: "var(--brand-primary, #ff6364)",
                                  flexShrink: 0,
                                }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Material Spec Tag Footer */}
                      <div
                        style={{
                          background: "#000000",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          borderRadius: "6px",
                          padding: "8px 12px",
                          textAlign: "center",
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "rgba(255, 255, 255, 0.85)",
                        }}
                      >
                        {pkg.material}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Call to Action inside Modal */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* ONLY Book Consultation in Solid Brand Color */}
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onBookConsultation();
                    }}
                    className="btn btn-primary btn-lg"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      background: "var(--brand-primary, #ff6364)",
                      color: "#FFFFFF",
                      boxShadow: "0 4px 20px rgba(255, 99, 100, 0.40)",
                    }}
                  >
                    <span>Book Consultation for This Offer</span>
                  </button>

                  <a
                    href={`https://wa.me/918897969521?text=${encodeURIComponent("Hi Casa Art Interiors! 👋\nI’d love to transform my space.\n\nCan you help me with a quote + next steps?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                    style={{ width: "100%", justifyContent: "center", display: "inline-flex", alignItems: "center", gap: "8px" }}
                  >
                    <WhatsAppIcon size={18} />
                    <span>Get Instant Quote on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

            {/* Tab 2: Fastest Delivery View */}
            {activeTab === "delivery" && (
              <div style={{ padding: "10px 0 10px" }}>
                <div
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "16px",
                    padding: "36px 32px",
                    marginBottom: "32px",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <ClockIcon size={24} color="var(--brand-primary, #ff6364)" />
                    <span style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF" }}>
                      Guaranteed 21-Day Factory-to-Site Handover
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "var(--fs-16, 16px)",
                      lineHeight: "1.75",
                      color: "rgba(255, 255, 255, 0.88)",
                      margin: 0,
                    }}
                  >
                    From the moment you sign up, we promise to complete production and deliver your custom furniture within 21 working days — ensuring you get high-quality, affordable furniture faster than anywhere else. This is faster than anyone else in the market.
                  </p>
                </div>

                {/* Bottom Call to Action */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* ONLY Book Consultation in Solid Brand Color */}
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onBookConsultation();
                    }}
                    className="btn btn-primary btn-lg"
                    style={{
                      padding: "14px 32px",
                      background: "var(--brand-primary, #ff6364)",
                      color: "#FFFFFF",
                      boxShadow: "0 4px 20px rgba(255, 99, 100, 0.40)",
                    }}
                  >
                    <span>Book 45-Day Handover Consultation</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(content, document.body);
}
