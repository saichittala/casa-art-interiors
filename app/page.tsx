"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import PricingDeliveryModal from "./components/PricingDeliveryModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollBeforeAfterSection from "./components/ScrollBeforeAfterSection";
import FaqAccordion from "./components/FaqAccordion";
import ImageWithSkeleton from "./components/ImageWithSkeleton";
import ChoiceChips, { ChoiceOption } from "./components/ui/ChoiceChips";
import { submitLeadToGoogleSheet, openWhatsAppLeadChat } from "./lib/leadSubmission";
import { ParallaxScroll, ParallaxImage } from "./components/ui/parallax-scroll";
import {
  FactoryIcon,
  MapPinIcon,
  ShieldCheckIcon,
  KitchenIcon,
  WardrobeIcon,
  SofaIcon,
  BedIcon,
  CeilingLightIcon,
  ZapIcon,
  GlassIcon,
  PaintIcon,
  HomeIcon,
  SparklesIcon,
  CheckCircleIcon,
  StarIcon,
  MessageChatIcon,
  RulerIcon,
  CompassIcon,
  ToolIcon,
  KeyIcon,
  LayersIcon,
  PhoneIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  ClockIcon,
  AwardIcon,
  DiamondIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "./components/Icons";

const parallaxGalleryImages = [
  "/assets/casa-art/bedroom-suite.jpg",
  "/assets/casa-art/dining-interior.jpg",
  "/assets/casa-art/modular-kitchen.jpg",
  "/assets/casa-art/hero-living.jpg",
  "/assets/casa-art/puja-room.jpg",
  "/assets/casa-art/study-room.jpg",
  "/assets/casa-art/after-room.jpg",
  "/assets/casa-art/factory.jpg",
  "/assets/casa-art/dining-interior.jpg",
];

const heroSlides = [
  {
    id: 0,
    image: "/assets/casa-art/hero-living.jpg",
    title: "Your Home.",
    accent: "Beautifully Designed.",
    alt: "Magna Solitaire Luxury Residence - Living Room Design"
  },
  {
    id: 1,
    image: "/assets/casa-art/bedroom-suite.jpg",
    title: "Bespoke Comfort.",
    accent: "Crafted for Rest.",
    alt: "Luxury Master Bedroom Suite - Casa Art Interior Design"
  },
  {
    id: 2,
    image: "/assets/casa-art/modular-kitchen.jpg",
    title: "Precision Engineering.",
    accent: "Culinary Elegance.",
    alt: "German Engineered Modular Kitchen Architecture"
  }
];

const heroSlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "6%" : "-6%",
    opacity: 0,
    filter: "blur(40px) brightness(0.6)",
    scale: 1.10
  }),
  center: {
    zIndex: 1,
    x: "0%",
    opacity: 1,
    filter: "blur(0px) brightness(1)",
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "6%" : "-6%",
    opacity: 0,
    filter: "blur(40px) brightness(0.5)",
    scale: 0.92
  })
};

const HOME_PROPERTY_OPTIONS: ChoiceOption[] = [
  { value: "Magna Solitaire Apartment", label: "Magna Solitaire" },
  { value: "3 BHK Apartment", label: "3 BHK" },
  { value: "4 BHK / Villa", label: "4 BHK / Villa" },
  { value: "Commercial Office", label: "Commercial" },
];

const HOME_BUDGET_OPTIONS: ChoiceOption[] = [
  { value: "₹10L - ₹20L", label: "₹10L - ₹20L" },
  { value: "₹20L - ₹35L", label: "₹20L - ₹35L" },
  { value: "₹35L - ₹50L", label: "₹35L - ₹50L" },
  { value: "₹50L+", label: "₹50L+ Luxury" },
];

export default function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [servicesScrollProgress, setServicesScrollProgress] = useState(25);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [homeForm, setHomeForm] = useState({
    name: "",
    phone: "",
    propertyType: "",
    budget: "",
    location: "",
    timeToStart: "",
  });
  const [homeFormSubmitting, setHomeFormSubmitting] = useState(false);
  const [homeFormSubmitted, setHomeFormSubmitted] = useState(false);
  const servicesSliderRef = useRef<HTMLDivElement>(null);

  const [heroIndex, setHeroIndex] = useState(0);
  const [heroDirection, setHeroDirection] = useState(1);

  const nextHeroSlide = () => {
    setHeroDirection(1);
    setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setHeroDirection(-1);
    setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroDirection(1);
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroIndex]);

  const handleServicesScroll = () => {
    if (!servicesSliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = servicesSliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setServicesScrollProgress(100);
      return;
    }
    const currentPercent = (scrollLeft / maxScroll) * 100;
    const calculatedWidth = 25 + (currentPercent * 0.75);
    setServicesScrollProgress(Math.min(100, Math.max(25, calculatedWidth)));
  };

  const scrollServicesLeft = () => {
    if (servicesSliderRef.current) {
      servicesSliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollServicesRight = () => {
    if (servicesSliderRef.current) {
      servicesSliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const featuredServices = [
    {
      id: "bedrooms",
      num: "01",
      title: "Bed Rooms",
      desc: "Turn your bedroom into a peaceful retreat with bespoke designs tailored to your style.",
      image: "/assets/casa-art/bedroom-suite.jpg"
    },
    {
      id: "kitchens",
      num: "02",
      title: "Kitchens",
      desc: "Experience the perfect blend of aesthetics and efficiency with a smart, space-optimized modular kitchen.",
      image: "/assets/casa-art/modular-kitchen.jpg"
    },
    {
      id: "living-rooms",
      num: "03",
      title: "Living Rooms",
      desc: "Create a stunning first impression with a living room that balances elegance, comfort, and functionality.",
      image: "/assets/casa-art/hero-living.jpg"
    },
    {
      id: "dining-rooms",
      num: "04",
      title: "Dining Rooms",
      desc: "Dine in style with elegant and functional spaces designed for memorable gatherings.",
      image: "/assets/casa-art/dining-interior.jpg"
    },
    {
      id: "puja",
      num: "05",
      title: "Puja",
      desc: "Create a serene sanctuary with a pooja room designed for peace and positivity.",
      image: "/assets/casa-art/puja-room.jpg"
    },
    {
      id: "partitions",
      num: "06",
      title: "Partitions",
      desc: "Define spaces effortlessly with stylish, functional partitions that enhance aesthetics and privacy.",
      image: "/assets/casa-art/after-room.jpg"
    },
    {
      id: "study-rooms",
      num: "07",
      title: "Study Rooms",
      desc: "Boost focus and productivity with a study space that blends comfort and inspiration.",
      image: "/assets/casa-art/study-room.jpg"
    },
    {
      id: "office-spaces",
      num: "08",
      title: "Office Spaces",
      desc: "Design workspaces that fuel creativity, efficiency, and success.",
      image: "/assets/casa-art/factory.jpg"
    }
  ];

  const projects = [
    {
      id: "viswajeet-villa",
      name: "VISWAJEET'S 3 BHK VILLA",
      location: "Nagole, Uppal",
      image: "/assets/casa-art/viswajeet-villa.jpg",
      category: "kitchen"
    },
    {
      id: "rajasekhar-home",
      name: "RAJASEKHAR CHELLURI'S HOME",
      location: "Hayathnagar",
      image: "/assets/casa-art/rajasekhar-home.jpg",
      category: "bedroom"
    },
    {
      id: "magna-solitaire",
      name: "MAGNA SOLITAIRE RESIDENCE",
      location: "Gachibowli, Hyderabad",
      image: "/assets/casa-art/hero-living.jpg",
      category: "living"
    },
    {
      id: "financial-district",
      name: "FINANCIAL DISTRICT PENTHOUSE",
      location: "Financial District, Hyderabad",
      image: "/assets/casa-art/luxury-wardrobe.jpg",
      category: "wardrobe"
    },
    {
      id: "jubilee-hills",
      name: "JUBILEE HILLS RESIDENCE",
      location: "Jubilee Hills, Hyderabad",
      image: "/assets/casa-art/dining-interior.jpg",
      category: "living"
    },
    {
      id: "kokapet-crown",
      name: "NEOPOLIS CROWN VILLA",
      location: "Neopolis-Kokapet, Hyderabad",
      image: "/assets/casa-art/after-room.jpg",
      category: "bedroom"
    }
  ];

  const services = [
    {
      Icon: KitchenIcon,
      title: "Modular Kitchens",
      desc: "Ergonomically engineered kitchens with marine-grade BWP plywood, anti-fingerprint acrylic/PU finishes, and soft-close German hardware.",
      features: ["Hafele & Blum Soft-Close", "Quartz & Marble Island Tops", "Custom Pantry & Spice Organizers"]
    },
    {
      Icon: WardrobeIcon,
      title: "Modular Wardrobes",
      desc: "Bespoke walk-in closets, sliding fluted glass wardrobes, and hinged units with sensor LED illumination and velvet-lined organizers.",
      features: ["Tinted Fluted Glass Doors", "Aluminum Slim Profile Frames", "Integrated Watch & Jewelry Trays"]
    },
    {
      Icon: SofaIcon,
      title: "Living & Dining",
      desc: "Grand entertaining spaces with custom fluted paneling, designer TV consoles, marble dining accents, and partition screens.",
      features: ["Acoustic Wood Wall Cladding", "Floating TV Consoles", "Designer Bar & Crockery Units"]
    },
    {
      Icon: BedIcon,
      title: "Bedroom Interiors",
      desc: "Serene bedroom sanctuaries featuring upholstered feature walls, integrated study desks, floating nightstands, and mood lighting.",
      features: ["Velvet & Leather Headboards", "Concealed Wiring & Bedside Drops", "Custom Vanity Units"]
    },
    {
      Icon: CeilingLightIcon,
      title: "False Ceiling & Lighting",
      desc: "Architectural gypsum ceiling designs with magnetic track lights, warm LED cove profiles, and automated dimming zones.",
      features: ["Saint-Gobain Gyproc Gypsum", "Magnetic Track & COB Lights", "Zero-Crack Seamless Finishing"]
    },
    {
      Icon: ZapIcon,
      title: "Electrical Works",
      desc: "Concealed automation conduit wiring, designer touch switches, smart ambient dimming circuits, and safety surge protection.",
      features: ["Legrand / Schneider Fittings", "Smart Home Dimming Ready", "Fire-Retardant Copper Cables"]
    },
    {
      Icon: GlassIcon,
      title: "Glass Works",
      desc: "Fluted glass partitions, PVD-coated brass & gold metal dividers, tinted mirrors, and architectural shower cubicles.",
      features: ["PVD Rose Gold & Brass Finish", "Toughened Fluted Glass", "Slimline Aluminum Partitions"]
    },
    {
      Icon: PaintIcon,
      title: "Painting & Textures",
      desc: "Italian Stucco, Venetian plaster, textured lime wash, luxury wallpapers, and flawless PU/polyurethane spray finishes.",
      features: ["Asian Paints Royale & Stucco", "PU Matt & Gloss Spray Polish", "Seamless Base Leveling"]
    },
    {
      Icon: SofaIcon,
      title: "Sofas, Beds & Custom Furniture",
      desc: "Custom-made Italian leather sectional sofas, ergonomic upholstered beds, recliners, and handcrafted marble dining tables.",
      features: ["High-Density Comfort Foam", "Stain-Resistant Imported Fabrics", "Solid Teak & Oak Framing"]
    }
  ];

  return (
    <>
      <main id="main-content">
        {/* =================================================================
            1. HERO SECTION (FULL-BLEED CINEMATIC SHOWCASE WITH AUTOMATIC SLIDER)
            ================================================================= */}
        <section className="hero-cinematic-section">
          {/* Background Image Layer with Framer Motion Slide Animation */}
          <div className="hero-bg-layer">
            <AnimatePresence initial={false} custom={heroDirection}>
              <motion.div
                key={heroIndex}
                custom={heroDirection}
                variants={heroSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="hero-slide-frame"
              >
                <img
                  src={heroSlides[heroIndex].image}
                  alt={heroSlides[heroIndex].alt}
                  className="hero-bg-image"
                />
                <div className="hero-bg-overlay" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="container hero-cinematic-container">
            {/* Hero Main Content (Left-Aligned) */}
            <div className="hero-cinematic-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroIndex}
                  initial={{ opacity: 0, filter: "blur(24px)", y: 20 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(24px)", y: -20 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className="hero-cinematic-title">
                    {heroSlides[heroIndex].title}<br />
                    <span className="hero-title-accent">{heroSlides[heroIndex].accent}</span>
                  </h1>
                </motion.div>
              </AnimatePresence>

              <div className="hero-cinematic-actions">
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="btn btn-primary btn-lg"
                >
                  <span>Get Free Quote</span>
                </button>

                <a
                  href="#projects"
                  className="btn btn-secondary-glass btn-lg"
                >
                  <span>View Latest Projects</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Right Slider Navigation Controls (20px bottom & 20px right) */}
          <div className="hero-slider-controls">
            <button
              onClick={prevHeroSlide}
              className="hero-slider-btn"
              aria-label="Previous Slide"
            >
              <ChevronLeftIcon size={20} color="#FFFFFF" />
            </button>
            <button
              onClick={nextHeroSlide}
              className="hero-slider-btn"
              aria-label="Next Slide"
            >
              <ChevronRightIcon size={20} color="#FFFFFF" />
            </button>
          </div>
        </section>

        {/* =================================================================
            2. WHO WE ARE SECTION (LUXURY ARCHITECTURAL SHOWCASE)
            ================================================================= */}
        <section className="who-we-are-section">
          <div className="container">
            {/* Super Title with Brand Accent Line */}
            <div className="who-we-are-header-wrap">
              <span className="who-we-are-line" />
              <h2 className="who-we-are-tag">WHO WE ARE</h2>
            </div>

            <div className="who-we-are-grid">
              {/* Left Column: Brand Story & Call to Action */}
              <div className="who-we-are-content">
                <h3 className="who-we-are-heading">
                  Designed Exclusively for You, Crafted to Perfection
                </h3>

                <p className="who-we-are-desc">
                  At Casa Art Interiors, we blend bespoke artistry with modular engineering to craft living spaces of unmatched quality. With our own state-of-the-art manufacturing facility in Neopolis-Kokapet, Hyderabad, and transparent factory-direct pricing, we ensure exceptional value, millimeter precision, and committed on-time delivery. Experience bespoke luxury with our dedicated architects and a 10-year warranty—your home isn't just furnished, it's meticulously crafted to perfection.
                </p>

                <Link
                  href="/about"
                  className="btn btn-primary btn-md"
                >
                  <span>More about us</span>
                </Link>
              </div>

              {/* Right Column: Dual Visual Showcase (Factory & Showroom) */}
              <div className="who-we-are-visuals">
                {/* Main Factory Backdrop Card */}
                <div className="who-we-are-factory-card">
                  <ParallaxImage
                    src="/assets/casa-art/factory.jpg"
                    alt="Casa Art Modular Manufacturing Facility Kokapet Hyderabad"
                    className="who-we-are-factory-img"
                    speed={0.3}
                    direction="up"
                  />
                  <div className="who-we-are-factory-tag">
                    OUR FACTORY
                  </div>
                </div>

                {/* Overlaid Finished Showroom / Residence Card */}
                <div className="who-we-are-showroom-card">
                  <ParallaxImage
                    src="/assets/casa-art/bedroom-suite.jpg"
                    alt="Casa Art Luxury Interior Showroom Execution"
                    className="who-we-are-showroom-img"
                    speed={0.3}
                    direction="down"
                  />
                  <div className="who-we-are-showroom-tag">
                    OUR SHOWROOM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* =================================================================
            3. WHY CASA ART INTERIORS (MINIMAL IMAGE MATCHED DESIGN)
            ================================================================= */}
        <section id="why-casa-art" className="why-casa-art-section">
          <div className="container">
            <h2 className="why-casa-art-title">Why Casa Art Interiors?</h2>

            <div className="why-casa-art-items-grid">
              {/* Item 1 */}
              <div className="why-casa-art-item">
                <div className="why-casa-art-item-icon">
                  <FactoryIcon size={38} color="var(--text-dark-primary)" strokeWidth={1.5} />
                </div>
                <div className="why-casa-art-item-label">
                  In House Manufacturing & Factory Direct Pricing
                </div>
              </div>

              {/* Item 2 */}
              <div className="why-casa-art-item">
                <div className="why-casa-art-item-icon">
                  <ClockIcon size={38} color="var(--text-dark-primary)" strokeWidth={1.5} />
                </div>
                <div className="why-casa-art-item-label">
                  Fastest 45 Day Manufacturing & Delivery
                </div>
              </div>

              {/* Item 3 */}
              <div className="why-casa-art-item">
                <div className="why-casa-art-item-icon">
                  <ShieldCheckIcon size={38} color="var(--text-dark-primary)" strokeWidth={1.5} />
                </div>
                <div className="why-casa-art-item-label">
                  Superior Quality & Craftsmanship
                </div>
              </div>

              {/* Item 4 */}
              <div className="why-casa-art-item">
                <div className="why-casa-art-item-icon">
                  <CompassIcon size={38} color="var(--text-dark-primary)" strokeWidth={1.5} />
                </div>
                <div className="why-casa-art-item-label">
                  Fully Customizable Designs
                </div>
              </div>

              {/* Item 5 */}
              <div className="why-casa-art-item">
                <div className="why-casa-art-item-icon">
                  <SparklesIcon size={38} color="var(--text-dark-primary)" strokeWidth={1.5} />
                </div>
                <div className="why-casa-art-item-label">
                  Experience Virtual 3D Walkthroughs!
                </div>
              </div>

              {/* Item 6 */}
              <div className="why-casa-art-item">
                <div className="why-casa-art-item-icon">
                  <AwardIcon size={38} color="var(--text-dark-primary)" strokeWidth={1.5} />
                </div>
                <div className="why-casa-art-item-label">
                  Customer Service & 10-Yr Warranty
                </div>
              </div>
            </div>

            {/* Black Bottom Banner */}
            <div className="why-casa-art-black-banner">
              <div className="why-casa-art-banner-text">
                Lowest Prices and Guaranteed Handover in Hyderabad
              </div>
              <button
                onClick={() => setPricingModalOpen(true)}
                className="btn btn-primary btn-md"
              >
                <span>Click to know more</span>
              </button>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. FEATURED SERVICES (DARK LUXURY SLIDER - IMAGE MATCHED)
            ================================================================= */}
        <section id="services" className="featured-services-section">
          <div className="container">
            <div className="featured-services-top-bar">
              <h2 className="featured-services-heading">Featured Services</h2>
              <div className="featured-services-nav-btns">
                <button
                  onClick={scrollServicesLeft}
                  className="featured-services-nav-btn"
                  aria-label="Previous Services"
                >
                  <ChevronLeftIcon size={20} />
                </button>
                <button
                  onClick={scrollServicesRight}
                  className="featured-services-nav-btn"
                  aria-label="Next Services"
                >
                  <ChevronRightIcon size={20} />
                </button>
              </div>
            </div>

            <div className="featured-services-progress-track">
              <div
                className="featured-services-progress-fill"
                style={{ width: `${servicesScrollProgress}%` }}
              />
            </div>

            <div
              ref={servicesSliderRef}
              onScroll={handleServicesScroll}
              className="featured-services-slider-container"
            >
              {featuredServices.map((service) => (
                <Link
                  key={service.num}
                  href={`/services/${service.id}`}
                  className="featured-service-card-item"
                  style={{ textDecoration: "none" }}
                >
                  <div className="featured-service-num">{service.num}</div>
                  <div className="featured-service-img-wrapper">
                    <ImageWithSkeleton src={service.image} alt={service.title} />
                  </div>
                  <div className="featured-service-white-box">
                    <div>
                      <h3 className="featured-service-title">{service.title}</h3>
                      <p className="featured-service-desc">{service.desc}</p>
                    </div>
                    <div
                      className="featured-service-arrow-btn"
                      aria-label={`Explore ${service.title}`}
                    >
                      <ArrowRightIcon size={18} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            4. LATEST PROJECTS GALLERY (EXACT IMAGE MATCHED DESIGN)
            ================================================================= */}
        <section id="projects" className="projects-section">
          <div className="container">
            <div className="section-header section-header--left section-header--mb">
              <h2 className="projects-section-title">Latest Projects</h2>
            </div>

            {/* Projects Grid */}
            <div className="projects-cards-grid">
              {(showAllProjects ? projects : projects.slice(0, 4)).map((project) => (
                <div key={project.id} className="project-card-item">
                  <div className="project-card-img-wrapper">
                    <ImageWithSkeleton src={project.image} alt={project.name} />
                  </div>
                  <div className="project-card-white-box">
                    <h3 className="project-card-title">{project.name}</h3>
                    <p className="project-card-location">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects / Show Less Button */}
            {projects.length > 4 && (
              <div className="projects-cta-wrap">
                <button
                  type="button"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="btn btn-secondary btn-lg"
                >
                  {showAllProjects ? "Show Less Projects ↑" : "View All Projects →"}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =================================================================
            5. THE BIG DIFFERENTIATOR (Deep Charcoal Luxury Section)
            ================================================================= */}
        <section id="factory" className="cta-dark-section">
          <div className="container">
            <div className="section-header section-header--left section-header--mb">
              <div className="section-eyebrow">The Big Differentiator</div>
              <h2 className="cta-dark-title" style={{ marginBottom: 0 }}>
                Designed by Us. Built by Us.
              </h2>
            </div>

            {/* Dual Images Grid */}
            <div className="differentiator-images-grid">
              <div className="differentiator-image-card">
                <ParallaxImage
                  src="/assets/casa-art/modular-kitchen.jpg"
                  alt="Finished Interior by Casa Art"
                  speed={0.25}
                  direction="up"
                />
                <div className="differentiator-card-badge differentiator-card-badge--dark">
                  <SparklesIcon size={14} color="var(--brand-primary)" />
                  <span>PRECISE CNC FINISH</span>
                </div>
              </div>

              <div className="differentiator-image-card">
                <ParallaxImage
                  src="/assets/casa-art/factory.jpg"
                  alt="Casa Art Modular Factory Facility Hyderabad"
                  speed={0.25}
                  direction="down"
                />
                <div className="differentiator-card-badge differentiator-card-badge--brand">
                  <FactoryIcon size={14} color="var(--text-light-primary)" />
                  <span>KOKAPET FACILITY</span>
                </div>
              </div>
            </div>

            {/* 3 Pillars */}
            <div className="differentiator-pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <ShieldCheckIcon size={24} color="var(--brand-primary)" />
                </div>
                <h3 className="pillar-card-title">Better Quality</h3>
                <p className="pillar-card-desc">Millimeter-accurate German CNC machines &amp; zero-joint edge banding.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <LayersIcon size={24} color="var(--brand-primary)" />
                </div>
                <h3 className="pillar-card-title">Better Consistency</h3>
                <p className="pillar-card-desc">Uniform calibrated BWP plywood &amp; certified European hardware.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <CheckCircleIcon size={24} color="var(--brand-primary)" />
                </div>
                <h3 className="pillar-card-title">Better Execution</h3>
                <p className="pillar-card-desc">Single accountable team from 3D concept to final keys handover.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            6. BEFORE / AFTER TRANSFORMATION (Scroll-Driven Fullscreen Expansion)
            ================================================================= */}
        <ScrollBeforeAfterSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* =================================================================
            7. OUR 4-STEP PROCESS
            ================================================================= */}
        <section id="process" className="section-py">
          <div className="container">
            <div className="section-header section-header--left section-header--mb">
              <div className="section-eyebrow">Our Process</div>
              <h2 className="display-md">From Idea to Handover</h2>
            </div>

            <div className="process-steps-grid process-grid-4">
              <div className="process-step-item">
                <div className="process-circle-badge">
                  <span className="process-step-number">01</span>
                </div>
                <h3 className="process-step-title">Consultation & Site Visit</h3>
                <p className="process-step-desc">
                  Understanding your lifestyle, aesthetic vision, budget, and taking laser-precision measurements.
                </p>
              </div>

              <div className="process-step-item">
                <div className="process-circle-badge">
                  <span className="process-step-number">02</span>
                </div>
                <h3 className="process-step-title">3D Design & Customization</h3>
                <p className="process-step-desc">
                  Realistic 3D visualizations, material moodboards, and transparent itemized BOQ sign-off.
                </p>
              </div>

              <div className="process-step-item">
                <div className="process-circle-badge">
                  <span className="process-step-number">03</span>
                </div>
                <h3 className="process-step-title">Factory Manufacturing</h3>
                <p className="process-step-desc">
                  Precision CNC fabrication and zero-joint edge banding in our Kokapet modular facility.
                </p>
              </div>

              <div className="process-step-item">
                <div className="process-circle-badge">
                  <span className="process-step-number">04</span>
                </div>
                <h3 className="process-step-title">Execution & Handover</h3>
                <p className="process-step-desc">
                  On-site assembly, 100-point quality audit, 10-year warranty, and on-time keys handover.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            8. SOCIAL PROOF & TESTIMONIALS
            ================================================================= */}
        <section className="section-py">
          <div className="container">
            <div className="section-header section-header--left section-header--mb">
              <div className="section-eyebrow">What Our Clients Say</div>
              <h2 className="display-md">Verified Homeowner Stories</h2>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div>
                  <div className="testimonial-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={18} color="var(--brand-primary)" />
                    ))}
                  </div>
                  <p className="testimonial-text">
                    “They understood exactly what we wanted for our 4BHK at Magna Solitaire and transformed our vision into a beautiful home. Their in-house factory made the whole difference!”
                  </p>
                </div>
                <div className="testimonial-author-block">
                  <div className="testimonial-avatar-circle">RS</div>
                  <div>
                    <div className="testimonial-author-name">Rajesh & Sneha Sharma</div>
                    <div className="testimonial-author-role">Magna Solitaire, Hyderabad</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div>
                  <div className="testimonial-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={18} color="var(--brand-primary)" />
                    ))}
                  </div>
                  <p className="testimonial-text">
                    “The transparent pricing and on-time handover was refreshing. No hidden costs or delays. Visiting their factory in Kokapet gave us complete peace of mind.”
                  </p>
                </div>
                <div className="testimonial-author-block">
                  <div className="testimonial-avatar-circle">VR</div>
                  <div>
                    <div className="testimonial-author-name">Vikram Reddy</div>
                    <div className="testimonial-author-role">Neopolis Luxury Villa</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div>
                  <div className="testimonial-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} size={18} color="var(--brand-primary)" />
                    ))}
                  </div>
                  <p className="testimonial-text">
                    “From 3D designs to final handover, the team was professional and responsive. The false ceiling lighting and custom fluted wall paneling completely transformed our space.”
                  </p>
                </div>
                <div className="testimonial-author-block">
                  <div className="testimonial-avatar-circle">PA</div>
                  <div>
                    <div className="testimonial-author-name">Pooja Agarwal</div>
                    <div className="testimonial-author-role">Financial District Penthouse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            9. NUMBERS / METRICS
            ================================================================= */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div>
                <div className="stat-item-number">200+</div>
                <div className="stat-item-title">Projects Completed</div>
                <div className="stat-item-sub">Across Hyderabad</div>
              </div>

              <div>
                <div className="stat-item-number">100+</div>
                <div className="stat-item-title">Happy Clients</div>
                <div className="stat-item-sub">5-Star verified reviews</div>
              </div>

              <div>
                <div className="stat-item-number">15+</div>
                <div className="stat-item-title">Years Experience</div>
                <div className="stat-item-sub">Architecture & factory craft</div>
              </div>

              <div>
                <div className="stat-item-number">100%</div>
                <div className="stat-item-title">In-House Manufacturing</div>
                <div className="stat-item-sub">Zero sub-contracting</div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            10. FAQ ACCORDION
            ================================================================= */}
        <section className="section-py">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">Frequently Asked</div>
              <h2 className="display-md">Got Questions? We Have Answers.</h2>
            </div>

            <FaqAccordion />
          </div>
        </section>

        {/* =================================================================
            11. FINAL CTA & ADDRESS BAR (Classy Dark Luxury)
            ================================================================= */}
        <section className="cta-dark-section">
          <div className="container">
            <div className="cta-dark-grid">
              <div>
                <div className="section-eyebrow">Start Your Transformation</div>

                <h2 className="cta-hero-title">
                  Ready to Build Your<br />
                  <span className="cta-hero-title-accent">Dream Interior?</span>
                </h2>

                <p className="cta-hero-desc">
                  Speak directly with our lead interior architects. Receive a bespoke 3D concept &amp; factory-direct estimate within 24 hours.
                </p>

                <div className="cta-actions">
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="btn btn-primary btn-lg"
                  >
                    <span>Get Free Quote</span>
                  </button>
                  <a
                    href={`https://wa.me/918897969521?text=${encodeURIComponent("Hi Casa Art Interiors! 👋\nI’d love to transform my space.\n\nCan you help me with a quote + next steps?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="cta-contact-line">
                  <PhoneIcon size={14} color="var(--brand-primary)" />
                  <span>Direct Hotline: <a href="tel:+918897969521" className="cta-contact-link">+91 88979 69521</a> &bull; Neopolis-Kokapet, Hyderabad</span>
                </div>
              </div>

              {/* Instant Booking Form Card */}
              <div className="cta-form-card">
                <h3 className="cta-form-card-title">
                  Book a Free Consultation
                </h3>
                <p className="cta-form-card-subtitle">
                  Get a personalized 3D design concept and exact factory-direct estimate.
                </p>

                {homeFormSubmitted ? (
                  <div className="form-success-state">
                    <div className="form-success-icon featured-icon featured-icon-brand">
                      <CheckCircleIcon size={28} color="var(--brand-primary, #ff6364)" />
                    </div>
                    <h4 className="form-success-title">
                      Consultation Requested!
                    </h4>
                    <p className="form-success-desc">
                      Our interior architect will get in touch shortly. Opening WhatsApp chat...
                    </p>
                    <button className="btn btn-secondary btn-sm" onClick={() => setHomeFormSubmitted(false)}>
                      Book Another
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const cleanPhone = homeForm.phone.trim();
                      const formattedPhone = cleanPhone.startsWith("+91") ? cleanPhone : `+91 ${cleanPhone}`;
                      setHomeFormSubmitting(true);
                      const payload = {
                        name: homeForm.name || "Client",
                        phone: formattedPhone,
                        propertyType: homeForm.propertyType,
                        location: homeForm.location || "Hyderabad",
                        budget: homeForm.budget,
                        timeToStart: homeForm.timeToStart,
                        source: "Homepage Inline Consultation Form",
                      };
                      await submitLeadToGoogleSheet(payload);
                      setHomeFormSubmitting(false);
                      setHomeFormSubmitted(true);
                      setTimeout(() => {
                        openWhatsAppLeadChat(payload);
                      }, 800);
                    }}
                  >
                    <div className="form-group" style={{ marginBottom: "14px" }}>
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Suresh Varma"
                        className="form-input"
                        value={homeForm.name}
                        onChange={(e) => setHomeForm({ ...homeForm, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: "14px" }}>
                      <label className="form-label">Phone Number (WhatsApp) *</label>
                      <div className="phone-input-group">
                        <span className="phone-prefix">+91</span>
                        <span className="phone-separator" />
                        <input
                          type="tel"
                          required
                          placeholder="98765 43210"
                          className="phone-input"
                          value={homeForm.phone}
                          onChange={(e) => setHomeForm({ ...homeForm, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: "16px" }}>
                      <label className="form-label">Site / Community Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Magna Solitaire, Kokapet"
                        className="form-input"
                        value={homeForm.location}
                        onChange={(e) => setHomeForm({ ...homeForm, location: e.target.value })}
                      />
                    </div>

                    {/* Directly clickable luxury Choice Chips */}
                    <ChoiceChips
                      label="Property Type"
                      options={HOME_PROPERTY_OPTIONS}
                      selectedValue={homeForm.propertyType}
                      onChange={(val) => setHomeForm({ ...homeForm, propertyType: val })}
                      variant="dark"
                    />

                    <ChoiceChips
                      label="Estimated Budget Range"
                      options={HOME_BUDGET_OPTIONS}
                      selectedValue={homeForm.budget}
                      onChange={(val) => setHomeForm({ ...homeForm, budget: val })}
                      variant="dark"
                    />

                    <button
                      type="submit"
                      disabled={homeFormSubmitting}
                      className="btn btn-primary btn-lg"
                      style={{ width: "100%", marginTop: "8px" }}
                    >
                      <span>{homeFormSubmitting ? "Submitting..." : "Request Free Consultation"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            12. BOTTOM VALUE PROPS STRIP (Deep Charcoal #060606)
            ================================================================= */}
        <section className="value-strip-section">
          <div className="container">
            <div className="guarantee-badges-grid">
              <div className="value-badge">
                <div className="value-badge-icon">
                  <CompassIcon size={24} color="var(--brand-primary)" />
                </div>
                <div className="value-badge-title">Custom Designs</div>
                <div className="value-badge-desc">Tailored for you</div>
              </div>

              <div className="value-badge">
                <div className="value-badge-icon">
                  <DiamondIcon size={24} color="var(--brand-primary)" />
                </div>
                <div className="value-badge-title">Premium Materials</div>
                <div className="value-badge-desc">Lasting beauty</div>
              </div>

              <div className="value-badge">
                <div className="value-badge-icon">
                  <ToolIcon size={24} color="var(--brand-primary)" />
                </div>
                <div className="value-badge-title">Expert Team</div>
                <div className="value-badge-desc">Professional installation</div>
              </div>

              <div className="value-badge">
                <div className="value-badge-icon">
                  <ClockIcon size={24} color="var(--brand-primary)" />
                </div>
                <div className="value-badge-title">On-Time Delivery</div>
                <div className="value-badge-desc">Every single time</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
      <PricingDeliveryModal
        isOpen={pricingModalOpen}
        onClose={() => setPricingModalOpen(false)}
        onBookConsultation={() => setConsultationOpen(true)}
      />
    </>
  );
}
