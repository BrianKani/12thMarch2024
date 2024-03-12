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
            <span className='intro'>I'm <span className='Brian'>Brian <br/>Web Developer</span></span>
            <p className='text'>I am a skilled developer who loves creating artistic and user friendly websites</p>
            <Link> <button className='hire'> <img src={btnimg} alt='Hire Me'/>Hire me</button></Link>
        </div>
        <img className='me' src={profile} alt='Profile'/>
        
    </section>
  )
}

export default Intro;
