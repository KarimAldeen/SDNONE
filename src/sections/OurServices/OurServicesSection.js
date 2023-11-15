import React from 'react'
import OurServicesFrame from '../../assetsSvg/OurServicesFrame'
import { useTranslation } from 'react-i18next'
import ServiceCardLeftConfig from '../../config/ServiceCardLeftConfig'
import ServiceCardRightConfig from '../../config/ServiceCardRightConfig'
import {motion} from  'framer-motion'

const OurServicesSection = () => {

    const {t} = useTranslation();

  return (
    <div className='OurServicesPage_container_main'
    // whileInView={{ opacity: [0 ,1] }}
    // transition={{ duration: 1.5 }}
    >
        {/* fake point for onClick navbar links */}
        <div className='OurServicesFakePage' id='OurServices'></div>

        {/* ourService Frame */}
        <OurServicesFrame />

        <div className='OurServicesPage_container'>
                {/* title and main image */}
                <div className='OurServicesPage_left'>
                    <h1 className='OurServicesPage_title'>{t("Our Services")}</h1>
                    <div className='img_bg'><img src='/assets/OurServices.jpg' alt='service_img'/></div>
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