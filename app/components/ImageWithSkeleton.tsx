"use client";

import React, { useState } from "react";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  style,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`img-skeleton-wrapper dark-skeleton-loader ${isLoaded ? "is-loaded" : ""} ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? "is-loaded" : ""}`}
        onLoad={() => setIsLoaded(true)}
        style={style}
        {...props}
      />
    </div>
  );
}
