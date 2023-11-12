import React from 'react'

import MainNavBar from '../../layout/MainNavBar'

import HomeSection from '../Home/HomeSection'
import HomeSection2 from '../Home/HomeSection2'
import AboutUsSection from '../AboutUs/AboutUsSection'
import OurSericesSection from '../OurServices/OurServicesSection'
import OurTeamSection from '../OurTeam/OurTeamSection'
import ContactUsSection from '../ContactUs/ContactUsSection'
import OurPartnerSection from '../OurPartner/PartnerSection'

import Footer from '../../layout/Footer'

const MainPage = () => {
  return (
    <>
        <MainNavBar/>
        
        {/* <HomeSection/> */}
        <HomeSection2/>
        <AboutUsSection/>
        <OurSericesSection/>
        <OurTeamSection/>
        <ContactUsSection/>
        <OurPartnerSection/>

        <Footer/>
    </>
  )
}

export default MainPage
