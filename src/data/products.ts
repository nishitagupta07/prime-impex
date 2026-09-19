import stoneDark from "@/assets/stone-dark.jpg";
import stoneGreen from "@/assets/stone-green.jpg";
import stoneLight from "@/assets/stone-light.jpg";

import sandstone1 from "@/assets/sandstone 1.jpeg";
import sandstone2 from "@/assets/sandstone 2.avif";

import marble1 from "@/assets/marble 1.jpg";
import marble2 from "@/assets/marble 2.webp";
import marble3 from "@/assets/marble 3.avif";
import marble4 from "@/assets/marble 4.jpg";
import marble5 from "@/assets/marble 5.jpg";
import marble6 from "@/assets/marble 6.jpg";
import marble7 from "@/assets/marble 7.jpg";
import marble9 from "@/assets/marble 9.jpeg";
import marble10 from "@/assets/marble 10.jpeg";

import granite1 from "@/assets/granite 1.webp";
import granite2 from "@/assets/granite 2.jpg";
import granite3 from "@/assets/granite 3.webp";
import granite4 from "@/assets/granite 4.webp";
import granite5 from "@/assets/granite 5.webp";
import granite6 from "@/assets/granite 6.webp";
import granite7 from "@/assets/granite 7.jpg";
import granite9 from "@/assets/granite 9.jpeg";
import granite10 from "@/assets/granite 10.jpeg";

import quartzite1 from "@/assets/quartize 1.avif";
import quartzite2 from "@/assets/quartzite 2.jpg";
import quartzite3 from "@/assets/quartize 3.webp";
import quartzite4 from "@/assets/quartize 4.webp";
import quartzite5 from "@/assets/quartize 5.jpeg";
import quartzite6 from "@/assets/quartize 6.jpeg";
import quartzite7 from "@/assets/quartize 7.jpeg";
import quartzite9 from "@/assets/quartize 9.jpeg";
import quartzite10 from "@/assets/quartize 10.jpeg";

import sandstone3 from "@/assets/sandstone 3.jpeg";
import sandstone4 from "@/assets/sandstone 4.jpeg";
import sandstone5 from "@/assets/sandstone 5.jpeg";
import sandstone6 from "@/assets/sandstone 6.jpeg";
import sandstone7 from "@/assets/sandstone7.jpg";
import sandstone8 from "@/assets/sandstone 8.jpeg";
import sandstone9 from "@/assets/sandstone 9.jpeg";
import sandstone10 from "@/assets/sandstone 10.jpeg";

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

export const products: StoneProduct[] = [
  // =========================
  // MARBLE - 10 PRODUCTS
  // =========================

  {
    id: "marble-01",
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
    id: "marble-02",
    name: "Marble Selection 02",
    category: "Marble",
    image: marble1,
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
    id: "marble-03",
    name: "Marble Selection 03",
    category: "Marble",
    image: marble2,
    description:
      "Distinctive Indian marble with natural veining and refined visual character.",
    specifications: [
      "Premium slabs",
      "Polished finish",
      "Interior applications",
    ],
    origin: "India",
  },

  {
    id: "marble-04",
    name: "Marble Selection 04",
    category: "Marble",
    image: marble3,
    description:
      "Elegant natural marble offering soft movement and timeless architectural appeal.",
    specifications: [
      "Slabs and cut-to-size",
      "Multiple finishes",
      "Interior applications",
    ],
    origin: "India",
  },

  {
    id: "marble-05",
    name: "Marble Selection 05",
    category: "Marble",
    image: marble4,
    description:
      "Expressive marble with naturally occurring patterns for distinctive spaces.",
    specifications: [
      "Large-format slabs",
      "Polished or honed finish",
      "Residential and commercial",
    ],
    origin: "India",
  },

  {
    id: "marble-06",
    name: "Marble Selection 06",
    category: "Marble",
    image: marble5,
    description:
      "A sophisticated natural marble selected for its unique colour and veining.",
    specifications: [
      "Premium slabs",
      "Custom dimensions",
      "Interior applications",
    ],
    origin: "India",
  },

  {
    id: "marble-07",
    name: "Marble Selection 07",
    category: "Marble",
    image: marble6,
    description:
      "Refined Indian marble combining natural movement with a polished architectural character.",
    specifications: [
      "Slabs and cut-to-size",
      "Polished finish",
      "Residential and hospitality",
    ],
    origin: "India",
  },

  {
    id: "marble-08",
    name: "Marble Selection 08",
    category: "Marble",
    image: marble7,
    description:
      "Premium marble with distinctive natural character for contemporary interiors.",
    specifications: [
      "Large-format slabs",
      "Polished or honed finish",
      "Interior applications",
    ],
    origin: "India",
  },

  {
    id: "marble-09",
    name: "Marble Selection 09",
    category: "Marble",
    image: marble9,
    description:
      "Distinctive Indian marble with natural movement and refined character for premium spaces.",
    specifications: [
      "Premium slabs",
      "Polished or honed finish",
      "Interior applications",
    ],
    origin: "India",
  },

  {
    id: "marble-10",
    name: "Marble Selection 10",
    category: "Marble",
    image: marble10,
    description:
      "Elegant natural marble offering unique veining and timeless architectural appeal.",
    specifications: [
      "Large-format slabs",
      "Multiple finishes",
      "Residential and hospitality",
    ],
    origin: "India",
  },

  // =========================
  // GRANITE - 10 PRODUCTS
  // =========================

  {
    id: "granite-01",
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
    id: "granite-02",
    name: "Granite Selection 02",
    category: "Granite",
    image: granite1,
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
    id: "granite-03",
    name: "Granite Selection 03",
    category: "Granite",
    image: granite2,
    description:
      "Strong natural granite with distinctive mineral structure and durable performance.",
    specifications: [
      "Slabs and tiles",
      "Polished or leather finish",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "granite-04",
    name: "Granite Selection 04",
    category: "Granite",
    image: granite3,
    description:
      "Architectural granite with rich natural texture for demanding applications.",
    specifications: [
      "Premium slabs",
      "Multiple finishes",
      "Commercial and residential",
    ],
    origin: "India",
  },

  {
    id: "granite-05",
    name: "Granite Selection 05",
    category: "Granite",
    image: granite4,
    description:
      "Hard-wearing Indian granite offering natural depth and long-lasting performance.",
    specifications: [
      "Large-format slabs",
      "Custom dimensions",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "granite-06",
    name: "Granite Selection 06",
    category: "Granite",
    image: granite5,
    description:
      "Natural granite with expressive mineral patterns suited to contemporary architecture.",
    specifications: [
      "Slabs and cut-to-size",
      "Polished finish",
      "High-traffic applications",
    ],
    origin: "India",
  },

  {
    id: "granite-07",
    name: "Granite Selection 07",
    category: "Granite",
    image: granite6,
    description:
      "Durable granite combining natural character with practical architectural performance.",
    specifications: [
      "Premium slabs",
      "Multiple finishes",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "granite-08",
    name: "Granite Selection 08",
    category: "Granite",
    image: granite7,
    description:
      "Distinctive Indian granite selected for strength, texture and visual character.",
    specifications: [
      "Slabs and tiles",
      "Custom finishing",
      "Residential and commercial",
    ],
    origin: "India",
  },

  {
    id: "granite-09",
    name: "Granite Selection 09",
    category: "Granite",
    image: granite9,
    description:
      "Premium Indian granite with distinctive mineral texture and strong architectural character.",
    specifications: [
      "Large-format slabs",
      "Polished or honed finish",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "granite-10",
    name: "Granite Selection 10",
    category: "Granite",
    image: granite10,
    description:
      "Durable natural granite offering depth, texture and dependable performance.",
    specifications: [
      "Slabs and cut-to-size",
      "Multiple finishes",
      "Commercial and residential",
    ],
    origin: "India",
  },

  // =========================
  // QUARTZITE - 10 PRODUCTS
  // =========================

  {
    id: "quartzite-01",
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
    id: "quartzite-02",
    name: "Quartzite Selection 02",
    category: "Quartzite",
    image: quartzite1,
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
    id: "quartzite-03",
    name: "Quartzite Selection 03",
    category: "Quartzite",
    image: quartzite2,
    description:
      "Expressive quartzite combining natural veining with exceptional durability.",
    specifications: [
      "Premium slabs",
      "Polished or honed finish",
      "Interior applications",
    ],
    origin: "India",
  },

  {
    id: "quartzite-04",
    name: "Quartzite Selection 04",
    category: "Quartzite",
    image: quartzite3,
    description:
      "Naturally dramatic quartzite for feature surfaces and sophisticated interiors.",
    specifications: [
      "Large-format slabs",
      "Polished finish",
      "Feature applications",
    ],
    origin: "India",
  },

  {
    id: "quartzite-05",
    name: "Quartzite Selection 05",
    category: "Quartzite",
    image: quartzite4,
    description:
      "Premium natural quartzite offering depth, movement and strong architectural character.",
    specifications: [
      "Premium slabs",
      "Multiple finishes",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "quartzite-06",
    name: "Quartzite Selection 06",
    category: "Quartzite",
    image: quartzite5,
    description:
      "Distinctive quartzite with naturally formed patterns for statement applications.",
    specifications: [
      "Large-format slabs",
      "Custom dimensions",
      "Feature surfaces",
    ],
    origin: "India",
  },

  {
    id: "quartzite-07",
    name: "Quartzite Selection 07",
    category: "Quartzite",
    image: quartzite6,
    description:
      "Durable quartzite with rich natural movement for premium architectural projects.",
    specifications: [
      "Premium slabs",
      "Polished or honed finish",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "quartzite-08",
    name: "Quartzite Selection 08",
    category: "Quartzite",
    image: quartzite7,
    description:
      "Refined Indian quartzite selected for its distinctive colour and natural strength.",
    specifications: [
      "Large-format slabs",
      "Custom finishing",
      "Residential and hospitality",
    ],
    origin: "India",
  },

  {
    id: "quartzite-09",
    name: "Quartzite Selection 09",
    category: "Quartzite",
    image: quartzite9,
    description:
      "Premium quartzite with natural veining, depth and exceptional architectural character.",
    specifications: [
      "Premium slabs",
      "Polished or honed finish",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "quartzite-10",
    name: "Quartzite Selection 10",
    category: "Quartzite",
    image: quartzite10,
    description:
      "Distinctive Indian quartzite combining natural movement with durable performance.",
    specifications: [
      "Large-format slabs",
      "Multiple finishes",
      "Feature applications",
    ],
    origin: "India",
  },

  // =========================
  // SANDSTONE - 10 PRODUCTS
  // =========================

  {
    id: "sandstone-01",
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
    id: "sandstone-02",
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

  {
    id: "sandstone-03",
    name: "Sandstone Selection 03",
    category: "Sandstone",
    image: sandstone3,
    description:
      "Naturally textured sandstone with warm tones for architectural and landscape applications.",
    specifications: [
      "Slabs and tiles",
      "Natural finish",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "sandstone-04",
    name: "Sandstone Selection 04",
    category: "Sandstone",
    image: sandstone4,
    description:
      "Earth-toned Indian sandstone with distinctive natural texture and character.",
    specifications: [
      "Tiles and cut-to-size",
      "Natural or honed finish",
      "Landscaping applications",
    ],
    origin: "India",
  },

  {
    id: "sandstone-05",
    name: "Sandstone Selection 05",
    category: "Sandstone",
    image: sandstone5,
    description:
      "Warm natural sandstone suited to exterior spaces, landscaping and architectural surfaces.",
    specifications: [
      "Slabs and tiles",
      "Natural finish",
      "Exterior applications",
    ],
    origin: "India",
  },

  {
    id: "sandstone-06",
    name: "Sandstone Selection 06",
    category: "Sandstone",
    image: sandstone6,
    description:
      "Distinctive sandstone offering natural variation and earthy architectural appeal.",
    specifications: [
      "Custom sizes",
      "Natural or honed finish",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "sandstone-07",
    name: "Sandstone Selection 07",
    category: "Sandstone",
    image: sandstone7,
    description:
      "Indian sandstone with a naturally expressive surface for timeless architectural applications.",
    specifications: [
      "Tiles and slabs",
      "Natural finish",
      "Landscaping and architecture",
    ],
    origin: "India",
  },

  {
    id: "sandstone-08",
    name: "Sandstone Selection 08",
    category: "Sandstone",
    image: sandstone8,
    description:
      "Natural sandstone combining earthy colour and texture for diverse architectural projects.",
    specifications: [
      "Slabs and custom sizes",
      "Multiple finishes",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "sandstone-09",
    name: "Sandstone Selection 09",
    category: "Sandstone",
    image: sandstone9,
    description:
      "Naturally textured Indian sandstone offering warm tones and lasting architectural appeal.",
    specifications: [
      "Slabs and tiles",
      "Natural or honed finish",
      "Interior and exterior use",
    ],
    origin: "India",
  },

  {
    id: "sandstone-10",
    name: "Sandstone Selection 10",
    category: "Sandstone",
    image: sandstone10,
    description:
      "Premium sandstone with earthy character and natural variation for architectural and landscape projects.",
    specifications: [
      "Custom sizes",
      "Natural finish",
      "Landscaping and exterior applications",
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