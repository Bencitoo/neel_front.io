import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaList, FaShoppingCart, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { CartContext } from './CartContext'; // Import CartContext
import '../Styles/AuthHome.css';

// Import images
import chineseImage from '../Styles/chinese.jpg';
import plainImage from '../Styles/plain.jpg';
import personalizedImage from '../Styles/personalized.jpg';

const AuthHome = () => {
  const { cartItems, addToCart } = useContext(CartContext); // Use addToCart from context

  const userProfilePicture = 'https://avatars.githubusercontent.com/u/112555352?s=400&u=bd814d1e9298229771e502896aed4bc121b700b2&v=4';

  const handleLogout = () => {
    window.location.href = '/login';
  };

  // Function to create a product object and add it to the cart
  const addProductToCart = (name, image) => {
    addToCart({ name, image });
  };

  return (
    <div className="auth-home-container">
      <div className="auth-home-content">
        <div className="user-profile">
          <img src={userProfilePicture} alt="User Profile" />
          <h2>Welcome back, Mr. Bencito!</h2>
        </div>

        {/* Featured Products Section */}
        <div className="featured-section">
          <h3>Featured Products</h3>
          <div className="featured-products">
            {/* Product 1 */}
            <div className="product">
              <img src={chineseImage} alt="Chinese Product" />
              <div className="add-to-cart">
                <button onClick={() => addProductToCart('Chinese Product', chineseImage)}>Add to Cart</button>
              </div>
            </div>
            {/* Product 2 */}
            <div className="product">
              <img src={plainImage} alt="Plain Product" />
              <div className="add-to-cart">
                <button onClick={() => addProductToCart('Plain Product', plainImage)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Deal of the Day Section */}
        <div className="deal-of-the-day">
          <h3>Deal of the Day</h3>
          <img src={personalizedImage} alt="Deal of the Day" />
        </div>

        <div className="button-container">
          <Link to="/product-list" className="auth-button">
            <FaList className="icon" />
            Product List
          </Link>
          <Link to="/cart" className="auth-button">
            <FaShoppingCart className="icon" />
            Cart ({cartItems.length})
          </Link>
          <Link to="/settings" className="auth-button">
            <FaCog className="icon" />
            Settings
          </Link>
          <button className="auth-button" onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthHome;
