import React from 'react'
import SellSection2 from './SellSection2';
import SellHero from './SellHero'
import City_Type from './City_Type/City_Type';
import PriceArea from './price_area/Price_Area';

export default function SellProperty() {
  
  return (
    <div>
      <SellHero/>
      <SellSection2/>
      
      <City_Type/>
      <PriceArea/>
    </div>
  )
}
