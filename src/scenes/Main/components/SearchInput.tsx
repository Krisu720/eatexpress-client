import React, { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { Products } from "../const";



const SearchInput: React.FC = () => {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const handleChange = (value: string) => {
    setContent(value);
    if (value) setIsFilled(true);
    else setIsFilled(false);
  };

  return (
    <div className="relative">
      <div className="bg-white p-2 rounded-full">
        <div className="flex">
          <span className="text-gray-400">
            <MagnifyingGlass size={28} className='mr-2'/>
          </span>
          <input
            type="text"
            className="ml-2 outline-none rounded flex-1"
            onChange={(e) => handleChange(e.target.value)}
          />
        
        </div>
        
      </div>
      {isFilled && (
        <div className="bg-white flex flex-col gap-3 p-3 mt-5 rounded absolute w-full z-10">
          {Products.filter((item) =>
            item.name.toLowerCase().includes(content.toLowerCase())
          ).map((item) => (
            <div
              key={item.name}
              className="flex p-3 items-center gap-2 hover:bg-gray-100 select-none cursor-pointer "
            >
              <img src={item.img} className="h-8 rounded-full" />
              <span className="text-xl">{item.name}</span>
            </div>
          ))}
          {Products.filter((item) =>
            item.name.toLowerCase().includes(content.toLowerCase())
          ).length !== 0 ? (
            <></>
          ) : (
            <span className="text-center">brak wyników</span>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
