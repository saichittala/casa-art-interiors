"use client";

import React, { useState, useEffect, useRef } from "react";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  style,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={`img-skeleton-wrapper ${loaded ? "is-loaded" : "is-loading"}`} style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${className} ${loaded ? "is-loaded image-reveal-active" : ""}`}
        style={style}
        {...props}
      />
    </div>
  );
}
