import React from "react";

const Register: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full lg:w-1/2 ">
      <h1 className="font-semibold text-3xl">Zarejestruj się</h1>
      <form className=" min-w-[300px] mt-10" >
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
          autoComplete="on"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
        />
        <p className="mt-5">Powtórz Hasło</p>
        <input
          type="password"
          placeholder="*********"
          autoComplete="on"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
        />
        <p className="mt-5">Adres</p>
        <input
          type="text"
          placeholder="ul. Warszawska 41/50"
          autoComplete="on"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
        />
        <button className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded">
          Zarejestuj
        </button>
      </form>
    </div>
  );
};

export default Register;
