import { motion,AnimatePresence, wrap} from 'framer-motion'
import React, { useState } from 'react'
import bg1 from './img/bg1.jpg'
import bg2 from './img/bg2.jpg'
import bg3 from './img/bg3.jpg'
import { useEffect } from 'react';

const imgs=[bg1,bg2,bg3];
export const Inicio = () => {
  const variants = {
    enter: () => {
      return {
        x:  '-100%',
        opacity: 1,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: () => {
      return {
        zIndex: 0,
        x:  '100%',
        opacity: 1,
      };
    }
  };
  const [[pagina],setImg]=useState([0,0]);
  const index = wrap(0,imgs.length,pagina);
  useEffect(() => {
    const timer = setInterval(() => {
      setImg([pagina + 1, 1]);
    }, 5000);
    return () => clearInterval(timer);
  }, [pagina]);
  return (
    <motion.div className='inicio'>
      <AnimatePresence initial={false} >
        <motion.img
        className='imagen'
          key={pagina}
          src={imgs[index]}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>
    </motion.div>
  )
}

