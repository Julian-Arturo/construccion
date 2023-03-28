import React from 'react'
import proyect from '../assets/img/proyect.png'
// import { BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs";

const Proyect = () => {
  return (
    <div className='md:w-full max-[500px]:w-[500px] flex flex-col md:flex-row lg:px-[6%] lg:p-14 md:p-14 justify-center lg:h-full md:h-[500px]' id='proyect'>
      <img src={proyect} alt="proyect" className='w-[100%] md:w-[50%] md:mt-0 mt-10 rounded-t-2xl md:hidden'  />
      <div className="bg-white p-14 w-[100%] md:w-[50%] lg:p-20">

        <div className='gotham '>
          <h1 className='bg-[#F5F5F5] px-1 inline-block text-[#E7193F] font-bold '>Proyectos</h1>
          <p className=" text-black font-extrabold  md:text-4xl text-1xl">
            Construcción para empresa
          </p>

        </div>
        <div className="pt-8 gotham">
          <p className='md:text-[14px] lg:text-[25px]  '>
            Lorem ipsum dolor sit amet consectetur. Consequat eget et nisi id donec. Mattis viverra aenean faucibus eleifend in. Eu aliquam faucibus senectus posuere dolor quis. Nunc ultrices rhoncus faucibus vestibulum ante ut quisque est odio.
          </p>
        </div>
         {/* <div className='flex mt-[5%]'>
          <BsArrowLeftCircle size={30} className="mx-10"/>
          <BsArrowRightCircle size={30}/>
         </div> */}

      </div>
      <img src={proyect} alt="proyect" className='w-[100%] md:w-[50%] md:mt-0 mt-10 rounded-t-2xl hidden md:flex'  />
    </div>
  )
}

export default Proyect