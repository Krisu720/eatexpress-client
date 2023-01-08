import React, { useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { products } from "../../types";
import CardFlex from "./components/CardFlex";

interface Props {
  data: products[];
}

const Featured: React.FC<Props> = ({ data }) => {
  const [x, setX] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  console.log(x)

useEffect(() => {
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  })

  return () => {
    window.removeEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  }
}, [])

  return (
    <>
      <div className="my-6 flex justify-between">
        <h1 className="text-3xl font-bold ">Wyróżnione</h1>
        <div className="flex gap-1">
          <div
            className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer"
            onClick={() => setX((prev) => prev + 1)}
          >
            <CaretLeft size={20} />
          </div>
          <div
            className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer"
            onClick={() => setX((prev) => prev - 1)}
          >
            <CaretRight size={20} />
          </div>
        </div>
      </div>
      {/* w-full sm:w-1/2 lg:w-1/4  */}
      <div className="overflow-hidden ">
        <div
          className="flex transition-all "
        >
          {data?.map((item) => (
            <CardFlex x={x} width={width} key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
