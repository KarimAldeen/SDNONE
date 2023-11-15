import React from 'react'

const OurPartner = (props) => {
  return (

    <div className='logo_section'>
      {/* partner dynamic logo */}
        <div className='logo_container'>
            <img src={`${props.image1}`} />
        </div>

        <div className='logo_container'>
            <img src={`${props.image2}`} />
        </div>
        
        <div className='logo_container'>
            <img src={`${props.image3}`} />
        </div>

    </div>
  )
}

export default OurPartner