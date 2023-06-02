import React from 'react'
import SellArea from './SellArea';
import SellPurpose from './SellPurpose';
import SellCity from './SellCity'
import SellPaths from './SellPaths'
import SellPrice from './SellPrice'
import SellRooms from './SellRooms'
import SellType from './SellType'
import SellHero from './SellHero'
import SellSection2 from './SellSection2';
// import TypeSellCard from '../../Components/TypeSellCard/TypeSellCard';

export default function SellProperty() {
  
  return (
    <div>

      <SellHero/>
      <SellSection2/>

       <SellCity/>

      <SellArea/>
      <SellPurpose/>
      <SellPaths/>
      <SellPrice/>
      
      <SellRooms/>
    </div>
  )
}
