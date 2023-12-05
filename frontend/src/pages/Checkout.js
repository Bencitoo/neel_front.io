import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    contactNumber: "",
    paymentMethod: "Credit Card",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the order here, send data to server or payment gateway
    console.log("Order details:", orderDetails);
    console.log("Order items:", cartItems);
    // Clear cart after successful submission
    clearCart();
    // Navigate to a confirmation page or display confirmation message
    navigate("/order-confirmation");
  };

  if (cartItems.length === 0) {
    // If the cart is empty, redirect to the cart page or display a message
    return (
      <p>Your cart is empty. Please add some products before checking out.</p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={orderDetails.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={orderDetails.address}
        onChange={handleChange}
        required
      />

      <label htmlFor="contactNumber">Contact Number:</label>
      <input
        type="text"
        id="contactNumber"
        name="contactNumber"
        value={orderDetails.contactNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="paymentMethod">Payment Method:</label>
      <select
        id="paymentMethod"
        name="paymentMethod"
        value={orderDetails.paymentMethod}
        onChange={handleChange}
      >
        <option value="Credit Card">Credit Card</option>
        <option value="Gcash">Gcash</option>
        <option value="PayPal">PayPal</option>
        <option value="Cash on Delivery">Cash on Delivery</option>
      </select>

      <label htmlFor="note">Note:</label>
      <textarea
        id="note"
        name="note"
        value={orderDetails.note}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit Order</button>
    </form>
  );
};

export default Checkout;
