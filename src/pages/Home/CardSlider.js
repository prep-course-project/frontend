import React from 'react'
import { Link } from 'react-router-dom'
import './CardSlider.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'

export default function Cities() {
  return (


    <div className='cities'>
      <h1>We are avilable in many Well-known Cities</h1>
      
      <div className="cards">
      <Link to = '/propertyList/:Dubai'>
        <div className="city">
          <img src={img1} alt="" />
          <h3>Dubai</h3>
           </div>
      </Link>

        <Link to = '/propertyList/:Ajman'>
        <div className="city">
        <img src={img2} alt="" />
          <h3>Ajman</h3>
          </div>
      </Link>

        <Link to = '/propertyList/:Fujairah'>
        <div className="city">
        <img src={img3} alt="" />
          <h3>Fujairah</h3>
          
          </div>
      </Link>
      
        <Link to = '/propertyList/:Abu-Dhabi'>
        <div className="city">
        <img src={img4} alt="" />
          <h3>Abu Dhabi</h3>
          </div>
      </Link>
      </div>
    </div>
  )
}
