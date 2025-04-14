import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, total, removeFromCart } = useCart();
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
            <div>
              <div>
                <img src={singleitem.image} alt={singleitem.name} />
                <div>
                  <h6>{singleitem.name}</h6>
                  <p>{singleitem.price}</p>
                  <p>{singleitem.color}</p>
                  <p>{singleitem.size}</p>
                  <p>{singleitem.items}</p>
                  <p>{singleitem.name} x {singleitem.quantity}</p>
                  <p>${singleitem.price * singleitem.quantity}</p>
                  <button onClick={() => removeFromCart(singleitem.id)}>remove</button>
                </div>
              </div>
              <div></div>
              <div></div>
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
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart