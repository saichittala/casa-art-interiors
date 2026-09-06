"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SparklesIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  MenuIcon,
  XCloseIcon,
  ArrowRightIcon
} from "./Icons";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScrollAndHash = () => {
      setIsScrolled(window.scrollY > 15);

      if (pathname === "/") {
        const hash = window.location.hash;
        const sectionIds = ["projects", "process", "factory", "services"];
        let foundSection = "";

        const scrollPosition = window.scrollY + 220;
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              foundSection = id;
              break;
            }
          }
        }

        if (!foundSection && hash) {
          const hashClean = hash.replace("#", "");
          if (sectionIds.includes(hashClean)) {
            foundSection = hashClean;
          }
        }

        if (!foundSection && window.scrollY < 300) {
          foundSection = "home";
        }

        setActiveSection(foundSection);
      }
    };

    handleScrollAndHash();
    window.addEventListener("scroll", handleScrollAndHash, { passive: true });
    window.addEventListener("hashchange", handleScrollAndHash);
    return () => {
      window.removeEventListener("scroll", handleScrollAndHash);
      window.removeEventListener("hashchange", handleScrollAndHash);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/contact" },
  ];

  const isLinkActive = (link: { name: string; href: string }) => {
    if (link.href === "/about") return pathname === "/about";
    if (link.href === "/contact") return pathname === "/contact";
    if (link.href === "/services") return pathname === "/services" || (pathname === "/" && activeSection === "services");
    if (link.href === "/") return pathname === "/" && (activeSection === "home" || !activeSection);
    if (link.href === "/#process") return pathname === "/" && activeSection === "process";
    return pathname === link.href;
  };

  const isHomePage = pathname === "/";
  const innerPageClass = !isHomePage ? "inner-page-header" : "";

  return (
    <div className={`header-wrapper ${isScrolled ? "is-scrolled" : ""} ${innerPageClass}`}>
      {/* Top Luxury Announcement Bar */}
      <div className={`top-announcement-bar ${isScrolled ? "collapsed" : ""} ${innerPageClass}`}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <SparklesIcon size={14} color="var(--brand-primary)" />
            <span>Official Interior Design Partner: <strong style={{ color: "var(--brand-primary)" }}>Magna Solitaire</strong></span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ display: "none", alignItems: "center", gap: "6px" }} className="desktop-only-flex">
              <MapPinIcon size={14} color="var(--brand-primary)" />
              <span>Neopolis-Kokapet, Hyderabad</span>
            </span>
            <a
              href="tel:+918897969521"
              style={{ color: "var(--text-light-primary)", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <PhoneIcon size={14} color="var(--brand-primary)" />
              <span>+91 88979 69521</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header (Apple-Grade Liquid Glass) */}
      <header className={`site-header ${isScrolled ? "scrolled" : ""} ${innerPageClass}`}>
        <div className="container">
          <div className="nav-container">
            {/* Brand Logo */}
            <Link href="/" className="nav-logo">
              <img
                src="/assets/logo-white.png"
                alt="Casa Art Interior Design"
                className="nav-logo-img"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav>
              <ul className="nav-menu">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link);
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`nav-link ${isActive ? "active" : ""}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Nav Action CTAs */}
            <div className="nav-actions">
              <button
                onClick={onOpenConsultation}
                className="btn btn-primary btn-sm"
              >
                <span>Get a Free Quote</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <XCloseIcon size={24} color="var(--text-light-primary)" />
                ) : (
                  <MenuIcon size={24} color="var(--text-light-primary)" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown (Dark Frosted Glass) */}
          {mobileMenuOpen && (
            <div style={{
              background: "rgba(6, 6, 6, 0.96)",
              backdropFilter: "blur(11px)",
              WebkitBackdropFilter: "blur(11px)",
              borderBottom: "1px solid var(--border-dark-medium)",
              padding: "24px 0",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "var(--shadow-card-dark)"
            }}>
              {navLinks.map((link) => {
                const isActive = isLinkActive(link);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: "15px",
                      fontWeight: isActive ? "700" : "500",
                      color: isActive ? "var(--brand-primary)" : "var(--text-light-primary)",
                      padding: "8px 16px",
                      transition: "color var(--duration-fast) var(--ease-apple)"
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div style={{ padding: "8px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenConsultation) onOpenConsultation();
                  }}
                  className="btn btn-primary btn-md"
                  style={{ width: "100%" }}
                >
                  <span>Get a Free Quote</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
