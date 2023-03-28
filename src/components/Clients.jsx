import React from 'react'
import logoMacpollo from "../assets/img/macpollo.png"
import logoCargill from "../assets/img/cargill.png"
import logoFinca from "../assets/img/finca.png"
import logoHerrera from "../assets/img/herrera.png"
import SliderClients from "./sharedComponents/ClientesSlider"


const Clients = () => {
  return (

    <div className="  md:w-full max-[500px]:w-[500px] flex lg:px-36 justify-center flex-col items-center">
      <h1 className="gotham md:text-xl text-[#C5C5C5] font-bold text-center ">Clientes y aliados</h1>

      <div className='md:hidden lg:hidden flex justify-center max-w-screen-lg '>
      

          <SliderClients />
       
      </div>
      <div className="justify-around flex-row w-full h-24 my-[30px] hidden md:flex">
        <img src={logoMacpollo} alt="" className='px-5 object-scale-down' style={{ maxWidth: "25%", width: "auto" }} />
        <img src={logoCargill} alt="" className='px-5 object-scale-down' style={{ maxWidth: "25%", width: "auto" }} />
        <img src={logoFinca} alt="" className='px-5 object-scale-down' style={{ maxWidth: "25%", width: "auto" }} />
        <img src={logoHerrera} alt="" className='px-5 object-scale-down' style={{ maxWidth: "25%", width: "auto" }} />
      </div>
    </div>

  )
}

export default Clients