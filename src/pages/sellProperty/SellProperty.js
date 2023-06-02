import React from 'react'
import SellSection2 from './SellSection2';
import SellHero from './SellHero'
import CityType from './CityType/CityType';
import PriceArea from './price_area/Price_Area';

export default function SellProperty() {
  
  return (
    <div>
      <SellHero/>
      <SellSection2/>
      <CityType/>
      <PriceArea/>
    </div>
  )
}
