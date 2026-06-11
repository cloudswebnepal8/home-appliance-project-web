import React from 'react';
import {Link} from "react-router";
import "./Navbar.scss";
import {HashLink} from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className='main-container'>
        <div className='sub-container'>
         <div className='left-container'>
       <Link to="/"><img src="./img/house-24.png" alt=""/></Link>   
        <Link to='/'><span className=''>Pendora<h1 className='text-blue-700'>Repairs</h1></span></Link>  
         </div>
         <div className='right-container'>
          <Link to="/" ><span className=''>Home</span></Link>
         <HashLink smooth to="/#services">
         <span className=''>Services</span>
         </HashLink> 
          <Link to='/about'><span className=''>About Us</span></Link>  
           <Link to="/contact"><span>Contact Us</span></Link> 
           {/* <a href="https://wa.me/9779867241332" target='blankl' ref='noopener noreferrer'></a> */}
            <button>Call Us: 9867241332</button>
         </div>
        </div>
        </div>
  )
}
export default Navbar

