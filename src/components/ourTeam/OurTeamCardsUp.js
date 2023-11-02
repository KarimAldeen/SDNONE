import React from 'react'
import useHover from '../../hooks/useHover';
import { useTranslation } from 'react-i18next';

const OurTeamCardsUp = ({name, fullName, Position,  props, Key}) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
    const isHoveredClassName = isHovered ? `Card_1 Card_1_Hovered` : `Card_1`;
    const {t} = useTranslation();

  return (
    <div className='main_card'>
            <div
            className={isHoveredClassName
          }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <h2>{t("Who's")} {name}?</h2>
                <p className='TeamCard_P'>{t("FullName")}: {fullName}.</p>
                <p className='TeamCard_P'>{t("Position")}: {Position}.</p>
            </div>


            <div
              className="Card_2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={"Card_2_Top" }>
                <img src={`../assets/Team/Team${Key}.png`} alt="" />

              </div>

          </div>   
    </div>
  )
}

export default OurTeamCardsUp