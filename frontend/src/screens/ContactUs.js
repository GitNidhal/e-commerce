import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Result = ()=> {
  return (
    <p>Your message has been successfully sent. I will contact you soon .</p>
  )
}

const ContactUs = () => {
  const [result,showResult]= useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kwwfq29', 'template_yks0bq4', form.current, 'Ok_JhjWpbf83Wt8Qw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult();
  };
  return (
    <form >
    <div className="containerr">
  <div className="contact-box">
    <div className="left" />
    <div className="right">
      <h2>Contact Us</h2>
      <input type="text" className="field" name="user_name" placeholder="Your Name" />
      <input type="text" className="field" name="user_email" placeholder="Your Email" />
      <input type="text" className="field" name='phone' placeholder="Phone" />
      <textarea placeholder="Message" name='message' className="field" defaultValue={""} />
      <button className="btnn" type="submit" value="Send" onSubmit={sendEmail}>Send</button>
      <div className='row'>{result ?<Result />:null}</div>
    </div>
  </div>
</div>
</form>
  )
}

export default ContactUs