import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';
export const Juegos = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div className='juegos'>
        {/* carta 1 */}
        <motion.div
        layout
        data-isOpen={isOpen}
        className="parent"
        onClick={() => setIsOpen(!isOpen)}
       >
        <motion.img layout className="child" 
        data-isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        />
        </motion.div>
        {/* carta 2 */}
        <motion.div
        layout
        data-isOpen={isOpen}
        className="parent"
        onClick={() => setIsOpen(!isOpen)}
       >
        <motion.img layout className="child" 
        data-isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        />
        </motion.div>
      </motion.div>
    </>
    
  )
}


