import React from 'react'
import { categoryData } from '../data'
import '../styles/category.css'
import Faq from '../component/Faq'
import {Link} from 'react-router-dom'
const Category = () => {
 
  return (
    <div>
        <h3>Shop by Category</h3>
        <div className='category-wrapper'>
          {categoryData.map((singleCategory,index)=>{
            return(
              <Link key={index}>
                <img className='category-image' src={singleCategory.image} alt={singleCategory.category} />
                <h4>{singleCategory.category}</h4>
              </Link>
            )
          })}
        </div>
        <Faq/>
    </div>
  )
}

export default Category