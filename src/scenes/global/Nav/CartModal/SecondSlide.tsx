import React, { useState } from "react";
import { X, CaretLeft } from "phosphor-react";
import {
  cartModal,
  cartTotal,
  useCartModal,
} from "../../../../hooks/useCartModal";
import Adres from "../../components/Adres";
import Method from "../../components/Method";

interface Props {
  changeSlide: (slide: number) => void;
}

const SecondSlide: React.FC<Props> = ({ changeSlide }) => {
  type method = "cash" | "card";

  enum methods {
    cash = "cash",
    card = "card",
  }

  type address = {
    name: string;
    street: string;
    number: string;
    city: string;
  };

  const { switchOpened } = useCartModal();
  const { products } = cartModal();

  const [adress, setAdress] = useState<address | null>(null);
  const [method, setMethod] = useState<string>(methods.card);

  const sendReq = async () => {
    if (adress !== null) {
      const changedProducts = products.map((item) => {
        return {
          _id: item._id,
          option: item.option?.name ? item.option.name : null,
          quantity: item.quantity,
        };
      });
      console.log({ products: changedProducts, method, adress });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <CaretLeft
          className="cursor-pointer text-white bg-black transition-all hover:opacity-80 p-1  rounded-full"
          size={25}
          weight="bold"
          onClick={() => changeSlide(1)}
        />
        <h1 className="font-semibold text-lg">Płatność</h1>
        <X
          weight="bold"
          className="cursor-pointer text-white bg-black transition-all hover:opacity-80 p-1  rounded-full"
          size={25}
          onClick={() => switchOpened()}
        />
      </div>
      <div className="flex-1">
        <Adres adress={adress} setAdress={setAdress} />
        <Method method={method} setMethod={setMethod} methods={methods} />
        <div className="my-7  mx-4 rounded border-2 p-2">
          {products.map((item) => (
            <div key={item._id} className="flex mb-2 justify-between">
              <div>
                <h1>
                  {item.name}{" "}
                  <span className="text-gray-500 text-xs font-semibold">
                    x{item.quantity}
                  </span>
                </h1>
                <h2 className="text-gray-500 font-bold text-xs">
                  {item.option?.name}
                </h2>
              </div>
              {item.option?.price ? (
                <h1>{(item.option.price + item.price) * item.quantity}zł</h1>
              ) : (
                <h1>{item.price * item.quantity}zł</h1>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex mx-2">
          <div className="rounded-lg w-1/2 bg-gray-200 m-2 p-4">
            <h1 className="text-lg font-semibold">Za darmo</h1>
            <h2 className="text-sm text-gray-400 font-semibold">Dostawa</h2>
          </div>
          <div className="rounded-lg w-1/2 bg-gray-200 m-2 p-4">
            <h1 className="text-lg font-semibold">{cartTotal()}zł</h1>
            <h2 className="text-sm text-gray-400 font-semibold">Razem</h2>
          </div>
        </div>
        <button
          className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded"
          onClick={() => sendReq()}
        >
          Zapłać
        </button>
      </div>
    </>
  );
};

export default SecondSlide;
