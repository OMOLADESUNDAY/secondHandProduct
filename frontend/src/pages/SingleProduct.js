import React, { useState } from 'react'
import { products } from '../data'
import { useParams } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/singleproduct.css'
import { MdAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import Faq from '../component/Faq';
import RelatedProject from '../component/RelatedProject';

const SingleProduct = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [productQuantity,setProductQuantity]=useState(1)
  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const updatequantity = (sign) => {
    setProductQuantity((prev) => {
      if (sign === "add") {
        return prev + 1;
      } else if (sign === "minus") {
        return prev > 1 ? prev - 1 : 1; 
      }
      return prev;
    });
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
    <div className='single-product-container'>
      <div className="top-single-product">
        <div className='image-conatiner-single-product'><img className='single-product-image' src={product.image} alt={product.name} /></div>
        <div className='right-product-container'>
          <span>Brand:</span><small>{product.brand}</small>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div>
            {product.sold == null || product.sold >product.no_of_stock?<div><small>No track quantity</small></div>:<div className='sold-available'><small>InStock:{product.no_of_stock}</small><small>sold:{product.sold}</small></div>}
            <ProgressBar now={Math.floor((product.no_of_stock/(product.sold+product.no_of_stock))*100)} label={`${Math.floor((product.no_of_stock/(product.sold+product.no_of_stock))*100)}%`}   variant="success" animated/>
        </div>
        <div className='radio-outwrapper'>
          {product.color?<div className='properties-container'><small>Color:</small>{product.color.map((actualcolor,index)=>{
              return(
                <div key={index} className='radio-container'> 
                <input
                type="radio"
                id={actualcolor}
                value={actualcolor}
                checked={selectedColor === actualcolor}
            onChange={handleColorChange}
              />
              <label htmlFor={actualcolor}>{actualcolor}</label></div>
              )
            })}</div>:''
          }
        </div>
        <div className='radio-outwrapper'>
          {product.items?<div className='properties-container'><small>Item:</small>{product.items.map((item,index)=>{
              return(
                <div key={index} className='radio-container'>
                  <input
                type="radio"
                id={item}
                value={item}
                checked={selectedItem === item}
            onChange={handleItemChange}
              />
              <label htmlFor={item}>{item}</label>
                </div>
              )
            })}</div>:''
          }
        </div>
        <div className='radio-outwrapper'>
          {product.size?<div className='properties-container'><small>size:</small>{product.size.map((sizes,index)=>{
              return(
                <div className='radio-container' key={index}>
                      <input
                type="radio"
                id={sizes}
                value={sizes}
                checked={selectedSize === sizes}
                onChange={handleSizeChange}
              />
              <label htmlFor={sizes}>{sizes}</label>
                </div>
              )
            })}</div>:''
          }
        </div>
        <div>
              <p>Quantity</p>
              <div className='quantityBuyContainer'>
                <div className='quantity-container'>
                <FiMinus className='counter' onClick={()=>updatequantity('minus')}/><small className='product-quantity'>{productQuantity}</small><MdAdd className='counter' onClick={()=>updatequantity('add')} />
                </div>
                <button className="add-to-cart-btn">
                  Add to cart
                </button>
              </div>
        </div>
        <button className='buy-now-btn'>
          Buy Now
        </button>
        </div>
      </div>
      <RelatedProject category={product.category} />
      <Faq/>
    </div>
  )
}

export default SingleProduct