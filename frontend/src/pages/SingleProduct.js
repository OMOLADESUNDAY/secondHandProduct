import React, { useState } from 'react'
import { products } from '../data'
import { useParams } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/singleproduct.css'
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const SingleProduct = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [productQuantity,setProductQuantity]=useState(1)
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption)
  };

  let params=useParams()
  const id=params.id
  const product=products.find((productId)=>productId.id.toString() === id)
  if(!product){
    return(
      <div>Item Not Found</div>
    )
  }
  return (
    <div>
      <div className="top-single-product">
        <div className='image-conatiner-single-product'><img className='single-product-image' src={product.image} alt={product.name} /></div>
        <div>
          <span>Brand:</span><small>{product.brand}</small>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div>
            {product.sold == null || product.sold >product.no_of_stock?<div><small>No track quantity</small></div>:<div className='sold-available'><small>InStock:{product.no_of_stock}</small><small>sold:{product.sold}</small></div>}
            <ProgressBar now={Math.floor((product.no_of_stock/(product.sold+product.no_of_stock))*100)} label={`${Math.floor((product.no_of_stock/(product.sold+product.no_of_stock))*100)}%`}   variant="success" animated/>
        </div>
        <div >
          {product.color?<div className='properties-container'><p>Color:</p>{product.color.map((actualcolor,index)=>{
              return(
                <div key={index}> 
                <input
                type="radio"
                id={actualcolor}
                value={actualcolor}
                checked={selectedOption === actualcolor}
            onChange={handleRadioChange}
              />
              <label htmlFor={actualcolor}>{actualcolor}</label></div>
              )
            })}</div>:''
          }
        </div>
        <div>
          {product.features?<div className='properties-container'><p>Features:</p>{product.features.map((feature,index)=>{
              return(
                <div key={index}>
                  <input
                type="radio"
                id={feature}
                value={feature}
                checked={selectedOption === feature}
            onChange={handleRadioChange}
              />
              <label htmlFor={feature}>{feature}</label>
                </div>
              )
            })}</div>:''
          }
        </div>
        <div>
          {product.size?<div className='properties-container'><p>size:</p>{product.size.map((sizes,index)=>{
              return(
                <div key={index}>
                      <input
                type="radio"
                id={sizes}
                value={sizes}
                checked={selectedOption === sizes}
                onChange={handleRadioChange}
              />
              <label htmlFor={sizes}>{sizes}</label>
                </div>
              )
            })}</div>:''
          }
        </div>
        <div className='quantity-container'>
        <FiMinus className='counter'/><small>{productQuantity}</small><MdAdd className='counter' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct