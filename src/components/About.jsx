import React from "react";
import logoConfianza from "../assets/img/confianza.png"
import logoReputacion from "../assets/img/reputacion.png"
import logoCumplimiento from "../assets/img/cumplimiento.png"
import logoCalida from "../assets/img/calida.png"

import IconTextBox from "./sharedComponents/IconTextBox";
const About = () => {
  return (
    <div className="md:w-full max-[500px]:w-[500px] flex flex-col lg:flex-row md:flex-col lg:px-[8%]  lg:py-[2%] md:p-7 justify-around mx-auto" id="about">
      <div className="bg-white p-14 w-full lg:w-[45%]">
        <div className="gotham-Black ">
          <p className=" text-black font-bold  md:text-6xl text-4xl  ">
            Acerca de
          </p>
          <p className=" text-[#E7193F] font-bold  md:text-6xl text-4xl">
            Nosotros
          </p>
        </div>
        <div className="pt-8 gotham">
          <p>
            Ofrecemos soluciones de calidad en adecuaciones locativas con
            asesoría técnica, dibujos arquitectónicos y financiamiento. Con más
            de 14 años de experiencia brindando un amplio portafolio de
            servicios y entregando obras detalladas en los tiempos establecidos
            por el cliente.
          </p>
        </div>
      </div>

      <div className=" w-[100%] lg:w-[45%] flex flex-col items-center justify-center lg:my-0 md:my-5 ">
        <div className="md:flex  justify-  md:m-0 mx-10 ">
          <IconTextBox logo={logoConfianza}  text={"Somos el aliado confiable que tu empresa necesita para crecer."} title={"Confianza"}/>
          <IconTextBox logo={logoReputacion} text={"Nuestros clientes respaldan nuestra credibilidad."} title={"Reputación"}/>
        </div>
        <div className="md:flex md:mt-2 md:m-0 mx-10">
        <IconTextBox logo={logoCumplimiento} text={"Cumplimos con tiempos de entrega solicitados por el cliente."} title={"Cumplimiento"}/>
        <IconTextBox logo={logoCalida} text={"Nuestro esfuerzo está enfocado al detalle y la calidad."} title={"Calidad"}/>

        </div>
      </div>
    </div>
  );
};

export default About;
