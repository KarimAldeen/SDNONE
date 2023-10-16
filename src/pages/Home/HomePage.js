import React from 'react'
import BigLogo from "../../assetsSvg/BigLogo"
import FrameHome from '../../assetsSvg/FrameHome'
import HomePageCard from '../../components/HomePage/HomePageCard'
// import MobileHomePage from '../../../public/assets/MobileHomePage'
import HomePageCard_svg from '../../assetsSvg/HomePageCard_svg1'
import { useTranslation } from 'react-i18next'
const HomePage = () => {
    const {t} = useTranslation();
  return (
    <div className='home_container'>
        {/* left Section */}
        <div className='left_section'>
            <BigLogo/>
        </div>

        {/* mid Section */}
        <div className='mid_section'>

            <h1 className='mid_h1'>{t("Take Your Project")}</h1>
            <h1 className='mid_h1'>{t("To The Next Level")}</h1>
            <p className='mid_p'>{t("Collaborate with us, and together, we'll elevate your business above the competition, ensuring it shines uniquely in a sea of alternatives. Join forces with our expertise, and let's craft a distinctive identity for your enterprise, setting it apart as a standout choice in the market.")}</p>
            <a href='#ContactUs'><button className='contact_us_button'>{t("Contact Us")}</button></a>
            <div className='cards'>
                <HomePageCard
                icon={<HomePageCard_svg/>}
                title={t("SEO Consultancy")}
                text={t("If the path is beautiful, let us not k where it leads. my religion is very simple.")}
                />

                <HomePageCard
                icon={<img src='/assets/HomeLogo.png' alt='Homelogo'/>}
                title={t("Graphical Representation")}
                text={t("If the path is beautiful, let us not k where it leads. my religion is very simple.")}
                />

                <HomePageCard
                icon={<img src='/assets/HomeLogo2.png' alt='Homelogo'/>}
                title={t("Boost Website Ranking")}
                text={t("If the path is beautiful, let us not k where it leads. my religion is very simple.")}
                />
            </div>

        </div>
        
        {/* right Section */}
        <div className='right_section'>
            <img src='/assets/HomePageMobile.png' alt='mobile'/>
        </div>
    </div>
  )
}

export default HomePage