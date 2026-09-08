"use client";

import React, { useState } from "react";

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

  return (
    <div className={`img-skeleton-wrapper ${loaded ? "is-loaded" : "is-loading"}`} style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${className} ${loaded ? "image-reveal-active" : ""}`}
        style={style}
        {...props}
      />
    </div>
  );
}
