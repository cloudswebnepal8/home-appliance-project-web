import React from 'react';
import {Link} from "react-router";
import { useState } from 'react';
import "./Navbar.scss";
import {HashLink} from "react-router-hash-link";
import { WHATSAPP_LINK } from '../constants/Constants';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false); //state for opne/close menu
//function for toggle menu
const toggleMenu =()=>{
  setIsOpen(!isOpen);
}

//function to close menu when a link is clicked
const closeMenu=()=>{
  setIsOpen(false);
};

  return (
    <div className='main-container'>
        <div className='sub-container'>
         <div className='left-container'>
       <Link to="/" onClick={closeMenu}>
       <img className='house' src="./img/house-24.png" alt=""/>
       </Link>   
        <Link to='/' onClick={closeMenu}>
        <span className='pendora-text'>Pendora<h1 className='text-blue-700'>Repairs</h1></span>
        </Link>  
         </div>

         {/* Adding hamburger icon */}
        <button className='hamburger-btn' onClick={toggleMenu} >
          { isOpen ? (
            <img src='./img/close.png' alt='Close menu' className='menu-icon'></img>
          ) : (
            <img src='./img/hamburger.png' alt='Open menu' className='menu-icon' ></img>
          )
          }
        </button>
        {/* Adding dynamic 'open' clas based on state and closeMenu to links */}
         <div className={`right-container ${isOpen ? 'open': ''}`} >
          <Link to="/" onClick={closeMenu}><span className=''>Home</span></Link>
         <HashLink smooth to="/#services" onClick={closeMenu}>
         <span className=''>Services</span>
         </HashLink>
          <Link to='/about' onClick={closeMenu}><span className=''>About Us</span></Link>  
           <Link to="/contact" onClick={closeMenu}><span>Contact Us</span></Link>
           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <button >Call Us: 9867241332</button>
           </a>
         </div>
        </div>
        </div>
  )
}
export default Navbar
