import React from "react";
import headerImg from "../assets/img/header.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Header = () => {
    return (
        <div className="relative mt-16  max-[500px]:w-[500px]" id="header">
            <img
                src={headerImg}
                alt="header-img"
                className="w-full z-0 h-[1000px] object-cover"
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white ">
                <p className="font-bold gotham-Black px-2  md:text-7xl text-6xl lg:text-8xl py-6 text-center max-[500px]:text-5xl "> 
                    SU MEJOR <br className="sm:hidden"/> ALIADO EN <br /> CONSTRUCCIÓN
                </p>
               

                <h1 className="bg-[#202020]  text-cyan-50 font-bold  md:text-2xl text-2xl lg:text-4xl md:py-1 text-center font-sans   px-5  mt-10 md:mt-5 lg:mt-0 gotham">
                    Soluciones a sus <br className="md:hidden"/> adecuaciones locativas
                </h1>

                <p className="pt-6 md:text-2xl  text-center sm:mt-5 md:mt-5 lg:mt-0 gotham">
                    Nos encargamos de todo tipo de <br className="sm:hidden"/> adecuaciones de obra civil <br className="hidden md:flex" /> para
                    pequeñas, <br className="sm:hidden"/> medianas y grandes empresas de edificación.
                </p>
                <div className="text-white bg-[#E7193F]  hover:bg-white hover:text-black hover:border-2 hover:border-black flex justify-center items-center rounded-2xl mt-20 px-14 py-2 box-shadow-lg md:hidden">
                    <a href="#contact" className="flex justify-center items-center">
                        Contáctenos &nbsp; <MdOutlineArrowCircleRight />
                    </a>
                </div>

                <div className="absolute bottom-0 font-bold text-white ">
                    <a
                        href="#about"
                        className="flex-col items-center md:text-1xl mb-2 flex"
                    >
                        <h1 className="hidden md:flex ">Conoce más</h1>
                        <h1 className="md:hidden">Desliza para más</h1>
                        <IoMdArrowDropdown size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Header;
