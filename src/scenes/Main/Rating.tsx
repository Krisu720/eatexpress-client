import React from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { products } from "../../types";
import CardFlex from "./components/CardFlex";

interface Props {
  data: products[];
}

const Rating: React.FC<Props> = ({ data }) => {
  data?.sort((a, b) => (a.rating > b.rating ? -1 : 1));

  return (
    <>
      <div className="my-6 flex justify-between">
        <h1 className="text-3xl font-bold ">Najlepsze według ocen</h1>
        <div className="flex gap-1">
          <div className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer">
            <CaretLeft size={20} />
          </div>
          <div className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer">
            <CaretRight size={20} />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden  ">
        {data?.map((item) => (
          <CardFlex key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Rating;
