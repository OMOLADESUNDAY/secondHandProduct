import React from 'react'
import { trendingCategoryData } from '../data'
import {Link} from 'react-router-dom'
import '../styles/trendingCategory.css'
const TrendingCategory = () => {
  return (
    <div className='trending-category-container'>
        { trendingCategoryData.map((trendingitem)=>{
        return(
            <div key={trendingitem.id} className='trending-cat-card'>
                <div className='trendcat-text-container'>
                  <h5><Link>{trendingitem.name}</Link></h5>
                  <p><Link>{trendingitem.linkname1}</Link></p>
                  <p><Link>{trendingitem.linkname2}</Link></p>
                  <p><Link>{trendingitem.linkname3}</Link></p>
                  <p><Link>{trendingitem.linkname4}</Link></p>
                  <h6><Link>SHOW NOW <span>&gt;&gt;&gt;</span></Link></h6>
                </div>
                <div className='trendcat-image-container'>
                  <img className='trend-card-image' src={trendingitem.img} alt={trendingitem.name} />
                </div>

            </div>
        )
    })}
    </div>
   
   
  )
}

export default TrendingCategory