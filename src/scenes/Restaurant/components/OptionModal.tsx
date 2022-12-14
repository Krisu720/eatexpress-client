import React from 'react'

const OptionModal = () => {
  return (
    <div>
    <div className="bg-black left-0 top-0 z-40 fixed w-full h-full opacity-40" />
    <div className="fixed left-[50%] top-[50%]  bg-gray-100 border-2 border-gray-300 shadow-xl rounded translate-x-[-50%] translate-y-[-50%] z-50 grid grid-cols-2 p-5">
      <div className="sticky top-0">
        <img src="https://tb-static.uber.com/prod/image-proc/processed_images/bd6f712f7dd4b22f25a262f1db56032e/5954bcb006b10dbfd0bc160f6370faf3.jpeg" />
      </div>
      <div className="p-5">
        <h1 className="font-semibold text-3xl">
          Wasz box - dowolny smak pizzy
        </h1>
        <h2 className="font-semibold text-xl">46.99zł</h2>
        <h3 className=" text-sm">Rozmiar porcji do wyboru.</h3>
        <div className="bg-gray-200 p-5">
          <h1 className="font-bold text-lg">Rozmiar do Wyboru</h1>
          <h2 className="text-purple-500 text-sm">Wymagane</h2>
        </div>
        <div className="flex items-center mx-4 border-b border-gray-400 select-none hover:bg-gray-200">
          <label for="mala" className=" flex-1 cursor-pointer p-3">
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
          <label for="srednia" className=" flex-1 cursor-pointer p-3">
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
          <label for="duza" className=" flex-1 cursor-pointer p-3">
            Duża <span className="text-gray-500 font-thin">18,00zł</span>
          </label>
          <input
            id="duza"
            type="radio"
            name="rozmiar"
            className="cursor-pointer mr-3 appearance-none rounded-full h-4 w-4 border-2 border-gray-300 bg-white checked:bg-purple-500 checked:border-purple-900 focus:outline-none transition duration-200"

          />
        </div>
        <button className="select-none bg-black py-3 text-white font-semibold px-4 mt-5 w-full">
          Dodaj 1 do zamówienia • 46,99zł
        </button>
      </div>
    </div>
  </div>
  )
}

export default OptionModal