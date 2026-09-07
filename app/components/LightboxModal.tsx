"use client";

import React, { useEffect } from "react";
import { XCloseIcon, ArrowLeftIcon, ArrowRightIcon } from "./Icons";

interface LightboxItem {
  src: string;
  title: string;
  desc?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

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

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-counter">
            {currentIndex + 1} / {items.length}
          </div>

          <button
            onClick={onClose}
            className="lightbox-close-btn"
            aria-label="Close modal"
          >
            <XCloseIcon size={24} color="#FFFFFF" />
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="lightbox-main-stage">
          {items.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
              className="lightbox-nav-btn prev"
              aria-label="Previous image"
            >
              <ArrowLeftIcon size={24} color="#FFFFFF" />
            </button>
          )}

          <div className="lightbox-img-wrapper">
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="lightbox-active-img"
            />
            <div className="lightbox-img-caption">
              <h4>{currentItem.title}</h4>
              {currentItem.desc && <p>{currentItem.desc}</p>}
            </div>
          </div>

          {items.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex + 1) % items.length)}
              className="lightbox-nav-btn next"
              aria-label="Next image"
            >
              <ArrowRightIcon size={24} color="#FFFFFF" />
            </button>
          )}
        </div>

        {/* Thumbnails Bar */}
        {items.length > 1 && (
          <div className="lightbox-thumbs-strip">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                className={`lightbox-thumb-btn ${idx === currentIndex ? "active" : ""}`}
              >
                <img src={item.src} alt={item.title} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
