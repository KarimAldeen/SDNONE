import React from 'react'
import PartnerLogo from '../../assetsSvg/PartnerLogo'
import { useTranslation } from 'react-i18next'
import LogoConfig from '../../config/LogoConfig';

const PartnerSection = () => {

  const {t} = useTranslation();

  return (

    <div className='PartnerPage_container'>

      {/* title */}
        <div className='PartnerPage_title'>
            {t("Our Partners")}
        </div>

      {/* info */}
        <div className='PartnerPage_text'>
          {t("Proud to be in the company of visionary partners who share our commitment to innovation and success.")}
        </div>

      {/* dynamic logo images */}
      
        <LogoConfig/>

    </div>
  )
}

export default PartnerSection