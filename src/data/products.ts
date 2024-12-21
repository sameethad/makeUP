interface Product {
  name: string;
  brand: string;
  price: string;
  description: string;
  link: string;
  suitableFor: {
    skinTypes: string[];
    undertones?: string[];
    sensitivity?: string[];
    concerns?: string[];
  };
}

export const foundations: Product[] = [
  {
    name: "Double Wear Stay-in-Place Foundation",
    brand: "Estée Lauder",
    price: "$43",
    description: "24-hour wear, oil-free, waterproof foundation with medium to full coverage",
    link: "https://www.sephora.com/product/double-wear-stay-in-place-makeup-P378284",
    suitableFor: {
      skinTypes: ['oily', 'combination'],
      sensitivity: ['low', 'medium']
    }
  },
  {
    name: "Luminous Silk Foundation",
    brand: "Giorgio Armani",
    price: "$65",
    description: "Lightweight, buildable coverage with a luminous finish",
    link: "https://www.sephora.com/product/luminous-silk-perfect-glow-flawless-oil-free-foundation-P393401",
    suitableFor: {
      skinTypes: ['normal', 'dry'],
      sensitivity: ['low', 'medium', 'high']
    }
  },
  {
    name: "Your Skin But Better CC+ Cream with SPF 50+",
    brand: "IT Cosmetics",
    price: "$39.50",
    description: "Color-correcting cream with anti-aging hydrating serum and SPF 50+",
    link: "https://www.sephora.com/product/your-skin-but-better-cc-cream-spf-50-P411885",
    suitableFor: {
      skinTypes: ['dry', 'normal', 'combination'],
      sensitivity: ['high'],
      concerns: ['Redness', 'Fine lines']
    }
  }
];

export const concealers: Product[] = [
  {
    name: "Radiant Creamy Concealer",
    brand: "NARS",
    price: "$31",
    description: "Medium-buildable coverage concealer with natural finish",
    link: "https://www.sephora.com/product/radiant-creamy-concealer-P377873",
    suitableFor: {
      skinTypes: ['normal', 'dry'],
      concerns: ['Dark spots']
    }
  },
  {
    name: "Shape Tape Concealer",
    brand: "Tarte",
    price: "$29",
    description: "Full coverage, long-wearing concealer",
    link: "https://www.ulta.com/shape-tape-concealer",
    suitableFor: {
      skinTypes: ['combination', 'oily'],
      concerns: ['Dark spots', 'Redness']
    }
  }
];

export const colorCorrectors: Product[] = [
  {
    name: "Color Correcting Fluid",
    brand: "NYX Professional Makeup",
    price: "$14",
    description: "Lightweight color corrector for neutralizing discoloration",
    link: "https://www.ulta.com/color-correcting-fluid",
    suitableFor: {
      skinTypes: ['all'],
      concerns: ['Redness', 'Dark spots']
    }
  }
];