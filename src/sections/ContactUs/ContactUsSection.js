import React, { useRef, useState } from 'react'
import ContactUsFrame from '../../assetsSvg/ContactUsFrame'
import { useTranslation } from 'react-i18next'
import * as Yup from "yup";
import { ErrorMessage,Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import {motion} from  'framer-motion'
import { useSendMessage } from '../../api/ContactUs';
const ContactUsSection = (onSubmit,changeDisabledState, disabled,loading) => {

    const {t} = useTranslation();

    const {mutate  , isSuccess , isLoading } = useSendMessage(); 


////// validate ////// 
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        subject: Yup.string().required("Required"),
        message: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
      });
      const ref = useRef();

/////// send form ////// 

    const handleSubmit = (values) => {
        console.log(values);

        // values['name'] = values['user_name']
        values['content'] = values['message']
        let ValueContainer = {...values}
        mutate(ValueContainer)
        values['name'] =""
        values['email'] =""
        values['subject'] =""
        values['message'] =""
        ref.current.value= "" 
    };


  return (
    <motion.div className='ContactUsPage_container_main'
    whileInView={{ opacity: [0 ,1] }}
    transition={{ duration: 1.5 }}
    >

        {/* fake point for onClick navbar links */}
        <div className='ContactUsFakePage' id='ContactUs'></div>

        {/* contact us background */}
        <ContactUsFrame />


        <div className='ContactUsPage_container'>
            {/* info  */}
            <h1 className='ContactUsPage_title'>{t("Contact Us")}</h1>
            <p className='ContactUsPage_text'> {t("Connect with Us: Whether you have questions, ideas, or are ready to embark on a digital journey together, our inbox is open and waiting.")}</p>
            
            {/* inputs */}
            <div className='ContactUsPage_inputs'>

                
                <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                >
                {({ errors, setFieldValue }) => (


                <Form>

                    <div className='first_input'>
                        <div className='name_div'>
                            <Field className='name_input' required="required" placeholder={t('Your Name *')} type='text' name='name'/>
                        </div>

                        <div className='email_div'>
                            <Field className='email_input' required="required" id='email_feild' placeholder={t('Email Address *')}  name='email'/>
                        </div>
                    </div>

                    <div className='second_input'>
                        <Field placeholder={t('Subject *')} required="required" name='subject'/>
                    </div>

                    <div className='third_input'>
                        <Field   
                        name='message'      
                        className='message_input' required="required" placeholder={t('Messages *')}
                        ref={ref}
                        defaultValue={""}
                        onChange={(e) =>
                          setFieldValue("message", e.target.value)
                        }
                        />
                    </div>
                    
                    {/* submit button */}
                    <div className='ContactUsPage_buttton'>
                        {isLoading ? <div style={{color:"#fff"}}>Loading...</div> :
                        <button className='submit_buttton' type="submit" >{t('Submit Messages')}</button>
                        } 
                    </div>

                </Form>

            )}
            </Formik>

            </div>
            

            
            

        </div>
    </motion.div>
  )
}

export default ContactUsSection