import React, { useState, useEffect } from "react";
import clients from "../exports/clients";
import { motion } from "framer-motion";

const SliderClients = () => {
  const [xPos, setXPos] = useState(0);
  const [direction, setDirection] = useState(1);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 2000);
      setXPos((prevXPos) => prevXPos - 100 * direction);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [direction]);

  useEffect(() => {
    const timeLimit = 20000; // 10 segundos
    if (timeElapsed >= timeLimit) {
      setTimeElapsed(0);
      setDirection((prevDirection) => prevDirection * -1);
    }
  }, [timeElapsed]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      setXPos(0);
      setDirection(1);
      setTimeElapsed(0);
    } else if (info.offset.x < -50) {
      setXPos(-100 * clientImages.length);
      setDirection(-1);
      setTimeElapsed(0);
    }
  };

  const clientImages = [
    ...clients,
    ...clients,
    ...clients,

  ];
  return (
    <div className="mx-auto overflow-x-hidden m-0 md:w-[600px] w-[400px]">
      <motion.div
        className="flex justify-center items-center"
        drag="x"
        onDragEnd={handleDragEnd}
        animate={{ x: xPos }}
        transition={{ type: "spring", stiffness: 20 }} 
      >
        {clientImages.map((client, index) => (
          <motion.div  key={index}>
            <img
              src={client}
              alt="clientes"
              className="mx-10 my-10 object-contain px-5 max-w-[400px] "/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderClients;
