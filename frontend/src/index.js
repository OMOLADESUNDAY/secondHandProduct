import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { NavbarProvider } from './context/NavbarContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
        <NavbarProvider>
          <CartProvider> 
            <App />
        </CartProvider>
        </NavbarProvider>
    </Router>
  // </React.StrictMode>
);


