import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { useAuthStore } from "../../hooks/useAuth";
interface Order {
  address: {
    name: string;
    street: string;
    city: string;
    number: string;
  };
  products: [
    {
      _id: {
        _id: string;
        name: string;
        price: number;
        img: string;
        options: {
          sizes: [
            {
              name: string;
              price: number;
              _id: string;
            }
          ];
        };
        createdAt: string;
        updatedAt: string;
        __v: number;
      } | null;
      quantity: number;
    }
  ];
  status: string;
  method: string;
  _id: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

const Orders: React.FC = () => {
  const { user } = useAuthStore();

  const [data, setData] = useState<Order[] | null>(null);

  console.log(data);

  useEffect(() => {
    const get = async () => {
      const res = await axios.get(`/order/${user?._id}`);
      setData(res.data as Order[]);
    };
    get();
  }, []);

  const convertDate = (date: string) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}.${
      newDate.getMonth() + 1
    }.${newDate.getFullYear()}`;
  };

  const sortByDate = (a: string, b: string) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB.getTime() - dateA.getTime();
  };
  // const orders = user?.orders
  // orders?.sort((a, b) => sortByDate(a.createdAt, b.createdAt));

  data?.sort((a, b) => sortByDate(a.createdAt, b.createdAt));

  return (
    <div className="flex flex-col p-3 mt-2">
      {data?.map((item) => (
        <div
          key={item._id}
          className="p-3 border-2 border-gray-400 rounded-xl my-2"
        >
          <h1 className="text-3xl font-semibold">
            Order <span className="text-xl text-gray-500">{item._id}</span>
          </h1>

          {item.products.map((item, index) => (
            <div key={index} className='my-2'>
              <div className="flex items-center gap-2">
                <h1 className="text-gray-500">{item.quantity} x</h1>
                <img src={item._id?.img} className="h-10 w-10" />
                <h2 className="text-gray-500">{item._id?.name}</h2>
                <h2 className="">{item._id?.price} zł</h2>
              </div>
            </div>
          ))}
          <h2>
            <span className="text-gray-500">Data zamówienia:</span>{" "}
            {convertDate(item.createdAt)}
          </h2>
          <h2>
            <span className="text-gray-500">Płatność:</span> {item.method}
          </h2>
          <h2>
            <span className="text-gray-500">Status:</span>
            <span className="text-green-600"> {item.status}</span>
          </h2>
          <h2>
            <span className="text-gray-500">Adres:</span> {item.address.city}{" "}
            {item.address.street}/{item.address.number}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Orders;
