import React from 'react'
import Hero from './Hero'
import Header from '../../Components/Header/Header'
import Cities from './CardSlider'
import Serction2 from './Serction2'
import Agencies from './Agencies'
import './Home.css'

export default function Home() {
  return (
    <div className='home-main'>
      <Hero/>
      <Cities/>
      <Agencies/>
      <Serction2/>
    </div>
  )
}
