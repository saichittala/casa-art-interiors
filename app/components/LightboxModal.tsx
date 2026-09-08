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
      {/* Top Right Floating Close (X) Button */}
      <button className="lightbox-close-circle" onClick={onClose} aria-label="Close Lightbox">
        <XCloseIcon size={22} color="#FFFFFF" />
      </button>

      {/* Main Lightbox Stage */}
      <div className="lightbox-stage-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Left Arrow Button */}
        <button className="lightbox-arrow-btn lightbox-arrow-left" onClick={handlePrev} aria-label="Previous Image">
          <ChevronLeftIcon size={24} color="#FFFFFF" />
        </button>

        {/* Center Active Image Box */}
        <div className="lightbox-main-img-box">
          <img
            src={images[currentIndex]}
            alt={title || `Gallery Image ${currentIndex + 1}`}
            className="lightbox-main-img"
          />
        </div>

        {/* Right Arrow Button */}
        <button className="lightbox-arrow-btn lightbox-arrow-right" onClick={handleNext} aria-label="Next Image">
          <ChevronRightIcon size={24} color="#FFFFFF" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip Carousel */}
      {images.length > 1 && (
        <div className="lightbox-thumbnails-bar" onClick={(e) => e.stopPropagation()}>
          <div className="lightbox-thumbnails-scroll">
            {images.map((imgSrc, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  className={`lightbox-thumb-item ${isActive ? "active" : ""}`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
