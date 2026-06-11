import React from 'react'
import Featured from '../components/featured/Featured'
import Featuredtwo from '../components/featuredtwo/Featuredtwo';
import "./Home.scss";
import Slider from '../components/slider/Slider';
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {

  return (
    <div className='home'>
       <Featured/>
<br/><br/><br /><br/>

<div id='services'>
      <div className='middle-text'>
        <h2 className='text-blue-600 font-bold'>OUR SERVICES</h2>
       <h1>Appliance Repair & Maintenence</h1>
       <h2 >We repair and maintain all major home appliances</h2>
    </div> <br/><br/><br/>
    <Slider/>
    </div>
      

    

<Featuredtwo/>

<h2 className='text-blue-600'>Why Choose Us</h2>
<h1>We Provide Reliable and Quality Service</h1><br /><br />

<div className='feature2'>
  <div className='container-left'>
    {/* logo1 */}
    <div className="logo">
    <img src="./img/trained.png" alt="" />
    <div className='text'>
       <span>Trained & verified Rwchnicians </span>
    <p>Our Professionals are background verified and 
      highly trained.</p>
    </div>hu
   </div>
   <br />
{/* logo2 */}
    <div className="logo">
    <img src="./img/ontimeservice.png" alt="" />
    <div className='text'>
       <span>On-Time Service </span>
    <p>We value your time and ensure on-time service every time.</p>
    </div>
   </div>
   <br />

   {/* logo3 */}
    <div className="logo">
    <img src="./img/warranty.png" alt="" />
    <div className='text'>
       <span>Warrenty on Service</span>
    <p>We provide Warrenty on our service and
      spare parts.
    </p>
    </div>
   </div>
   <br />
   {/* logo4 */}
    <div className="logo">
    <img src="./img/satisfication.png" alt="" />
    <div className='text'>
       <span>Customer Satisfaction</span>
    <p>Our tip priority in customer Satisfaction
      and trust.
    </p>
    </div>
   </div>
  </div> 
 
  <div className='container-right'>
    <img src="" alt="" />
  </div>
</div> <br /><br />

<h2 className='text-blue-600 font-semibold'>HOW IT WORKS</h2>
<h1>Simple Steps to Book Our Service</h1>

<div className='last-container'>
    <div className='last-sub-container'>
      <div className='step-1-container'>
        <img src="./img/booking.png" alt="Step 1" />
       <h2>Step 1</h2><br />
        <span>Book a service <p>Schedule your service online or call us</p></span>
      </div>
       <FaArrowRightLong size={65}/>
      
      <div className='step-2-container'>
        <img src="./img/sheet.png" alt="Step 2"/>
        <h2>Step 2</h2><br />
        <span>We Confirm<p>Our team will confirm your booking.</p></span>
      </div>
       <FaArrowRightLong size={65}/>
      <div className='step-3-container'>
         <img src="./img/repair.png" alt="Step 3" />
       <h2>Step 3</h2><br />
  
        <span>We Fix the Issues<p>Our expert technicians will fix the issue</p></span>
      </div>
       <FaArrowRightLong size={65}/>
      <div className='step-4-container'>
        <img src="./img/checkbox.png" alt="Step 4" />
        <h2>Step 4</h2><br />
        <span>You Relax <p>Enjoy free working appliances.</p></span>
      </div>
    </div>
</div>
  </div>
  )
}

export default Home