import React from 'react'
import {cities} from '../PropertyList/propertyConstants'
import {propertyTypeList} from '../../pages/PropertyList/propertyConstants'
import './SellCity.css'

export default function SellCity() {
  return (
    <div className='city-sell-container'>
         <div className='sell-city'>
       { 
       cities.map((city)=>{
       return <p>{city}</p>
         })
       }
        </div>

        <div className='sell-type'>
       {
           propertyTypeList.map(item=>{
            return <p>{item.type}</p>  
           }) 
        }
        </div>
    </div>
  )
}
