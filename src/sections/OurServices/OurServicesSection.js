import React from 'react'
import OurServicesFrame from '../../assetsSvg/OurServicesFrame'
import { useTranslation } from 'react-i18next'
import ServiceCardLeftConfig from '../../config/ServiceCardLeftConfig'
import ServiceCardRightConfig from '../../config/ServiceCardRightConfig'

const OurServicesSection = () => {

    const {t} = useTranslation();

  return (
    <div className='OurServicesPage_container_main'>
        {/* Fake point for position fixed */}
        <div className='OurServicesFakePage' id='OurServices'></div>

        {/* ourService Frame */}
        <OurServicesFrame />

        <div className='OurServicesPage_container'>
                {/* title and main image */}
                <div className='OurServicesPage_left'>
                    <h1 className='OurServicesPage_title'>{t("Our Services")}</h1>
                    <img src='/assets/Services.png' alt='service_img'/>
                </div>

                {/* cards */}
                <div className='OurServicesPage_right'>

                    {/* left section */}
                    <div className='fisrt_cards'>
                        <ServiceCardLeftConfig/>
                    </div>

                    {/* right section */}
                    <div className='second_cards'>
                        <ServiceCardRightConfig/>    
                    </div>

                </div>

        </div>
    </div>
    
  )
}

export default OurServicesSection