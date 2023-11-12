import React from 'react'
import FooterLogo from '../assetsSvg/FooterLogo'

const CircleLogo = () => {
  return (
    <div className='container'>
        <div className='logo_sec'>
            <FooterLogo/>
        </div>

        {/* <div className='Company_name'>
            <div className='first'>
                <h1 className='S'>S</h1>
                <p className='software'>Software</p>   
            </div>

            <div className='second'>
                <h1 className='D'>D</h1>
                <p className='Development'>Development</p>   
            </div>

            <div className='third'>
                <h1 className='N'>N</h1>
                <p className='Managment'>Managment</p>   
            </div>

        </div> */}


        <div className='company_name2'>
            <h1>S D N</h1>
            <pre>Software {""}Development {""}Managment</pre>
        </div>
    </div>
  )
}

export default CircleLogo