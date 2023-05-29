import React from 'react'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import './Section2.css'
export default function Serction2() {
  return (
    <div className='section2-home'>
      <div  className="wrap-section2">
          <div className="text">
               <h2>We're Here To Help You Find Your Dream House</h2>
               <div>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odit velit porro illum aliquid doloremque maxime recusandae, reiciendis esse dolor quasi rerum, debitis maiores facilis.</p>
               <p><i class="fa-solid fa-star"></i>Property Managment</p>
               <p><i class="fa-solid fa-star"></i>Construction Services</p>
               <p><i class="fa-solid fa-star"></i>Online Services</p>
               </div>
          </div>
          <div className="img">
               <img className='img1' src={img5} alt="" />
               <img className='img2' src={img6} alt="" />
          </div>
          </div>
    </div>
  )
}
