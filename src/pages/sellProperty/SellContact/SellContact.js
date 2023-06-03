import React from 'react'
import './SellContact.css'

export default function SellContact() {
  return (
    <div className='sell-contact-container'>

      <h2>Tell Us About Yourself</h2>
      <p className="sell-">Please fill the following information:</p> 
      <div className='sell-contact'>

         <form>
            <label for='name'>Name:</label><br></br>
            <input type='text' id='name' placeholder='  Enter Your Name'></input>
            <br></br>
            <hr></hr> 
            <label for='phone'>Phone Number:</label>
            
            <input type='tel' id='phone' placeholder='  Enter Your Phone Number'></input>
            <br></br>
            <br></br>
            <input type='Submit' value='Submit'></input>
            
         </form>
       
      </div>
    </div>
  )
}
