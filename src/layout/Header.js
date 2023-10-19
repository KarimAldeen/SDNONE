import React from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import {MdLocationPin} from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
const Header = () => {
  const {t} = useTranslation();
  return (
    <div className='header_container'>
        <div className='main_container'>
          {/* info */}
            <div className='left_header'>

              {/* working time  */}
               <div className='working_time'>
                    <AiFillClockCircle/>
                    <span className='info_span'> 08:00 - 18:00 </span>
               </div>

               {/* location */}
               <div className='loation'>
                    <MdLocationPin/>
                    <span className='info_span'>Syria</span>
               </div>

            </div>
            {/* search input */}
            <div className='right_header'>
                <div className='search_input' >
                    <input  placeholder={t('Search...')}/>
                    <BiSearch/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header