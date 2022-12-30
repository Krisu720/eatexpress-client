import { Package, Star } from "phosphor-react";
import React, { useState } from "react";
import Product from "./components/Product";
import { Link, animateScroll as scroll } from "react-scroll";
import { products } from "../../types";
import usePublicFetch from "../../hooks/usePublicFetch";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import DefaultMargin from "../../defaultMargin";

const index: React.FC = () => {
  const { id } = useParams();
  const data: products = usePublicFetch(
    `http://localhost:5000/restaurants/${id}`
  );

  return (
    <DefaultMargin>
      <Banner data={data} />
      <div className="grid grid-cols-4 mt-10">
        <div className="hidden sm:block sm:col-span-1 mt-5 ">
          <ul className="text-xl flex flex-col gap-2 sticky top-5">
            {data?.products?.map((item) => (
              <Link to={item._id} smooth={true} offset={-20} duration={500}>
                <li className="cursor-pointer hover:underline">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="col-span-4 sm:col-span-3">
          {data?.products?.map((item) => (
            <>
              <div className={`text-2xl font-semibold my-5 ${item._id}`}>
                {item.name}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {item.dishes.map((item) => (
                  <Product key={item._id} item={item} shopName={data?.name} />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </DefaultMargin>
  );
};

export default index;
