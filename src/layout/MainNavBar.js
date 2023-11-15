import React from 'react'
import NavBar from './NavBar'
import {motion} from 'framer-motion'
const MainNavBar = () => {
  return (
    // MainNavBar was made for positon fixed and it contain NavBar.js  
    <motion.div 

    initial={{ opacity: 0, x:-300 }}
    animate={{ opacity: 1, x:0 }}
    transition={{ duration: 0.5 }}
    className='mainNavBar_container' id='Home'>
        <div className='MainNavBar'>
          <NavBar/>
        </div>
    </motion.div>

  )
}

export default MainNavBar