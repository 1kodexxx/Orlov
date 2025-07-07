import type { Product } from "./products";

export interface CartItem extends Product {
  selectedColor: string;
  selectedModel: string;
  quantity: number;
}
