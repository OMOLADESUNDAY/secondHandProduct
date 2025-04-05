import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, total, removeFromCart } = useCart();

  return (
    <div>
      <h3>Your Cart</h3>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <p>{item.title} x {item.quantity}</p>
            <p>${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart