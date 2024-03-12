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
            <Link className='menuItemsList'>Home</Link>
            <Link className='menuItemsList'>About</Link>
            <Link className='menuItemsList'>Projects</Link>
            <Link className='menuItemsList'>Clients</Link>
        </div>
        <button className='menuButton'>
         <img className="menubtnImg" src={btnImg} alt=''/>Contact me
        </button>

    </nav>
  )
}

export default Navbar;
