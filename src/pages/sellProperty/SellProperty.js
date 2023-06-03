import React, { useState } from 'react'
import SellSection2 from './SellSection2';
import SellHero from './SellHero'
import CityType from './CityType/CityType';
import PriceArea from './price_area/Price_Area';
import SellContact from './SellContact/SellContact';
import Finial from './Finial/Finial';
import Sell_features from './sell_features/sell_features';

export default function SellProperty() {
  let obj = {
    propertyType : 0,
    area : 0,
    cityName : 0,
    roomsNum:0,
    bathsNum:0,
    price:0,
    title:0,
    propertyDescription: 0,
    name :0 ,
    phoneNum : 0,
    features : 0,
    widthArea:0
  }
  const [objPost ,setObjPost ] = useState(obj)

  console.log(objPost)
  
  return (
    <div>
      <SellHero  />
      <SellSection2/>
      <CityType objPost = {setObjPost}/>
      <PriceArea objPost = {setObjPost}/>
      <Sell_features objPost = {setObjPost}/>
      <SellContact objPost = {setObjPost} data={objPost} />
      <Finial  objPost = {objPost} />
    </div>
  )
}
