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
                <img src='/assets/Team/Team0.jpg' alt='team_images'/>
                    {/* <OurTeamCardsUp
                    name={"Loubna"}
                    fullName={"Loubna Orabi"}
                    Position={"Team leader"}
                    /> */}
                </div>
                <div className='Team_leader_section'>
                    <h1 className='title'><span className='namespan'>Name:</span><br/> Loubna Ourabi</h1>
                    <p className='text'><span className='positionspan'>Position:</span><br/> Team leader. <br/>Senior Backend developer.</p>
                </div>
            </div>

            <div className='mid_logos'>

                <div className='mid_first'>
                    <OurTeamCardsUp
                    Key={1}
                    name={"Ibrahim"}
                    fullName={"Ibrahim Karimelddin"}
                    Position={"FullStack developer"}
                    />
                </div>

                <div className='mid_second'>
                    <OurTeamCardsUp
                    Key={2}
                    name={"Nagham"}
                    fullName={"Nagham alsaade"}
                    Position={"Backend developer"}
                    />
                </div>

            </div>

            <div className='right_logos'>

                <div className='right_first'>
                    <OurTeamCardsUp
                    Key={4}
                    name={"Moaz"}
                    fullName={"Moaz Dawalibi"}
                    Position={"Frontend developer"}
                    />
                </div>

                <div className='right_second'>
                    <OurTeamCardsUp
                    Key={3}
                    name={"Bishr"}
                    fullName={"Bishr Flutter"}
                    Position={"Flutter developer"}
                    />
                </div>

            </div>
        
        </div>

    </div>
  )
}

export default OurTeamSection