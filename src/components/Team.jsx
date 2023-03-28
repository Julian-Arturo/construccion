import React from 'react'
import team from '../assets/img/team.png'
const Team = () => {
    return (
        <div className=' pb-60 md:pb-96 md:w-full max-[500px]:w-[500px]  mt-20'>
            <div className="w-[100%] h-[400px] md:w-[100%] md:h-[610px] relative ">
                <div className="sm:h-64 md:h-96 h-72 w-full absolute bottom-0  sm:top-[100%] top-[80%] bg-gradient-to-b from-transparent  via-gray-100 to-white"></div>
                <div className="h-full w-full">
                    <img
                        src={team}
                        alt="servicio1"
                        className="sm:h-[800px] h-[500px] w-full object-cover z-0"
                    />
                    <div className="z-10 absolute inset-0 flex flex-col justify-center items-center top-[100%]  mt-32 md:mt-52 text-2xl px-10 bottom-0">
                        <h1 className="font-bold md:text-7xl text-5xl text-[#E7193F] gotham-Black sm:text-justify text-center">Equipo de trabajo</h1>
                        <p className="md:text-3xl lg:text-4xl  tracking-tighter pt-8 text-center gotham ">
                            Somos un equipo de profesionales altamente calificados <br className='hidden md:flex'/>
                            para cumplir con calidad.
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}

export default Team