import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';

export const Carta2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const variants = {
        enter: () => {
          return {
            x:  -1000,
         };
        },
        center: {
          x: 0,
        },
        exit: () => {
          return {
            x:  1000,
         };
        }
      };
  return (
    <motion.div layout 
    variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
    whileHover={{
      scale:1.5
    }}
    className="child child2" 
    >
      <motion.img 
            src='../src/img/logo2.png'
              className='logo1'
            />
            <motion.p 
            className='texto texto2'
            >¡Bienvenidos a la Universidad Europea de Madrid, hogar del equipo de League of Legends más formidable!
            </motion.p>
    </motion.div>
  )
}