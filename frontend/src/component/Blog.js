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


const newsApikey=process.env.REACT_APP_NEWSAPIKEY
console.log(newsApikey)
const Blog = () => {
    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchNews = async () => {
          const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApikey}`;
    
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Failed to fetch news");
            }
            const data = await response.json();
            setArticles(data.articles); // Save articles in state
            console.log(data)
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchNews();
      }, []);
    
      if (loading) return <p>Loading news...</p>;
      if (error) return <p>Error: {error}</p>;
    
    
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
            articles.map((article, index) => (
              
                <SwiperSlide key={index} className='swiper-slider'>
                    <Link className='blog-link'>
                      <img src={article.urlToImage} alt={article.title} className='blog-image' />
                      <h3 className='blog-text'>{article.title}</h3>
                    </Link>
                    <Link className='blog-learn-more blog-link'><small>learn more &gt;</small></Link>
                </SwiperSlide>
            ))
          }
    </Swiper>
        </div>
    </div>
  )
}

export default Blog