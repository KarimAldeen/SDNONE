import React from 'react'

const ServiceCard = ({icon, title, text, color}) => {
  return (
    <div className='ServiceCard'>
        <span className='ServiceCard_icon' style={{color:color}}>{icon}</span>
        <h1 className='ServiceCard_title'>{title}</h1>
        <p className='ServiceCard_text'>{text}</p>
    </div>
  )
}

export default ServiceCard