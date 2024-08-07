import React, { useRef } from 'react'
import './contact.css'
import insta from '../../assets/instagram.png'
import likedin from '../../assets/107178_circle_linkedin_icon.png'
import x from '../../assets/x-social-media-white-round-icon.png'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i1g552e', 'template_p0rmue6', form.current, {
        publicKey: '8R2ZsvAi72h2RbeNy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
   <>
   <section id='contactPage'>

<div id='contact'>
<h1 className="contactTitle">Contact Me</h1>
<span className='contactDesc'>Please Fill out the form below to discuss any work oppurtunities.</span>
<form action="" className='contactForm' ref={form} onSubmit={sendEmail}>
    <input type="text" className='name' placeholder='Your Name' name='from_name'/>
    <input type="text" className='email' placeholder='Your Email' name='from_email'/>
    <textarea name="message" id=""  rows="5" className='msg' placeholder='Your Message'>

    </textarea>
    <button type='submit' value='Send'  className="submitBtn">Submit</button>
    <div className='links'>
<a href="https://www.linkedin.com/in/ahammad-sufail/" ><img src={likedin} alt=""  className='link' /></a>
<a href="https://www.instagram.com/sufail__ahmed/"><img src={insta} alt=""  className='link' /></a>
<a href="https://twitter.com/AhammadSuf23560"><img src={x} alt=""  className='link' /></a>


    </div>
</form>

</div>



   </section>
   
   
   </>
  )
}

export default Contact
