import React from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { products } from "../../types";
import CardFlex from "./components/CardFlex";
import SkeletonCardFlex from "./components/SkeletonCardFlex";

interface Props {
  data: products[];
}
const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

const Rating: React.FC<Props> = ({ data }) => {
  data?.sort((a, b) => (a.rating > b.rating ? -1 : 1));

  return (
    <>
      <div className="my-6 flex justify-between">
        <h1 className="text-3xl font-bold ">Najlepsze według ocen</h1>
        <div className="flex gap-1">
          <button className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer">
            <CaretLeft size={20} />
          </button>
          <button className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer">
            <CaretRight size={20} />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden  ">
        
        {data ? data?.map((item) => (
          <CardFlex key={item._id} item={item} />
        )) : skeleton.map((item) => (<SkeletonCardFlex key={item}/>))}
      </div>
    </>
  );
};

export default Rating;
