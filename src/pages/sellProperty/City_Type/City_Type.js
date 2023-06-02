import React from 'react'
import {cities} from '../../PropertyList/propertyConstants'
import {propertyTypeList} from '../../PropertyList/propertyConstants'
import './City_Type.css'

import Dubai from '../assets/Dubai.jpg'
import img3 from '../assets/img3.jpg'
export default function City_Type() {

  return (
    <div className='city-sell-container'>
      <div>
        <h2>Choose the City of your Property</h2>
         <div className='sell-city'>
       {
       cities.map((city)=>{
       return(
            // <img src={`../assets/${city.slice(0,city.length-4)}.jpg`} alt='hgjk'></img>
            console.log(`../assets/${city.slice(0,city.length-4)}.jpg`)
          //  <button>{city.slice(0,city.length-4)}</button>
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




