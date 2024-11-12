import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import { PizzaProvider } from './context/PizzaContext';
import { UserProvider } from "./context/UserContext";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PizzaProvider>
        <CartProvider>
          <UserProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UserProvider>
        </CartProvider>
    </PizzaProvider>
  </React.StrictMode>
);
