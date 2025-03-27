import React from 'react'
import { categoryData } from '../data'
const Category = () => {
 
  return (
    <div>
        <h3>Shop by Category</h3>
        <div>
          {categoryData.map((singleCategory,index)=>{
            return(
              <div key={index}>
                <img src={singleCategory.image} alt={singleCategory.category} />
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Category