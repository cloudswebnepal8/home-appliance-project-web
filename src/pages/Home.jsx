import React from 'react'
import Featured from '../components/featured/Featured'
import Featuredtwo from '../components/featuredtwo/Featuredtwo';
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
       <Featured/>

<br /><br /><br /><br />
      <div className='middle-text'>
        <h2 className='text-blue-600 font-bold'>OUR SERVICES</h2>
       <h1>Appliance Repair & Maintenence</h1>
       <h2 >We repair and maintain all major home appliances</h2>
    </div> <br /><br /><br />

  <Featuredtwo/>

<h2 className='text-blue-600'>Why Choose Us</h2>
<h1>We Provide Reliable and Quality Service</h1><br /><br />

<div className='feature2'>
  <div className='container-left'>
     <span>Trained & verified Rwchnicians </span>
    <p>Our Professionals are background varified and 
      highly trained.</p>
      <br />
    <span>On-Time Service </span>
    <p>We valyue your time and ensure on time
      service every time.</p><br />
    <span>Trained & verified Rwchnicians </span>
    <p>We provide warrenty on our service and 
      spare parts</p><br />
    <span>Trained & verified Rwchnicians</span>
    <p>Our top priority is customer satisfeaction
      and trust</p><br />
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
      <div className='step-2-container'>
        <img src="./img/sheet.png" alt="Step 2"/>
        <h2>Step 2</h2><br />
        <span>We Confirm<p>Our team will confirm your booking.</p></span>
      </div>
      <div className='step-3-container'>
         <img src="./img/repair.png" alt="Step 3" />
       <h2>Step 3</h2><br />
  
        <span>We Fix the Issues<p>Our expert technicians will fix the issue</p></span>
      </div>
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