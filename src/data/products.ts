import stoneDark from "@/assets/stone-dark.jpg";
import stoneGreen from "@/assets/stone-green.jpg";
import stoneLight from "@/assets/stone-light.jpg";

import sandstone1 from "@/assets/sandstone 1.jpeg";
import sandstone2 from "@/assets/sandstone 2.avif";

export type StoneCategory =
  | "Marble"
  | "Granite"
  | "Quartzite"
  | "Sandstone";

export type StoneProduct = {
  id: string;
  name: string;
  category: StoneCategory;
  image: string;
  description: string;
  specifications: string[];
  origin: string;
};

// Replace these temporary catalogue records with final product names and imagery.
// The product cards and filters update automatically when this list changes.

export const products: StoneProduct[] = [
  {
    id: "marble-placeholder-01",
    name: "Marble Selection 01",
    category: "Marble",
    image: stoneLight,
    description:
      "A luminous Indian marble with quiet movement for refined interior applications.",
    specifications: [
      "Slabs and cut-to-size",
      "Polished or honed finish",
      "Interior applications",
    ],
    origin: "India",
  },

  {
    id: "granite-placeholder-01",
    name: "Granite Selection 01",
    category: "Granite",
    image: stoneDark,
    description:
      "A durable dark granite with layered mineral character and architectural presence.",
    specifications: [
      "Slabs and tiles",
      "Multiple finishes",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "quartzite-placeholder-01",
    name: "Quartzite Selection 01",
    category: "Quartzite",
    image: stoneGreen,
    description:
      "High-performance natural stone defined by rich colour and expressive veining.",
    specifications: [
      "Premium slabs",
      "Polished finish",
      "Feature and surface applications",
    ],
    origin: "India",
  },

  {
    id: "sandstone-placeholder-01",
    name: "Sandstone Selection 01",
    category: "Sandstone",
    image: sandstone1,
    description:
      "A naturally warm sandstone with earthy tones and distinctive texture for architectural and outdoor applications.",
    specifications: [
      "Slabs and tiles",
      "Natural and honed finishes",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "marble-placeholder-02",
    name: "Marble Selection 02",
    category: "Marble",
    image: stoneLight,
    description:
      "Warm ivory tones and flowing natural veins suited to calm, elevated spaces.",
    specifications: [
      "Book-matched slabs",
      "Polished or leather finish",
      "Residential and hospitality",
    ],
    origin: "India",
  },

  {
    id: "granite-placeholder-02",
    name: "Granite Selection 02",
    category: "Granite",
    image: stoneDark,
    description:
      "Distinctive crystalline texture engineered by nature for lasting performance.",
    specifications: [
      "Gang-saw slabs",
      "Custom dimensions",
      "High-traffic applications",
    ],
    origin: "India",
  },

  {
    id: "quartzite-placeholder-02",
    name: "Quartzite Selection 02",
    category: "Quartzite",
    image: stoneGreen,
    description:
      "Sophisticated colour depth with the strength demanded by ambitious projects.",
    specifications: [
      "Large-format slabs",
      "Custom finishing",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "sandstone-placeholder-02",
    name: "Sandstone Selection 02",
    category: "Sandstone",
    image: sandstone2,
    description:
      "Textured Indian sandstone offering natural character and warm earthy appeal for diverse projects.",
    specifications: [
      "Tiles and custom sizes",
      "Natural finish",
      "Landscaping and architectural applications",
    ],
    origin: "India",
  },
];

export const productCategories = [
  "All",
  "Marble",
  "Granite",
  "Quartzite",
  "Sandstone",
] as const;