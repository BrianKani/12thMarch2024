import React from 'react';
import './Skills.css';
import uidesign from '..//..//assets/ui-design.png';
import webdev from '..//..//assets/website-design.png';
import appdesign from '..//..//assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='title'>What I do</span>
        <span className='skilldes'>I am a skilled and passionate web developer with close to 3 years experience in building visually appealing and user-friendly 
         web applications. I have a strong understanding of software engineering and development. For programming, I use Python, Javascript and C#. My technical frameworks are MERN and .NET</span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img className="skillbarimg" src={uidesign} alt='UI Design'/>
                    <div className='skillbartext'>
                        <h2>UX|UI design</h2>
                        <p>Crafting engaging digital experiences with user-centered design principles.</p>
                    </div>
            </div>
            <div className='skillbar'>
                <img className='skillbarimg' src={webdev} alt='Web Developer'/>
                    <div className='skillbartext'>
                        <h2>Web development</h2>
                        <p>Building responsive and dynamic websites with modern technologies.</p>
                    </div>
            </div>
            <div className='skillbar'>
                <img className='skillbarimg' src={appdesign} alt='App Design'/>
                    <div className='skillbartext'>
                        <h2>Data engineering</h2>
                        <p>Analyzing and interpreting data to derive actionable insights and trends.</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
