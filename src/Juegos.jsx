import React from 'react'
import { motion } from 'framer-motion'
import { Carta1 } from './Carta1'
import { Carta2 } from './Carta2'


export const Juegos = () => {
  return (
    <>
      <motion.div className='juegos'>
        <motion.div className='contiene'>
          <motion.h1 className='titulo'>
          MEET OUR <b>SQUADS</b>
          </motion.h1>
          <motion.p>
          Entertainers, champions, and legends in multiple titles, our squads are at the top of their game. Learn more about them below.
          </motion.p>
        </motion.div>
      <motion.div
        initial={{
          width: 'auto',
          height: 'auto',
        }}
        animate={{
          width: '100%',
          height: '100%-100px',
          background: 'black',
        }}
        transition={{
          type: 'fade',
          duration:1
        }}
        className="parent"
       >
        {/* carta 1 */}
        <Carta1/>
        {/* carta 2 */}
        <Carta2/>
        {/* carta 3 */}
        </motion.div>
      </motion.div>
    </>
    
  )
}


