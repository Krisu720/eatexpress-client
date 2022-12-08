import React from "react";
import { Products } from "../const";
import { Package } from "phosphor-react";

const AllProducts = () => {
  return (
    <>
      <div className="my-6 ">
        <h1 className="text-3xl font-bold ">Wszystkie restauracje</h1>
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-2  lg:grid-cols-4 overflow-hidden gap-3 ">
        {Products.map((item) => (
          <div key={item.name} className=" cursor-pointer hover:opacity-80 ">
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

export default AllProducts;
