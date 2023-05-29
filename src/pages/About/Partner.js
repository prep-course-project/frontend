import React from 'react'
import './Partner.css';

export default function Partner() {
  return (
    <>
      <div className='about-h2'>
      <h2> Our Home Partner</h2>
      </div>
      <div className='about-wrapper'>  
      
       <div className='about-partner'>
         <div className='about-partner-mem'>
         <img src='https://cdnap.gandalf.tech/agentportal/wp-content/uploads/2021/08/Body-Image-06-Apps-for-agents-1024x640.jpg' alt='company2'/>

            {/* <img src='https://i.pinimg.com/originals/c2/c3/ff/c2c3ff0e69932bdb50736dad671ae69b.png' alt='company1'/> */}
            <h4>Dubai Rest</h4>
            <p>Real estate company</p>
         </div>
         <div className='about-partner-mem'>
         <img src='https://img.freepik.com/premium-vector/elegant-modern-minimalist-real-estate-logo-design-building-construction-logo-real-estate-industry-identity_115973-4367.jpg' alt='company3'/>
            <h4>Modern Estate</h4>
            <p>Real estate company</p>
         </div>

         <div className='about-partner-mem'>
         <img src='https://img.freepik.com/premium-vector/real-estate-property-construction-logo-design-icon_10135-216.jpg?w=2000' alt='company1'/>
            <h4>landmark Estate</h4>
            <p>Real estate company</p>
         </div>

         <div className='about-partner-mem'>
            <img src='https://i.pinimg.com/originals/6a/54/de/6a54de8ab9552ccf095e4f3c8e34bf64.jpg' alt='company4'/>
            <h4>Landmark company</h4>
            <p>Real estate company</p>
         </div>
         </div>
       </div>
    </>
  )
}
