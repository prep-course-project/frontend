import React from 'react'
import './Services.css'

export default function Services() {
  return (
    <div className='about-main-div-services'>
    <div className='about-text-services'>
      <h2>Services</h2>
      {/* <h3>Our Main Activities</h3> */}
    </div>

    <div className='about-main-cards'>
       <div className='about-card1'>
       {/* <img src='https://img.freepik.com/free-icon/mortgage_318-652638.jpg?size=626&ext=jpg&ga=GA1.1.4624715.1685265665&semt=ais' alt='real estate image1'/>   */}
       <img src='https://images.freeimages.com/fic/images/icons/1580/devine_icons_part_2/512/home.png' alt='real estate image1'/>  
        <h3>Buy A Home</h3>
        <p>Find your house by our website ,you can discover the properties and choose what do you want to buy.</p>
       </div>
       <div className='about-card2'>
       {/* <img src='https://img.freepik.com/free-vector/hand-government-partners-giving-grants-business-tiny-people-receiving-money-searching-financial-assistance-protection-flat-vector-illustration-subsidy-finance-investment-concept_74855-21148.jpg?size=626&ext=jpg&ga=GA1.1.4624715.1685265665&semt=ais' alt='real estate image1'/>   */}
       <img src='https://img.freepik.com/free-icon/burj-al-arab_318-27094.jpg?size=626&ext=jpg&ga=GA1.1.4624715.1685265665&semt=ais' alt='real estate image1'/>  

       <h3>Rent A Home</h3>
       <p>Find your house by our website ,by our Website you can discover the real estate and choose what do you want to rent.</p>
        </div>
        <div className='about-card3'>
        <img src='https://images.freeimages.com/vhq/images/previews/41e/buildings-icon-137183.png' alt='real estate image1'/>  
        <h3>Sell A Home</h3>
        <p>One of the features of our website that is by our Elite Sands you have the abality to list one of your properties.</p>
         </div>
    </div>

   </div>
  )
}
