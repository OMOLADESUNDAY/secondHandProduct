import { FiMinus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import '../styles/cart.css'
import { MdAdd } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { RiShoppingBag4Line } from 'react-icons/ri';
const Cart = () => {
  const navigate=useNavigate()
  const { items = [], total, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  if(items.length===0){
    return(
      <div className='empty-cart-container'>

          <p><span> <RiShoppingBag4Line className='searchNavmenuIcon'/></span>Cart is empty</p>
          <Link className='add-to-cart-btn empty-cart-link' to='/product'>Check Products</Link>
      </div>
      
    )
  }
  
  const checkout=()=>{
    navigate('/shippingaddress')
  }
  return (
    <div>
      <h3 className='cart-txt'>Your Shopping Cart</h3>
      <div className='cart-innner-container' >
        <div className='cart-titles'>
          <div>Product</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        <hr />
        {items.map((singleitem)=>{
          return(
            <div key={singleitem.id} className='cart-wrapper'>
              <div className='left-conatiner'>
                <img src={singleitem.image} alt={singleitem.name} className='cart-img' />
                <div>
                  <h6>{singleitem.name}</h6>
                
                  <p>{singleitem.color}</p>
                  <p>{singleitem.size}</p>
                  <p>{singleitem.items}</p>
                  <p>${singleitem.price}</p>
                  <button className="add-to-cart-btn" onClick={() => removeFromCart(singleitem.id)}>remove</button>
                </div>
              </div>
              <div className='outer-quantity-container'>
              <div className='quantity-container'>
                <FiMinus className='counter' onClick={() => decreaseQuantity(singleitem.id)} />
                <small className='product-quantity'>{singleitem.quantity}</small>
                <MdAdd className='counter' onClick={() => increaseQuantity(singleitem.id)} />
            </div>
                <p><span className='quantity-txt'>Quantity</span>:{singleitem.name} x <b className='quantity-fig'>{singleitem.quantity}</b></p>
              </div>
              <div>
              <p>Quantity Price:<span className='quantity-txt'>${singleitem.quantity*singleitem.price}</span></p>
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
      <div className='cart-bottom'>
          <div>
              <Link to='/product' className="add-to-cart-btn empty-cart-link" >Continue Shopping</Link>
          </div>
          <div className='total-checkout'>
            <h4>Total: ${total.toFixed(2)}</h4>
            <button className="add-to-cart-btn" onClick={()=>checkout()} >Check Out</button>
          </div>
         
      </div>
      
    </div>
  );
};

export default Cart