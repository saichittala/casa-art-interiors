"use client";

import React, { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const clampedPercent = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(clampedPercent);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  // Calculate smooth opacity fading when slider approaches boundaries
  // AFTER badge (left) fades out as slider moves below 20%
  const afterOpacity = sliderPosition < 5 ? 0 : Math.min(1, (sliderPosition - 5) / 15);

  // BEFORE badge (right) fades out as slider moves above 80%
  const beforeOpacity = sliderPosition > 95 ? 0 : Math.min(1, (95 - sliderPosition) / 15);

  return (
    <div
      ref={containerRef}
      className="before-after-container"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      {/* Before Image (Bottom Layer) */}
      <div className="ba-image-layer ba-image-before">
        <img
          src="/assets/casa-art/before-room.jpg"
          alt="Bare Shell Room Before Interior Design"
        />
      </div>

      {/* After Image (Top Layer, Clipped by width) */}
      <div
        className="ba-image-layer ba-image-after"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src="/assets/casa-art/after-room.jpg"
          alt="Luxury Finished Interior After Casa Art"
        />
      </div>

      {/* Overlay Badges (Top Z-Index, Unclipped, Smooth Fade at Edges) */}
      <span
        className="ba-pill-badge ba-pill-after"
        style={{ opacity: afterOpacity, transition: "opacity 0.15s ease-out" }}
      >
        AFTER: Casa Art Luxury
      </span>
      <span
        className="ba-pill-badge ba-pill-before"
        style={{ opacity: beforeOpacity, transition: "opacity 0.15s ease-out" }}
      >
        BEFORE: Bare Shell
      </span>

      {/* Draggable Divider Handle */}
      <div
        className="ba-slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="ba-slider-btn" aria-label="Drag to compare before and after">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="8 7 3 12 8 17" />
            <polyline points="16 7 21 12 16 17" />
          </svg>
        </div>
      </div>
    </div>
  );
}
