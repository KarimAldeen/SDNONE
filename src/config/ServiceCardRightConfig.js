import React from 'react'
import ServiceCard from '../components/ourServices/ServiceCard'
import { FaMobileAlt, FaQrcode } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const ServiceCardRightConfig = () => {

    const {t} = useTranslation();

  return (
    <>  
      {/* service card */}
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
    </>
  )
}

export default ServiceCardRightConfig