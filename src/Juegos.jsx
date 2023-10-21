import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';
export const Juegos = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div className='juegos'>
        <motion.div
        layout
        // data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className="parent"
        onClick={() => setIsOpen(!isOpen)}
       >
        <motion.div layout className="child" />
      </motion.div>
      </motion.div>
    </>
    
  )
}


