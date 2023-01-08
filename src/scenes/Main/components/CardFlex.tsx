import { Package } from "phosphor-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../../types";
import {motion} from 'framer-motion'
interface Props {
  item: products;
  width: number;
  x: number;
}

const CardFlex: React.FC<Props> = ({ item, width, x }) => {
  const navigate = useNavigate();

  const checkWidth = () => {
    if (width <= 640) return `${x * 100}%`;
    else if (width > 640 && width < 1024) return `${x * 200}%`;
    else if (width > 1024) return `${x * 400}%`;
  };
  // const checkWidth = () => {
  //   if (width <= 640) return `translate(${x * 100}%)`;
  //   else if (width > 640 && width < 1024) return `translate(${x * 100}%)`;
  //   else if (width > 1024) return `translate(${x * 100}%)`;
  // };


  const CartAnimation = {
    hidden: {
      opacity: 0,
      x: 0,
      scale: 0.95
    },
    show: {
      scale:1,
      opacity: 1,
      x: checkWidth()
    },
  }

  return (
    <motion.div
      key={item.name}
      className=" cursor-pointer w-full sm:w-1/2 lg:w-1/4 flex-shrink-0  hover:opacity-80 p-1"
      variants={CartAnimation}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(item._id)}
      // style={{ transform: checkWidth() }}
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
    </motion.div>
  );
};

export default CardFlex;
