// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();

  // Fetch product details based on the 'id' parameter (not implemented in this example)
  // You can use axios or fetch API for this

  return (
    <div className="container">
      <h2>Product Detail</h2>
      <p>Details for product with ID: {id}</p>
    </div>
  );
};

export default ProductDetail;