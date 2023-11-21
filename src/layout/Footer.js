import React from 'react'
import FooterLogo from "../assetsSvg/FooterLogo"
import {IoIosArrowForward} from "react-icons/io"
import { useTranslation } from 'react-i18next'
import CircleLogo from './CircleLogo'

const Footer = () => {
    const {t} = useTranslation();
  return (
    <div className='footer_main_container'>
        <CircleLogo/>

        {/* main footer section */}
        <div className='footer_container'>
            <div className='footer'>

                <div className='footer_left_section'>

                     {/* logo section */}
                    <div className='footer_logo'>

                        <div className='logo'>
                            <FooterLogo/>
                        </div>
                        <div className='best_partner'>
                            <div className='first'>{t("sdN company")}</div>
                            <div className='second'>{t("Your Best Partner")}</div>
                        </div>

                    </div>


                    {/* links section */}
                    <div className='footer_links'>

                        <div className='title'>
                            {t("Usefull Link")}
                        </div>
                        <div className='links'>
                            <a href='#About'><span className='about_us_link'><IoIosArrowForward/> {t("About Us")}</span></a>
                            <a href='#OurTeam'><span><IoIosArrowForward/> {t("Our Teams")}</span></a>
                            <span><IoIosArrowForward/> {t("Pricing Plans")}</span>
                            <span><IoIosArrowForward/> {t("404 Page")}</span>
                        </div>

                    </div>

                </div>

                <div className='footer_right_section'>

                    {/* head office section */}
                    <div className='footer_head_office'>

                        <h1 className='title'>{t("Head Office")}</h1>
                        <p className='text location'>Syria-Qatar-Oman </p>
                        <p className='text'>Info@sdnone.com</p>
                        <p className='text'>+974 77280008</p>
                        <p className='text'>+963 966338669</p>

                    </div>

                    {/* opening hour section */}
                    <div className='footer_opening_hour'>

                        <h1>{t("Opening Hour")}</h1>
                        <p className='text location'>{t("Mon - Sat")} : 8:00 - 18:00</p>
                        <p className='text'>{t("Sun: closed")}</p>

                    </div>

                </div>
                

            </div>
        </div>

        {/* CopyRight section */}
        <div className='CopyRight_container'>
            <p>{t("Copyright © 2018. All right reserved")}</p>
        </div>
    </div>
  )
}

export default Footer