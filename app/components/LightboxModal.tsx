"use client";

import React, { useEffect } from "react";
import { XCloseIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  title?: string;
}

export default function LightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  title
}: LightboxModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !images || images.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % images.length;
    onNavigate(nextIdx);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Top bar with counter on left, title in middle, close on right */}
        <div className="lightbox-top-bar">
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
          {title && <div style={{ color: "var(--text-white-pure)", fontWeight: "600", fontSize: "16px" }}>{title}</div>}
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
            <XCloseIcon size={24} color="#FFFFFF" />
          </button>
        </div>

        {/* Main image stage */}
        <div className="lightbox-main-stage">
          <button className="hero-slider-btn" onClick={handlePrev} style={{ position: "absolute", left: "20px", zIndex: 10 }}>
            <ChevronLeftIcon size={24} color="#FFFFFF" />
          </button>

          <div className="lightbox-img-wrapper">
            <img
              src={images[currentIndex]}
              alt={title || `Showcase Image ${currentIndex + 1}`}
              className="lightbox-active-img"
            />
          </div>

          <button className="hero-slider-btn" onClick={handleNext} style={{ position: "absolute", right: "20px", zIndex: 10 }}>
            <ChevronRightIcon size={24} color="#FFFFFF" />
          </button>
        </div>
      </div>
    </div>
  );
}
