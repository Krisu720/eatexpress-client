import React, { useState } from "react";
import OptionModal from "./OptionModal";

interface props {
  _id: string;
  name: string;
  img: string;
  price: number;
}

const Product = ({_id, name, img, price }: props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {open && <OptionModal name={name} img={img} price={price} _id={_id} setOpen={setOpen} />}
      <div className="cursor-pointer hover:opacity-80 select-none" onClick={()=>setOpen(prev=>!prev)}>
        <img src={img} />
        <div className="bg-white  p-3">
          <h1 className="font-semibold">{name}</h1>
          <h2 className="text-gray-600">{price}zł</h2>
        </div>
      </div>
    </>
  );
};

export default Product;
