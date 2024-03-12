import React from 'react';
import './Intro.css';
import profile from '../../assets/profile.jpeg'
import { Link } from 'react-scroll';
import btnimg from '../../assets/hireme.png';

function Intro() {
  return (
    <section id='intro'>
        <div id="introcontent">
            <span className='hello'>Hello,</span>
            <span className='intro'>I'm <span className='Brian'>Brian <br/></span> </span>
            <span>Web Developer</span>
            <p className='text'>Brian is skilled developer who loves creating artistic <br /> and user friendly websites</p>
            <Link> <button className='hire'> <img src={btnimg} className='btnimg'alt='Hire Me'/>Hire me</button></Link>
        </div>
        <img className='me' src={profile} alt='Profile'/>
        
    </section>
  )
}

export default Intro;
