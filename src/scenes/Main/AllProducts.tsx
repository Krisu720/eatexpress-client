import React from "react";
import { products } from "../../types";
import CardGrid from "./components/CardGrid";

interface Props {
  data: products[];
}

const AllProducts: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="my-6">
        <h1 className="text-3xl font-bold ">Wszystkie restauracje</h1>
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-2  lg:grid-cols-4 overflow-hidden gap-3 ">
        {data?.map((item) => (
          <CardGrid item={item} />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
