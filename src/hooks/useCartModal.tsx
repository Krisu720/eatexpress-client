import create from "zustand";
import { v4 as uuidv4 } from 'uuid';

interface cartModal {
  isOpened: boolean;
  switchOpened: () => void;
}

interface cart {
  shop: {
    _id: string;
    name: string;
  } | null;
  products: product[];
  addProduct: (val: product) => void;
  removeProduct: (val: product) => void;
  changeQuantity: (val: product, type: "add" | "remove") => void;
  removeAllProducts: () => void;
}

export type product = {
  shop: {
    _id: string;
    name: string;
  } | null;
  _id: string;
  name: string;
  price: number;
  img: string;
  option?: {
    _id?: string;
    name?: string;
    price?: number;
  };
  cartId?: string;
  quantity: number;
};

export const useCartModal = create<cartModal>((set) => ({
  isOpened: false,
  switchOpened: () => set((state) => ({ isOpened: !state.isOpened })),
}));

export const cartModal = create<cart>((set) => ({
  shop: null,
  products: [],
  addProduct: (val) =>
    set((state) => {
      if (state.products.length === 0) {
        return {
          shop: val.shop,
          products: [
            ...state.products,
            { ...val, cartId: uuidv4() },
          ],
        };
      } else {
        return {
          products: [
            ...state.products,
            { ...val, cartId: uuidv4() },
          ],
        };
      }
    }),
  changeQuantity: (val, type) =>
    set((state) => {
      const index = state.products.findIndex(
        (product) => product.cartId === val.cartId
      );
      const newProducts = [...state.products];
      if (type === "add") {
        newProducts[index].quantity += 1;
      } else if (type === "remove") {
        newProducts[index].quantity -= 1;
      }
      return { products: newProducts };
    }),
  removeProduct: (val) =>
    set((state) => {
      if(state.products.length === 1) {
        return {
          shop: null,
          products: []
        }
      }
      const index = state.products.findIndex(
        (product) => product.cartId === val.cartId
      );
      const newProducts = [...state.products];
      newProducts.splice(index, 1);
      return { products: newProducts };
    }),
    removeAllProducts: () =>
    set({products: [], shop: null}),
}));

export const cartTotal = () => {
  const { products } = cartModal();
  return products.reduce((total, item) => {
    if (item.option?.price) {
      return total + (item.price + item.option.price) * item.quantity;
    } else {
      return (total += item.price * item.quantity);
    }
  }, 0);
};
