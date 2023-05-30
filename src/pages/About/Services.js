import React from 'react'
import './Services.css'

export default function Services() {
  return (
    <div className='about-main-div-services'>
    <div className='about-text-services'>
      <div  className='about-h2'>
      <h2>Services</h2>
      </div>
    </div>

    <div className='about-main-cards'>
       <div className='about-card1'>
       <i class="fa-solid fa-house"></i>
        <h3>Buy A Home</h3>
        <p>Find your house by our website ,you can discover the properties and choose what do you want to buy.</p>
       </div>
       <div className='about-card2'>
        <i class="fa-solid fa-city"></i>
       <h3>Rent A Home</h3>
       <p>Find your house by our website ,by our Website you can discover the real estate and choose what do you want to rent.</p>
        </div>
        <div className='about-card3'>
        <i class="fa-solid fa-handshake-simple"></i>                  <h3>Sell A Home</h3>
        <p>One of the features of our website that is by our Elite Sands you have the abality to list one of your properties.</p>
         </div>
    </div>

   </div>
  )
}
