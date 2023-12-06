import React from 'react'
import useHover from '../../hooks/useHover';
import { useTranslation } from 'react-i18next';

const OurTeamCardsUp = ({name, fullName, Position,  props, Key, EndPoint , className=""}) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
    const isHoveredClassName = isHovered ? `Card_1 Card_1_Hovered` : `Card_1`;
    const {t} = useTranslation();

  return (
    <div className='main_card'>
      {/* main card using useHover hook */}
            <div
            className={isHoveredClassName}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <h2>
                  {/* {t("Who's")}  */}
                  {name}
                  {/* ? */}
                  </h2>
                <p className='TeamCard_P'>{t("FullName")}: {fullName}.</p>
                <p className='TeamCard_P Position'>{t("Position")}: {Position}.</p>
            </div>

        {/* onHover Card */}
            <div
              className="Card_2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={"Card_2_Top" }>
                <img src={`../assets/Team/Team${Key}.${EndPoint}`} alt="" className={className}/>

              </div>

          </div>   
    </div>
  )
}

export default OurTeamCardsUp