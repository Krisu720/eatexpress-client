import React from "react";
import Banner from "./Banner";
import AllProducts from "./AllProducts";
import Featured from "./Featured";
import Rating from "./Rating";
import DefaultMargin from "../../defaultMargin";
import { products } from "../../types";
import usePublicFetch from "../../hooks/usePublicFetch";

const index: React.FC = () => {
  const data: products[] = usePublicFetch("http://localhost:5000/restaurants");

  return (
    <DefaultMargin>
      <Featured data={data} />
      <Banner />
      <Rating data={data} />
      <AllProducts data={data} />
    </DefaultMargin>
  );
};

export default index;
