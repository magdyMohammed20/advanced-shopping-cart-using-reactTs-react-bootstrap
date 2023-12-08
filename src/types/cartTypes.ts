import { cartItem } from "./contextTypes";

export type cartTypes = {
  openCart: boolean;
  toggleCart: () => void;
  cartItems: cartItem[];
};
