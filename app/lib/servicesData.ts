export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  heroImage: string;
  tagline: string;
  description: string;
  gallery: { src: string; title: string; desc: string }[];
  features: string[];
  specifications: { label: string; value: string }[];
  estimatedTimeline: string;
  warrantyYears: number;
}

export const servicesData: Record<string, ServiceDetail> = {
  bedrooms: {
    id: "bedrooms",
    title: "Luxury Master Bedrooms & Wardrobes",
    category: "Residential Architecture",
    shortDesc: "Turn your bedroom into a peaceful sanctuary with bespoke master suites, walk-in closets, and floor-to-ceiling floor-space engineered modular wardrobes.",
    heroImage: "/assets/casa-art/bedroom-suite.jpg",
    tagline: "Crafted for Serenity, Ergonomics & Timeless Comfort",
    description: "Our luxury bedroom suite designs fuse ergonomic spatial layouts with imported finishes, ambient LED cove illumination, acoustic padded headboards, and floor-to-ceiling wardrobes built with German-engineered hardware in our Kokapet factory.",
    gallery: [
      { src: "/assets/casa-art/bedroom-suite.jpg", title: "Master Suite", desc: "Custom king-size upholstered bed with integrated fluted wooden wall panels." },
      { src: "/assets/casa-art/luxury-wardrobe.jpg", title: "Walk-In Closet", desc: "Tinted glass wardrobes with motion-sensor interior warm LED lighting strips." },
      { src: "/assets/casa-art/after-room.jpg", title: "Guest Bedroom", desc: "Space-maximizing modular study desk paired with sleek wardrobe extension." }
    ],
    features: [
      "BWP Marine Grade Plywood structure resistant to boiling water and humidity",
      "Soft-close Hettich / Hafele tandem box drawers and Blum hinge systems",
      "Integrated floor-to-ceiling glass & aluminum profile sliding wardrobe doors",
      "Custom upholstered velvet & leatherette headboard paneling",
      "Automated motion-sensor wardrobe interior LED light channels"
    ],
    specifications: [
      { label: "Core Material", value: "100% Calibrated BWP Marine Plywood (IS 710)" },
      { label: "Surface Finish", value: "Anti-Fingerprint Matte Acrylic / High-Gloss PU Paint" },
      { label: "Hardware & Fittings", value: "German Hafele / Hettich Soft-Close Systems" },
      { label: "Warranty", value: "10-Year Comprehensive Factory Warranty" },
      { label: "Handover Time", value: "35 - 45 Working Days" }
    ],
    estimatedTimeline: "35 - 45 Days",
    warrantyYears: 10
  },
  kitchens: {
    id: "kitchens",
    title: "German-Engineered Modular Kitchens",
    category: "Modular Engineering",
    shortDesc: "Experience culinary perfection with zero-gap edge banded modular kitchens featuring quartz countertops, tandem drawers, and smart storage units.",
    heroImage: "/assets/casa-art/modular-kitchen.jpg",
    tagline: "Precision Engineering Meets Culinary Elegance",
    description: "Designed for high-durability Indian culinary needs, our modular kitchens feature boiling-water-proof (BWP) marine plywood carcasses, German zero-joint edge banding, quartz counter surfaces, pull-out larders, and magic corner storage hardware.",
    gallery: [
      { src: "/assets/casa-art/modular-kitchen.jpg", title: "Island Kitchen", desc: "German-engineered island kitchen with seamless quartz breakfast bar." },
      { src: "/assets/casa-art/dining-interior.jpg", title: "Parallel Kitchen Layout", desc: "Handleless acrylic cabinets with anti-touch matte black profiles." }
    ],
    features: [
      "Zero-joint edge banding with PUR adhesive technology for 100% waterproof edges",
      "Heavy-duty quartz & granite stone countertops with anti-stain sealant",
      "Hafele cargo pull-out pantries and cutlery organizer trays",
      "Built-in appliance housings for oven, microwave, dishwasher & chimney",
      "100% termite-proof & boiling-water-resistant BWP marine ply"
    ],
    specifications: [
      { label: "Carcass Material", value: "Boiling Water Proof BWP Marine Ply (710 Grade)" },
      { label: "Shutter Finish", value: "Imported 2mm Acrylic / Polyurethane (PU) Lacquer" },
      { label: "Countertop", value: "Quartz / Nano-Crystallized White Marble" },
      { label: "Hardware", value: "Hafele / Hettich Sensys Soft-Close Hinges" },
      { label: "Warranty", value: "10-Year Factory Warranty" }
    ],
    estimatedTimeline: "30 - 40 Days",
    warrantyYears: 10
  },
  "living-rooms": {
    id: "living-rooms",
    title: "Cinematic Living & Dining Rooms",
    category: "Interior Architecture",
    shortDesc: "Make an unforgettable impression with custom TV entertainment walls, Italian marble cladding, acoustic acoustic acoustic acoustic wood paneling, and statement ceiling lighting.",
    heroImage: "/assets/casa-art/hero-living.jpg",
    tagline: "Statement Furniture, Ambient Illumination & Architectural Wall Panelings",
    description: "Transform your living space into a high-end luxury lounge. We specialize in book-matched Italian marble media backdrops, louvers, fluted acoustic paneling, concealed magnetic track lights, and bespoke sofa configurations.",
    gallery: [
      { src: "/assets/casa-art/hero-living.jpg", title: "Grand Living Room", desc: "Italian marble wall paneling with brushed brass accent channels." },
      { src: "/assets/casa-art/dining-interior.jpg", title: "Luxury Dining Space", desc: "8-seater marble table with custom suspended crystal chandelier." }
    ],
    features: [
      "Custom book-matched marble & sintered stone media walls",
      "Fluted acoustic charcoal & louvers paneling with hidden LED strips",
      "Architectural magnetic track lighting and dimmable cove ceilings",
      "Custom-sized Italian leather sectional sofas & lounge armchairs"
    ],
    specifications: [
      { label: "Wall Materials", value: "Imported Italian Marble / Louvered Charcoal Panels" },
      { label: "Lighting System", value: "Dimmable Magnetic Track Lights & COB Warm LEDs" },
      { label: "Furniture Framework", value: "Solid Teak Wood & High-Density Molded Foam" },
      { label: "Warranty", value: "10-Year Warranty" }
    ],
    estimatedTimeline: "35 - 45 Days",
    warrantyYears: 10
  },
  "dining-rooms": {
    id: "dining-rooms",
    title: "Elegantly Crafted Dining Spaces",
    category: "Bespoke Furniture",
    shortDesc: "Create memorable family moments in thoughtfully designed dining rooms with handcrafted dining tables, crockery units, and ambient chandeliers.",
    heroImage: "/assets/casa-art/dining-interior.jpg",
    tagline: "Refined Dining Architecture for Hospitality & Home",
    description: "Our dining space designs harmonally blend custom stone dining tables, upholstered ergonomic dining chairs, and fluted glass crockery bars equipped with warm wine rack lighting.",
    gallery: [
      { src: "/assets/casa-art/dining-interior.jpg", title: "Dining Suite", desc: "Marble top dining table with brushed metal legs." }
    ],
    features: [
      "Handcrafted solid teak & marble top dining tables",
      "Custom fluted glass crockery units with internal LED warm spotlights",
      "Stain-resistant imported fabric dining chairs"
    ],
    specifications: [
      { label: "Table Top", value: "Italian Marble / Sintered Quartz Stone" },
      { label: "Crockery Cabinet", value: "Aluminum Frame Tinted Fluted Glass Doors" },
      { label: "Warranty", value: "10-Year Warranty" }
    ],
    estimatedTimeline: "25 - 35 Days",
    warrantyYears: 10
  },
  puja: {
    id: "puja",
    title: "Sacred Puja Room Architecture",
    category: "Cultural Interiors",
    shortDesc: "Design a quiet, spiritual sanctuary with intricate CNC brass inlay work, teakwood mandapam structures, and backlighted onyx marble.",
    heroImage: "/assets/casa-art/puja-room.jpg",
    tagline: "Sacred Geometry, Warm Illumination & Timeless Craftsmanship",
    description: "We craft tranquil pooja sanctuaries featuring traditional brass motif bells, CNC laser-cut wooden jaalis, translucent backlighted onyx stone walls, and dedicated brass drawer storage for sacred items.",
    gallery: [
      { src: "/assets/casa-art/puja-room.jpg", title: "Pooja Room", desc: "CNC brass inlaid teakwood doors with backlit Onyx marble backdrop." }
    ],
    features: [
      "Backlit translucency onyx stone & alabaster marble walls",
      "Precision laser-cut wooden & brass jaali partitions",
      "Teakwood mandapam arches with bell hangings"
    ],
    specifications: [
      { label: "Wood Type", value: "Seasoned Burma Teak Wood" },
      { label: "Backdrop Material", value: "Natural Backlit Onyx Marble" },
      { label: "Warranty", value: "10-Year Factory Warranty" }
    ],
    estimatedTimeline: "25 - 35 Days",
    warrantyYears: 10
  },
  partitions: {
    id: "partitions",
    title: "Architectural Space Partitions",
    category: "Space Optimization",
    shortDesc: "Effortlessly divide living and dining areas with custom fluted glass metal partitions, wooden louvers, and decorative shelving displays.",
    heroImage: "/assets/casa-art/after-room.jpg",
    tagline: "Privacy Without Sacrificing Natural Light & Flow",
    description: "Partition wall systems that elegantly separate foyer, living, and dining spaces while enhancing acoustic privacy and visual appeal with rose-gold aluminum framing and fluted glass panels.",
    gallery: [
      { src: "/assets/casa-art/after-room.jpg", title: "Fluted Glass Partition", desc: "Black metal profile partition with clear and fluted toughened glass." }
    ],
    features: [
      "Toughened fluted & clear architectural glass panels",
      "Anodized black / rose-gold aluminum slim framing",
      "Rotatable wooden louver columns"
    ],
    specifications: [
      { label: "Frame Material", value: "Anodized Heavy Aluminum Profile" },
      { label: "Glass Type", value: "8mm Toughened Fluted Glass" },
      { label: "Warranty", value: "10-Year Factory Warranty" }
    ],
    estimatedTimeline: "20 - 30 Days",
    warrantyYears: 10
  },
  "study-rooms": {
    id: "study-rooms",
    title: "Ergonomic Home Offices & Study Rooms",
    category: "Workplace Efficiency",
    shortDesc: "Boost focus and productivity with custom ergonomic desks, acoustic wall cladding, book archives, and cable-managed workstations.",
    heroImage: "/assets/casa-art/study-room.jpg",
    tagline: "Designed for Uninterrupted Focus, Comfort & Innovation",
    description: "Tailor-made study and home office workstations designed with integrated wire management, anti-glare task LED lighting, display bookshelves, and acoustic sound-dampening wall panels.",
    gallery: [
      { src: "/assets/casa-art/study-room.jpg", title: "Executive Study Desk", desc: "Wall-mounted desk with concealed wire channels and open bookshelf." }
    ],
    features: [
      "Concealed wire-management raceways and pop-up power ports",
      "Anti-glare LED under-shelf desk illumination",
      "Modular book shelves with soft-close glass storage"
    ],
    specifications: [
      { label: "Desk Material", value: "Calibrated BWP Plywood with Anti-Scratch Laminate" },
      { label: "Hardware", value: "Soft-Close Drawer Slides & Cable Grommets" },
      { label: "Warranty", value: "10-Year Factory Warranty" }
    ],
    estimatedTimeline: "20 - 30 Days",
    warrantyYears: 10
  },
  "office-spaces": {
    id: "office-spaces",
    title: "Commercial & Corporate Interiors",
    category: "Commercial Design",
    shortDesc: "Impress clients and empower teams with high-performance corporate reception areas, executive cabins, conference rooms, and acoustic wall systems.",
    heroImage: "/assets/casa-art/factory.jpg",
    tagline: "Corporate Brand Identity Built With Industrial Precision",
    description: "End-to-end commercial interior design and modular execution for modern offices, IT hubs, experience centers, and executive cabins in Hyderabad.",
    gallery: [
      { src: "/assets/casa-art/factory.jpg", title: "Modular Manufacturing", desc: "Precision German CNC production floor at our Kokapet facility." }
    ],
    features: [
      "Modular workstation cubicles with privacy acoustic screens",
      "Executive boardrooms with smart AV integrations and cable management",
      "Custom reception counters with illuminated brand logos"
    ],
    specifications: [
      { label: "Scope", value: "Turnkey Design, Modular Workstations, HVAC & Electrical" },
      { label: "Delivery", value: "Committed Handover Guarantee" },
      { label: "Warranty", value: "10-Year Factory Warranty" }
    ],
    estimatedTimeline: "40 - 60 Days",
    warrantyYears: 10
  }
};
