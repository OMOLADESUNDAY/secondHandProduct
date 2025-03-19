import React from 'react'
import '../styles/blog.css'
import {Link} from 'react-router-dom'

const SingleBlog = ({article}) => {
  return (
        <>
        <div className='slide-swiper-container'>
        <Link className='blog-link'>
                <img src={article.urlToImage} alt={article.title} className='blog-image' />
                <h3 className='blog-text'>{article.title}</h3>
            </Link>
            <Link className='blog-learn-more blog-link'><small>learn more &gt;</small></Link>
        </div>
            
        </>
  )
}

export default SingleBlog