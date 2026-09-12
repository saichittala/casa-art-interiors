"use client";

import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
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
  title,
}: LightboxModalProps) {
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Keyboard handlers: ArrowLeft, ArrowRight, Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        const prevIdx = (currentIndex - 1 + images.length) % images.length;
        onNavigate(prevIdx);
      } else if (e.key === "ArrowRight") {
        const nextIdx = (currentIndex + 1) % images.length;
        onNavigate(nextIdx);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, images, onNavigate, onClose]);

  if (!isOpen || !images || images.length === 0 || !mounted) return null;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIdx);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextIdx = (currentIndex + 1) % images.length;
    onNavigate(nextIdx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const currentImg = images[currentIndex] || images[0];

  const content = (
    <div
      className="lightbox-root-overlay"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999999999,
        background: "rgba(4, 4, 4, 0.96)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Top Header Navigation Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          height: "72px",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1000000000,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0))",
          flexShrink: 0,
        }}
      >
        {/* Title & Counter Capsule */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "var(--fs-16)", fontWeight: "700", color: "#FFFFFF" }}>
            {title || "Gallery"}
          </span>
          <span
            style={{
              fontSize: "var(--fs-14)",
              fontWeight: "600",
              color: "rgba(255, 255, 255, 0.8)",
              padding: "4px 12px",
              background: "rgba(255, 255, 255, 0.12)",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Top Right Prominent Close Button */}
        <motion.button
          onClick={onClose}
          aria-label="Close Lightbox"
          whileHover={{
            scale: 1.04,
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            borderColor: "rgba(255, 255, 255, 0.40)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            height: "40px",
            padding: "0 20px",
            borderRadius: "9999px",
            background: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            color: "#FFFFFF",
            fontSize: "var(--fs-14)",
            fontWeight: "700",
            cursor: "pointer",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <XCloseIcon size={18} color="#FFFFFF" />
          <span>Close</span>
        </motion.button>
      </div>

      {/* Main Lightbox Stage (Centered Vertically and Horizontally) */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
          minHeight: 0,
          boxSizing: "border-box",
        }}
      >
        {/* Left Arrow Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1000000000,
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
              transition: "all 0.2s ease",
            }}
          >
            <ChevronLeftIcon size={28} color="#FFFFFF" />
          </button>
        )}

        {/* Center Image Wrapper */}
        <div
          style={{
            maxWidth: "85vw",
            maxHeight: "72vh",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-brand-24, 24px)",
              overflow: "hidden",
              boxShadow: "0 32px 96px rgba(0, 0, 0, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <img
              src={currentImg}
              alt={title || `Gallery Image ${currentIndex + 1}`}
              style={{
                maxWidth: "85vw",
                maxHeight: "72vh",
                display: "block",
                objectFit: "contain",
                borderRadius: "var(--radius-brand-24, 24px)",
                overflow: "hidden",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
            />
          </div>
        </div>

        {/* Right Arrow Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="Next Image"
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1000000000,
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
              transition: "all 0.2s ease",
            }}
          >
            <ChevronRightIcon size={28} color="#FFFFFF" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip Carousel */}
      {images.length > 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: "900px",
            padding: "10px 20px 24px",
            zIndex: 1000000000,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              overflowX: "auto",
              padding: "4px 8px",
            }}
          >
            {images.map((imgSrc, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: "88px",
                    height: "60px",
                    flexShrink: 0,
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: isActive
                      ? "2px solid var(--brand-primary, #ff6364)"
                      : "2px solid transparent",
                    opacity: isActive ? 1 : 0.45,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    padding: 0,
                    background: "#121212",
                    boxShadow: isActive ? "0 0 16px rgba(255, 99, 100, 0.6)" : "none",
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}

