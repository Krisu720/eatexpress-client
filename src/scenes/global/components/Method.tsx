import { CreditCard, CurrencyCircleDollar } from "phosphor-react";
import React from "react";

interface Props {
  method: string;
  setMethod: (method: string) => void;
  methods: {
    card: string;
    cash: string;
  };
}

const Method: React.FC<Props> = ({ method, setMethod, methods }) => {


  const changeMethod = () => {
    if (method === methods.card) {
      setMethod(methods.cash);
    } else {
      setMethod(methods.card);
    }
  };

  return (
    <>
      <div className="flex justify-between mt-7 mb-3 items-center">
        <h1 className="text-2xl font-bold ">Metoda płatności</h1>
        <h1
          className="select-none font-semibold cursor-pointer hover:opacity-80"
          onClick={() => changeMethod()}
        >
          Zmień
        </h1>
      </div>
      {method === methods.card ? (
        <div className="flex items-center p-4 mx-2 border-2 rounded">
          <CreditCard size={52} color="#141414" weight="bold" />
          <div className="ml-5">
            <h1 className="text-lg font-semibold">Karta</h1>
            <h2 className="text-gray-500 text-sm">Visa / Mastercard</h2>
          </div>
        </div>
      ) : (
        <div className="flex items-center p-4 mx-2 border-2 rounded">
          <CurrencyCircleDollar size={52} color="#141414" weight="bold" />
          <div className="ml-5">
            <h1 className="text-lg font-semibold">Gotówka</h1>
            <h2 className="text-gray-500 text-sm">Płatność przy odbiorze</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Method;
