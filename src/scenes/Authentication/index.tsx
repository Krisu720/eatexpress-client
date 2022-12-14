import React from "react";
import Nav from "../global/Nav";
import Logo from '../../assets/logo.svg' 
import { useNavigate } from "react-router-dom";
const index = () => {

  const navigate = useNavigate()


  return (
    <div className="px-6 sm:px-16 flex justify-center items-center">
      <div className="xl:max-w-[1200px] w-full ">
        <div className="w-full h-full md:flex justify-center items-center">
          <div className="flex flex-col items-center w-full md:w-1/2 ">
            <h1 className="font-semibold text-3xl">Zaloguj się</h1>
            <div className=" min-w-[300px] mt-10">
              <p>Adres Email</p>
              <input
                type="text"
                placeholder="example@example.com"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
              />
              <div className="flex justify-between mt-5">
                <p>Hasło</p>
                <p className="text-purple-500 cursor-pointer hover:text-purple-800">
                  Zapomniałeś hasła?
                </p>
              </div>
              <input
                type="password"
                placeholder="*********"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
              />
              <button className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded">Zaloguj</button>
            </div>
          </div>
          <div className="w-0.5 h-full bg-black relative hidden md:block">
            <div className="absolute bg-white p-2 border-2 hidden md:block border-black rounded-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">lub</div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 ">
            <h1 className="font-semibold text-3xl">Zarejestruj się</h1>
            <div className=" min-w-[300px] mt-10">
              <p>Adres Email</p>
              <input
                type="text"
                placeholder="example@example.com"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
              />
                <p className="mt-5">Hasło</p>
              <input
                type="password"
                placeholder="*********"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
              />
                <p className="mt-5">Powtórz Hasło</p>
              <input
                type="password"
                placeholder="*********"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
              />
              <p className="mt-5">Adres</p>
              <input
                type='text'
                placeholder='ul. Warszawska 41/50'
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
              />
              <button className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded">Zarejestuj</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
