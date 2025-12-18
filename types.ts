
export type Category = 'Devices' | 'Disposables' | 'Accessories' | 'E-Juices';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  description: string;
  image?: string;
  images?: string[];
  isNew?: boolean;
  onSale?: boolean;
  rating: number;
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}
