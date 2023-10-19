import * as React from "react";
import { motion } from "framer-motion";


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
const equipos=["Bilibili Gaming", "Cloud9", "G2 Esports", "T1", "MAD Lions"];
const imgUrl=["../src/img/lol.jpg"]
export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={"../src/img/lol.jpg"} className="icon-placeholder" style={style}/>
      <div className="text-placeholder" style={style}>{equipos[i]}</div>
      {/* la manera dinámica de insertar textos */}
    </motion.li>
  );
};