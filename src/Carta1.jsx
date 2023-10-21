import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';

export const Carta1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const variants = {
        enter: () => {
          return {
            y:  -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          y: 0,
          opacity: 0.5
        },
        exit: () => {
          return {
            zIndex: 0,
            y:  1000,
            opacity: 0
          };
        }
      };
  return (
        <motion.div layout 
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        data-isopen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="child" 
        >
            <motion.p className='texto'
            data-isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            >¡Bienvenidos a la Universidad Europea de Madrid, hogar del equipo de League of Legends más formidable! Con una alineación de jugadores talentosos y dedicados, este equipo está listo para enfrentarse a cualquier desafío que se les presente.
            </motion.p>
        </motion.div>
  )
}