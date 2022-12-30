import React from "react";
import { CaretLeft, CaretRight, Minus, Plus, X } from "phosphor-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  cartModal,
  cartTotal,
  useCartModal,
} from "../../../hooks/useCartModal";
import { useNavigate } from "react-router-dom";

interface props {
  changeSlide: (slide: number) => void;
}

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

const FirstSlide = ({ changeSlide }: props) => {
  const { isOpened, switchOpened } = useCartModal();
  const { products, removeProduct, changeQuantity, shop} = cartModal();

  const navigate = useNavigate();

  const changeScene = () => {
    if (products.length > 0) {
      changeSlide(2);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">
          Mój koszyk {products.length>0 && <span className="text-gray-500 text-sm">{products.length}</span>}
        </h1>
        <X
          weight="bold"
          className="cursor-pointer text-white bg-black transition-all hover:opacity-80 p-1  rounded-full"
          size={25}
          onClick={() => switchOpened()}
        />
      </div>
      <h1 className="text-5xl font-bold my-7 max-w-xs">{shop}</h1>
      <div className="flex-1 overflow-y-auto flex flex-col  gap-5 ">
        <AnimatePresence>
          {products?.map((item, index) => (
            <motion.div
              variants={itemAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
              // className="border-2 border-gray-300 p-3 rounded"
              key={index}
            >
              
              <div className="flex">
              <img src={item.img} className="h-16 w-16 mr-3  rounded" />
              <div className="flex-1">
                <h1 className="font-semibold">{item.name}</h1>
                {item.option && (
                  <>
                    <h2 className="text-sm">Rozmiar do wyboru</h2>
                    <h3 className="text-sm text-gray-500">
                      {item.option.name}
                    </h3>
                  </>
                )}

                {/* <h2 className="text-sm">Sos do Wyboru</h2>
              <h3 className="text-sm text-gray-500">Sos Pomidorowy</h3> */}
              </div>
              <div className="ml-2 flex flex-col">
                {item.option?.price ? (
                  <div>
                    {(item.option.price + item.price) * item.quantity}zł
                  </div>
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
                      item.quantity === 1
                        ? "bg-gray-300 cursor-auto"
                        : "bg-black "
                    } rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer`}
                    onClick={() => changeQuantity(item, "remove")}
                    disabled={item.quantity === 1 ? true : false}
                  >
                    <Minus size={20}  weight='bold'/>
                  </button>
                  {item.quantity}
                  <button
                    className={`${
                      item.quantity === 99
                        ? "bg-gray-300 cursor-auto"
                        : "bg-black "
                    } rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer`}
                    onClick={() => changeQuantity(item, "add")}
                    disabled={item.quantity === 99 ? true : false}
                  >
                    <Plus size={20} weight='bold'/>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>
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
