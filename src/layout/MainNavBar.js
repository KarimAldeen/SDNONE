import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

const MainNavBar = () => {
  return (
    // MainNavBar was made for positon fixed and it contain Header.js and NavBar.js  
    <div className='mainNavBar_container' id='Home'>
        <div className='MainNavBar'>
          <Header/>
          <NavBar/>
        </div>
    </div>

  )
}

export default MainNavBar