import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';



const Works = () => {
  return (
    <section id='works'>
        <h2 id='worktitle'>My Portfolio</h2>
        <span className='workdescription'>I take pride in what I do with a keen attention in detail and making sure it is pixel perfect. With a focus on creating engaging digital experiences and delivering impactful solutions, I strive to exceed expectations and drive results</span>
        <div className='workimgs'>
            <img className='workimg' src={portfolio1} alt=''/>
            <img className='workimg' src={portfolio2} alt=''/>
            <img className='workimg' src={portfolio3} alt=''/>
            <img className='workimg' src={portfolio4} alt=''/>
            <img className='workimg' src={portfolio5} alt=''/>
            <img className='workimg' src={portfolio6} alt=''/>
        </div>
        <button className='workbtn'>See More</button>
    </section>
      
  )
};

export default Works;
