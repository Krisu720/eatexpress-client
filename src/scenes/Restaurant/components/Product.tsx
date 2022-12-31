import React, { useState } from "react";
import { dish } from "../../../types";
import OptionModal from "./OptionModal";

interface Props {
  item: dish;
  shopName: string;
}

const Product: React.FC<Props> = ({ item, shopName }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {open && (
        <OptionModal
          _id={item._id}
          img={item.img}
          name={item.name}
          price={item.price}
          options={item.options}
          shopName={shopName}
          setOpen={setOpen}
        />
      )}
      <div
        className="cursor-pointer hover:opacity-80 select-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div
          className="sm:h-40 h-60  w-ful"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
          }}
        />
        <div className="bg-white  p-3">
          <h1 className="font-semibold">{item.name}</h1>
          <h2 className="text-gray-600">{item.price}zł</h2>
        </div>
      </div>
    </>
  );
};

export default Product;
