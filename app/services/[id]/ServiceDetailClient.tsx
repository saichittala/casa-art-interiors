"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import ConsultationModal from "../../components/ConsultationModal";
import LightboxModal from "../../components/LightboxModal";
import ImageWithSkeleton from "../../components/ImageWithSkeleton";
import { ExpandIcon, ChevronLeftIcon, ChevronRightIcon } from "../../components/Icons";
import CategoryTabs from "../../components/CategoryTabs";
import { ServiceDetail } from "../../lib/servicesData";

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [service.id]);

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

  const galleryImages = service.gallery && service.gallery.length > 0 ? service.gallery : [service.mainImage];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

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
        <CategoryTabs categories={allCategories} activeId={service.id} />

        {/* Main Showcase & Gallery Section */}
        <section className="services-showcase-section">
          <div className="container">
            <h1 className="services-main-headline">{service.title}</h1>

            <div className="services-gallery-container">
              {/* Main Interactive Featured Image Box */}
              <div
                className="services-main-image-box"
                onClick={() => setLightboxOpen(true)}
                style={{ position: "relative" }}
              >
                <ImageWithSkeleton
                  src={galleryImages[activeImageIndex] || service.mainImage}
                  alt={`${service.title} Showcase`}
                  className="services-main-img"
                />

                {/* Left Arrow Button for Inline Switching */}
                {galleryImages.length > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous Image"
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 10,
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "rgba(0, 0, 0, 0.65)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <ChevronLeftIcon size={22} color="#FFFFFF" />
                  </button>
                )}

                {/* Right Arrow Button for Inline Switching */}
                {galleryImages.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next Image"
                    style={{
                      position: "absolute",
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 10,
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "rgba(0, 0, 0, 0.65)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <ChevronRightIcon size={22} color="#FFFFFF" />
                  </button>
                )}

                {/* Hover Expand Badge */}
                <div className="services-img-hover-overlay">
                  <div className="services-expand-badge">
                    <ExpandIcon size={16} color="#FFFFFF" />
                    <span>Click to Expand</span>
                  </div>
                </div>
              </div>

              {/* Gallery Thumbnails Grid */}
              {galleryImages.length > 1 && (
                <div className="services-thumbnails-grid">
                  {galleryImages.map((img, idx) => (
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
                Get expert guidance and personalized design ideas<br />for your space with Casa Art Interiors.
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
        images={galleryImages}
        currentIndex={activeImageIndex}
        onNavigate={(idx) => setActiveImageIndex(idx)}
        title={service.title}
      />
    </div>
  );
}

