import React, { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import logo from "../../assets/logo.svg";
import logodark from "../../assets/logodark.svg";
import { CaretUp, ShoppingCart, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import CartModal from "./components/CartModal";
import { AnimatePresence, motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { useCartModal } from "../../hooks/useCartModal";
const Nav = () => {
  const logged = false;
  const navigate = useNavigate();
  const [moved, setMoved] = useState<boolean>(false);
  const { isOpened, switchOpened } = useCartModal();
  useEffect(() => {
    addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setMoved(true);
      } else {
        setMoved(false);
      }
    });
  }, []);

  return (
    <>
      <AnimatePresence>
        {moved && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed hidden sm:block text-white rounded-full shadow-lg bg-purple-500 p-2 left-8 bottom-8 cursor-pointer"
            onClick={() => scroll.scrollToTop()}
          >
            <CaretUp size={35} weight="bold" />
          </motion.div>
        )}
      </AnimatePresence>
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
            <div className="flex gap-2">
              <div
                className="bg-black text-white text-xs sm:text-base rounded-full px-4 py-2 select-none cursor-pointer flex items-center gap-1 hover:opacity-80 transition-all"
                onClick={() => switchOpened()}
              >
                <ShoppingCart size={24} />
                <span>Koszyk</span>
              </div>
              {logged ? (
                <div className="bg-black px-2 py-2 rounded-full text-xs sm:text-base select-none cursor-pointer hover:opacity-80">
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

export default Nav;
