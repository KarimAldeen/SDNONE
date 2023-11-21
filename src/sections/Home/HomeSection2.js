import React from 'react'
import BigLogo from "../../assetsSvg/BigLogo"
import { useTranslation } from 'react-i18next'
import HomeCardConfig from '../../config/HomeCardConfig'

const HomeSection = () => {

    const {t} = useTranslation();
    
  return (
    <div className='home_container'>

        {/* left Section */}

        <div className='mid_section'>

            <h1 className='mid_h1'>{t("Take Your")}<span> {t("Project")}</span></h1>
            <h1 className='mid_h2'>{t("To The ")}<span> {t("Next Level")}</span></h1>
            <p className='mid_p'>{t("Collaborate with us, and together, we'll elevate your business above the competition, ensuring it shines uniquely in a sea of alternatives. Join forces with our expertise, and let's craft a distinctive identity for your enterprise, setting it apart as a standout choice in the market.")}</p>
            <div className='button_container'><a href='#ContactUs'><button className='contact_us_button'>{t("Contact Us")}</button></a></div>
            <div className='cards'>
                <HomeCardConfig/>
            </div>

        </div>
        
        {/* right Section */}

        <div className='right_section'>
            <img src='/assets/HomeP.png' alt='mobile'/>
        </div>
    </div>
  )
}

export default HomeSection