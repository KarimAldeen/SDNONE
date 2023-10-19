import React from 'react'
import { useTranslation } from 'react-i18next'
import Moaz from '../../assetsSvg/Moaz';

const AboutUsSection = () => {

  const {t} = useTranslation();

  return (
    <div className='AboutUsPage_container'>
      
      {/* Fake point for position fixed */}
      <div className='AboutUsFakePage' id='About'></div>

      {/* image section */}
      <div className='AboutUsPage_left'>
        <Moaz/>
      </div>

      {/* info section */}
      <div className='AboutUsPage_right'>

          <h1 className='AboutUsPage_title'>{t("About Us")}</h1>
          <p className='AboutUsPage_text'>{t("Let's embark on a journey")} 
            <p>{t("where creativity knows no bounds")}</p>
          </p>
          <p className='AboutUsPage_description'>{t("Welcome to SDN, where we redefine possibilities and transform visions into thriving brands. As a dynamic force in the realm of marketing, we don't just create campaigns; we craft experiences that resonate.")}</p>
          <div className='AboutUsPage_button'>
            <a href='#OurServices'><button>{t("Take Your Service")}</button></a>
          </div>

      </div>

    </div>
  )
}

export default AboutUsSection