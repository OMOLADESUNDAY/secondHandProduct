import React from 'react'
import { products } from '../data'
import { useParams } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/singleproduct.css'

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
      <div className="top-single-product">
        <div className='image-conatiner-single-product'><img src={product.image} alt={product.name} /></div>
        <div>
          <span>Brand:</span><small>{product.brand}</small>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div>
            {product.sold == null || product.sold >product.no_of_stock?<div><small>No track quantity</small></div>:<div className='sold-available'><small>InStock:{product.no_of_stock}</small><small>sold:{product.sold}</small></div>}
            <ProgressBar now={(product.sold/(product.no_of_stock+product.sold))*100} label={`${Math.floor((product.no_of_stock/(product.sold+product.no_of_stock))*100)}%`}   variant="success" animated/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct