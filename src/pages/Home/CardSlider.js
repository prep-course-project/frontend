import React from 'react'
import { Link } from 'react-router-dom'
import './CardSlider.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img9 from './assets/img9.jpg'
import img10 from './assets/img10.jpg'

export default function Cities() {
  return (


    <div className='cities'>
      <h1>We are avilable in many Well-known Cities</h1>
      
      <div className="cards">
      <Link to = '/propertyList/city/5002' className='a'>
        <div className="city">
          <div className="over-lay-city"></div>
          <img src={img1} alt="" />
          <h3>Dubai</h3>
           </div>
      </Link>

        <Link to = '/propertyList/city/5385'className='a'>
        <div className="city">
        <div className="over-lay-city"></div>
        <img src={img2} alt="" />
          <h3>Ajman</h3>
          </div>
      </Link>

        <Link to = '/propertyList/city/Fujairah'className='a'>
        <div className="city">
        <div className="over-lay-city"></div>
        <img src={img3} alt="" />
          <h3>Fujairah</h3>
          
          </div>
      </Link>
      
        <Link to = '/propertyList/city/Abu-Dhabi'className='a'>
        <div className="city">
        <div className="over-lay-city"></div>
        <img src={img4} alt="" />
          <h3>Abu Dhabi</h3>
          </div>
      </Link>
      </div>
      {/* {first four} */}
      <div className="cards">
        <Link to = '/propertyList/city/5544'className='a'>
        <div className="city">
        <div className="over-lay-city"></div>
        <img src={img7} alt="" />
          <h3>Umm Al Quwain</h3>
          </div>
      </Link>
        <Link to = '/propertyList/city/Abu-Dhabi'className='a'>
        <div className="city">
        <div className="over-lay-city"></div>
        <img src={img8} alt="" />
          <h4>Dibba Al-Fujairah</h4>
          </div>
      </Link>
        <Link to = '/propertyList/city/Abu-Dhabi'className='a'>
        <div className="city">
        <div className="over-lay-city"></div>
        <img src={img10} alt="" />
          <h4>Ras Al Khaimah</h4>
          </div>
      </Link>
        <Link to = '/propertyList/city/6057'className='a'>
        <div className="city">
        <div className="over-lay-city"></div>
        <img src={img9} alt="" />
          <h3>Al Ain</h3>
          </div>
      </Link>


      </div>
    </div>
  )
}
