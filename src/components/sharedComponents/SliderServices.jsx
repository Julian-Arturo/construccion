import {useRef, useEffect, useState} from "react";
import services from "../exports/services";
import ServicioBox from "./ServicioBox";
import { motion } from "framer-motion";

const SliderServices = () => {
  const [width, setWidth] = useState(0);

  const carousel =  useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    
      <div className="mx-auto overflow-x-hidden m-0 w-[400px] sm:w-[500px] md:w-[700px]">
        <motion.div
          ref={carousel}
          className="flex"
          drag="x"
          dragConstraints={{ right: 0 , left: -width}}
          
        >
          {services.map((servicio, index) => (
            <motion.div 
              key={index}
            >
              <ServicioBox
                img={servicio.img}
                titulo={servicio.title}
                text={servicio.text}
                textservice={servicio.textservicio}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    
  );
};

export default SliderServices;
