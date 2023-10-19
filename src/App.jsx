import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open:
  (height=1000)=>({
    clipPath: `polygon(0 0, ${height*2 + 200}px 0, ${height * 2 + 200}px ${height * 2 + 200}px, 0 ${height * 2 + 200}px)`,
    transition:{
      type: 'spring',
      stiffness: 20,
      restDelta:2,//平滑结束
    }
   }),
  closed: { 
    clipPath: `polygon(0 0, 30% 0, 30% 10%, 0 10%)`, 
    transition:{
      delay:0.5,
      type: 'spring',
      stiffness: 400,
      damping:40,
    }
  },
}

function App() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default App
