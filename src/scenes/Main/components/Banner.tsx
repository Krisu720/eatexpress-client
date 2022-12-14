import React from "react";
import image from "../../../assets/Subway.png";
import image2 from "../../../assets/pizza.png";
const Banner = () => {
  return (
    <div className="flex my-4 flex-wrap ">
      <div className="w-full lg:w-1/3 h-52  p-3">
        <div className=" bg-green-700 h-full rounded-xl p-3 flex flex-col justify-around items-start relative overflow-hidden">
          <h1 className=" text-2xl text-white font-semibold z-10  select-none">
            15 zł zniżki na zamówienie z subway
          </h1>
          <h2 className="uppercase text-white z-10">Kod: nadchodzaswieta</h2>
          <button className="text-black bg-white px-3 py-1 rounded-full z-10  select-none">
            Sprawdź
          </button>
          <img
            src={image}
            className="absolute z-0 right-[-5rem] bottom-0  select-none"
          />
          <div className="bg-gradient-to-r from-[#000000] absolute w-full h-full top-0 left-0" />
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-52 p-3">
        <div className=" bg-blue-700 rounded-xl h-full p-3 flex flex-col justify-around items-start relative overflow-hidden">
          <h1 className=" text-2xl text-white font-semibold z-10  select-none">
            Darmowa dostawa we wszystkich pizzeriach
          </h1>
          <h2 className="uppercase text-white z-10">Kod: dostawapizzy</h2>
          <button className="text-black bg-white px-3 py-1 rounded-full z-10  select-none">
            Sprawdź
          </button>
          <img
            src={image2}
            className="absolute z-0 right-[-5rem] bottom-0  select-none"
          />
          <div className="bg-gradient-to-r from-[#000000] absolute w-full h-full top-0 left-0" />
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-52 p-3">
        <div className=" bg-blue-700 h-full rounded-xl p-3 flex flex-col justify-around items-start relative overflow-hidden">
          <h1 className=" text-2xl text-white font-semibold z-10  select-none">
            Darmowa dostawa we wszystkich pizzeriach
          </h1>
          <h2 className="uppercase text-white z-10">Kod: dostawapizzy</h2>
          <button className="text-black bg-white px-3 py-1 rounded-full z-10  select-none">
            Sprawdź
          </button>
          <img
            src={image2}
            className="absolute z-0 right-[-5rem] bottom-0  select-none"
          />
          <div className="bg-gradient-to-r from-[#000000] absolute w-full h-full top-0 left-0" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
