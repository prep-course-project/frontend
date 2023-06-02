import React from 'react'
import {cities} from '../../PropertyList/propertyConstants'
import {propertyTypeList} from '../../PropertyList/propertyConstants'
import './City_Type.css'

export default function City_Type() {
  const imagesObj={
    Dubai:'../assets/Dubai.jpg',
    abu_Dhabi:'../assets/abu_dhabi.jpg',
    fujairah:'../assets/fujairah.jpg',
    'Al Ain':'../assets/Al_Ain.jpg',
    'Ras Al Khaimah':'../assets/Ras_Al_Khaimah.jpg',
    'Umm Al Quwain':'../assets/Umm_Al_Quwain.jpg',
    Fujairah:'../assets/Fujairah.jpg',
  }

  return (
    <div className='city-sell-container'>
      <div>
        <h2>Choose the City of your Property</h2>
         <div className='sell-city'>
       {
       cities.map((city)=>{
       return(
        // console.log(imagesObj[city.slice(0,city.length-4)])
           <img src={`/assets/${city.slice(0,city.length-4)}.jpg`} alt="fdsafds" />
        )})
       }
        </div>
        </div>
        <div>
        <h2>Choose the Type of your Property</h2>

        <div className='sell-type'>
       {
           propertyTypeList.map(item=>{
            return <button>{item.type}</button>  
           })
        }
        </div>
        </div>
    </div>
  )
}




