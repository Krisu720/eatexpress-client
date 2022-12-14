import React from "react";
import { Package, CaretLeft, CaretRight } from "phosphor-react";
import { Products } from "../../global/const";

const Featured = () => {
  return (
    <>
      <div className="my-6 flex justify-between">
        <h1 className="text-3xl font-bold ">Wyróżnione</h1>
        <div className="flex gap-1">
          <div className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer">
            <CaretLeft size={20} />
          </div>
          <div className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer">
            <CaretRight size={20} />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {Products.map((item) => (
          <div key={item.name} className=" cursor-pointer hover:opacity-80 w-1/4 p-1">
            <div className="relative">
              <img src={item.img} className="h-40 w-full " />
              <div className="absolute bottom-2 right-2 bg-black text-white p-2 rounded">{item.rating}</div>
            </div>
            <div className="bg-white py-2 px-2">
              <h1 className="font-semibold text-xl">{item.name}</h1>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <h2>{item.deliveryTime}</h2>
                <h2>•</h2>
                <Package />
                <h2> {item.deliveryCost}zł</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Featured;
