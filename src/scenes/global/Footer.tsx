import React from "react";
import logo from "../../assets/logodark.svg";

const Footer: React.FC = () => {

  
  return (
    <div className="mt-12 bg-black h-40">
      <div className="px-6 sm:px-16 flex justify-center items-center h-full">
        <div className="xl:max-w-[1280px] w-full h-full">
          <div className="grid grid-cols-3 gap-5 h-full">
            <div className="flex items-center justify-end">
              <img src={logo} />
            </div>
            <div className="flex items-center justify-center">
              <ul className="text-white">
                <li className=" text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  <a href=''>eat express</a>
                </li>
                <li className=" text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  <a href=''>eat express - dla firm</a>
                </li>
                <li className=" text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  <a href=''>eat express - admin dashboard</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-start">
              <ul className="text-white">
                <li className="text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  <a href=''> Regulamin</a>
                </li>
                <li className="text-xs sm:text-md md:text-lg lg:text-xl cursor-pointer">
                  <a href=''> Polityka prywatności</a>
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
