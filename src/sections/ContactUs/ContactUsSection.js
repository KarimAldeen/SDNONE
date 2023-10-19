import React from 'react'
import ContactUsFrame from '../../assetsSvg/ContactUsFrame'
import { useTranslation } from 'react-i18next'

const ContactUsSection = () => {

    const {t} = useTranslation();

  return (
    <div className='ContactUsPage_container_main'>

        {/* Fake point for position fixed */}
        <div className='ContactUsFakePage' id='ContactUs'></div>

        {/* contact us background */}
        <ContactUsFrame />


        <div className='ContactUsPage_container'>
            {/* info  */}
            <h1 className='ContactUsPage_title'>{t("Contact Us")}</h1>
            <p className='ContactUsPage_text'> {t("Connect with Us: Whether you have questions, ideas, or are ready to embark on a digital journey together, our inbox is open and waiting.")}</p>
            
            {/* inputs */}
            <div className='ContactUsPage_inputs'>

                <div className='first_input'>
                    <input placeholder={t('Your Name *')} type='text'/>
                    <input placeholder={t('Email Address *')} type='email'/>
                </div>
                
                <div className='second_input'>
                    <input placeholder={t('Subject *')}/>
                </div>

                <div className='third_input'>
                    <input className='message_input' placeholder={t('Messages *')}/>
                </div>

            </div>
            
            {/* submit button */}
            <div className='ContactUsPage_buttton'>
                <button className='submit_buttton'>{t("Submit Messages")}</button>
            </div>
            

        </div>
    </div>
  )
}

export default ContactUsSection