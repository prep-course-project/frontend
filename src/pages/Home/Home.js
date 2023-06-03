import React from 'react'
import Hero from './Hero'
import Header from '../../Components/Header/Header'
import Cities from './CardSlider'
import Serction2 from './Serction2'
import Agencies from './Agencies'
import './Home.css'
import Feature from '../../feature/Feature'
import ScrollProgress from '../../feature/Scroll-progress'
import Sell_features from '../sellProperty/sell_features/sell_features'

export default function Home() {
  return (
    <div className='home-main'>
      <Hero/>
      <Cities/>
      <Agencies/>
      <Serction2/>
      <Feature/>
      <ScrollProgress/>
    </div>
  )
}
