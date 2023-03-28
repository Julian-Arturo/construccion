import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import logoMc from "../assets/img/logo_mc.png";

import { AiOutlineClose } from "react-icons/ai";

import { TbMenu } from "react-icons/tb";

import { MdOutlineArrowCircleRight } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white  ">
      <div className="flex justify-between items-center h-16 max-w-[1600px] mx-auto px-4">
        <img src={logo} alt="logo" className="h-10 left-5 hidden lg:flex" />
        <img
          src={logoMc}
          alt="logo"
          className="h-7 left-5 hidden md:flex lg:hidden px-3"
        />

        <ul className="hidden md:flex font-bold gotham ">
          <li className="p-2 mr-8 text-[#C5C5C5] hover:text-red-500 hover:border-b-2 hover:border-red-500 transition duration-500 ease-in-out">
            <a href="#header">Inicio</a>
          </li>
          <li className="p-2 mr-8 text-[#C5C5C5] hover:text-red-500 hover:border-b-2 hover:border-red-500 transition duration-500 ease-in-out">
            <a href="#about">Nosotros</a>
          </li>
          <li className="p-2 mr-8 text-[#C5C5C5] hover:text-red-500 hover:border-b-2 hover:border-red-500 transition duration-500 ease-in-out">
            <a href="#service">Servicio</a>
          </li>
          <li className="p-2 mr-8 text-[#C5C5C5] hover:text-red-500 hover:border-b-2 hover:border-red-500 transition duration-500 ease-in-out">
            <a href="#proyect">Proyecto</a>
          </li>

          <li className=" text-white bg-[#E7193F]  hover:bg-white hover:text-black hover:border-2 hover:border-black flex justify-center items-center p-2 rounded-2xl w-[170px]">
            <a href="#contact" className="flex justify-center items-center">
              Contáctenos &nbsp; <MdOutlineArrowCircleRight />
            </a>
          </li>
        </ul>
        <img
          src={logoMc}
          alt="logo"
          className="h-7 left-5  flex md:hidden px-3"
        />

        <div onClick={handleNav} className="block md:hidden">
          <TbMenu size={40} />
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-full h-full border-r border-r-gray-900 ease-in-out duration-500 bg-white z-50 items-center flex flex-col"
              : "fixed left-[-100%]"
          }
        >
          <div onClick={handleNav} className="block md:hidden my-10 ">
            <AiOutlineClose size={40} />
          </div>
          <ul className=" p-4 flex flex-col items-center">
            <img src={logo} alt="logo" className="h-10 left-5  m-8" />
            <li onClick={handleNav}  className="p-4 text-2xl  text-[#ABABAB] font-bold"><a href="#header">Inicio</a></li>
            <li onClick={handleNav} className="p-4 text-2xl  text-[#ABABAB] font-bold"> <a href="#about">Nosotros</a></li>
            <li onClick={handleNav} className="p-4  text-2xl text-[#ABABAB] font-bold">            <a href="#service">Servicio</a>
</li>

            <li onClick={handleNav} className="p-4  text-2xl text-[#ABABAB] font-bold">            <a href="#proyect">Proyecto</a>
</li>
            <li  onClick={handleNav} className="p-4  text-2xl text-[#ABABAB] font-bold">
            <a href="#contact" className="flex justify-center items-center">
              Contáctenos 
            </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
