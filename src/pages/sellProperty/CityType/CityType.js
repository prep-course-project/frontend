import React, { useState } from 'react'
import {cities} from '../../PropertyList/propertyConstants'
import {propertyTypeList} from '../../PropertyList/propertyConstants'
import './CityType.css'
import Form from 'react-bootstrap/Form';

export default function CityType({objPost}) {



  const cityTypeClick = (e) =>{
    
    objPost(current => ({...current ,type:e.target.innerText }))

  }
  const cityClick = (e) =>{    
    objPost(current => ({...current ,cityName:e.target.value }))

  }

  return (
    <div className='city-sell-container'>
      <div className="city-sell-container0">

      
      <div className='city-sell-container1'>
        <h2>Choose the City of your Property</h2>
         <div className='sell-city'>
       {
      <Form.Select onChange={cityClick} className='city-select' aria-label="Default select example">
         <option value='null'>Select Your city</option>
         {
         cities.map(city=>{
          return (
            <option value={city.slice(0,city.length-4)}>{city.slice(0,city.length-4)}</option>
          )
        })
         
       }
       </Form.Select>
       }
         </div>
        </div>

        <div className='city-sell-container2'>
          <div className='city-type-h2'>
        <h2>Choose the Type of your Property</h2>
        </div>
        <div className='sell-type'>
         {
           propertyTypeList.map(item=>{
            // return <button>{item.type}</button>  
            if (item.type === 'Apartment') {
              return <button onClick = {cityTypeClick} ><i class="fa-sharp fa-solid fa-building"></i>{item.type}</button>
            }
            if (item.type === 'Townhouses') {
              return <button onClick = {cityTypeClick}><i class="fa-solid fa-house-chimney"></i>{item.type}</button>
            }
            if (item.type === 'Villas') {
              return <button onClick = {cityTypeClick}><i class="fa-solid fa-house"></i>{item.type}</button>
            }
            if (item.type === 'Penthouses') {
              return <button onClick = {cityTypeClick}><i class="fa-solid fa-house"></i>{item.type}</button>
            }
            if (item.type === 'Hotel Apartments') {
              return <button onClick = {cityTypeClick}><i class="fa-solid fa-hotel"></i>{item.type}</button>
            }
            if (item.type === 'Shop') {
              return <button onClick = {cityTypeClick}><i class="fa-solid fa-shop"></i>{item.type}</button>
            }
            if (item.type === 'Warehouse') {
              return <button onClick = {cityTypeClick}><i class="fa-solid fa-house"></i>{item.type}</button>
            }
           })
        }

        </div>
        </div>
        </div>
    </div>
  )
}




