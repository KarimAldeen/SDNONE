import React from 'react'

const HomePageCard = ({icon, title, text}) => {
  return (
    <div className='HomePageCard_container'>
        <div className='HomePageCard'>
            <span className='HomePageCard_icon'>{icon}</span>
            <h1 className='HomePageCard_title'>{title}</h1>
            <p className='HomePageCard_text'>{text}</p>
        </div>
    </div>
  )
}

export default HomePageCard