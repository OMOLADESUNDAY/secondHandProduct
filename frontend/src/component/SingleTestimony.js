import React from 'react'
import '../styles/blog.css'
import {Link} from 'react-router-dom'
const SingleTestimony = ({testimony}) => {
  return (
    <>
        <div className='slide-swiper-container'>
        <Link className='blog-link'>
                <img src={testimony.image} alt={testimony.content} style={{width:'250px',height:'250px',objectFit:'cover',borderRadius:"50%"}} />
                <h3 className='blog-text'>{testimony.content}</h3>
            </Link>
           
        </div>
            
        </>
  )
}

export default SingleTestimony