import React from "react";

const ContactBox = ({ servicio, titulo, text }) => {
    return (
        <div className="w-[100%] h-[400px] md:w-[50%] md:h-[610px] relative ">
            <div className="h-80 w-full absolute bottom-0 bg-gradient-to-b from-transparent rounded-2xl  via-gray-100 to-white"></div>
            <div className="h-full w-full">
                <img
                    src={servicio}
                    alt="servicio1"
                    className="h-[90%] w-full object-cover rounded-2xl z-0"
                />
                <div className="z-10 absolute inset-0 flex flex-col justify-center md:top-72 top-28  text-2xl px-10 text-left">
                <h1 className=' px-1 inline-block text-[#E7193F] font-bold text-[18px] gotham'>Contáctanos</h1>
                    <h1 className="font-bold lg:text-6xl md:text-5xl gotham-Black ">{titulo}</h1>
                    <p className="lg:text-[80%] md:text-xl tracking-tighter pt-8 w-full gotham">
                        {text}
                    </p>

                    <p className=" gotham lg:text-[70%] md:text-[15px] text-[15px] tracking-tighter pt-6 w-full">Mcconstrucciones@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactBox;
