import React from "react";
import { cartModal, product } from "../../../hooks/useCartModal";
import { motion } from "framer-motion";
import { Minus, Plus, X } from "phosphor-react";

const itemAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};

interface Props {
  item: product;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const { removeProduct, changeQuantity } = cartModal();

  return (
    <motion.div
      variants={itemAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="flex">
        <img src={item.img} className="h-16 w-16 mr-3  rounded" />
        <div className="flex-1">
          <h1 className="font-semibold">{item.name}</h1>
          {item.option && (
            <>
              <h2 className="text-sm">Rozmiar do wyboru</h2>
              <h3 className="text-sm text-gray-500">{item.option.name}</h3>
            </>
          )}
          {/* <h2 className="text-sm">Sos do Wyboru</h2>
             <h3 className="text-sm text-gray-500">Sos Pomidorowy</h3> */}
        </div>
        <div className="ml-2 flex flex-col">
          {item.option?.price ? (
            <div>{(item.option.price + item.price) * item.quantity}zł</div>
          ) : (
            <div>{item.price * item.quantity}zł</div>
          )}
        </div>
      </div>
      <div className="flex items-center mt-3 justify-center gap-3 border-b-2 pb-5">
        <X
          weight="bold"
          className="cursor-pointer text-white bg-red-500 hover:bg-red-700  p-1 w-12 h-7  rounded-3xl transition-all"
          size={25}
          onClick={() => removeProduct(item)}
        />
        <div className="flex justify-center gap-4 items-center ">
          <button
            className={`${
              item.quantity === 1 ? "bg-gray-300 cursor-auto" : "bg-black "
            } rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer`}
            onClick={() => changeQuantity(item, "remove")}
            disabled={item.quantity === 1 ? true : false}
          >
            <Minus size={20} weight="bold" />
          </button>
          {item.quantity}
          <button
            className={`${
              item.quantity === 99 ? "bg-gray-300 cursor-auto" : "bg-black "
            } rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer`}
            onClick={() => changeQuantity(item, "add")}
            disabled={item.quantity === 99 ? true : false}
          >
            <Plus size={20} weight="bold" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
