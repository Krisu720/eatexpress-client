import React, { useState } from "react";
import { X, CaretLeft, CreditCard, CurrencyCircleDollar } from "phosphor-react";
import { cartModal, cartTotal, useCartModal } from "../../../hooks/useCartModal";
import { motion } from "framer-motion";
interface props {
  changeSlide: (slide: number) => void;
}

const SecondSlide = ({ changeSlide }: props) => {
  const { isOpened, switchOpened } = useCartModal();
  const { products } = cartModal();

  const [adress, setAdress] = useState<string>('Waszyngtona 4/41')
  const [method, setMethod] = useState<string>('Karta')

  const sendReq = async () => {
    const changedProducts = products.map((item) => {
      return {
        _id: item._id,
        option: item.option?.name,
        quantity: item.quantity,
      };
    });

    console.log({products:changedProducts,method,adress})
  }

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
        <div className="flex justify-between mt-7 mb-3 items-center">
          <h1 className="text-2xl font-bold ">Adres</h1>
          <h1 className="font-semibold cursor-pointer hover:opacity-80">
            Zmień
          </h1>
        </div>
        <div className="flex items-center p-4 mx-2 border-2 rounded">
          <img
            src="https://i.insider.com/5c954296dc67671dc8346930?width=1136&format=jpeg"
            className="h-14 w-14 rounded-full"
          />
          <div className="ml-5">
            <h1 className="text-lg font-semibold">My Home</h1>
            <h2 className="text-gray-500 text-sm">ul.Waszyngtona 4/41</h2>
            <h2 className="text-gray-500 text-sm">Częstochowa Poland</h2>
          </div>
        </div>
        <div className="flex justify-between mt-7 mb-3 items-center">
          <h1 className="text-2xl font-bold ">Metoda płatności</h1>
          <h1 className="font-semibold cursor-pointer hover:opacity-80">
            Zmień
          </h1>
        </div>
        <div className="flex items-center p-4 mx-2 border-2 rounded">
          <CreditCard size={52} color="#141414" weight="bold" />
          <div className="ml-5">
            <h1 className="text-lg font-semibold">Karta</h1>
            <h2 className="text-gray-500 text-sm">Visa / Mastercard</h2>
          </div>
        </div>
        {/* <div className="flex items-center p-4 mx-2 border-2 rounded">
        <CurrencyCircleDollar size={52} color="#141414" weight="bold" />
          <div className="ml-5">
            <h1 className="text-lg font-semibold">Gotówka</h1>
            <h2 className="text-gray-500 text-sm">Płatność przy odbiorze</h2>
          </div>
        </div> */}
        <div className="my-7  mx-4 rounded border-2 p-2">
          {products.map((item) => (
            <div className="flex mb-2 justify-between">
              <div>
                <h1>{item.name}</h1>
                <h2 className="text-gray-500 font-bold text-xs">{item?.option?.name}</h2>
              </div>
              {item.option?.price ? <h1>{(item.option.price+ item.price)*item.quantity}zł</h1> : <h1>{item.price*item.quantity}zł</h1>}
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
        <button className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded" onClick={()=>sendReq()}>
          Zapłać
        </button>
      </div>
    </>
  );
};

export default SecondSlide;
