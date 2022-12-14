import React, { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import logo from "../../assets/logo.svg";
import logodark from '../../assets/logodark.svg'
import { ShoppingCart, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import CartModal from "./components/CartModal";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Nav = () => {
  const logged = false;
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [moved, setMoved] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setMoved(true);
      } else {
        setMoved(false);
      }
    });

    return () => {};
  }, []);

  return (
    <motion.div
      className="px-6 sm:px-16 flex justify-center items-center sticky left-0 top-0 right-0 z-50 transition-all"
      initial={{ backgroundColor: "transparent" }}
      animate={moved ? { backgroundColor: "black" } : {}}
    >
      <div className="xl:max-w-[1200px] w-full">
        <AnimatePresence>{openCart && <CartModal />}</AnimatePresence>
        <div className="flex items-center py-2 gap-2 justify-between md:justify-start  ">
          <img
            src={moved ? logodark : logo}
            className="cursor-pointer transition-all"
            width="115px"
            onClick={() => navigate("/")}
          />
          <div className="hidden  md:block flex-1 ">
            <SearchInput />
          </div>
          <div className="flex gap-2">
            <div
              className={`${
                moved ? "bg-white text-black" : "bg-black text-white"
              } rounded-full px-4 py-2 select-none cursor-pointer flex items-center gap-1 hover:opacity-80 transition-all`}
              onClick={() => setOpenCart((prev) => !prev)}
            >
              <ShoppingCart size={24} />
              <span>Koszyk</span>
            </div>
            {logged ? (
              <div className="bg-black px-2 py-2 rounded-full  select-none cursor-pointer hover:opacity-80">
                <User size={24} />
              </div>
            ) : (
              <div
                className={`${
                  moved ? "bg-white text-black" : "bg-black text-white"
                } rounded-full px-4 py-2 select-none cursor-pointer flex items-center gap-1 hover:opacity-80 transition-all`}
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
    </motion.div>
  );
};

export default Nav;
