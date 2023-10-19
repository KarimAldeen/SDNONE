import React from 'react'
import HomePageCard from '../components/Home/HomeSectionCard'
import { useTranslation } from 'react-i18next'
import HomePageCard_svg from '../assetsSvg/HomePageCard_svg1';

const HomeCardConfig = () => {
    const {t} = useTranslation();

  return (
        <>
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
        </>
  )
}

export default HomeCardConfig