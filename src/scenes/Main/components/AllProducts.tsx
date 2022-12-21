import React from "react";
// import { Products } from "../../global/const";
import { Package } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import usePublicFetch from "../../../hooks/usePublicFetch";

const AllProducts = () => {

  const navigate = useNavigate()
  const data = usePublicFetch('http://localhost:5000/restaurants')
  return (
    <>
      <div className="my-6 ">
        <h1 className="text-3xl font-bold ">Wszystkie restauracje</h1>
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-2  lg:grid-cols-4 overflow-hidden gap-3 ">
        {data?.map((item) => (
          <div key={item._id} className=" cursor-pointer hover:opacity-80 " onClick={()=>navigate(`/${item._id}`)}>
            <div className="relative">
              <div  className="h-40 w-full " style={{backgroundImage: `url(${item.img})`,backgroundSize: 'cover'}} />
              <div className="absolute bottom-2 right-2 bg-black text-white p-2 rounded">{item.rating}</div>
            </div>

            <div className="bg-white py-2 px-2">
              <h1 className="font-semibold text-xl">{item.name}</h1>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <h2>{item.deliveryTime}</h2>
                <h2>•</h2>
                <Package />
                <h2> {item.deliveryCost}zł</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
