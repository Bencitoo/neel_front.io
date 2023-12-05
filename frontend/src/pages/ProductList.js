// ProductList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/css/ProductList.css";

// New image URL
const newImageUrl =
  "https://img.freepik.com/free-vector/hand-drawn-annual-calendar-template_23-2149716984.jpg?w=2000";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your backend API (not implemented in this example)
    // Update the URL with your actual backend endpoint
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (productId) => {
    // Add logic to handle adding the product to the cart
    console.log(`Added product with ID ${productId} to the cart.`);
  };

  const handleBuyNow = (productId) => {
    // Add logic to handle the "Buy Now" action (e.g., navigate to billing form)
    console.log(`Buy Now clicked for product with ID ${productId}.`);
    // You can use react-router's history or navigate to go to the billing form
  };

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Wrap the image URL with quotes */}
            <img src={newImageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
            <button onClick={() => handleBuyNow(product.id)}>Buy Now</button>
            {/* Link to the product details page */}
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
