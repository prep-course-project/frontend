import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './Agencies.css'
import { Link } from 'react-router-dom';

export default function Agencies() {
     const agenciesList=[
     "https://bayut-production.s3.eu-central-1.amazonaws.com/image/27679880/69f1e0a8ad1b41829543bb3297dc6b47"
     ,"https://bayut-production.s3.eu-central-1.amazonaws.com/image/27680006/bd0372e719934d54a73c2cb29f6e871b"
     ,"https://bayut-production.s3.eu-central-1.amazonaws.com/image/103687802/77ba9c21b8984c7194c8643f522ceef5"
     ,"https://bayut-production.s3.eu-central-1.amazonaws.com/image/27680925/6cf3363875c94b6f9a5e46bfe8c339d4"
     ,"https://bayut-production.s3.eu-central-1.amazonaws.com/image/101127274/693a919cb40a40a4a44090e1eea64b18"
     ,"https://bayut-production.s3.eu-central-1.amazonaws.com/image/27679864/5873fd5938da45aa86c79e84d249bdb2"
     ,"https://bayut-production.s3.eu-central-1.amazonaws.com/image/27679865/fddec189e1334a8e8fcbdd5f3753c26a"
     ,"https://bayut-production.s3.eu-central-1.amazonaws.com/image/27681144/0b4a3f9d96c6454ebe115119247cd7d0"]

     const agenciesName=["Espace Real Estate","McCone Properties","Pleasant Real Estate","Sky View Real Estate","White & Co Real Estate","Haus & Haus Real Estate","AEON & Trisl Real Estate","Metropolitan Premium Properties"]



     let arr = []

     for(let i = 0 ; i < agenciesList.length ; i++){
          arr.push({
               name : agenciesName[i],
               url : agenciesList[i]
          })
     }


     


  return (
     <div className="swiper-cont">
          <h3>You Can Find Your Dream Home With Our Agencies</h3>
     <Swiper
     className='swiper-agen'
     // style={{width:"700px" , marginTop:"100px"}}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={30}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
     //   onSlideChange={() => console.log('slide change')}
     //   onSwiper={(swiper) => console.log(swiper)}
     >
          
           {
               arr.map(item =>{
                    return (<SwiperSlide className='card-agen' > 
                              <Link to= {`/propertyList/agency/${item.name}`} className='agen-div' >
                                   {console.log(item.name)}
                                   <img style={{width:"100%", height:"300px" , objectFit:"contain"}} src={item.url} alt="" />                                   
                              </Link>
                          </SwiperSlide>)
               })
           }

          


     </Swiper>
     </div>
  )
}
