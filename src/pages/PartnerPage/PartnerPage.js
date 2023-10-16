import React from 'react'
import PartnerLogo from '../../assetsSvg/PartnerLogo'
import { useTranslation } from 'react-i18next'

const PartnerPage = () => {
  const {t} = useTranslation();
  return (
    <div className='PartnerPage_container' id='Partner'>
        <div className='PartnerPage_title'>
            {t("Our Partners")}
        </div>

        <div className='PartnerPage_text'>
          {t("Proud to be in the company of visionary partners who share our commitment to innovation and success.")}
        </div>

        <div className='PartnerPage_logos'>
          <div className='logo_top_section'>
            <div className='logo_container'><PartnerLogo/> </div>

            <div className='logo_container'>
              <img src='/assets/Logo4.png' alt='logo'/>
            </div>

            <div className='logo_container'>
              <img src='/assets/Logo3.png' alt='logo'/>
            </div>

          </div>

          <div className='logo_bottom_section'>

              <div className='logo_container'>
                <img src='/assets/Logo6.png' alt='logo'/>
              </div>

              <div className='logo_container_gray'>
                <img src='/assets/Logo5.png' alt='logo'/>
              </div>

              <div className='logo_container'>
                {/* <img src='/assets/Logo2.png' alt='logo'/> */}
                <PartnerLogo/>
              </div>

          </div>

        </div>
    </div>
  )
}

export default PartnerPage