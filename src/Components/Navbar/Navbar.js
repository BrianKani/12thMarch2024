import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/contact.png'

function Navbar() {
  return (
    <nav className='navbar'>
        <img className="logo" src={logo} alt=''/>
        <div className='menuItems'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menuItemsList'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='menuItemsList'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='menuItemsList'>Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='menuItemsList'>Clients</Link>
        </div>
        <button className='menuButton' onClick={() => {
          document.getElementById('contactpage').scrollIntoView({behavior:'smooth'});
        }}>
         <img className="menubtnImg" src={btnImg} alt=''/>Contact me
        </button>

    </nav>
  )
}

export default Navbar;
