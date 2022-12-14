import React from 'react'

interface props {
  name: string;
  img: string;
  price: number;
}



const Product = ({name,img,price}:props) => {
  return (
    <div className='cursor-pointer hover:opacity-80'>
    <img src={img}/>
    <div className="bg-white select-none p-3">
      <h1 className="font-semibold">
        {name}
      </h1>
      <h2 className="text-gray-600">
        {price}zł
      </h2>
    </div>
    </div>
  )
}

export default Product