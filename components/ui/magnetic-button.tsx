"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  maxDistance?: number;
  className?: string;
  showBorder?: boolean;
  style?: React.CSSProperties;
}

export const MagneticButton = ({
  children,
  strength = 0.5,
  maxDistance = 60,
  className = "",
  showBorder = false,
  style = {},
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const { clientX, clientY } = e;

    let x = (clientX - (left + width / 2)) * strength;
    let y = (clientY - (top + height / 2)) * strength;

    const distance = Math.hypot(x, y);
    if (distance > maxDistance) {
      const scale = maxDistance / distance;
      x *= scale;
      y *= scale;
    }

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const hasMoved = position.x !== 0 || position.y !== 0;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-pointer transition-colors duration-150 ${className}`}
      style={{
        display: "inline-block",
        borderRadius: "9999px",
        borderColor: hasMoved && showBorder ? "var(--brand-primary, #ff6364)" : "transparent",
        backgroundColor: hasMoved && showBorder
          ? "rgba(255, 99, 100, 0.12)"
          : "transparent",
        ...style,
      }}
    >
      <motion.div
        ref={ref}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.1 }}
        style={{ display: "inline-block", width: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MagneticButton;
