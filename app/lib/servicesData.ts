export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  specs: {
    material: string;
    warranty: string;
    hardware: string;
    turnaround: string;
  };
}

export const servicesData: ServiceDetail[] = [
  {
    id: "bedrooms",
    title: "Bed Rooms",
    category: "Bed Rooms",
    tagline: "Turn your bedroom into a peaceful sanctuary with bespoke luxury design",
    description: "Your bedroom is your private sanctuary. Our bespoke bedroom interior designs combine quiet luxury, ergonomic spatial planning, and high-end material finishes. From custom upholstered headboards and fluted paneling to velvet-lined wardrobe drawers and integrated mood lighting, every detail is engineered to create a tranquil, spa-like atmosphere.",
    mainImage: "/assets/casa-art/bedroom-suite.jpg",
    gallery: [
      "/assets/casa-art/bedroom-suite.jpg",
      "/assets/casa-art/luxury-wardrobe.jpg",
      "/assets/casa-art/hero-living.jpg",
      "/assets/casa-art/study-room.jpg"
    ],
    features: [
      "Custom Upholstered Velvet & Italian Leather Headboards",
      "Sliding Fluted Glass & Mirror Panel Wardrobes",
      "Integrated Sensor LED Strip Illumination",
      "Concealed Bedside Drops & Smart Automation Switchboards",
      "Custom Floating Vanity Units & Dressers"
    ],
    specs: {
      material: "BWP Grade Marine Plywood & Acrylic/PU Spray Finish",
      warranty: "10 Years Structural Warranty",
      hardware: "Hafele & Blum Soft-Close German Fittings",
      turnaround: "45 Days Factory-to-Site Installation"
    }
  },
  {
    id: "kitchens",
    title: "Kitchens",
    category: "Kitchens",
    tagline: "Ergonomically engineered kitchens blending aesthetics and efficiency",
    description: "Experience the perfect harmony of German modular engineering and luxury design. Manufactured in our state-of-the-art Kokapet facility, our kitchens feature 100% waterproof BWP marine plywood, anti-fingerprint acrylic and PU finishes, quartz counter surfaces, and intelligent pantry organizers.",
    mainImage: "/assets/casa-art/modular-kitchen.jpg",
    gallery: [
      "/assets/casa-art/modular-kitchen.jpg",
      "/assets/casa-art/dining-interior.jpg",
      "/assets/casa-art/hero-living.jpg",
      "/assets/casa-art/bedroom-suite.jpg"
    ],
    features: [
      "100% Boiling Water Proof (BWP) Marine Plywood Carcass",
      "Hafele & Blum Soft-Close Drawer & Lift-up Systems",
      "Italian Quartz & Calacatta Marble Countertops",
      "Pull-out Pantry Towers & Blind Corner Magic Trays",
      "Seamless Built-in Appliance Cabinets"
    ],
    specs: {
      material: "Marine BWP Plywood + Anti-Fingerprint Acrylic / PU",
      warranty: "10 Years Structural Warranty",
      hardware: "Blum Tandembox & Hafele Hettich Systems",
      turnaround: "40 Days Delivery & Installation"
    }
  },
  {
    id: "living-rooms",
    title: "Living Rooms",
    category: "Living Rooms",
    tagline: "Grand entertaining spaces crafted with architectural sophistication",
    description: "Create an unforgettable impression with a living room designed around your lifestyle. Featuring custom fluted wood paneling, floating marble TV consoles, acoustic ceiling treatments, and ambient magnetic track lighting.",
    mainImage: "/assets/casa-art/hero-living.jpg",
    gallery: [
      "/assets/casa-art/hero-living.jpg",
      "/assets/casa-art/after-room.jpg",
      "/assets/casa-art/dining-interior.jpg",
      "/assets/casa-art/bedroom-suite.jpg"
    ],
    features: [
      "Bespoke Charcoal & Veneer Wall Cladding Paneling",
      "Italian Marble Floating TV Units with LED Backlighting",
      "Architectural Gypsum Ceiling & Magnetic Track Lighting",
      "Custom Leather & Velvet Sofa Sets",
      "Designer Bar & Display Crockery Units"
    ],
    specs: {
      material: "Natural Veneers, Charcoal Louvers & Italian Marble",
      warranty: "10 Years Structural Warranty",
      hardware: "Concealed Heavy-Duty Mounting Hardware",
      turnaround: "45 Days Factory Execution"
    }
  },
  {
    id: "dining-rooms",
    title: "Dining Rooms",
    category: "Dining Rooms",
    tagline: "Dine in style with elegant spaces tailored for gatherings",
    description: "Elevate your dining experience with custom marble tables, upholstered dining chairs, stylish crockery display cabinets, and warm ambient pendant lighting that set the mood for every meal.",
    mainImage: "/assets/casa-art/dining-interior.jpg",
    gallery: [
      "/assets/casa-art/dining-interior.jpg",
      "/assets/casa-art/hero-living.jpg",
      "/assets/casa-art/modular-kitchen.jpg",
      "/assets/casa-art/after-room.jpg"
    ],
    features: [
      "Custom Italian Marble & Solid Wood Dining Tables",
      "Glass Display Cabinets with Touch Sensor Lighting",
      "Designer Crockery & Wine Storage Consoles",
      "Upholstered Ergonomic Dining Chairs",
      "Accent Feature Wall Paneling"
    ],
    specs: {
      material: "Solid Teak Wood, Italian Marble & Tinted Glass",
      warranty: "10 Years Structural Warranty",
      hardware: "Soft-close Hettich Glass Hinges",
      turnaround: "35 Days Custom Fabrication"
    }
  },
  {
    id: "puja",
    title: "Puja",
    category: "Puja",
    tagline: "Serene sacred sanctuaries designed for peace and spiritual warmth",
    description: "Our puja room designs blend sacred tradition with modern aesthetic refinement. From intricate CNC lattice jaali work and brass inlay bells to warm teak wood mandir structures and ambient backlighting.",
    mainImage: "/assets/casa-art/puja-room.jpg",
    gallery: [
      "/assets/casa-art/puja-room.jpg",
      "/assets/casa-art/after-room.jpg",
      "/assets/casa-art/hero-living.jpg",
      "/assets/casa-art/bedroom-suite.jpg"
    ],
    features: [
      "Precision CNC Jaali Cutting & Brass Bell Inlays",
      "Teak Wood Mandir Structure & Marble Steps",
      "Warm Concealed LED Backlighting",
      "Concealed Drawer Storage for Sacred Accessories",
      "Stain-Resistant Washable Wall Treatments"
    ],
    specs: {
      material: "Burma Teak Wood, Corian & Brass Elements",
      warranty: "10 Years Structural Warranty",
      hardware: "Heavy-Duty Brass Fittings & Concealed Hinges",
      turnaround: "30 Days On-Site Installation"
    }
  },
  {
    id: "partitions",
    title: "Partitions",
    category: "Partitions",
    tagline: "Effortless architectural dividers enhancing privacy and space flow",
    description: "Define distinct zones within open-plan homes using handcrafted fluted glass partitions, PVD gold stainless steel screens, wooden swivel louvers, and decorative room dividers.",
    mainImage: "/assets/casa-art/after-room.jpg",
    gallery: [
      "/assets/casa-art/after-room.jpg",
      "/assets/casa-art/hero-living.jpg",
      "/assets/casa-art/dining-interior.jpg",
      "/assets/casa-art/study-room.jpg"
    ],
    features: [
      "PVD Coated Rose Gold & Brass Stainless Steel Frames",
      "Toughened Fluted & Tinted Glass Inserts",
      "Swivel Wooden Louver Dividers",
      "Integrated Planter & Display Nooks",
      "Slimline Ceiling-Mounted Sliding Tracks"
    ],
    specs: {
      material: "304 Stainless Steel PVD, Fluted Glass & Teak Wood",
      warranty: "10 Years Structural Warranty",
      hardware: "Top-Hung Smooth Sliding Tracks",
      turnaround: "25 Days Custom Manufacturing"
    }
  },
  {
    id: "study-rooms",
    title: "Study Rooms",
    category: "Study Rooms",
    tagline: "Ergonomic workspaces designed to inspire productivity and focus",
    description: "Designed for modern remote work and study, our custom study rooms feature ergonomic desk layouts, integrated bookshelf units, hidden cable management, and glare-free task illumination.",
    mainImage: "/assets/casa-art/study-room.jpg",
    gallery: [
      "/assets/casa-art/study-room.jpg",
      "/assets/casa-art/bedroom-suite.jpg",
      "/assets/casa-art/factory.jpg",
      "/assets/casa-art/hero-living.jpg"
    ],
    features: [
      "Custom Floating Writing Desks with Leather Tops",
      "Floor-to-Ceiling Bookshelves with Glass Doors",
      "Concealed Cable Pass-Through & Power Hubs",
      "Acoustic Wall Paneling for Quiet Focus",
      "Under-Shelf LED Task Lighting"
    ],
    specs: {
      material: "BWP Plywood, Veneer & Matte Laminates",
      warranty: "10 Years Structural Warranty",
      hardware: "Full-Extension Soft-Close Ball Bearing Slides",
      turnaround: "30 Days Installation"
    }
  },
  {
    id: "office-spaces",
    title: "Office Spaces",
    category: "Office Spaces",
    tagline: "Professional executive office interiors tailored for business success",
    description: "Transform commercial and home office environments into high-performance executive suites. Featuring custom conference tables, acoustic wall treatments, ergonomic workstation grids, and executive lounge seating.",
    mainImage: "/assets/casa-art/factory.jpg",
    gallery: [
      "/assets/casa-art/factory.jpg",
      "/assets/casa-art/study-room.jpg",
      "/assets/casa-art/after-room.jpg",
      "/assets/casa-art/hero-living.jpg"
    ],
    features: [
      "Executive Desk Suites with Integrated Credenzas",
      "Acoustic Slat Paneling & Glass Partition Walls",
      "Conference Room Tables with Integrated AV Connections",
      "Ergonomic Task Seating & Lounge Chairs",
      "Custom Reception Desks & Brand Feature Walls"
    ],
    specs: {
      material: "Commercial Grade BWP Plywood, Aluminum & Quartz",
      warranty: "10 Years Commercial Warranty",
      hardware: "Heavy-Duty Commercial Soft-Close Hardware",
      turnaround: "45 Days Turnkey Execution"
    }
  }
];
