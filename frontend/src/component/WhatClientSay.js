import React from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/blog.css'
import SingleTestimony from './SingleTestimony';
import { testimonialdata } from '../data';
const WhatClientSay = () => {
  return (
    <div className='blog-container'>
    <h2 className='blog-txt'>What Client Says</h2>
    <div className='swiper-container'>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 }, // 1 item on small screens
        768: { slidesPerView: 2 }, // 2 items on tablets
        1024: { slidesPerView: 3 }, // 3 items on larger screens
      }}
    >   
    {
        testimonialdata.map((singletestimony, index) => (
            <SwiperSlide key={index} className='swiper-slider'>
              <SingleTestimony testimony={singletestimony}/>
            </SwiperSlide>
        ))
      }
</Swiper>
    </div>
</div>
  )
}

export default WhatClientSay