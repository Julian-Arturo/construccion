import React from "react";
import ServicioBox from "./sharedComponents/ServicioBox";
import SliderServices from "./sharedComponents/SliderServices";
import services from "./exports/services";

const Servicios = () => {
    return (
        <div className="max-[500px]:w-[500px] flex flex-col  justify-center items-center  flex-grow" id="service">
            <h1 className="gotham-Black text-3xl md:text-4xl lg:text-5xl font-bold text-center my-10">
                Nuestros Servicios
            </h1>
            <div className="lg:hidden h-[550px] ">
                <SliderServices/> 
            </div>
            <div className="justify-center items-center hidden lg:flex h-[500px]">
            {services.map((servicio, index) => (
            
                        <ServicioBox 
                            key={index}
                            img={servicio.img}
                            titulo={servicio.title}
                            text={servicio.text}
                            textservice={servicio.textservicio}
                        />
          
                    ))}
            </div>
        </div>
    );
};

export default Servicios;
