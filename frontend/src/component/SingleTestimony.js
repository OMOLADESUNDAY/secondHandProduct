import React from 'react'
import '../styles/blog.css'
import {Link} from 'react-router-dom'
const SingleTestimony = ({testimony}) => {
  return (
    <>
        <div className='slide-swiper-container'>
        <Link className='blog-link'>
                <img src={testimony.Image} alt={testimony.title} className='blog-image' />
                <h3 className='blog-text'>{testimony.title}</h3>
            </Link>
           
        </div>
            
        </>
  )
}

export default SingleTestimony