export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  modelPath: string;
  category: string;
  thumbnail?: string;
}

export interface StoreSection {
  id: string;
  name: string;
  position: [number, number, number];
  products: Product[];
}