import React from "react";
import logoWhite from '../assets/img/logoWhite.png'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook, BsWhatsapp} from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className=" gotham md:w-full max-[500px]:w-[500px] bg-[#202020]   h-[100%]">
            <div className=" flex md:justify-between justify-center md:flex-row flex-col items-center max-w-[1600px] mx-auto lg:px-4 md:px-9 p-5">
                <div className="text-white md:text-left  text-center py-10">
                    <img src={logoWhite} alt="logo" className="md:w-64 w-80 mb-4"/>
                    <p className="mb-4">© Mc Construcciones | 2023</p>
                    <div className="flex items-center justify-center">
                        <BsFacebook size={35}/>
                        <div className="h-7 border-separate w-[2px] bg-white m-5"/>
                        <AiOutlineInstagram size={45}/>
                        <div className="h-7 border-separate w-[2px] bg-white m-5"/>
                        <BsWhatsapp size={35}/>
                    </div>
                </div>
                <div className="text-white md:text-right text-center py-10">
                    <p>Información legal</p>
                    <p className="pt-5">Teléfono: (607) 6946630</p>
                    <p className="pt-5">
                        Carrera 47 32 24 piso 2 <br className="md:hidden"/> barrio  Álvarez, Bucaramanga
                    </p>
                </div>

            </div>        </footer>
    );
};

export default Footer;
