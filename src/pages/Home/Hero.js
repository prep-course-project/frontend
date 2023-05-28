import React from 'react'
import video from "./assets/video.mp4"
import '../Home/Hero.css'
import CardSlider from './CardSlider'

export default function Hero() {
  return (
    <div className='hero-home'>
          <video className='video' src={video} loop autoPlay muted></video>
          <div className='Hero-contant'>
               <h1>Find Your Next Dream Home</h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum soluta error vitae? Explicabo blanditiis voluptatum quaerat distinctio voluptate animi, aut provident pariatur mollitia? Vero minus rem placeat ullam sit quis assumenda dignissimos expedita error inventore.</p>
               <div className="btn">
                    <button className="rent">Rent</button>
                    <button className="sell">Sell</button>
               </div>
           </div>

          <div className="section1">
               <div className="card">
                    <i className="fa-solid fa-house icon"></i>
                    <h3>Home inspections</h3>
                    <div className="line"></div>
               </div>
               <div className="card">
                  <i className="fa-solid fa-hand-holding-heart icon"></i>
                    <h3>Property insurance</h3>
                    <div className="line"></div>
               </div>
               <div className="card">
                     <i className="fa-solid fa-location-dot icon"></i>
                    <h3>Best location</h3>
                    <div className="line"></div>
               </div>
               <div className="card">
               <i className="fa-solid fa-layer-group icon"></i>
                    <h3>Lots & Apartment</h3>
                    <div className="line"></div>
               </div>

          </div>
          
    </div>
  )
}
