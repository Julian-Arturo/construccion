import React from 'react'

const IconTextBox = ({logo, title, text}) => {
  return (
    <div className="gotham  flex flex-col w-full lg:w-[60%] h-52 md:m-2 my-3 border border-[#C5C5C5] rounded-md items-center justify-center lg:px-[3%] md:px-12 px-32">
    <img src={logo} alt="logo de manos" className="pb-2 w-[25%]" />
    <h1 className="font-bold text-2xl md:text-2xl  pb-2">{title}</h1>
    <p className="text-center text-x1 md:text-base">{text}</p>
  </div>
  )
}

export default IconTextBox