import { Plus, Trash } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import { useAuthStore } from "../../hooks/useAuth";

interface User {
  _id: string;
  email: string;
  name: string;
  surname: string;
  address: {
    favourite: {
      name: string;
      street: string;
      city: string;
      number: string;
    };
    other: [
      {
        name: string;
        street: string;
        city: string;
        number: string;
      }
    ];
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const AccountSettings: React.FC = () => {
  const [data, setData] = useState<User | null>(null);

  const { user } = useAuthStore();

  useEffect(() => {
    const get = async () => {
      const res = await axios.get(`/user/${user?._id}`);
      setData(res.data as User);
    };
    get();
  }, []);

  const convertDate = (date: string) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}.${
      newDate.getMonth() + 1
    }.${newDate.getFullYear()}`;
  };

  return (
    <div>
      <h1 className="text-2xl font-bold ml-2 mt-4">Email</h1>
      {/* <div className="bg-gray-200  border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-500  leading-none text-2xl font-bold flex">
      {data?.email}
      </div> */}
      <input
        type="email"
        placeholder="email"
        value={data?.email}
        className="bg-gray-200 disabled:text-gray-500 disabled:bg-gray-300 disabled:border-gray-300 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
      />

      <h1 className="text-2xl font-bold">Imię</h1>
      <input
        type="text"
        placeholder="Imię"
        value={data?.name}
        className="bg-gray-200 disabled:text-gray-500 disabled:bg-gray-300 disabled:border-gray-300 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
      />
      <h1 className="text-2xl font-bold">Nazwisko</h1>
      <input
        type="text"
        placeholder="Imię"
        value={data?.surname}
        className="bg-gray-200 disabled:text-gray-500 disabled:bg-gray-300 disabled:border-gray-300 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
      />

      {/* <h1 className="text-2xl font-bold">Hasło</h1>
        <input
          type="password"
          placeholder="Stare hasło"
          className="bg-gray-200 disabled:text-gray-500 disabled:bg-gray-300 disabled:border-gray-300 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
        />
        <input
          type="password"
          placeholder="Nowe hasło"
          className="bg-gray-200 disabled:text-gray-500 disabled:bg-gray-300 disabled:border-gray-300 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
        /> */}
      <div className="flex justify-between items-center mt-2">
        <div>
          {data && (
            <h2 className="text-lg text-gray-500 font-bold">
              Stworzenie konta: {convertDate(data?.createdAt)}
            </h2>
          )}
          {data && (
            <h2 className="text-lg text-gray-500 font-bold">
              Ostatnia zmiana: {convertDate(data?.updatedAt)}
            </h2>
          )}
        </div>
        <div>
          <button
            disabled={true}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full disabled:bg-gray-400 disabled:text-gray-300"
          >
            Zapisz
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-semibold mt-12">Adresy</h1>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1">
        <div className="p-3">
          <div className="bg-white p-3 rounded-xl border-2 border-yellow-500 w-full h-40 ">
            <h1 className="text-2xl font-bold">
              {data?.address.favourite.name}
            </h1>
            <h1 className="text-lg font-semibold">
              {data?.address.favourite.street} /{" "}
              {data?.address.favourite.number}
            </h1>
            <h1 className="text-lg font-semibold">
              {data?.address.favourite.city}
            </h1>
            <button className="bg-red-300 text-black rounded-full p-3 hover:opacity-80">
              <Trash size={25} weight="bold" />
            </button>
          </div>
        </div>

        {data?.address.other.map((item) => (
          <div className="p-3">
            <div className="bg-white p-3 rounded-xl border-2 border-gray-200 w-full h-40">
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <h1 className="text-lg font-semibold">
                {item.city} / {item.number}
              </h1>
              <h1 className="text-lg font-semibold">
                {data?.address.favourite.city}
              </h1>
              <button className="bg-red-300 text-black rounded-full p-3 hover:opacity-80">
                <Trash size={25} weight="bold" />
              </button>
            </div>
          </div>
        ))}
        <div className=" p-3">
          <button className="bg-white p-3 rounded-xl border-2 border-gray-200 text-gray-300 w-full h-40 flex items-center justify-center hover:bg-gray-300 transition-all hover:text-gray-200">
            <Plus size={52} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
