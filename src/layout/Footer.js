import React from 'react'
import FooterLogo from "../assetsSvg/FooterLogo"
import {IoIosArrowForward} from "react-icons/io"
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation();
  return (
    <div className='footer_main_container'>
        {/* Get Started Section */}
        <div className='get_started'>
            
            <p className='get_started_text'>{t("Your thoughts matter, and we're here to turn them into digital reality. Reach out today and let's build something amazing together!")}</p>
            <div className='get_started_button'>
                <a href='#ContactUs'><button>{t("Get Started")}</button></a>
            </div>

        </div>


        {/* main footer section */}
        <div className='footer_container'>
            <div className='footer'>

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


                {/* head office section */}
                <div className='footer_head_office'>

                    <h1 className='title'>{t("Head Office")}</h1>
                    <p className='text'>Syria</p>
                    <p className='text'>SDN@gmail.com</p>
                    <p className='text'>(000) 0000-0000</p>

                </div>

                {/* opening hour section */}
                <div className='footer_opening_hour'>

                    <h1>{t("Opening Hour")}</h1>
                    <p className='text'>{t("Mon - Sat")} : 8:00 - 18:00</p>
                    <p className='text'>{t("Sun: closed")}</p>

                </div>

            </div>
        </div>

        {/* CopyRight section */}
        <div className='CopyRight_container'>
            <p>{t("Copyright © 2024. All right reserved")}</p>
        </div>
    </div>
  )
}

export default Footer