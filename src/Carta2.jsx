import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';

export const Carta2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const variants = {
        enter: () => {
          return {
            x:  -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 0.5
        },
        exit: () => {
          return {
            zIndex: 0,
            x:  1000,
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