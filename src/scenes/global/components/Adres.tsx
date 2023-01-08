import React, { useRef } from "react";
import { useAuthStore } from "../../../hooks/useAuth";

type address = {
  name: string;
  street: string;
  number: string;
  city: string;
};

interface Props {
  address: address | null;
  setAddress: React.Dispatch<React.SetStateAction<address | null>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Adres: React.FC<Props> = ({ address, setAddress,setOpenModal }) => {

  const city = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);
  const street = useRef<HTMLInputElement>(null);

  const addNewAddress = () => {


    if (city.current?.value && number.current?.value && street.current?.value) {
      setAddress({
        name: street.current.value,
        street: street.current.value,
        number: number.current.value,
        city: city.current.value,
      });
    }
  };

  return (
    <>
      <div className="flex justify-between mt-7 mb-3 items-center">
        <h1 className="text-2xl font-bold ">Adres</h1>
        <h1 className="font-semibold cursor-pointer hover:opacity-80" onClick={()=>setOpenModal(true)}>Zmień</h1>
      </div>
      <div className="flex items-center p-4 mx-2 border-2 rounded">
        {address ? (
          <>
            {" "}
            <div className="h-14 w-14 rounded-full overflow-hidden">
            <img
              src="https://i.insider.com/5c954296dc67671dc8346930?width=1136&format=jpeg"
              className="h-14 w-14 rounded-full"
            />
            </div>
            <div className="ml-5">
              <h1 className="text-lg font-semibold">{address.name}</h1>
              <h2 className="text-gray-500 text-sm">
                {address.street} / {address.number}
              </h2>
              <h2 className="text-gray-500 text-sm">{address.city}</h2>
            </div>{" "}
          </>
        ) : (
          <div className="flex flex-col">
            <h1 className="text-gray-500 font-semibold flex justify-center w-full">
              Wprowadź adres
            </h1>
            <input
              type="text"
              placeholder="Miasto"
              className="bg-gray-200 mt-4 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
              ref={city}
            />
            <input
              type="text"
              placeholder="Ulica"
              className="bg-gray-200 mt-4 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
              ref={street}
            />
            <input
              type="text"
              placeholder="Numer domu"
              className="bg-gray-200 mt-4 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
              ref={number}
            />
            <button
              className="select-none bg-black py-3 text-white font-semibold px-4 mt-4 w-full rounded"
              onClick={() => addNewAddress()}
            >
              Dodaj adres
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Adres;
