import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Inicio } from "./Inicio";
import { Juegos } from "./Juegos";
import { Sobre } from "./Sobre";
import { Route, Routes,Link } from "react-router-dom";
const sidebar = {
  open:
  (height=1000)=>({
    clipPath: `circle( ${height*2 + 200}px at 40px 40px)`,
    transition:{
      type: 'spring',
      stiffness: 20,
      restDelta:2,//平滑结束
    }
   }),
  closed: { 
    clipPath: `circle( 80px at 40px 40px)`, 
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
    <>
        <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        >
        <motion.div className="navbar">
          <motion.div className="navitem">
            <Link to='/juegos' className="link">Juegos</Link>
            <Link to='/about' className="link">Sobre nosotros</Link>
            <Link to='/juegos' className="link">Tienda</Link>
            <Link to='/about' className="link">Noticias</Link>
          </motion.div>
        </motion.div>
        <Link to='/'>
          <motion.div className="background" variants={sidebar}/>
        </Link>
        
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/juegos" element={<Juegos/>}/>
          <Route path="/about" element={<Sobre/>}/>
        </Routes>
    </>
    
  )
}

export default App
