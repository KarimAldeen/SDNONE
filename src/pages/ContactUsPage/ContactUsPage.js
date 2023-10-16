import React from 'react'
import ContactUsFrame from '../../assetsSvg/ContactUsFrame'
import OurServicesFrame from '../../assetsSvg/OurServicesFrame'
import { useTranslation } from 'react-i18next'

const ContactUsPage = () => {
    const {t} = useTranslation();
  return (
    <div className='ContactUsPage_container_main'>
        <div className='ContactUsFakePage' id='ContactUs'></div>
        <OurServicesFrame />
        <div className='ContactUsPage_container'>
            <h1 className='ContactUsPage_title'>{t("Contact Us")}</h1>
            <p className='ContactUsPage_text'> {t("Connect with Us: Whether you have questions, ideas, or are ready to embark on a digital journey together, our inbox is open and waiting.")}</p>

            <div className='ContactUsPage_inputs'>

                <div className='first_input'>
                    {/* <label className='label_one'>*</label> */}
                    <input placeholder={t('Your Name *')} type='text'/>
                    {/* <label className='label_two'>*</label> */}
                    <input placeholder={t('Email Address *')} type='email'/>
                </div>
                
                <div className='second_input'>
                    {/* <label className='label_three'>*</label> */}
                    <input placeholder={t('Subject *')}/>
                </div>

                <div className='third_input'>
                    {/* <label className='label_four'>*</label> */}
                    <input className='message_input' placeholder={t('Messages *')}/>
                </div>

            </div>

            <div className='ContactUsPage_buttton'>
                <button className='submit_buttton'>{t("Submit Messages")}</button>
            </div>

        </div>
    </div>
  )
}

export default ContactUsPage