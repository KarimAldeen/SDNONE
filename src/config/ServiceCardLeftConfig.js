import React from 'react'
import ServiceCard from '../components/ourServices/ServiceCard'
import { FaPassport, FaPenAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const ServiceCardLeftConfig = () => {

    const {t} = useTranslation();

  return (
    <>
      {/* service card */}
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

    </>
  )
}

export default ServiceCardLeftConfig