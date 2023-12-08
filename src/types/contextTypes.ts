import { ReactNode } from "react";
import { productTypes } from "./productsTypes";

export type contextProviderTypes = {
  children: ReactNode;
};

export type shoppingCartContext = {
  getItemQuantity: (id: number) => number;
  incrementCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  toggleCart: () => void;
  openCart: boolean;
  cartItems: cartItem[];
  setProductsData: (data: productTypes[]) => void;
  products: productTypes[];
};

export type cartItem = {
  id: number;
  quantity: number;
};
