import React, { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { products } from "../../types";
import CardFlex from "./components/CardFlex";

interface Props {
  data: products[];
}

const Featured: React.FC<Props> = ({ data }) => {
  const [x, setX] = useState<number>(0);

  return (
    <>
      <div className="my-6 flex justify-between">
        <h1 className="text-3xl font-bold ">Wyróżnione</h1>
        <div className="flex gap-1">
          <div
            className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer"
            onClick={() => setX((prev) => prev + 100)}
          >
            <CaretLeft size={20} />
          </div>
          <div
            className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer"
            onClick={() => setX((prev) => prev - 100)}
          >
            <CaretRight size={20} />
          </div>
        </div>
      </div>

      <div className="overflow-hidden ">
        <div
          className="flex transition-all"
          style={{ transform: `translate(${x}%)` }}
        >
          {data?.map((item) => (
            <CardFlex key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
