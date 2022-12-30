import React, { useEffect, useRef, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import usePublicFetch from "../../../hooks/usePublicFetch";
import { products } from "../../../types";
import { useNavigate } from "react-router-dom";
// import { Products } from "../const";



const SearchInput: React.FC = () => {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsFilled(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])
  

  const handleChange = (value: string) => {
    setContent(value);
    if (value.length > 1) setIsFilled(true);
    else setIsFilled(false);
  };

  const data:products[] = usePublicFetch('http://localhost:5000/restaurants')
  const navigate = useNavigate()


  return (
    <div className="relative">
      <div className="bg-white p-2 rounded-full">
        <div className="flex">
          <span className="text-gray-400">
            <MagnifyingGlass size={28} className='mr-2'/>
          </span>
          <input
          ref={inputRef}
            type="text"
            placeholder="Jedzenie, Restauracja itp (min. 3 znaki)"
            className="ml-2 outline-none rounded flex-1"
            onChange={(e) => handleChange(e.target.value)}
          />
        
        </div>
        
      </div>
      <div>
      {isFilled && (
        <div className="bg-white flex flex-col gap-3 p-3 mt-5 rounded absolute w-full z-30">
          {data?.filter((item) =>
            item.name.toLowerCase().includes(content.toLowerCase())
            ).map((item) => (
              <div
              key={item.name}
              className="flex p-3 items-center gap-2 hover:bg-gray-100 select-none cursor-pointer "
              onClick={() =>navigate(`/${item._id}`)}
              >
              <img src={item.img} className="rounded h-12 w-12" />
              <span className="text-xl">{item.name}</span>
            </div>
          ))}
          {data?.filter((item) =>
            item.name.toLowerCase().includes(content.toLowerCase())
            ).length !== 0 ? (
              <></>
              ) : (
                <span className="text-center">brak wyników</span>
                )}
        </div>
      )}
      </div>
    </div>
  );
};

export default SearchInput;
