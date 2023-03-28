import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ServicioBox = ({ img, titulo, text, textservice }) => {
  const [verServicio, setVerServicio] = useState(false);

  const handleVerServicio = () => {
    setVerServicio(!verServicio);
  };
  
  return (
    <div className="gotham  w-[340px] md:w-72 relative lg:mx-32 my-5 mx-5  flex justify-center items-center transition-all" style={{ height: verServicio ? '500px' : '400px' , transition: "all 0.5s ease-in-out"}}>
      <div className="h-60 w-full absolute bottom-0 bg-gradient-to-b from-transparent rounded-2xl via-gray-100 to-white transition-all" style={{ height: verServicio ? '350px' : '250px', transition: "all 0.5s ease-in-out" }}></div>
      <div className="h-full w-full">
        <img
          src={img}
          alt="servicio1"
          className="h-[90%] w-full object-cover rounded-3xl z-0"
        />
        <div className="z-10 absolute inset-0 flex flex-col items-center justify-center text-[15px] px-5 transition-all" style={{ top: verServicio ? "calc(85% - 140px)" : "50%",
            transition: "all 0.5s ease-in-out", fontSize:  verServicio ? '18px' : '25px', }}>
          <h1 className="font-extrabold ">{verServicio ? "Servicio" : titulo}</h1>
          <p
            className="text-sm tracking-tighter w-full text-[#ABABAB] transition-all"
            style={{ textAlign: verServicio ? 'left' : 'center', transition: "all 0.5s ease-in-out" , paddingLeft: verServicio ? '10px' : '0'}}
            dangerouslySetInnerHTML={{
              __html: verServicio ? textservice : text,
            }}
          ></p>
          <button
            className="mt-2 text-sm flex flex-col items-center"
            onClick={handleVerServicio}
          >
            {verServicio ? "Ocultar" : "Ver servicios"}
            <IoMdArrowDropdown size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicioBox;
