"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isDone, setIsDone] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      onAnimationComplete={() => setIsDone(true)}
      style={{
        width: "100%",
        filter: isDone ? "none" : undefined,
        transform: isDone ? "none" : undefined
      }}
    >
      {children}
    </motion.div>
  );
}
