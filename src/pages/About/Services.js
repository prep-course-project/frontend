import React from 'react'

export default function Services() {
  return (
    <div className='about-main-div-services'>
    <div className='about-text-services'>
      <h2>Services</h2>
      {/* <h3>Our Main Activities</h3> */}
    </div>

    <div className='about-main-cards'>
       <div className='about-card1'>
       <img src='https://img.freepik.com/free-vector/investing-money-house_1133-87.jpg?size=626&ext=jpg&ga=GA1.1.4624715.1685265665&semt=ais' alt='real estate image1'/>  
        <h3>Buy A Home</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, 
          consectetur</p>
       </div>
       <div className='about-card2'>
       <img src='https://img.freepik.com/free-vector/hand-government-partners-giving-grants-business-tiny-people-receiving-money-searching-financial-assistance-protection-flat-vector-illustration-subsidy-finance-investment-concept_74855-21148.jpg?size=626&ext=jpg&ga=GA1.1.4624715.1685265665&semt=ais' alt='real estate image1'/>  

       <h3>Rent A Home</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, 
          consectetur</p>
        </div>
        <div className='about-card3'>
        <img src='https://img.freepik.com/free-vector/money-savings-investments_24877-63781.jpg?size=626&ext=jpg&ga=GA1.1.4624715.1685265665&semt=ais' alt='real estate image1'/>  
        <h3>Sell A Home</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, 
          consectetur</p>
         </div>
    </div>

   </div>
  )
}
