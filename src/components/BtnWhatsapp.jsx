import React from 'react'
import btnWhatsapp from '../assets/img/boton.png'
const BtnWhatsapp = () => {
  return (
    <div className="fixed bottom-0 right-0 m-4 p-1 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out z-50"
    ><a href='https://wa.link/hskxgy' target="_blank" rel="noreferrer">
        <img src={btnWhatsapp} alt="btn" className='w-20'/>
    </a></div>
  )
}

export default BtnWhatsapp