import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../Styles/cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, checkout } = useContext(CartContext);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <p>{item.name}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
          <button className="checkout-button" onClick={checkout}>Checkout</button>
        </div>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
      <button className="back-button" onClick={() => navigate('/auth-home')}>
        Back to Home
      </button>
    </div>
  );
};

export default Cart;
