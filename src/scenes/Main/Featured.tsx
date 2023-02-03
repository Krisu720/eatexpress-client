import React, { useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { products } from "../../types";
import CardFlex from "./components/CardFlex";
import {motion} from 'framer-motion'
import SkeletonCardFlex from "./components/SkeletonCardFlex";
interface Props {
  data: products[];
}
const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

const Featured: React.FC<Props> = ({ data }) => {
  const [x, setX] = useState<number>(0);

  const [slidesWidth, setSlidesWidth] = useState<number>(0)
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [singleSlideWidth, setSingleSlideWidth] = useState<number>(0)
  const [sildesNumber, setSildesNumber] = useState<number>(0)
  
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const slider = containerRef.current;
    let slidesWidth = 0;

    Array.from(slider?.children || []).forEach((slide) => {
      const slideWidth = slide.clientWidth;
      slidesWidth += slideWidth;
    });

    setSildesNumber(slider?.children.length || 0)
    setSlidesWidth(slidesWidth);
    setContainerWidth(slider?.clientWidth ? slider?.clientWidth : 0);
    const children = slider?.children[0] as HTMLDivElement;
    setSingleSlideWidth(children ? children.clientWidth : 0);
    singleSlideWidth

  });

  
  return (
    <>
      <div className="my-6 flex justify-between">
        <h1 className="text-3xl font-bold ">Wyróżnione</h1>
        <div className="flex gap-1">
          <button
            className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer disabled:bg-gray-500"
            onClick={() => setX((prev) => prev + 1)}
            disabled={x === 0}
          >
            <CaretLeft size={20} />
          </button>
          <button
            className="bg-black rounded-full h-8 w-8 text-white flex justify-center items-center hover:opacity-80 cursor-pointer disabled:bg-gray-500"
            onClick={() => setX((prev) => prev - 1)}
            disabled={x === sildesNumber*-1+4 }
          >
            <CaretRight size={20} />
          </button>
        </div>
      </div>
      {/* w-full sm:w-1/2 lg:w-1/4  */}
      <div className="overflow-hidden">
        <motion.div ref={containerRef} className="flex" drag='x' dragConstraints={{left: containerWidth - slidesWidth,right: 0}} animate={{x: x*singleSlideWidth}}> 
        {data ? data?.map((item) => (
          <CardFlex key={item._id} item={item} />
        )) : skeleton.map((item) => (<SkeletonCardFlex key={item}/>))}
        </motion.div>
      </div>
    </>
  );
};

export default Featured;
