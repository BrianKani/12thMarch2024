import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt=''/>
        <div className='menuItems'>
            <Link className='menuItemsList'>Home</Link>
            <Link className='menuItemsList'>About</Link>
            <Link className='menuItemsList'>Projects</Link>
            <Link className='menuItemsList'>Clients</Link>
        </div>
        <button className='menuButton'>
         <img src='' alt=''/>Contact me
        </button>

    </nav>
  )
}

export default Navbar;
