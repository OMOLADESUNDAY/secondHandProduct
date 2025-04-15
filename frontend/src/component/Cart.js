import { FiMinus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import '../styles/cart.css'
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';
const Cart = () => {
  const { items = [] , total, removeFromCart } = useCart();
  const [productQuantity,setProductQuantity]=useState(1)
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
  
  if(items.length===0){
    return(
      <p>Cart is empty</p>
    )
  }
  return (
    <div>
      <h3>Your Shopping Cart</h3>
      <div>
        <div>
          <h4>Product</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>
        <hr />
        {items.map((singleitem)=>{
          return(
            <div key={singleitem.id} className='cart-wrapper'>
              <div className='left-conatiner'>
                <img src={singleitem.image} alt={singleitem.name} className='cart-img' />
                <div>
                  <h6>{singleitem.name}</h6>
                  <p>{singleitem.price}</p>
                  <p>{singleitem.color}</p>
                  <p>{singleitem.size}</p>
                  <p>{singleitem.items}</p>
               
                  <p>${singleitem.price * singleitem.quantity}</p>
                  <button onClick={() => removeFromCart(singleitem.id)}>remove</button>
                </div>
              </div>
              <div>
                 <div className='quantity-container'>
                                <FiMinus className='counter' onClick={()=>updatequantity('minus')}/><small className='product-quantity'>{singleitem.quantity}</small><MdAdd className='counter' onClick={()=>updatequantity('add')} />
                </div>
                <p>Quantity:{singleitem.name} x <b className='quantity-fig'>{singleitem.quantity}</b></p>
              </div>
              <div>
                <h4>Total: ${total.toFixed(2)}</h4>
              </div>
            </div>
          )
        })}
      </div>
      {/* {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className='cart'>
            <p>{item.name} x {item.quantity}</p>
            <p>${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )} */}
     
    </div>
  );
};

export default Cart