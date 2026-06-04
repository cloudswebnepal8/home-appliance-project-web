import React from 'react'
import Featured from '../components/featured/Featured'
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
       <Featured/>
       <div className='middle-text'>
        <h2 className='text-blue-600 font-bold'>OUR SERVICES</h2>
       <h1>Appliance Repair & Maintenence</h1>
       <h2 >We repair and maintain all major home appliances</h2>
       </div>

<div className='feature-2-box'>
    <div className='upper-box'></div>
    <div className='lower-box'></div>
</div>

       
      
  </div>
  )
}

export default Home