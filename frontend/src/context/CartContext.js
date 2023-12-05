import React, { createContext, useState } from "react";

// Create the context with a default value
export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}, // Define clearCart here
  checkout: () => {},
});

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== product.name)
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to handle the checkout process
  const checkout = () => {
    // This is where you would usually handle payment processing
    // For the purpose of this example, it just clears the cart
    clearCart();
    // Redirect to a success page or handle the successful checkout
  };

  // Pass the state and the functions in the context provider
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
