import React from "react";
import Banner from "./components/Banner";
import AllProducts from "./components/AllProducts";
import Featured from "./components/Featured";
import Rating from "./components/Rating";
const Restaurants = () => {
  return (
    <div>
      <Featured/>
      <Banner/>
      <Rating/>
      <AllProducts/>
    </div>
  );
};

export default Restaurants;
