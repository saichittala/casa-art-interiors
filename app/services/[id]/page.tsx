"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import ConsultationModal from "../../components/ConsultationModal";
import LightboxModal from "../../components/LightboxModal";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import ImageWithSkeleton from "../../components/ImageWithSkeleton";
import { ExpandIcon, CheckCircleIcon } from "../../components/Icons";
import { servicesData, ServiceDetail } from "../../lib/servicesData";

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = use(params);
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const allCategories = [
    { id: "bedrooms", label: "Bed Rooms" },
    { id: "kitchens", label: "Kitchens" },
    { id: "living-rooms", label: "Living Rooms" },
    { id: "dining-rooms", label: "Dining Rooms" },
    { id: "puja", label: "Puja" },
    { id: "partitions", label: "Partitions" },
    { id: "study-rooms", label: "Study Rooms" },
    { id: "office-spaces", label: "Office Spaces" }
  ];

  return (
    <div className="services-page-wrapper">
      <main>
        {/* Hero Banner */}
        <section className="services-hero-banner">
          <img
            src={service.mainImage}
            alt={service.title}
            className="services-hero-img"
          />
          <div className="services-hero-overlay" />
        </section>

        {/* Horizontal Category Navigation Tabs */}
        <section className="services-tabs-section">
          <div className="container">
            <div className="services-tabs-bar">
              {allCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services/${cat.id}`}
                  className={`services-tab-btn ${cat.id === service.id ? "active" : ""}`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Showcase & Gallery Section */}
        <section className="services-showcase-section">
          <div className="container">
            <h1 className="services-main-headline">{service.title}</h1>

            <div className="services-gallery-container">
              {/* Main Interactive Featured Image Box */}
              <div
                className="services-main-image-box"
                onClick={() => setLightboxOpen(true)}
              >
                <ImageWithSkeleton
                  src={service.gallery[activeImageIndex] || service.mainImage}
                  alt={`${service.title} Showcase`}
                  className="services-main-img"
                />
                <div className="services-img-hover-overlay">
                  <div className="services-expand-badge">
                    <ExpandIcon size={16} color="#FFFFFF" />
                    <span>Click to Expand</span>
                  </div>
                </div>
              </div>

              {/* Gallery Thumbnails Grid */}
              {service.gallery && service.gallery.length > 1 && (
                <div className="services-thumbnails-grid">
                  {service.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className={`services-thumb-card ${idx === activeImageIndex ? "active" : ""}`}
                      onClick={() => setActiveImageIndex(idx)}
                    >
                      <img src={img} alt={`${service.title} Thumbnail ${idx + 1}`} />
                      <div className="services-thumb-overlay">
                        <div
                          className="services-thumb-expand"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex(idx);
                            setLightboxOpen(true);
                          }}
                        >
                          <ExpandIcon size={16} color="#FFFFFF" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Description & Feature Specifications Box */}
              <div className="services-description-box" style={{ marginTop: "48px" }}>
                <h3 style={{ fontSize: "var(--fs-22)", fontWeight: "700", color: "#FFFFFF", marginBottom: "16px" }}>
                  {service.tagline}
                </h3>
                <p style={{ fontSize: "var(--fs-16)", color: "var(--text-white-secondary)", lineHeight: "1.75", marginBottom: "0px" }}>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="services-cta-banner-section">
          <div className="container">
            <div className="services-cta-card">
              <h2 className="services-cta-title">Book Free Design Session</h2>
              <p className="services-cta-desc">
                Get expert guidance and personalized design ideas for your space with Casa Art Interiors.
              </p>
              <button
                onClick={() => setConsultationOpen(true)}
                className="btn btn-primary btn-lg services-cta-btn"
              >
                <span>Book for Free Consultation</span>
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
        images={service.gallery}
        currentIndex={activeImageIndex}
        onNavigate={(idx) => setActiveImageIndex(idx)}
        title={service.title}
      />
    </div>
  );
}
