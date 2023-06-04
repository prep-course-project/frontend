import React from 'react'
import './SellContact.css'
import axios from 'axios'

export default function SellContact({objPost , data}) {

  const userName = (e) =>{
    objPost(current => ({...current , name:e.target.value}))
  }
  const userPhone = (e) =>{

    objPost(current => ({...current , phoneNum:e.target.value}))
  }

  const submit = (e) =>{
    e.preventDefault()
    axios.post(`https://propertylist.onrender.com/usersProperties`, data).then(res => {
      console.log(res.data)
    })
    .catch(err => console.log('err from sell contact'))
  }

  

  return (
    <div className='sell-contact-container'>

      <h2>Tell Us About Yourself</h2>
      <p className="sell-">Please fill the following information:</p> 
      <div className='sell-contact'>

         <form>
            <label for='name'>Name:</label><br></br>
            <input type='text' id='name' placeholder='  Enter Your Name' onChange={userName}></input>
            <br></br>
            <hr></hr> 
            <label for='phone'>Phone Number:</label>
            
            <input type='tel' id='phone' placeholder='  Enter Your Phone Number' onChange={userPhone}></input>
            <br></br>
            <br></br>
         </form>
      </div>
      <button onClick={()=>window.scrollBy(0,window.innerHeight)} className='sell_contactBtn'>Next</button>
    </div>
  )
}
