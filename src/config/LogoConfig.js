import React from 'react'
import OurPartner from '../components/OurPartner/DynamicLogo'

const LogoConfig = () => {
  return (
    <div className='PartnerPage_logos'>
      
      {/* partner logo */}
        <OurPartner
          image1={"/assets/OurPartner/1.png"}
          image2={"/assets/OurPartner/2.png"}
          image3={"/assets/OurPartner/3.jpg"}
          />

        <OurPartner
          image1={"/assets/OurPartner/4.png"}
          image2={"/assets/OurPartner/whiteLogo.png"}
          image3={"/assets/OurPartner/6.png"}
          />

        <OurPartner
          image1={"/assets/OurPartner/7.jpg"}
          image2={"/assets/OurPartner/5.jpg"}
          image3={"/assets/OurPartner/9.jpg"}
          />

        <OurPartner
          image1={"/assets/OurPartner/11.png"}
          image2={"/assets/OurPartner/whiteLogo.png"}
          image3={"/assets/OurPartner/7.png"}
          />
          <OurPartner
          image1={"/assets/OurPartner/12.png"}
          image2={"/assets/OurPartner/8.png"}
          image3={"/assets/OurPartner/10.png"}
          />

    </div>
  )
}

export default LogoConfig