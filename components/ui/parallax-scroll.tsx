"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface ParallaxImageProps {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
  direction?: "up" | "down";
  aspectRatio?: string;
  style?: React.CSSProperties;
}

export const ParallaxImage = ({
  src,
  alt = "Casa Art Interior Design Project",
  className = "",
  imgClassName = "",
  speed = 0.25,
  direction = "up",
  aspectRatio,
  style = {},
}: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const travel = 70 * speed;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [travel, -travel] : [-travel, travel]
  );
  const scale = 1;

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio, ...style }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          y,
          scale,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className={cn("w-full h-full object-cover", imgClassName)}
      />
    </div>
  );
};

export interface ParallaxScrollProps {
  images: string[];
  className?: string;
}

export const ParallaxScroll = ({
  images,
  className,
}: ParallaxScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -140]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      ref={containerRef}
      className={cn("w-full overflow-hidden py-8", className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-6 px-4 md:px-8">
        {/* Column 1 */}
        <div className="grid gap-6">
          {firstPart.map((el, idx) => (
            <motion.div
              key={"grid-1-" + idx}
              className="overflow-hidden shadow-2xl"
              style={{
                borderRadius: "var(--radius-brand-18)",
                border: "1px solid var(--border-dark-subtle, rgba(255, 255, 255, 0.1))",
                y: translateFirst,
              }}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-center rounded-2xl"
                alt="Casa Art Interior Project"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="grid gap-6">
          {secondPart.map((el, idx) => (
            <motion.div
              key={"grid-2-" + idx}
              className="overflow-hidden shadow-2xl"
              style={{
                borderRadius: "var(--radius-brand-18)",
                border: "1px solid var(--border-dark-subtle, rgba(255, 255, 255, 0.1))",
                y: translateSecond,
              }}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-center rounded-2xl"
                alt="Casa Art Interior Project"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="grid gap-6">
          {thirdPart.map((el, idx) => (
            <motion.div
              key={"grid-3-" + idx}
              className="overflow-hidden shadow-2xl"
              style={{
                borderRadius: "var(--radius-brand-18)",
                border: "1px solid var(--border-dark-subtle, rgba(255, 255, 255, 0.1))",
                y: translateThird,
              }}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-center rounded-2xl"
                alt="Casa Art Interior Project"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxImage;
