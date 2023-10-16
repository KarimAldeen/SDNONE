import React from 'react'
import HomePage from '../Home/HomePage'
import MainNavBar from '../../utils/MainNavBar'
import Footer from '../../utils/Footer'
import PartnerPage from '../PartnerPage/PartnerPage'
import OurTeamPage from '../OurTeamPage/OurTeamPage'
import ContactUsPage from '../ContactUsPage/ContactUsPage'
import AboutUsPage from '../AboutUs/AboutUsPage'
import OurServicesPage from '../OurServices/OurServicesPage'

const MainPage = () => {
  return (
    <>
        <MainNavBar/>
        
        <HomePage/>
        <AboutUsPage/>
        <OurServicesPage/>
        <OurTeamPage/>
        <ContactUsPage/>
        <PartnerPage/>
        
        <Footer/>
    </>
  )
}

export default MainPage
