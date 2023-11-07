import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  checkout: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(prevItems => prevItems.filter(item => item !== product));
  };

  const checkout = () => {
    // Checkout logic here
    console.log('Checking out', cartItems);
    setCartItems([]); // Clear cart after checkout
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
};
