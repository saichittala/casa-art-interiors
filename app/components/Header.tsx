"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  SparklesIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  MenuIcon,
  XCloseIcon,
  ArrowRightIcon
} from "./Icons";

import ConsultationModal from "./ConsultationModal";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const pathname = usePathname();

  const handleOpenConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      setInternalModalOpen(true);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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

  const getBreadcrumbs = () => {
    if (pathname === "/") return [];
    if (pathname === "/services") {
      return [
        { label: "Home", href: "/" },
        { label: "Services", href: "" }
      ];
    }
    if (pathname.startsWith("/services/")) {
      const serviceId = pathname.replace("/services/", "");
      const titleMap: Record<string, string> = {
        "bedrooms": "Bed Rooms",
        "kitchens": "Kitchens",
        "living-rooms": "Living Rooms",
        "dining-rooms": "Dining Rooms",
        "puja": "Puja",
        "partitions": "Partitions",
        "study-rooms": "Study Rooms",
        "office-spaces": "Office Spaces",
      };
      const title = titleMap[serviceId] || serviceId.replace(/-/g, " ");
      return [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: title, href: "" }
      ];
    }
    if (pathname === "/about") {
      return [
        { label: "Home", href: "/" },
        { label: "About", href: "" }
      ];
    }
    if (pathname === "/contact") {
      return [
        { label: "Home", href: "/" },
        { label: "Contact", href: "" }
      ];
    }
    return [];
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <>
      <div className={`header-wrapper ${isScrolled ? "is-scrolled" : ""} ${innerPageClass}`}>
        {/* Top Luxury Announcement Bar */}
        <div className={`top-announcement-bar ${isScrolled ? "collapsed" : ""} ${innerPageClass}`}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", fontSize: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px" }}>
              <SparklesIcon size={14} color="var(--brand-primary)" />
              <span style={{ fontSize: "14px" }}>Official Interior Design Partner: <strong style={{ color: "var(--brand-primary)", fontSize: "14px" }}>Magna Solitaire</strong></span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "14px" }}>
              <span style={{ display: "none", alignItems: "center", gap: "6px", fontSize: "14px" }} className="desktop-only-flex">
                <MapPinIcon size={14} color="var(--brand-primary)" />
                <span style={{ fontSize: "14px" }}>Neopolis-Kokapet, Hyderabad</span>
              </span>
              <a
                href="tel:+918897969521"
                style={{ color: "var(--text-light-primary)", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px" }}
              >
                <PhoneIcon size={14} color="var(--brand-primary)" />
                <span style={{ fontSize: "14px" }}>+91 88979 69521</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Sticky Header */}
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
                  onClick={handleOpenConsultation}
                  className="btn btn-primary btn-sm"
                >
                  <span>Get a Free Quote</span>
                </button>

                {/* Mobile Hamburger Toggle (Untitled UI Icons) */}
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
          </div>
        </header>
      </div>

      {/* Full-Height Mobile Expanded Nav Overlay (Pure Black #000000, Luxury Cubic-Bezier Motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1], // Classy Apple / Untitled UI cubic-bezier curve
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100dvh",
              zIndex: 999999,
              backgroundColor: "#000000",
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              padding: "24px 20px clamp(28px, 6vh, 48px)",
            }}
          >
            {/* Top Bar Header inside overlay */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                marginBottom: "28px",
              }}
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/assets/logo-white.png"
                  alt="Casa Art Interior Design"
                  style={{ height: "34px", objectFit: "contain" }}
                />
              </Link>

              {/* Close Button using Untitled UI XCloseIcon */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Mobile Menu"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#FFFFFF",
                  transition: "background-color 0.2s ease",
                }}
              >
                <XCloseIcon size={22} color="#FFFFFF" strokeWidth={2} />
              </button>
            </div>

            {/* Navigation Links (Staggered Animation with cubic-bezier) */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "16px",
                margin: "auto 0",
              }}
            >
              {navLinks.map((link, idx) => {
                const isActive = isLinkActive(link);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08 + idx * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "clamp(26px, 7vw, 36px)",
                        fontWeight: "700",
                        letterSpacing: "-0.02em",
                        color: isActive ? "var(--brand-primary, #ff6364)" : "#FFFFFF",
                        textDecoration: "none",
                        padding: "10px 0",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                        transition: "color 0.2s ease",
                      }}
                    >
                      <span>{link.name}</span>
                      <ArrowRightIcon
                        size={22}
                        color={isActive ? "var(--brand-primary, #ff6364)" : "rgba(255, 255, 255, 0.35)"}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions & Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{
                duration: 0.4,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                marginTop: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenConsultation();
                }}
                className="btn btn-primary btn-lg"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: "700",
                  padding: "16px",
                  borderRadius: "14px",
                  background: "var(--brand-primary, #ff6364)",
                  color: "#FFFFFF",
                  boxShadow: "0 10px 30px rgba(255, 99, 100, 0.3)",
                }}
              >
                <span>Get a Free Quote</span>
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginTop: "4px",
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                <a
                  href="tel:+918897969521"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#FFFFFF",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  <PhoneIcon size={16} color="var(--brand-primary, #ff6364)" />
                  <span>+91 88979 69521</span>
                </a>

                <a
                  href="https://wa.me/918897969521"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#25D366",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  <WhatsAppIcon size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)", textAlign: "center" }}>
                Neopolis-Kokapet, Hyderabad • In-House Factory Build
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Separate Non-Sticky Breadcrumbs Bar (Outside Header Wrapper) */}
      {breadcrumbs.length > 0 && (
        <div className="header-breadcrumb-standalone-bar">
          <div className="container">
            <div className="header-breadcrumb-links">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <span className="header-breadcrumb-sep">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="header-breadcrumb-link">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="header-breadcrumb-current">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}

      <ConsultationModal
        isOpen={internalModalOpen}
        onClose={() => setInternalModalOpen(false)}
      />
    </>
  );
}
