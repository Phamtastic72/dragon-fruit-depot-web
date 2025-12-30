
export enum FleshColor {
  PURPLE = 'Purple',
  RED = 'Red',
  WHITE = 'White',
  PINK = 'Pink',
  YELLOW = 'Yellow'
}

export enum PollinationType {
  SELF_FERTILE = 'Self-Fertile',
  SELF_STERILE = 'Self-Sterile',
  UNIVERSAL = 'Universal Pollinator'
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  content: string;
  isVerified: boolean;
  images?: string[];
  helpfulCount: number;
}

export interface Product {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  originalPrice?: number;
  fleshColor: FleshColor;
  skinColor: string;
  pollination: PollinationType;
  brix: string;
  growth: string;
  fruitSize: string;
  hardiness: string;
  sunlight: string;
  watering: string;
  description: string;
  origin: string;
  tasteProfile: string;
  flavorNotes: string[];
  bestUses: string[];
  mainImage: string;
  gallery: string[];
  reviews: Review[];
  isRare?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}
