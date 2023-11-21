import React from 'react'
import Logo from "../assetsSvg/SDNLogo"
import {MdKeyboardArrowDown} from "react-icons/md"
import BtnTranslate from '../components/BtnTranslate'
import { useTranslation } from 'react-i18next'


const NavBar = () => {
    const {t} = useTranslation();

  return (
    <div className='navbar_container'>
        <div className='NavBar_container'>
            {/* info */}
            <div className='info'>
                {/* logo section*/}
                <div className='logo_section'>
                    <div className='logo'>
                        <Logo/>
                    </div>
                    <div className='best_partner'>
                        <div className='first'>{t("sdN company")}</div>
                        <div className='second'>{t("Your Best Partner")}</div>
                    </div>
                </div>
                {/* number section */}
                <div className='numder_section'>
                    <div className='first'>{t("Call Now")}</div>
                    <div className='second'>+974 70956802</div>
                </div>

            </div>
            {/* links */}
            <div className='links'>

                <a href='#Home'><span className='first_link'>{t("Home")}</span></a>
                <a href='#About'><span>{t("About")}</span></a>
                <a href='#OurServices'><span>{t("Service")}
                 {/* <MdKeyboardArrowDown/> */}
                  </span></a>
                <a href='#OurTeam'><span>{t("Team")}</span></a>
                <a href='#ContactUs'><span>{t("Contact")}</span></a>
                <BtnTranslate/>

            </div>

        </div>
    </div>
  )
}

export default NavBar