"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SparklesIcon } from "./Icons";

interface ScrollBeforeAfterSectionProps {
  onOpenConsultation: () => void;
}

export default function ScrollBeforeAfterSection({ onOpenConsultation }: ScrollBeforeAfterSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position through the tall 250vh section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll springs
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Map 0 -> 0.3 to expand from 88% / 1100px with 24px radius to 100vw / 0px radius
  const widthPercent = useTransform(smoothProgress, [0, 0.28], ["88%", "100%"]);
  const maxWidthPx = useTransform(smoothProgress, [0, 0.28], ["1140px", "100vw"]);
  const borderRadius = useTransform(smoothProgress, [0, 0.28], ["28px", "0px"]);
  const heightVh = useTransform(smoothProgress, [0, 0.28], ["72vh", "100vh"]);
  const topOffset = useTransform(smoothProgress, [0, 0.28], ["20px", "0px"]);

  // Map 0.28 -> 0.85 to drive slider position from 5% to 95%
  const scrollSliderPos = useTransform(smoothProgress, [0.28, 0.85], [5, 95]);

  // Manual interactive override state
  const [isManual, setIsManual] = useState(false);
  const [manualPos, setManualPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine current active slider position (manual or scroll-driven)
  const [currentPos, setCurrentPos] = useState(50);

  // Sync scroll slider position when not manually dragging
  React.useEffect(() => {
    const unsubscribe = scrollSliderPos.on("change", (latest) => {
      if (!isManual) {
        setCurrentPos(latest);
      }
    });
    return () => unsubscribe();
  }, [scrollSliderPos, isManual]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const clampedPercent = Math.max(0, Math.min(100, (x / width) * 100));
    setIsManual(true);
    setCurrentPos(clampedPercent);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  const handleMouseLeave = () => {
    setIsManual(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  const afterOpacity = currentPos < 5 ? 0 : Math.min(1, (currentPos - 5) / 15);
  const beforeOpacity = currentPos > 95 ? 0 : Math.min(1, (95 - currentPos) / 15);

  return (
    <div
      ref={sectionRef}
      style={{
        position: "relative",
        height: "260vh", // Tall section allowing smooth scroll-driven expansion & slide
        background: "var(--bg-dark, #060606)",
      }}
    >
      {/* Sticky Fullscreen Frame */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        {/* Animated Container filling width on scroll */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onClick={handleClick}
          style={{
            position: "relative",
            width: widthPercent,
            maxWidth: maxWidthPx,
            height: heightVh,
            borderRadius: borderRadius,
            overflow: "hidden",
            marginTop: topOffset,
            boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
            cursor: "ew-resize",
            userSelect: "none",
            touchAction: "pan-y",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Bottom Layer: Before Image (Bare Shell) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="/assets/casa-art/before-room.jpg"
              alt="Bare Shell Room Before Interior Design"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Top Layer: After Image (Clipped by currentPos %) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: `${currentPos}%`,
              overflow: "hidden",
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100vw",
                height: "100%",
              }}
            >
              <img
                src="/assets/casa-art/after-room.jpg"
                alt="Luxury Finished Interior After Casa Art"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Badges */}
          <span
            className="ba-pill-badge ba-pill-after"
            style={{
              position: "absolute",
              bottom: "28px",
              left: "28px",
              zIndex: 15,
              opacity: afterOpacity,
              transition: "opacity 0.15s ease-out",
              background: "var(--brand-primary, #ff6364)",
              color: "#FFFFFF",
              fontWeight: "700",
              fontSize: "14px",
              padding: "8px 18px",
              borderRadius: "9999px",
              boxShadow: "0 8px 24px rgba(255, 99, 100, 0.4)",
            }}
          >
            AFTER: Casa Art Luxury
          </span>

          <span
            className="ba-pill-badge ba-pill-before"
            style={{
              position: "absolute",
              bottom: "28px",
              right: "28px",
              zIndex: 15,
              opacity: beforeOpacity,
              transition: "opacity 0.15s ease-out",
              background: "#000000",
              color: "#FFFFFF",
              fontWeight: "700",
              fontSize: "14px",
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            BEFORE: Bare Shell
          </span>

          {/* Draggable & Scroll-Driven Divider Handle Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${currentPos}%`,
              width: "2px",
              background: "var(--brand-primary, #ff6364)",
              zIndex: 10,
              transform: "translateX(-50%)",
              boxShadow: "0 0 12px rgba(255, 99, 100, 0.8)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "44px",
                height: "44px",
                borderRadius: "9999px",
                background: "var(--brand-primary, #ff6364)",
                border: "2px solid #FFFFFF",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="8 7 3 12 8 17" />
                <polyline points="16 7 21 12 16 17" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
