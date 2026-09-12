"use client";

import React from "react";
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
  const currentLabel = activeLabel || categories.find((c) => c.id === activeId)?.label || activeId;

  return (
    <section className="services-tabs-section">
      <div className="container">
        {/* Non-Scrolling Category Navigation Pills */}
        <div className="services-tabs-bar">
          {categories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <Link
                key={cat.id}
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
