import React, { useRef, useState } from 'react'
import ContactUsFrame from '../../assetsSvg/ContactUsFrame'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';
// import { errors,Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage,Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';

const ContactUsSection = (onSubmit,changeDisabledState, disabled,loading) => {

    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState(false);

////// validate ////// 
    const validationSchema = Yup.object().shape({
        user_name: Yup.string().required("Required"),
        subject: Yup.string().required("Required"),
        message: Yup.string().required("Required"),
        user_email: Yup.string().email("Invalid email").required("Required"),
      });

/////// send form ////// 
    const form = useRef();

    const sendEmail = async (e, {resetForm}) => {

    //   e.preventDefault();   
        setIsLoading(true);
   
        emailjs.sendForm('service_wqj5ja1', 'template_tx2teda', form.current, 'q_slYkqf-pn2JOc_F')
        .then((result) => { 
            console.log(result.text);
            console.log("message sent");
            setIsLoading(false)
            toast.success(t("Send Successfully"))
            resetForm();      
        },
        //  (error) => {
        //     console.log(error.text);
        // }
        );
    console.log(e);
    };



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

                
                <Formik
                initialValues={{
                  user_name: "",
                  user_email: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={sendEmail}
                validationSchema={validationSchema}
                >
                {({ errors, setFieldValue }) => (


                <Form 
                ref={form}
                //  onSubmit={sendEmail}
                 >

                    <div className='first_input'>
                        <div className='name_div'>
                            <Field className='name_input' required="required" placeholder={t('Your Name *')} type='text' name='user_name'/>
                        </div>

                        <div className='email_div'>
                            <Field className='email_input' required="required" id='email_feild' placeholder={t('Email Address *')}  name='user_email'/>
                        </div>
                    </div>

                    <div className='second_input'>
                        <Field placeholder={t('Subject *')} required="required" name='subject'/>
                    </div>

                    <div className='third_input'>
                        <Field   
                        name='message'      
                        className='message_input' required="required" placeholder={t('Messages *')}/>
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
    </div>
  )
}

export default ContactUsSection