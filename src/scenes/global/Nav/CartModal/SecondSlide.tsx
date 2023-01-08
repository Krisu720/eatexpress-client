import React, { useState } from "react";
import { X, CaretLeft } from "phosphor-react";
import {
  cartModal,
  cartTotal,
  useCartModal,
} from "../../../../hooks/useCartModal";
import Adres from "../../components/Adres";
import Method from "../../components/Method";
import axios from "../../../../axios";
import { useAuthStore } from "../../../../hooks/useAuth";

interface Props {
  changeSlide: (slide: number) => void;
}

type method = "cash" | "card";

enum methods {
  cash = "cash",
  card = "card",
}

type address = {
  name: string;
  street: string;
  number: string;
  city: string;
};

const SecondSlide: React.FC<Props> = ({ changeSlide }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const setNewAddress = (address: address | "none") => {
    if (address === "none") setAddress(null);
    else setAddress(address);
    setOpenModal(false);
  };

  const { switchOpened } = useCartModal();
  const { products, removeAllProducts } = cartModal();

  const { user } = useAuthStore();

  console.log(user?.address);

  const [address, setAddress] = useState<address | null>(
    user ? user.address.favourite : null
  );
  const [method, setMethod] = useState<string>(methods.card);

  const sendReq = async () => {
    if (address !== null) {
      const changedProducts = products.map((item) => {
        return {
          _id: item._id,
          option: item.option?.name ? item.option.name : null,
          quantity: item.quantity,
        };
      });
      try {
        const res = await axios.post("/order", {
          products: changedProducts,
          method,
          address,
          userId: user?._id,
        });
        if ((res.status = 200)) {
          removeAllProducts();
          switchOpened();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      {openModal && (
        <>
          <div
            className="left-0 top-0 z-40 fixed w-full h-full bg-black opacity-40"
            onClick={() => setOpenModal(false)}
          />
          <div className="fixed left-[50%] top-[50%] w-[95%]  bg-gray-100  shadow rounded translate-x-[-50%] translate-y-[-50%] z-50 p-5">
            {user?.address.favourite && (
              <div
                className="flex items-center p-4 mx-2 border-2 mb-10 my-3 border-yellow-500 rounded select-none hover:opacity-80 cursor-pointer"
                onClick={() =>
                  setNewAddress({
                    number: user.address.favourite.number,
                    name: user.address.favourite.name,
                    city: user.address.favourite.city,
                    street: user.address.favourite.street,
                  })
                }
              >
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img
                    src="https://i.insider.com/5c954296dc67671dc8346930?width=1136&format=jpeg"
                    className="h-14 w-14 rounded-full"
                  />
                </div>
                <div className="ml-5">
                  <h1 className="text-lg font-semibold">
                    {user.address.favourite.name}
                  </h1>
                  <h2 className="text-gray-500 text-sm">
                    {user.address.favourite.street} /{" "}
                    {user.address.favourite.number}
                  </h2>
                  <h2 className="text-gray-500 text-sm">
                    {user.address.favourite.city}
                  </h2>
                </div>
              </div>
            )}
            {user?.address.other.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 mx-2 border-2 my-3 rounded select-none hover:opacity-80 cursor-pointer"
                onClick={() =>
                  setNewAddress({
                    number: item.number,
                    name: item.name,
                    city: item.city,
                    street: item.street,
                  })
                }
              >
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img
                    src="https://i.insider.com/5c954296dc67671dc8346930?width=1136&format=jpeg"
                    className="h-14 w-14 rounded-full"
                  />
                </div>
                <div className="ml-5">
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  <h2 className="text-gray-500 text-sm">
                    {item.street} / {item.number}
                  </h2>
                  <h2 className="text-gray-500 text-sm">{item.city}</h2>
                </div>
              </div>
            ))}
            <button
              className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded"
              onClick={() => setNewAddress('none')}
            >
              Wprowadź nowy adres
            </button>
          </div>
        </>
      )}
      <div className="flex justify-between items-center">
        <CaretLeft
          className="cursor-pointer text-white bg-black transition-all hover:opacity-80 p-1  rounded-full"
          size={25}
          weight="bold"
          onClick={() => changeSlide(1)}
        />
        <h1 className="font-semibold text-lg">Płatność</h1>
        <X
          weight="bold"
          className="cursor-pointer text-white bg-black transition-all hover:opacity-80 p-1  rounded-full"
          size={25}
          onClick={() => switchOpened()}
        />
      </div>
      <div className="flex-1">
        <Adres
          address={address}
          setAddress={setAddress}
          setOpenModal={setOpenModal}
        />
        <Method method={method} setMethod={setMethod} methods={methods} />
        <div className="my-7  mx-4 rounded border-2 p-2">
          {products.map((item) => (
            <div key={item._id} className="flex mb-2 justify-between">
              <div>
                <h1>
                  {item.name}{" "}
                  <span className="text-gray-500 text-xs font-semibold">
                    x{item.quantity}
                  </span>
                </h1>
                <h2 className="text-gray-500 font-bold text-xs">
                  {item.option?.name}
                </h2>
              </div>
              {item.option?.price ? (
                <h1>{(item.option.price + item.price) * item.quantity}zł</h1>
              ) : (
                <h1>{item.price * item.quantity}zł</h1>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex mx-2">
          <div className="rounded-lg w-1/2 bg-gray-200 m-2 p-4">
            <h1 className="text-lg font-semibold">Za darmo</h1>
            <h2 className="text-sm text-gray-400 font-semibold">Dostawa</h2>
          </div>
          <div className="rounded-lg w-1/2 bg-gray-200 m-2 p-4">
            <h1 className="text-lg font-semibold">{cartTotal()}zł</h1>
            <h2 className="text-sm text-gray-400 font-semibold">Razem</h2>
          </div>
        </div>
        <button
          className="select-none bg-black py-4 text-white font-semibold px-4 mt-5 w-full rounded"
          onClick={() => sendReq()}
        >
          Zapłać
        </button>
      </div>
    </>
  );
};

export default SecondSlide;
