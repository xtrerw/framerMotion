import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';

export const Carta3 = () => {
    const variants = {
        enter: () => {
          return {
            y:  1000,
          };
        },
        center: {
          y: 0,
        },
        exit: () => {
          return {
            y:  -1000,
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
    className="child child3" 
    >
      <motion.img 
            src='../src/img/logo3.png'
              className='logo1'
            />
            <motion.p 
            className='texto texto3'
            >¡Bienvenidos a la Universidad Europea de Madrid, hogar del equipo de League of Legends más formidable!
            </motion.p>
    </motion.div>
  )
}