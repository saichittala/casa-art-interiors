"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon } from "../Icons";

export interface ChoiceOption {
  value: string;
  label: string;
}

interface ChoiceChipsProps {
  options: ChoiceOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  variant?: "light" | "dark";
}

export default function ChoiceChips({
  options,
  selectedValue,
  onChange,
  label,
  required = false,
  variant = "light",
}: ChoiceChipsProps) {
  const isDark = variant === "dark";

  return (
    <div style={{ marginBottom: "18px", width: "100%" }}>
      {label && (
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "600",
            color: isDark ? "rgba(255, 255, 255, 0.85)" : "#374151",
            marginBottom: "10px",
            letterSpacing: "normal",
          }}
        >
          {label} {required && <span style={{ color: "var(--brand-primary, #ff6364)" }}>*</span>}
        </label>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {options.map((option) => {
          const isActive = option.value === selectedValue;
          
          const bgNormal = isDark ? "rgba(255, 255, 255, 0.04)" : "#F3F4F6";
          const bgActive = isDark ? "rgba(255, 99, 100, 0.12)" : "rgba(255, 99, 100, 0.08)";
          const bgHover = isDark
            ? isActive ? "rgba(255, 99, 100, 0.16)" : "rgba(255, 255, 255, 0.08)"
            : isActive ? "rgba(255, 99, 100, 0.14)" : "#E5E7EB";

          const borderNormal = isDark
            ? isActive ? "var(--brand-primary, #ff6364)" : "rgba(255, 255, 255, 0.14)"
            : isActive ? "var(--brand-primary, #ff6364)" : "rgba(23, 23, 22, 0.12)";

          const borderHover = isDark
            ? isActive ? "var(--brand-primary, #ff6364)" : "rgba(255, 255, 255, 0.25)"
            : isActive ? "var(--brand-primary, #ff6364)" : "rgba(23, 23, 22, 0.22)";

          const textNormal = isDark
            ? isActive ? "var(--brand-primary, #ff6364)" : "rgba(255, 255, 255, 0.80)"
            : isActive ? "var(--brand-primary, #ff6364)" : "#374151";

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                height: "40px",
                padding: "0 16px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                border: `1px solid ${isActive ? borderHover : borderNormal}`,
                background: isActive ? bgActive : bgNormal,
                color: textNormal,
                boxShadow: "none",
                outline: "none",
                userSelect: "none",
                boxSizing: "border-box",
                lineHeight: "1",
                transition: "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isActive && (
                  <motion.span
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <CheckIcon size={14} color="var(--brand-primary, #ff6364)" strokeWidth={2.5} />
                  </motion.span>
                )}
              </AnimatePresence>
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
