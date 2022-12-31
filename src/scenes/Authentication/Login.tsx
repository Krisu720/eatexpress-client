import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full lg:w-1/2 ">
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
        <button className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded">
          Zaloguj
        </button>
      </div>
    </div>
  );
};

export default Login;
