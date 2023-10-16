import React from 'react'
import { useTranslation } from 'react-i18next'
import Moaz from '../../assetsSvg/Moaz';
import { Navigate } from 'react-router-dom';
const AboutUsPage = () => {
  const {t} = useTranslation();
  return (
    <div className='AboutUsPage_container'>
      <div className='AboutUsFakePage' id='About'></div>

      <div className='AboutUsPage_left'>
        {/* <img src='/assets/aboutUs.png' alt='aboutUs'/> */}
        <Moaz/>
      </div>

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

export default AboutUsPage