import React from 'react'
import { useTranslation } from 'react-i18next'
import  {HiArrowNarrowRight} from "react-icons/hi"
import OurTeamCardsUp from '../../components/ourTeam/OurTeamCardsUp';
const OurTeamSection = () => {
    const {t} = useTranslation();
  return (
    <div className='OurTeamPage_container'>

        {/* fake point for onClick navbar links */}
        <div className='OurTeamFakePage' id='OurTeam'></div>
        
        {/* Title and info */}
        <div className='OurTeamPage_title'>
            {/* {t("Our Teams")} */}
            {t("Our Specialties")}
        </div>

        <div className='OurTeamPage_text'>
        {t("Meet the Minds Behind SDN")} :<span> {t("Our team is a powerhouse of talent, passion, and innovation")}</span>
        </div>

        <div className='OurTeamPage_logos'>

        {/* mid section */}

            {/* <div className='left_logos'>
                <div className='left_first'>
                <img src='/assets/Team/Team0.jpg' alt='team_images'/>
                </div>


                <div className='Team_leader_section'>
                    <h1 className='title'><span className='namespan'>{t("Name")}:</span><br/> Loubna Ourabi</h1>
                    <p className='text'><span className='positionspan'>{t("Position")}:</span><br/> Team leader. <br/>Senior Backend developer.</p>
                </div>
            </div> */}

        {/* mid section */}

            <div className='mid_logos'>
                <div className='mid_first'>
                    <OurTeamCardsUp
                    Key={15}
                    EndPoint={"png"}
                    name={"CEO"}
                    fullName={"Rida Kabani"}
                    Position={"CEO"}
                    />
                </div>
                

                <div className='mid_first'>
                    <OurTeamCardsUp
                    Key={2}
                    EndPoint={"jpg"}
                    name={"Backend"}
                    fullName={"Nagham Alsaade"}
                    Position={"Backend developer"}
                    />
                </div>
                <div className='mid_second'>
                    <OurTeamCardsUp
                    Key={14}
                    EndPoint={"jpg"}
                    name={"Designer"}
                    fullName={"Elia"}
                    Position={"Designer"}
                    />
                </div>

            </div>

        {/* right section */}
        
            <div className='right_logos'>
            <div className='mid_first'>
                    <OurTeamCardsUp
                    Key={0}
                    EndPoint={"jpg"}
                    name={"Team Leader"}
                    fullName={"Loubna Ourabi"}
                    Position={"Team Leader & Senior Backend developer"}
                    />
                </div>
                
            

                
                <div className='right_first'>
                    
                    <OurTeamCardsUp
                    Key={4}
                    EndPoint={"jpg"}
                    name={"Frontend"}
                    fullName={"Moaz Dawalibi"}
                    Position={"Frontend developer"}
                    />
                </div>

                <div className='right_second'>
                    <OurTeamCardsUp
                    Key={17}
                    EndPoint={"jpg"}
                    name={"Social Media"}
                    fullName={"walid"}
                    Position={"Social Media"}
                    />
                </div>

            </div>


            <div className='right_logos'>

            <div className='mid_first'>
                    <OurTeamCardsUp
                    Key={10}
                    EndPoint={"png"}
                    name={"FullStack"}
                    fullName={"Ibrahim Karimeddin"}
                    Position={"FullStack developer"}
                    />
                </div>

                <div className='right_second'>
                    <OurTeamCardsUp
                    Key={3}
                    EndPoint={"jpg"}
                    name={"Flutter"}
                    fullName={"Bisher alkhoja"}
                    Position={"Flutter"}
                    />
                </div>

                

            </div>
        
        </div>

    </div>
  )
}

export default OurTeamSection