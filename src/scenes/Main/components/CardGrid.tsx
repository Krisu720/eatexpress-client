import { Package } from "phosphor-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../../types";

interface Props {
  item: products;
}

const CardGrid: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className=" cursor-pointer hover:opacity-80 "
      onClick={() => navigate(`/${item._id}`)}
    >
      <div className="relative">
        <div
          className="h-40 w-full "
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
          }}
        />
        <div className="absolute bottom-2 right-2 bg-black text-white p-2 rounded-full">
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

export default CardGrid;
