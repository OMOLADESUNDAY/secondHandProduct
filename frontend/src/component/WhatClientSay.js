import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/blog.css'
import SingleTestimony from './SingleTestimony';

const WhatClientSay = () => {
    const [testimony, setTestimony] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  return (
    <div className='blog-container'>
    <h2 className='blog-txt'>Latest Blog</h2>
    <div className='swiper-container'>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 }, // 1 item on small screens
        768: { slidesPerView: 2 }, // 2 items on tablets
        1024: { slidesPerView: 3 }, // 3 items on larger screens
      }}
    >   
    {articles.length === 0 ? <p>No news available</p> : 
        testimony.map((singletestimony, index) => (
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