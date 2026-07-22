import { create } from "zustand";
import type { IGetProducts } from "../types/types";

interface CartItem extends IGetProducts {
  quantity: number;
}

interface Store {
  search: string;
  setSearch: (value: string) => void;

  cart: CartItem[];

  addToCart: (product: IGetProducts) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const useStore = create<Store>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),

  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1 }],
    })),

  increment: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),

  decrement: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));
