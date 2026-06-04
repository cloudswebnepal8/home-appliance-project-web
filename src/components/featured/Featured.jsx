import React from 'react'
import "./Featured.scss"
const Featured = () => {

  return (
    <div className='Featured-container'>
      <div className='left-container'>
        <div className='texts'>
        <h2> Trusted Home Appliance Service</h2>
        <span>We Repair</span>
        <span>We Maintain.</span>
        <span>You Relax</span>
        <p>Professional repair and maintenence service for all your
          home appliances. Quick, relaiable and affordable soutions
          at your doorstep.
        </p>
        </div>
       <div className='buttons'>
        <button>Book Service</button>
        <button>Our Services</button>
       </div>
        
      </div>
      <div className='right-container'>

      </div>
      <div className='bottom-container'>
        <span className='Expert-Technicians'>Expert Technicians <p>Certificied and expernences professionals</p></span>
        <span className='Quick-Response'>Quick Response <p>We reach you within few hourse</p></span>
        <span className='Affordable-Pricing'>Affordable Price<p>Best Quality servoce at competative prices </p></span>
        <span className='Genuine Parts'><p>We use only orignal and genuine spare parts</p></span>
      </div>
    </div>
  )
}

export default Featured
