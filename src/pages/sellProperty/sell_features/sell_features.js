import React, { useEffect, useState } from 'react'
import './sell_features.css'

export default function Sell_features({objPost}) {

     let feature = ['Furnished','Parking-Spaces','Elevators in Building','Prayer Room','Total Floors','Kids Play Area','CCTV Security']
     let str = 'Floor,Nearby Schools,Number of Bedrooms,Other Nearby Places,Parking Spaces,Balcony or Terrace,Service Elevators,Reception/Waiting Room,Gym or Health Club,Barbeque Area,24 Hours Concierge,Nearby Hospitals,Nearby Shopping Malls,Centrally Air-Conditioned,Lobby in Building,Completion Year,Flooring,Swimming Pool,Security Staff,View,Nearby Public Transport'.split(',')
     str.push(...feature)

     const [addFeature, setAddFeature] = useState([])
     const [changed , setchanged] = useState(false)

     const featureClick = (e) =>{ 
          e.target.classList.toggle('active')
          // setchanged(current => )
          if(e.target.classList[1] === 'active'){
               setAddFeature( current => [ ...current ,e.target.innerHTML])
               // objPost(current => ({...current , features:addFeature}))

          }else{
               setAddFeature( current => current.filter(ele => ele !== e.target.innerHTML) );
               // objPost(current => ({...current , features:addFeature}))

          }
          
          
     }

     const handile = () => {
          objPost(current => ({...current , features:addFeature}))
     }

     // useEffect(() => {

     // },[changed])

     

     const closeClick = (e) =>{
          console.log(e.target.nextElementSibling.innerHTML);
          setAddFeature( current => current.filter(ele => ele !== e.target.nextElementSibling.innerHTML) )
          let ele = [...document.querySelectorAll(".active")]
          
          ele.forEach(item => item.innerText === e.target.nextElementSibling.innerHTML && item.classList.remove('active') );

     }

  return (
    <div className='sell-feature'>
     <div className="sell-feature-cards">
          {
               str.map(item =>{
                    return(
                         <p className="feature-card" onClick={featureClick }>
                              {item}
                         </p>
                    )
               })
          }
     </div>


     <div className="data-feature">
          {addFeature.map(item => {
               return (
                    <div className='close-feature'>
                    <i class="fa-solid fa-xmark i-close" onClick={closeClick}></i>
                    <p className="added">{item}</p>
                    </div>

               )
          })}
     </div>
     <button onClick={handile} className='add-feature-btn'>Add Feature</button>
      
    </div>
  )
}
