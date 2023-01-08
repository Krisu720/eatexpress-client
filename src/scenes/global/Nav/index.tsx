import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import logo from "../../../assets/logo.svg";
import { ShoppingCart, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import CartModal from "./CartModal";
import { AnimatePresence } from "framer-motion";
import { cartModal, useCartModal } from "../../../hooks/useCartModal";
import FloatingScroll from "../components/FloatingScroll";
import { useAuthStore } from "../../../hooks/useAuth";

const index: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const logged = true;
  const navigate = useNavigate();

  const { isOpened, switchOpened } = useCartModal();
  const {user,logoutUser} = useAuthStore()
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
              {user ? (
                <div className="bg-black text-white px-2 py-2 rounded-full text-xs sm:text-base select-none cursor-pointer relative" onClick={() => setMenu(prev=>!prev)}>
                  <User size={24}  />
                  {menu && (
                    <div className="absolute bottom-[-90px] before:w-2 before:h-2 before:right-4 before:top-[-3px] before:rotate-45 before:bg-black before:absolute before:z-[-10] right-0 z-30  ">
                      <div className="rounded-lg overflow-hidden flex flex-col">
                        <button className="bg-black px-4 py-2 hover:bg-white hover:text-black transition-all" onClick={()=>navigate('/settings')}>
                          Ustawienia
                        </button>
                        <button className="bg-black px-4 py-2 hover:bg-white hover:text-black transition-all" onClick={()=>logoutUser()}>Wyloguj</button>
                      </div>
                    </div>
                  )}
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
