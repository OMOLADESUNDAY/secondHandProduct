import React from 'react'
import { trendingCategoryData } from '../data'
const TrendingCategory = () => {
  return (
    trendingCategoryData.map((trendingitem)=>{
        return(
            <div key={trendingitem.id}>
                

            </div>
        )
    })
   
  )
}

export default TrendingCategory