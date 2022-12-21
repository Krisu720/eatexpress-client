import React from "react";
// import { singleproductconst } from "../const";
import { X } from "phosphor-react";
import { motion } from "framer-motion";
import { cartModal, useCartModal } from "../../../hooks/useCartModal";

const animation = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  show: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "100%",
  },
};

const CartModal = () => {
  const { isOpened, switchOpened } = useCartModal();
  const { products, removeProduct } = cartModal();

  const cartTotal = () => {
    return products.reduce((total, item) => (total += item.price), 0);
  };

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed cartmodal bg-gray-50 z-50 right-0 top-0 h-full p-5 flex flex-col min-w-[350px]"
    >
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">
          Mój koszyk <span className="text-gray-500 text-sm">(2)</span>
        </h1>
        <X
          weight="bold"
          className="cursor-pointer text-white bg-black transition-all hover:opacity-80 p-1  rounded-full"
          size={25}
          onClick={() => switchOpened()}
        />
      </div>
      <h1 className="text-5xl font-bold my-7">Pizza Hut</h1>
      <div className="flex-1 flex flex-col  gap-5 overflow-y-auto">
        {products?.map((item, index) => (
          <div className="flex " key={index}>
            <img src={item.img} className="h-16 w-16 mr-3  rounded" />
            <div className="flex-1">
              <h1 className="font-semibold">{item.name}</h1>
              {item.sizeOption && (
                <>
                  <h2 className="text-sm">Rozmiar do wyboru</h2>
                  <h3 className="text-sm text-gray-500">{item.sizeOption}</h3>
                </>
              )}

              {/* <h2 className="text-sm">Sos do Wyboru</h2>
              <h3 className="text-sm text-gray-500">Sos Pomidorowy</h3> */}
            </div>
            <div className="ml-2 flex flex-col">
              <div>{item.price}zł</div>
              <div className="flex justify-end items-center flex-1">
                <X
                  weight="bold"
                  className="cursor-pointer text-white bg-red-500 hover:bg-red-700 p-1  rounded-full transition-all"
                  size={25}
                  onClick={() => removeProduct(item)}
                />
              </div>
            </div>
          </div>
        ))}

        {/* <div className="flex">
          <img
            src={
              "https://tb-static.uber.com/prod/image-proc/processed_images/c017bb752aa8950edee328d5c99a45d9/5954bcb006b10dbfd0bc160f6370faf3.jpeg"
            }
            className="h-16 w-16 mr-3  rounded"
          />
          <div className="flex-1">
            <h1 className="font-semibold">PIZZA CLASSICA Z LAY'S</h1>
            <h2 className="text-sm">Rozmiar do wyboru</h2>
            <h3 className="text-sm text-gray-500">24cm</h3>
            <h2 className="text-sm">Sos do Wyboru</h2>
            <h3 className="text-sm text-gray-500">Sos Meksykański</h3>
          </div>
          <div>22,00zł</div>
        </div> */}
      </div>
      <button className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded">
        Przejdź do kasy • {cartTotal()}zł
      </button>
    </motion.div>
  );
};

export default CartModal;
