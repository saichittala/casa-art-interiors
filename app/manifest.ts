import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Casa Art Interiors",
    short_name: "Casa Art",
    description: "Luxury Interior Design Studio & In-House Modular Manufacturing Facility Hyderabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#B85C3A",
    icons: [
      {
        src: "/assets/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/assets/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
