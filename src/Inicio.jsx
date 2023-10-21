import { motion,AnimatePresence, wrap} from 'framer-motion'
import React, { useState } from 'react'
import bg1 from './img/bg1.jpg'
import bg2 from './img/bg2.jpg'
import bg3 from './img/bg3.jpg'
import { useEffect } from 'react';

const imgs=[bg1,bg2,bg3];
export const Inicio = () => {
  const [[pagina,direccion],setImg]=useState([0,0]);
  const index = wrap(0,imgs.length,pagina);
  useEffect(() => {
    const timer = setInterval(() => {
      setImg([pagina + 1, 1]);
    }, 3000);
    return () => clearInterval(timer);
  }, [pagina]);
  return (
    <motion.div className='inicio'>
      <AnimatePresence initial={false} custom={direccion}>
        <motion.img
        className='imagen'
          key={pagina}
          src={imgs[index]}
          custom={direccion}
          // initial={{opacity:0}}
          // animate={{opacity:1}}
          // exit={{opacity:0}}
        />
      </AnimatePresence>
    </motion.div>
  )
}

