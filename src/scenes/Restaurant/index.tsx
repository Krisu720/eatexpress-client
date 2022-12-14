import { Package, Star } from "phosphor-react";
import React, { useState } from "react";
import Product from "./components/Product";
import { Link, animateScroll as scroll } from "react-scroll";
import { singleproductconst } from "../global/const";
import OptionModal from "./components/OptionModal";
const index = () => {
  const [optionModal, setOptionModal] = useState<boolean>(false);

  return (
    <div className="px-6 sm:px-16 flex justify-center items-center ">
      <div className="xl:max-w-[1200px] w-full ">
        {optionModal && <OptionModal />}
        <div
          className="w-full h-80 flex flex-col justify-end relative overflow-hidden"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url('${singleproductconst.img}')`,
          }}
        >
          <div className="p-5 z-20">
            <h1 className="text-white text-7xl font-bold">
              {singleproductconst.name}
            </h1>
            <h2 className="text-white text-2xl font-bold ">
              {singleproductconst.openingTime}
            </h2>
            <h2 className="text-white text-md font-bold flex items-center gap-5">
              {singleproductconst.deliveryTime}
              <span className="flex items-center gap-1">
                <Package /> {singleproductconst.deliveryCost}zł
              </span>
            </h2>
          </div>
          <div className="absolute w-full h-full bg-gradient-to-r from-black z-10 opacity-50"></div>
        </div>
        <div className="h-10" />
        <div className="grid grid-cols-4 ">
          <div className="col-span-1 mt-5 ">
            <ul className="text-xl flex flex-col gap-2 sticky top-[110px]">
              {singleproductconst.products?.map((item) => (
                <Link to={item.id} smooth={true} offset={-110} duration={500}>
                  <li className="cursor-pointer hover:underline">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className=" col-span-3">
            {singleproductconst.products?.map((item) => (
              <>
                <div className={`text-2xl font-semibold my-5 ${item.id}`}>
                  {item.name}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {item.dishes.map((item) => (
                    <Product
                      key={item.id}
                      name={item.name}
                      img={item.img}
                      price={item.price}
                    />
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
