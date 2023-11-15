import React from 'react'

const HomePageCard = ({icon, title, text,Iconbackground,CardBackGround,BorderColor,color,color2}) => {
  return (
    <div className='HomePageCard_container'>
      {/* dynamic home card  */}
        <div className='HomePageCard' style={{background:CardBackGround,borderColor:BorderColor}}>
            <span className='HomePageCard_icon' style={{background:Iconbackground}}>{icon}</span>
            <h1 className='HomePageCard_title' style={{color:color}}>{title}</h1>
            <p className='HomePageCard_text' style={{color:color2}}>{text}</p>
        </div>
    </div>
  )
}

export default HomePageCard