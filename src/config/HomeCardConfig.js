import React from 'react'
import HomePageCard2 from '../components/Home/HomeSectionCard2'
import { useTranslation } from 'react-i18next'
import HomePageCard_svg from '../assetsSvg/HomePageCard_svg1';

const HomeCardConfig = () => {
    const {t} = useTranslation();

  return (
        <>
         {/* home cards */}
                <HomePageCard2
                icon={<HomePageCard_svg/>}
                title={t("SEO Consultancy")}
                text={t("If the path is beautiful, let us not k where it leads. my religion is very simple.")}
                />

                <HomePageCard2
                BorderColor={"#fff"}
                CardBackGround={"var(--secondary)"}
                Iconbackground={"#000"}
                color={"#fff"}
                color2={"#fff"}
                icon={<img src='/assets/HomeLogo.png' alt='Homelogo'/>}
                title={t("Graphical Representation")}
                text={t("If the path is beautiful, let us not k where it leads. my religion is very simple.")}
                />

                <HomePageCard2
                icon={<img src='/assets/HomeLogo2.png' alt='Homelogo'/>}
                title={t("Boost Website Ranking")}
                text={t("If the path is beautiful, let us not k where it leads. my religion is very simple.")}
                />
        </>
  )
}

export default HomeCardConfig