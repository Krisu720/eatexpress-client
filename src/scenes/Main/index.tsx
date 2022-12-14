import React, { useRef, useState } from "react";
import Restaurants from "./Restaurants";

const index = () => {

  return (
    <div className="px-6 sm:px-16 flex justify-center items-center ">
      <div className="xl:max-w-[1200px] w-full ">
        <Restaurants/>
      </div>
    </div>
  );
};

export default index;
