import * as React from "react";
import { motion } from "framer-motion";
import blg from "./img/blg.jpg";
import t1 from "./img/t1.png";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }//animación de muelle, velocity es velocidad inical, stinffness es potnecia de muelle.
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const equipos=["xMizono", "Sunshine", "DazaEpico", "Buscando . . .", "Gabigoleador8"];
const url=[t1,t1,t1,t1,t1];
export const MenuItem = ({ i }) => {
  const style1 = {
      border: `2px solid ${colors[i]}`,
      backgroundImage: `url(${url[i]})`, //inserta imagenes
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
};
const style2 = {
  color: `${colors[i]}`,
  fontSize: '20px',
};
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <div className="icon-placeholder" style={style1} />
      <div className="text-placeholder" style={style2}>{equipos[i]}</div>
      {/* la manera dinámica de insertar textos */}
    </motion.li>
  );
};