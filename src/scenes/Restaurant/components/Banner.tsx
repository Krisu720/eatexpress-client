import { Package } from "phosphor-react";
import React from "react";
import { products } from "../../../types";

interface Props {
  data: products;
}

const Banner: React.FC<Props> = ({ data }) => {
  return (
    <div
      className="w-full h-80 flex flex-col justify-end relative overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${data?.img}')`,
      }}
    >
      <div className="p-5 z-20">
        <h1 className="text-white text-5xl sm:text-7xl font-bold">
          {data?.name}
        </h1>
        <h2 className="text-white text-xl sm:text-2xl font-bold ">
          {data?.openingTime}
        </h2>
        <h2 className="text-white text-md font-bold flex items-center gap-5">
          {data?.deliveryTime}
          <span className="flex items-center gap-1">
            <Package /> {data?.deliveryCost}zł
          </span>
        </h2>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-black z-10 opacity-50"></div>
    </div>
  );
};

export default Banner;
