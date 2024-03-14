import React, { useRef } from 'react';
import './contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '..//../assets/adobe.png';
import microsoft from '../..//assets/microsoft.png';
import facebook from '..//..//assets/facebook.png';
import fb from '..//..//assets/facebook-icon.png';
import ig from '../..//assets/instagram.png';
import x from '..//..//assets/twitter.png';
import yt from '..//..//assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_by0iy8q', 'template_porgg67', form.current, {
            publicKey: 'zYAs6IVGDZKpwmpG7',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("Message sent!");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id='contactpage'>
        <div className='clients'>
            <h1 className='myclients'>My Clients</h1>
            <p className='clientdescription'>I have had the opportunity to work with several clients. 
            Some notable companies I have worked with are:</p>

            <div className='clientimgs'>
                <img className='clientimg' src={walmart} alt='client'/>
                <img className='clientimg' src={adobe} alt='client'/>
                <img className='clientimg' src={microsoft} alt='client'/>
                <img className='clientimg' src={facebook} alt='client'/>
            </div>

            <div className='contact'>
                <h1 id='contacttitle'>Contact Me</h1>
                <span className='contactdescription'>Please fill out the following form to discuss any work opportunities</span>
                <form className='contactform' ref={form} onSubmit={sendEmail} >
                        <input type='text' className='name' placeholder='Your name' name='your_name' />
                        <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                        <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                        <button type='submit' value='send' className='submitbtn' >Submit</button>
                        <div className='links'>
                            <img src={fb} alt='facebook' className='link'/>
                            <img src={ig} alt='Instagram' className='link'/>
                            <img src={x} alt='X' className='link'/>
                            <img src={yt} alt='YouTube' className='link'/>
                        </div>
                </form>
            </div>

        </div>

    </section>
  )
}

export default Contact
