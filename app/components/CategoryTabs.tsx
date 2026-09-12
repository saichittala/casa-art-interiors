"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export interface CategoryItem {
  id: string;
  label: string;
}

interface CategoryTabsProps {
  categories: CategoryItem[];
  activeId: string;
  activeLabel?: string;
}

export default function CategoryTabs({ categories, activeId, activeLabel }: CategoryTabsProps) {
  const activeTabRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeId]);

  return (
    <section className="services-tabs-section">
      <div className="container">
        {/* Horizontal Scrollable Category Navigation Pills */}
        <div className="services-tabs-bar">
          {categories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <Link
                key={cat.id}
                ref={isActive ? activeTabRef : null}
                href={`/services/${cat.id}`}
                className={`services-tab-btn ${isActive ? "active" : ""}`}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
