import React from 'react'
import { products } from '../data'
import ProductCard from './ProductCard'
import '../styles/relatedproduct.css'

const RelatedProject = ({category}) => {
    const relatedproduct=products.filter((product)=>product.category===category)
  return (
    <div>
        <h1 className='related-txt'>Related Product</h1>
        <div className='related-wrapper'>
            {relatedproduct.map((singleRelatedProduct)=>{
                return(
                    <ProductCard key={singleRelatedProduct.id} singlefeaturedproduct={singleRelatedProduct}/>
                )
            })}
        </div>
       
    </div>
  )
}

export default RelatedProject