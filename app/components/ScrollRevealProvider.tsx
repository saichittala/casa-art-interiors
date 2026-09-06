"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.08,
    };

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Auto observe any element with .reveal-on-scroll or target key section elements
    const elementsToObserve = document.querySelectorAll(
      ".reveal-on-scroll, .section-header, .feature-card, .project-card-item, .featured-service-card-item, .process-minimal-step, .faq-item, .who-we-are-content, .who-we-are-visuals, .cta-dark-section .container, .hero-content"
    );

    elementsToObserve.forEach((el) => {
      if (!el.classList.contains("reveal-on-scroll")) {
        el.classList.add("reveal-on-scroll");
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
