import React from 'react'
import FooterLogo from '../assetsSvg/FooterLogo'

const CircleLogo = () => {
  return (
    <div className='container'>

      {/* logo */}
        <div className='logo_sec'>
            <FooterLogo/>
        </div>
      
      {/* company name */}
        <div className='company_name2'>
            <h1>S D N</h1>
            <pre>Software {""}Development {""}Managment</pre>
        </div>
        
    </div>
  )
}

export default CircleLogo