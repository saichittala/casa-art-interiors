"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import ConsultationModal from "../components/ConsultationModal";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

export default function ServicesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const mosaicImages = [
    { src: "/assets/casa-art/bedroom-suite.jpg", alt: "Luxury Bedroom Design" },
    { src: "/assets/casa-art/dining-interior.jpg", alt: "Dining Room Interior" },
    { src: "/assets/casa-art/modular-kitchen.jpg", alt: "Modular Kitchen Interior" },
    { src: "/assets/casa-art/hero-living.jpg", alt: "Living Room Interior" },
    { src: "/assets/casa-art/puja-room.jpg", alt: "Puja Room Mandir" },
    { src: "/assets/casa-art/study-room.jpg", alt: "Study Room Office" },
    { src: "/assets/casa-art/after-room.jpg", alt: "Living Room Partitions" },
    { src: "/assets/casa-art/factory.jpg", alt: "Office Workspace Interior" },
  ];

  const serviceCategories = [
    {
      id: "bedrooms",
      title: "Bed Rooms",
      image: "/assets/casa-art/bedroom-suite.jpg",
    },
    {
      id: "kitchens",
      title: "Kitchens",
      image: "/assets/casa-art/modular-kitchen.jpg",
    },
    {
      id: "living-rooms",
      title: "Living Rooms",
      image: "/assets/casa-art/hero-living.jpg",
    },
    {
      id: "dining-rooms",
      title: "Dining Rooms",
      image: "/assets/casa-art/dining-interior.jpg",
    },
    {
      id: "puja",
      title: "Puja",
      image: "/assets/casa-art/puja-room.jpg",
    },
    {
      id: "partitions",
      title: "Partitions",
      image: "/assets/casa-art/after-room.jpg",
    },
    {
      id: "study-rooms",
      title: "Study Rooms",
      image: "/assets/casa-art/study-room.jpg",
    },
    {
      id: "office-spaces",
      title: "Office Spaces",
      image: "/assets/casa-art/factory.jpg",
    },
  ];

  return (
    <div className="services-page-wrapper">
      <main>
        {/* Top Full-Width Luxury Hero Banner */}
        <section className="services-hero-banner">
          <img
            src="/assets/casa-art/hero-living.jpg"
            alt="Casa Art Luxury Interior Design Solutions"
            className="services-hero-img"
          />
          <div className="services-hero-overlay" />
        </section>

        {/* Main "Our Services" Section */}
        <section className="services-grid-section">
          <div className="container">
            <h1 className="display-lg services-page-heading">
              Our Services
            </h1>

            {/* 3-Column Service Cards Grid */}
            <div className="services-grid-container">
              {serviceCategories.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="service-card-item"
                >
                  <div className="service-card-img-box">
                    <ImageWithSkeleton src={service.image} alt={service.title} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section: Book Free Design Session */}
        <section className="services-cta-banner-section">
          <div className="services-cta-card">
            <h2 className="services-cta-title">
              Book Free Design Session
            </h2>
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
        </section>
      </main>

      <Footer />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
