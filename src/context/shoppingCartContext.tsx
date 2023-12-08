import { createContext, useContext, useState } from "react";
import {
  contextProviderTypes,
  shoppingCartContext,
  cartItem,
} from "../types/contextTypes";
import { productTypes } from "../types/productsTypes";
import useLocalStorage from "../hooks/useLocalStorge";

const ShoppingCartContext = createContext({} as shoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: contextProviderTypes) => {
  const [cartItems, setCartItems] = useLocalStorage<cartItem[]>(
    "myArrayKey",
    []
  );
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [products, setAllProducts] = useState<productTypes[]>([]);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id == id)?.quantity || 0;
  }

  const incrementCartQuantity = (id: number) => {
    setCartItems((items) => {
      if (!items.find((item) => item.id == id)) {
        return [...items, { id, quantity: 1 }];
      } else {
        return items.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((items) => {
      if (items.find((item) => item.id == id)?.quantity == 1) {
        return items.filter((item) => item.id != id);
      } else {
        return items.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((items) => {
      return items.filter((item) => item.id != id);
    });
  };

  const setProductsData = (data: productTypes[]): void => {
    setAllProducts(data);
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        incrementCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        toggleCart,
        openCart,
        cartItems,
        setProductsData,
        products,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
