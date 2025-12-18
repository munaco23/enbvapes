
import { Product, HeroSlide } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "VaporVibe Pro Max",
    subtitle: "Experience the next level of flavor and cloud production with our latest hardware.",
    image: "/images/hero-section/slider1.jfif",
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "Premium E-Liquids",
    subtitle: "Curated collection of the world's most sought-after flavors.",
    image: "/images/hero-section/slide2.jfif",
    cta: "Explore Flavors"
  },
  {
    id: 3,
    title: "Next-Gen Disposables",
    subtitle: "High puff count, sleek design, and intense nicotine satisfaction.",
    image: "/images/hero-section/slider3.jfif",
    cta: "Browse All"
  }
];

const productNameToImage = (name: string) => `/images/products/${name.toLowerCase().replace(/ /g, '-')}.png`;

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'OXVA Xlim 3',
    category: 'Devices',
    price: 9450,
    oldPrice: 10500,
    description: 'The ultimate MTL experience with precision airflow control.',
    image: productNameToImage('OXVA Xlim 3'),
    rating: 4.8,
    onSale: true
  },
  {
    id: 'p2',
    name: 'Vaporesso Xros Pro',
    category: 'Devices',
    price: 7739,
    oldPrice: 8599,
    description: 'First XROS to feature a screen and a lock button.',
    image: productNameToImage('Vaporesso Xros Pro'),
    rating: 4.9,
    onSale: true
  },
  {
    id: 'p3',
    name: 'Vaporesso VIBE Nano',
    category: 'Devices',
    price: 7799,
    description: 'Compact, powerful, and built for flavor enthusiasts.',
    image: productNameToImage('Vaporesso VIBE Nano'),
    rating: 4.7
  },
  {
    id: 'p4',
    name: 'Voopoo Argus A',
    category: 'Devices',
    price: 8500,
    description: 'Advanced chipset with dual activation modes.',
    image: productNameToImage('Voopoo Argus A'),
    rating: 4.6
  },
  {
    id: 'p5',
    name: 'Oxva Xlim Go',
    category: 'Devices',
    price: 4680,
    oldPrice: 5200,
    description: 'The portable powerhouse for everyday vaping.',
    image: productNameToImage('Oxva Xlim Go'),
    rating: 4.5,
    onSale: true
  },
  {
    id: 'p6',
    name: 'Lost Mary OS5000',
    category: 'Disposables',
    price: 2100,
    description: 'Unique design with long-lasting battery life.',
    image: productNameToImage('Lost Mary OS5000'),
    rating: 4.8
  }
];
