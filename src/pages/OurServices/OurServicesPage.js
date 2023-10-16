import React from 'react'
import ContactUsFrame from '../../assetsSvg/ContactUsFrame'
import ServiceCard from '../../components/ourServices/ServiceCard'
import {FaPassport, FaMobileAlt, FaPenAlt, FaQrcode} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
const OurServicesPage = () => {
    const {t} = useTranslation();
  return (
    <div className='OurServicesPage_container_main'>
        <div className='OurServicesFakePage' id='OurServices'></div>
        <ContactUsFrame />
        <div className='OurServicesPage_container'>

                <div className='OurServicesPage_left'>
                    <h1 className='OurServicesPage_title'>{t("Our Services")}</h1>
                    <img src='/assets/Services.png' alt='service_img'/>
                </div>

                <div className='OurServicesPage_right'>

                    <div className='fisrt_cards'>
                        <ServiceCard
                            color={"#3C30B0"}
                            icon={<FaPassport/>}
                            title={t("WEB DEVELOPEMENT")}
                            text={t("We specialize in creating dynamic, responsive, and visually stunning websites.")}
                        />
                        <ServiceCard
                            color={"#E78932"}
                            icon={<FaPenAlt/>}
                            title={t("GRAPHIC DESIGN")}
                            text={t("Elevate your brand with our graphic design services. From captivating visuals to compelling branding")}
                        />
                    </div>

                    <div className='second_cards'>
                        <ServiceCard
                            color={"#F41B4D"}
                            icon={<FaMobileAlt/>}
                            title={t("MOBILE DEVELOPEMENT")}
                            text={t("From iOS to Android, we design and build custom mobile applications that captivate users and drive engagement.")}
                        />
                        
                        <ServiceCard
                            color={"#DB3E12"}
                            icon={<FaQrcode/>}
                            title={t("BACKEND SERVICES")}
                            text={t("Our backend services lay the foundation for seamless and robust digital experiences.")}
                        />
                        
                    </div>

                </div>

        </div>
    </div>
    
  )
}

export default OurServicesPage