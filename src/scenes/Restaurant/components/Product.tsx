import React, { useState } from "react";
import { dish } from "../../global/const";
import OptionModal from "./OptionModal";

interface props {
  item: dish;
}



const Product = ({ item }: props) => {
  const [open, setOpen] = useState<boolean>(false);


  return (
    <>
      {open && <OptionModal _id={item._id} img={item.img} name={item.name} price={item.price} options={item.options} setOpen={setOpen} />}
      <div className="cursor-pointer hover:opacity-80 select-none" onClick={()=>setOpen(prev=>!prev)}>
        <img src={item.img} />
        <div className="bg-white  p-3">
          <h1 className="font-semibold">{item.name}</h1>
          <h2 className="text-gray-600">{item.price}zł</h2>
        </div>
      </div>
    </>
  );
};

export default Product;
