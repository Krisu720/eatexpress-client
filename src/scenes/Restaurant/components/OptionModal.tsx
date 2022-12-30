import React, { useState } from "react";
import { cartModal, useCartModal } from "../../../hooks/useCartModal";
import { dish } from "../../../types";

interface props {
  shopName: string;
  _id: string;
  img: string;
  name: string;
  price: number;
  options?: {
    sizes?: [
      {
        name: string;
        price: number;
      }
    ];
  };
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionModal = ({shopName, _id, name, img, price, options, setOpen }: props) => {
  const { addProduct, products,shop } = cartModal();
  const [sizeOption, setSizeOption] = useState<string>(
    options?.sizes?.length > 1 ? options?.sizes[0].name : ""
  );

  const addOption = () => {
    const option = options?.sizes?.find((size) => size.name === sizeOption);
      if(shop === shopName || shop === null) {
        addProduct({
          shop:shopName,
          _id,
          name,
          img,
          price,
          option,
          quantity: 1,
        });
        setOpen(false);
      } else {
        alert("Nie możesz zamawiać z dwóch restauracji jednocześnie.")
      }
    
  };

  return (
    <>
      <div
        className="left-0 top-0 z-40 fixed w-full h-full bg-black opacity-40"
        onClick={() => setOpen(false)}
      />
      <div className="fixed left-[50%] top-[50%] min-w-[350px]  bg-gray-100  shadow rounded translate-x-[-50%] translate-y-[-50%] z-50 grid grid-cols-1 lg:grid-cols-2 p-5">
        <div className="sticky top-0">
          <img src={img} />
        </div>
        <div className="p-5">
          <h1 className="font-semibold text-3xl">{name}</h1>
          <h2 className="font-semibold text-xl">{price}zł</h2>
          {options?.sizes?.length > 1 && (
            <h3 className=" text-sm">Rozmiar porcji do wyboru.</h3>
          )}
          {options?.sizes?.length > 0 && (
            <>
              {" "}
              <div className="bg-gray-200 p-5">
                <h1 className="font-bold text-lg">Rozmiar do Wyboru</h1>
                <h2 className="text-purple-500 text-sm">Wymagane</h2>
              </div>
              {options?.sizes.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center mx-4 ${
                    options?.sizes &&
                    options.sizes?.length - 1 !== index &&
                    "border-b"
                  } border-gray-400 select-none hover:bg-gray-200`}
                >
                  <label
                    htmlFor={item.name}
                    className=" flex-1 cursor-pointer p-3"
                  >
                    {item.name}{" "}
                    <span className="text-gray-500 font-thin">
                      {item.price !== 0 && "+" + item.price + "zł"}
                    </span>
                  </label>
                  <input
                    defaultChecked={index === 0}
                    id={item.name}
                    type="radio"
                    name="rozmiar"
                    value={item.name}
                    onChange={(e) => setSizeOption(e.target.value)}
                    className="cursor-pointer mr-3 appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-purple-500 checked:border-purple-900 focus:outline-none transition duration-200"
                  />
                </div>
              ))}
            </>
          )}
          <button
            className="select-none bg-black py-3 text-white font-semibold px-4 mt-5 w-full"
            onClick={() => addOption()}
          >
            Dodaj 1 do zamówienia • {price}zł
          </button>
        </div>
      </div>
    </>
  );
};

export default OptionModal;
