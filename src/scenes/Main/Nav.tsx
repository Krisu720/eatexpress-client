import React from "react";
import SearchInput from "./components/SearchInput";
import logo from "../../assets/logo.svg";
import { ShoppingCart, User } from "phosphor-react";

const Nav = () => {
  const logged = false;

  return (
    <>
      <div className="flex items-center py-2 gap-2 justify-between md:justify-start">
        <img src={logo} width="115px" />
        <div className="hidden  md:block flex-1 ">
          <SearchInput />
        </div>
        <div className="flex gap-2">
          <div className="bg-black rounded-full px-4 py-2 select-none cursor-pointer flex items-center gap-1 hover:opacity-80 ">
            <ShoppingCart className="text-white" size={24} />
            <span className="text-white ">Koszyk</span>
          </div>
          {logged ? (
            <div className="bg-black px-2 py-2 rounded-full text-white select-none cursor-pointer hover:opacity-80">
              <User size={24} />
            </div>
          ) : (
            <div className="bg-black rounded-full px-4 py-2 select-none cursor-pointer flex items-center gap-1 hover:opacity-80">
              <User className="text-white" size={24} />
              <span className="text-white">Zaloguj się</span>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden">
        <SearchInput />
      </div>
    </>
  );
};

export default Nav;
