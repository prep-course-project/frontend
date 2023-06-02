import React from 'react'
import {cities} from '../../PropertyList/propertyConstants'
import {propertyTypeList} from '../../PropertyList/propertyConstants'
import './CityType.css'
import Form from 'react-bootstrap/Form';

export default function CityType() {

  return (
    <div className='city-sell-container'>
      <div>
        <h2>Choose the City of your Property</h2>
         <div className='sell-city'>
       {
      <Form.Select className='city-select' aria-label="Default select example">
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

        <div>
          <div className='city-type-h2'>
        <h2>Choose the Type of your Property</h2>
        </div>
        <div className='sell-type'>
         {
           propertyTypeList.map(item=>{
            // return <button>{item.type}</button>  
            if (item.type === 'Apartment') {
              return <button><i class="fa-sharp fa-solid fa-building"></i>{item.type}</button>
            }
            if (item.type === 'Townhouses') {
              return <button><i class="fa-solid fa-house-chimney"></i>{item.type}</button>
            }
            if (item.type === 'Villas') {
              return <button><i class="fa-solid fa-house"></i>{item.type}</button>
            }
            if (item.type === 'Penthouses') {
              return <button><i class="fa-solid fa-house"></i>{item.type}</button>
            }
            if (item.type === 'Hotel Apartments') {
              return <button><i class="fa-solid fa-hotel"></i>{item.type}</button>
            }
            if (item.type === 'Shop') {
              return <button><i class="fa-solid fa-shop"></i>{item.type}</button>
            }
            if (item.type === 'Warehouse') {
              return <button><i class="fa-solid fa-house"></i>{item.type}</button>
            }
           })
        }

        </div>
        </div>
    </div>
  )
}




