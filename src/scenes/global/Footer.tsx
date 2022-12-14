import React from "react";
import logo from "../../assets/logodark.svg";
const Footer = () => {
  return (
    <div className="mt-12 bg-black h-40 md:h-60">
      <div className="px-6 sm:px-16 flex justify-center items-center h-full">
        <div className="xl:max-w-[1280px] w-full h-full">
          <div className="grid grid-cols-3 gap-5 h-full">
            <div className="flex items-center justify-end">
              <img src={logo} />
            </div>
            <div className="flex items-center justify-center">
              <ul className="text-white">
                <li className=" text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  eat express
                </li>
                <li className=" text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  eat express - dla firm
                </li>
                <li className=" text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  eat express - admin dashboard
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-start">
              <ul className="text-white">
                <li className="text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  Regulamin
                </li>
                <li className="text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  Polityka prywatności
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
