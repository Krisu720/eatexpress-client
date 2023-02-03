import { Package } from "phosphor-react";
import React from "react";
import { products } from "../../types";
import CardGrid from "./components/CardGrid";
import SkeletonCardGrid from "./components/SkeletonCardGrid";

interface Props {
  data: products[];
}

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

const AllProducts: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="my-6">
        <h1 className="text-3xl font-bold ">Wszystkie restauracje</h1>
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-2  lg:grid-cols-4 overflow-hidden gap-3 ">
        {data
          ? data?.map((item) => <CardGrid key={item._id} item={item} />)
          : skeleton.map((item) => <SkeletonCardGrid key={item}/>)}
      </div>
    </>
  );
};

export default AllProducts;
