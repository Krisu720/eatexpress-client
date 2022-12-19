import React from 'react'
import { cartModal } from '../../../hooks/useCartModal';


interface props {
  _id: string;
  name: string;
  img: string;
  price: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OptionModal = ({_id,name,img,price,setOpen}:props) => {

  const {addProduct,products} = cartModal()

  const addOption = () => {

    addProduct({
      _id,
      name,
      img,
      price
    })
    setOpen(false)
  }

  return (
    <>
    <div className="left-0 top-0 z-40 fixed w-full h-full bg-black opacity-40" />
    <div className="fixed left-[50%] top-[50%] min-w-[350px]  bg-gray-100  shadow rounded translate-x-[-50%] translate-y-[-50%] z-50 grid grid-cols-1 lg:grid-cols-2 p-5">
      <div className="sticky top-0">
        <img src={img} />
      </div>
      <div className="p-5">
        <h1 className="font-semibold text-3xl">
          {name}
        </h1>
        <h2 className="font-semibold text-xl">{price}zł</h2>
        <h3 className=" text-sm">Rozmiar porcji do wyboru.</h3>
        <div className="bg-gray-200 p-5">
          <h1 className="font-bold text-lg">Rozmiar do Wyboru</h1>
          <h2 className="text-purple-500 text-sm">Wymagane</h2>
        </div>
        <div className="flex items-center mx-4 border-b border-gray-400 select-none hover:bg-gray-200">
          <label htmlFor="mala" className=" flex-1 cursor-pointer p-3">
            Mała <span className="text-gray-500 font-thin">6,00zł</span>
          </label>
          <input
            id="mala"
            type="radio"
            name="rozmiar"
            className="cursor-pointer mr-3 appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-purple-500 checked:border-purple-900 focus:outline-none transition duration-200"
            
          />
        </div>
        <div className="flex items-center mx-4 border-b border-gray-400 select-none hover:bg-gray-200">
          <label htmlFor="srednia" className=" flex-1 cursor-pointer p-3">
            Średnia{" "}
            <span className="text-gray-500 font-thin">12,00zł</span>
          </label>
          <input
            id="srednia"
            type="radio"
            name="rozmiar"
            className="cursor-pointer mr-3 appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-purple-500 checked:border-purple-900 focus:outline-none transition duration-200"

          />
        </div>
        <div className="flex items-center mx-4 select-none hover:bg-gray-200 ">
          <label htmlFor="duza" className=" flex-1 cursor-pointer p-3">
            Duża <span className="text-gray-500 font-thin">18,00zł</span>
          </label>
          <input
            id="duza"
            type="radio"
            name="rozmiar"
            className="cursor-pointer mr-3 appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-purple-500 checked:border-purple-900 focus:outline-none transition duration-200"

          />
        </div>
        <button className="select-none bg-black py-3 text-white font-semibold px-4 mt-5 w-full" onClick={()=>addOption()}>
          Dodaj 1 do zamówienia • {price}zł
        </button>
      </div>
    </div>
  </>
  )
}

export default OptionModal