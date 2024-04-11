import { create } from "zustand";

type CartState = {
  subtotal: number;
  setSubtotal: (subtotal: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
  subtotal: 0,
  setSubtotal: (subtotal: number) => {
    set({ subtotal });
  },
}));
