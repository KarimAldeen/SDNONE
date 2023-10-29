import React from 'react'
import useHover from '../../hooks/useHover';

const OurTeamCardsUp = ({name, fullName, job, age, direction}) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
    const isHoveredClassName = isHovered ? `Card_1 Card_1_Hovered` : `Card_1`;

  return (
    <div className='main_card'>
        {/* <div className='main_card_key'> */}
            <div
            className={isHoveredClassName
            //  +`${direction}`
          }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <h2>Who's {name}?</h2>
                <p className='TeamCard_P'>FullName: {fullName}.</p>
                <p className='TeamCard_P'>{job} developer.</p>
                <p className='TeamCard_P'>{age} years old.</p>   
            </div>


            <div
              className="Card_2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={"Card_2_Top " }>

                  {/* <h1>{Key}</h1> */}
                  {/* <div className="Card_2_Top_Word"> */}
                    <img src='/assets/Services.png' alt='team_images'/>
                    {/* <p>This is Ibrahim..</p> */}
                  {/* </div> */}
              </div>
              {/* <div className="Card_2_Down">
              </div> */}

          </div>   

        {/* </div> */}
    </div>
  )
}

export default OurTeamCardsUp