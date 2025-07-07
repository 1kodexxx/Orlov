import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/data/products";

// Тип корзины
export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedModel: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (
    slug: string,
    selectedColor: string,
    selectedModel: string
  ) => void;
  increaseQuantity: (
    slug: string,
    selectedColor: string,
    selectedModel: string
  ) => void;
  decreaseQuantity: (
    slug: string,
    selectedColor: string,
    selectedModel: string
  ) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (cartItem) =>
          cartItem.slug === item.slug &&
          cartItem.selectedColor === item.selectedColor &&
          cartItem.selectedModel === item.selectedModel
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.slug === item.slug &&
          cartItem.selectedColor === item.selectedColor &&
          cartItem.selectedModel === item.selectedModel
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (
    slug: string,
    selectedColor: string,
    selectedModel: string
  ) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.slug === slug &&
            item.selectedColor === selectedColor &&
            item.selectedModel === selectedModel
          )
      )
    );
  };

  const increaseQuantity = (
    slug: string,
    selectedColor: string,
    selectedModel: string
  ) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.slug === slug &&
        item.selectedColor === selectedColor &&
        item.selectedModel === selectedModel
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (
    slug: string,
    selectedColor: string,
    selectedModel: string
  ) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.slug === slug &&
          item.selectedColor === selectedColor &&
          item.selectedModel === selectedModel
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
