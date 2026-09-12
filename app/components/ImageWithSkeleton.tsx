"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number;
  disableParallax?: boolean;
}

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  style,
  parallaxSpeed = 0.15,
  disableParallax = false,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const travel = 50 * parallaxSpeed;
  const y = useTransform(scrollYProgress, [0, 1], disableParallax ? [0, 0] : [travel, -travel]);
  const scale = 1;

  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete) {
        setLoaded(true);
      }
    }
    // Fallback timer to ensure image is visible
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`img-skeleton-wrapper ${loaded ? "is-loaded" : "is-loading"}`}
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
    >
      <motion.img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        style={{
          y,
          scale,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          ...style,
        }}
        className={`${className} ${loaded ? "is-loaded image-reveal-active" : "is-loaded image-reveal-active"}`}
        {...(props as any)}
      />
    </div>
  );
}
