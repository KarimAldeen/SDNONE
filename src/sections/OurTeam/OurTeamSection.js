import React from 'react'
import { useTranslation } from 'react-i18next'
import  {HiArrowNarrowRight} from "react-icons/hi"
import OurTeamCardsUp from '../../components/ourTeam/OurTeamCardsUp';
const OurTeamSection = () => {
    const {t} = useTranslation();
  return (
    <div className='OurTeamPage_container'>
        <div className='OurTeamFakePage' id='OurTeam'></div>

        <div className='OurTeamPage_title'>
            {t("Our Teams")}
        </div>

        <div className='OurTeamPage_text'>
        {t("Meet the Minds Behind SDN")} :<span> {t("Our team is a powerhouse of talent, passion, and innovation")}</span>
        </div>

        <div className='OurTeamPage_logos'>

            <div className='left_logos'>
                <div className='left_first'>
                    <OurTeamCardsUp
                    name={"Loubna"}
                    fullName={"Loubna Orabi"}
                    job={"Backend"}
                    age={"25"}
                    />
                </div>
                <div className='Team_leader_section'>
                    <h1 className='title'>Loubna</h1>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                    {/* <div className='read_more'>{t("Read More")} <HiArrowNarrowRight/></div> */}
                </div>
            </div>

            <div className='mid_logos'>

                <div className='mid_first'>
                    <OurTeamCardsUp
                    name={"Ibrahim"}
                    fullName={"Ibrahim Karimelddin"}
                    job={"FullStack"}
                    age={"20"}
                    />
                </div>

                <div className='mid_second'>
                    <OurTeamCardsUp
                    name={"Nagham"}
                    fullName={"Nagham alsaade"}
                    job={"Backend"}
                    age={"25"}
                    />
                </div>

            </div>

            <div className='right_logos'>

                <div className='right_first'>
                    <OurTeamCardsUp
                    name={"Moaz"}
                    fullName={"Moaz Dawalibi"}
                    job={"Frontend"}
                    age={"19"}
                    />
                </div>

                <div className='right_second'>
                    <OurTeamCardsUp
                    name={"Bishr"}
                    fullName={"Bishr Flutter"}
                    job={"Flutter"}
                    age={"25"}
                    />
                </div>

            </div>
        
        </div>

    </div>
  )
}

export default OurTeamSection