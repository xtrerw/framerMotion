import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';

export const Carta3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const variants = {
        enter: () => {
          return {
            y:  1000,
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
            y:  -1000,
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
    </motion.div>
  )
}