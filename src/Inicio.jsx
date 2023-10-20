import { motion,AnimatePresence } from 'framer-motion'
import React from 'react'
import bg2 from './img/bg2.jpg'


export const Inicio = () => {
  return (
    <motion.div className='inicio'>
      <AnimatePresence initial={false}>
        <motion.img
          src={bg2}
          initial={{ opacity: 0 }} // 初始透明度为0
          animate={{ opacity: 1 }} // 动画结束时透明度为1
          exit={{ opacity: 0 }}// 退出时透明度为0
          transition={{ delay: 3,duration: 3}} 
        />
      </AnimatePresence>
    </motion.div>
  )
}

