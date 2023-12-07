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
            {t("Our Specialties")}
        </div>

        <div className='OurTeamPage_text'>
            {t("Meet the Minds Behind SDN")} :<span> {t("Our team is a powerhouse of talent, passion, and innovation")}</span>
        </div>
        {/*   Team image   */}
        <div className='OurTeamPage_logos'>


            <div className='mid_logos'>
                <div className='mid_first'>
                    <OurTeamCardsUp
                    Key={55}
                    EndPoint={"jpg"}
                    name={"CEO"}
                    fullName={"Rida Kabani"}
                    Position={"CEO"}
                    />
                </div>
                

                <div className='mid_first'>
                    <OurTeamCardsUp
                    Key={2}
                    EndPoint={"jpg"}
                    name={"Back End"}
                    fullName={"Nagham Alsaade"}
                    Position={"Back End developer"}
                    />
                </div>
                <div className='mid_second'>
                    <OurTeamCardsUp
                    Key={17}
                    EndPoint={"jpg"}
                    name={"Designer"}
                    fullName={"Elia Salibi"}
                    Position={"Designer"}
                    />
                </div>

            </div>

        
            <div className='right_logos'>
            <div className='mid_first'>
                    <OurTeamCardsUp
                    Key={16}
                    EndPoint={"png"}
                    name={"Team Leader"}
                    fullName={"Loubna Ourabi"}
                    Position={"Team Leader & Senior Back End developer"}
                    />
                </div>
                
            

                
                <div className='right_first'>
                    
                    <OurTeamCardsUp
                    Key={4}
                    EndPoint={"jpg"}
                    name={"Front End"}
                    fullName={"Moaz Dawalibi"}
                    Position={"Front End developer"}
                    />
                </div>

                <div className='right_second'>
                    <OurTeamCardsUp
                    Key={51}
                    EndPoint={"jpg"}
                    name={"Social Media"}
                    fullName={"Walid Alssaid"}
                    Position={"Social Media"}
                    />
                </div>

            </div>


            <div className='right_logos'>

            <div className='mid_first'>
                    <OurTeamCardsUp
                    Key={50}
                    className="ibrahim_image"
                    EndPoint={"jpg"}
                    name={"Full Stack"}
                    fullName={"Ibrahim Karimeddin"}
                    Position={"Full Stack developer"}
                    />
                </div>

                <div className='right_second'>
                    <OurTeamCardsUp
                    Key={53}
                    EndPoint={"jpg"}
                    name={"Mobile"}
                    fullName={"Bishr alkhoja"}
                    Position={"Mobile application developer"}
                    />
                </div>

                

            </div>
        
        </div>

    </div>
  )
}

export default OurTeamSection