import { Package } from "phosphor-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../../types";
interface Props {
  item: products;
}

const CardFlex: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate();


  return (
    <div
      key={item.name}
      className=" cursor-pointer w-full sm:w-1/2 lg:w-1/4 flex-shrink-0  hover:opacity-80 p-1"
      onClick={() => navigate(item._id)}
    >
      <div className="relative">
        <img src={item.img} className="h-40 w-full " />
        <div className="absolute bottom-2 right-2 bg-black text-white p-2 rounded">
          {item.rating}
        </div>
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
  );
};

export default CardFlex;
