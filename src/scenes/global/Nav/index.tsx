import React from "react";
import SearchInput from "../components/SearchInput";
import logo from "../../../assets/logo.svg";
import { ShoppingCart, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import CartModal from "./CartModal";
import { AnimatePresence } from "framer-motion";
import { cartModal, useCartModal } from "../../../hooks/useCartModal";
import FloatingScroll from "../components/FloatingScroll";


const index: React.FC = () => {
  const logged = false;
  const navigate = useNavigate();

  const { isOpened, switchOpened } = useCartModal();

  const { products } = cartModal();

  return (
    <>
      <FloatingScroll />
      <div className="px-6 sm:px-16 flex justify-center items-center z-50 transition-all">
        <div className="xl:max-w-[1200px] w-full">
          <AnimatePresence>{isOpened && <CartModal />}</AnimatePresence>
          <div className="flex items-center py-2 gap-2 justify-between md:justify-start  ">
            <img
              src={logo}
              className="cursor-pointer transition-all w-[85px] sm:w-[115px]"
              onClick={() => navigate("/")}
            />
            <div className="hidden  md:block flex-1 ">
              <SearchInput />
            </div>
            <div className="flex gap-2 ">
              <div
                className="bg-black relative text-white text-xs sm:text-base rounded-full px-4 py-2 select-none cursor-pointer flex items-center gap-1 hover:opacity-80 transition-all"
                onClick={() => switchOpened()}
              >
                {products.length > 0 && (
                  <div className="absolute text-white bg-purple-600 w-7 rounded-full flex justify-center right-[-8px] top-[-8px] ">
                    {products.length}
                  </div>
                )}
                <ShoppingCart size={24} />
                <span>Koszyk</span>
              </div>
              {logged ? (
                <div className="bg-black text-white px-2 py-2 rounded-full text-xs sm:text-base select-none cursor-pointer hover:opacity-80">
                  <User size={24} />
                </div>
              ) : (
                <div
                  className="
                  bg-black text-white text-xs sm:text-base
                rounded-full px-4 py-2 select-none cursor-pointer flex items-center gap-1 hover:opacity-80 transition-all"
                  onClick={() => navigate("/login")}
                >
                  <User size={24} />
                  <span>Zaloguj się</span>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden mb-3">
            <SearchInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
