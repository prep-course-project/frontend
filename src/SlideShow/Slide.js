import React from 'react'
import img1 from'../pages/Home/assets/img1.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';


export default function Slide() {

return (
     <Swiper
     style={{width:"700px" , marginTop:"100px"}}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={10}
       slidesPerView={3.5}
       navigation
       pagination={{ clickable: true }}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
     >
       <SwiperSlide key={img1}> </SwiperSlide>
       <SwiperSlide key={img1}><img src={img1} alt=""  style={{width:"100%", height:"250px" , objectFit:"contain"}}/></SwiperSlide>
     </Swiper>

      //  <SwiperSlide key={img1}><img src={img1} alt=""  style={{width:"100%", height:"250px" , objectFit:"contain"}}/></SwiperSlide>
      //  <SwiperSlide key={img1}><img src={img1} alt=""  style={{width:"100%", height:"250px" , objectFit:"contain"}}/></SwiperSlide>
      //  <SwiperSlide key={img1}><img src={img1} alt=""  style={{width:"100%", height:"250px" , objectFit:"contain"}}/></SwiperSlide>
      //  <SwiperSlide key={img1}><img src={img1} alt=""  style={{width:"100%", height:"250px" , objectFit:"contain"}}/></SwiperSlide>
   );
}