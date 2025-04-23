import React, { useState } from 'react';
import '../styles/payment.css';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';
const Payment = () => {
    

const secretKey = 'your-256-bit-secret'; // Must be kept secret (store safely)

const encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  return ciphertext;
};

// Usage
const userData = {
  name: 'John Doe',
  cardNumber: '4242424242424242'
};

const encryptedPayload = encryptData(userData);
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handleMethodChange = (method) => {
      setPaymentMethod(method);
    };
  
    const handleCardSubmit = (e) => {
      e.preventDefault();
      alert("Processing Credit/Debit Card Payment...");
    };
    return (
        <div className="payment-container">
          <h2>Select Payment Method</h2>
          <div className="payment-options">
            <button onClick={() => handleMethodChange('card')} className={paymentMethod === 'card' ? 'active' : ''}>Credit/Debit Card</button>
            {/* <button onClick={() => handleMethodChange('cashapp')} className={paymentMethod === 'cashapp' ? 'active' : ''}>Cash App</button> */}
          </div>
    
          <div className="payment-form">
            {paymentMethod === 'card' && (
              <form onSubmit={handleCardSubmit}>
                <div>
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div>
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="card-details">
                  <input type="text" placeholder="MM/YY" required />
                  <input type="text" placeholder="CVV" required />
                </div>
                <button type="submit" className='btn btn-danger'>Pay Now</button>
              </form>
            )}
    
            {/* {paymentMethod === 'cashapp' && (
              <div className="cashapp-info">
                <p>Send to Cash App:</p>
                <h4>$YourCashTag</h4>
                <img src="/cashapp-qr.png" alt="Cash App QR" className="qr-img" /><br />
                <Link className='btn btn-danger' href="">Confirm Payment</Link>
              </div>
            )} */}
          </div>
        </div>
      );
    };
    


export default Payment