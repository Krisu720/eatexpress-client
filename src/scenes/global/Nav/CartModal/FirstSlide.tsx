import React from "react";
import { X } from "phosphor-react";
import { AnimatePresence } from "framer-motion";
import {
  cartModal,
  cartTotal,
  useCartModal,
} from "../../../../hooks/useCartModal";
import ProductCard from "../../components/ProductCard";

interface Props {
  changeSlide: (slide: number) => void;
}

const FirstSlide: React.FC<Props> = ({ changeSlide }) => {
  const { switchOpened } = useCartModal();
  const { products, shop } = cartModal();

  const changeScene = () => {
    if (products.length > 0) {
      changeSlide(2);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">
          Mój koszyk{" "}
          {products.length > 0 && (
            <span className="text-gray-500 text-sm">{products.length}</span>
          )}
        </h1>
        <X
          weight="bold"
          className="cursor-pointer text-white bg-black transition-all hover:opacity-80 p-1  rounded-full"
          size={25}
          onClick={() => switchOpened()}
        />
      </div>
      <h1 className="text-5xl font-bold my-7 max-w-xs">{shop?.name}</h1>
      <div className="flex-1 overflow-y-auto flex flex-col  gap-5 ">
        <AnimatePresence>
          {products?.map((item) => (
            <ProductCard item={item} key={item.cartId} />
          ))}
        </AnimatePresence>
      </div>
      <button
        className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded"
        onClick={() => changeScene()}
      >
        Przejdź do kasy • {cartTotal()}zł
      </button>
    </>
  );
};

export default FirstSlide;
