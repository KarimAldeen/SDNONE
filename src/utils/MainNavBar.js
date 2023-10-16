import React from 'react'
import Header from '../components/Header'
import NavBar from './NavBar'

const MainNavBar = () => {
  return (
    <div className='mainNavBar_container' id='Home'>
        <div className='MainNavBar'>
          <Header/>
          <NavBar/>
        </div>
    </div>

  )
}

export default MainNavBar