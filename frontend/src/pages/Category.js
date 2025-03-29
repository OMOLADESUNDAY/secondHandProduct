import React from 'react'
import { categoryData } from '../data'
import '../styles/category.css'
import Faq from '../component/Faq'
import {Link} from 'react-router-dom'
const Category = () => {
 
  return (
    <div className='category-container'>
        <h3>Shop by Category</h3>
        <div className='category-wrapper'>
          {categoryData.map((singleCategory,index)=>{
            return(
              <Link className='category-link' key={index} to={`/category/${singleCategory.category}`} >
                <img className='category-image' src={singleCategory.image} alt={singleCategory.category} />
                <h5 className='cate-txt'>{singleCategory.category}</h5>
              </Link>
            )
          })}
        </div>
        <Faq/>
    </div>
  )
}

export default Category