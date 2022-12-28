import React, { useState } from "react";
// import { singleproductconst } from "../const";
import { X } from "phosphor-react";
import { AnimatePresence, motion } from "framer-motion";
import { cartModal, useCartModal } from "../../../hooks/useCartModal";
import { useNavigate } from "react-router-dom";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";

const animation = {
  hidden: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.15,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.15,
    },
  },
};

const CartModal = () => {
  const [slide, setSlide] = useState<number>(1);

  const changeSlide = (slide: number) => {
    setSlide(slide);
  };

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed cartmodal bg-gray-50 z-50 right-0 top-0 h-full flex flex-col p-5 min-w-[350px] overflow-hidden"
    >
      {slide === 1 && <FirstSlide changeSlide={changeSlide} />}
      {slide === 2 && <SecondSlide changeSlide={changeSlide} />}
    </motion.div>
  );
};

export default CartModal;
