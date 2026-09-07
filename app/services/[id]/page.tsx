"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ConsultationModal from "../../components/ConsultationModal";
import LightboxModal from "../../components/LightboxModal";
import ImageWithSkeleton from "../../components/ImageWithSkeleton";
import { servicesData } from "../../lib/servicesData";
import {
  SparklesIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ExpandIcon
} from "../../components/Icons";

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const service = servicesData[resolvedParams.id];

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!service) {
    notFound();
  }

  const openGallery = (idx: number) => {
    setActiveImgIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      <Header onOpenConsultation={() => setConsultationOpen(true)} />

      <main>
        {/* Breadcrumb Navigation Bar */}
        <section className="services-breadcrumb-bar">
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--text-white-muted)" }}>
              <Link href="/" style={{ color: "var(--text-white-secondary)" }}>Home</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "var(--text-white-secondary)" }}>Services</Link>
              <span>/</span>
              <span style={{ color: "var(--brand-primary, #A6533F)", fontWeight: "600" }}>{service.title}</span>
            </div>
          </div>
        </section>

        {/* Service Hero Banner */}
        <section className="services-hero-banner">
          <ImageWithSkeleton
            src={service.heroImage}
            alt={service.title}
            className="services-hero-img"
          />
          <div className="services-hero-overlay" />

          <div className="container relative z-10">
            <div style={{ maxWidth: "720px" }}>
              <div className="badge badge-brand mb-4">
                <SparklesIcon size={14} color="var(--brand-primary)" />
                <span>{service.category}</span>
              </div>

              <h1 className="services-detail-title">
                {service.title}
              </h1>

              <p className="services-detail-tagline">
                {service.tagline}
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "28px" }}>
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="btn btn-primary btn-lg"
                >
                  <span>Book Free 3D Design & Quote</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery & Description Section */}
        <section className="section-py" style={{ background: "var(--bg-dark, #060606)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
              {/* Main Featured Interactive Gallery */}
              <div>
                <h3 className="section-title mb-6" style={{ fontSize: "24px", color: "#FFF" }}>
                  Design Showcase & Gallery
                </h3>

                <div
                  className="services-main-image-box"
                  onClick={() => openGallery(activeImgIndex)}
                >
                  <ImageWithSkeleton
                    src={service.gallery[activeImgIndex]?.src || service.heroImage}
                    alt={service.gallery[activeImgIndex]?.title || service.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div className="services-img-hover-overlay">
                    <div className="services-expand-badge">
                      <ExpandIcon size={18} color="#FFF" />
                      <span>Click to view Fullscreen</span>
                    </div>
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                {service.gallery.length > 1 && (
                  <div className="services-thumbnails-grid">
                    {service.gallery.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => openGallery(idx)}
                        className={`services-thumb-card ${idx === activeImgIndex ? "active" : ""}`}
                      >
                        <ImageWithSkeleton
                          src={item.src}
                          alt={item.title}
                        />
                        <div className="services-thumb-overlay">
                          <div className="services-thumb-expand">
                            <ExpandIcon size={16} color="#FFF" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Description & Key Highlights */}
              <div className="services-description-box">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Technical Specifications Grid */}
        <section className="section-py" style={{ background: "#0A0A0C", borderTop: "1px solid var(--border-dark-hairline)" }}>
          <div className="container">
            <div className="services-specs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
              {/* Features List */}
              <div>
                <h3 style={{ fontSize: "22px", color: "#FFF", marginBottom: "20px", fontWeight: "700" }}>
                  Key Design & Factory Features
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {service.features.map((feat, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-white-secondary)", fontSize: "15px", lineHeight: "1.5" }}>
                      <div style={{ background: "rgba(166, 83, 63, 0.15)", borderRadius: "50%", padding: "4px", flexShrink: 0, marginTop: "2px" }}>
                        <CheckIcon size={14} color="var(--brand-primary, #A6533F)" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Card */}
              <div style={{ background: "var(--surface-dark-card)", border: "1px solid var(--border-dark-medium)", borderRadius: "12px", padding: "28px" }}>
                <h3 style={{ fontSize: "20px", color: "#FFF", marginBottom: "20px", fontWeight: "700" }}>
                  Technical Specifications
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {service.specifications.map((spec, idx) => (
                    <div key={idx} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-dark-hairline)", paddingBottom: "12px" }}>
                      <span style={{ color: "var(--text-white-muted)", fontSize: "14px" }}>{spec.label}</span>
                      <span style={{ color: "#FFF", fontSize: "14px", fontWeight: "600", textAlign: "right" }}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "24px", paddingTop: "16px", display: "flex", gap: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-white-secondary)", fontSize: "14px" }}>
                    <ClockIcon size={16} color="var(--brand-primary)" />
                    <span>Timeline: {service.estimatedTimeline}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-white-secondary)", fontSize: "14px" }}>
                    <ShieldCheckIcon size={16} color="var(--brand-primary)" />
                    <span>Warranty: {service.warrantyYears} Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="services-cta-banner-section">
          <div className="container">
            <div className="services-cta-card">
              <h2 className="services-cta-title">
                Ready to Design Your {service.title}?
              </h2>
              <p className="services-cta-desc">
                Schedule a consultation with our senior architects and get a complimentary 3D concept layout with factory-direct pricing.
              </p>
              <button
                onClick={() => setConsultationOpen(true)}
                className="btn btn-primary btn-lg services-cta-btn"
              >
                <span>Book Free Consultation</span>
                <ArrowRightIcon size={18} color="#FFF" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={service.gallery}
        currentIndex={activeImgIndex}
        onNavigate={(idx) => setActiveImgIndex(idx)}
      />
    </>
  );
}
