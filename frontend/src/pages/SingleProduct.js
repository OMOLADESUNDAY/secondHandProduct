import React from 'react'
import { products } from '../data'
import { useParams } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';

const SingleProduct = () => {
  let params=useParams()
  const id=params.id
  console.log(id)
  const product=products.find((productId)=>productId.id.toString() === id)
  if(!product){
    return(
      <div>Item Not Found</div>
    )
  }
  return (
    <div>
      <div className="top">
        <div><img src={product.image} alt={product.name} /></div>
        <div>
          <span>Brand:</span><small>{product.brand}</small>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div>
            
            {product.sold == null || product.sold >product.no_of_stock?<div><small>No track quantity</small></div>:<div className='sold-available'><small>sold:{product.sold}</small><small>available:{product.no_of_stock}</small></div>}
            <ProgressBar now={(product.sold/product.no_of_stock)*100} label={`${Math.floor((product.sold/product.no_of_stock)*100)}%`}   variant="danger" animated/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct