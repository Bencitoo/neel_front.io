import React from 'react';
import { Link } from 'react-router-dom';
import { FaList, FaShoppingCart, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import '../Styles/AuthHome.css';

// Import images
import chineseImage from '../Styles/chinese.jpg';
import plainImage from '../Styles/plain.jpg';
import personalizedImage from '../Styles/personalized.jpg';

const AuthHome = () => {
  // Replace this URL with the actual URL of the user's profile picture
  const userProfilePicture = 'https://avatars.githubusercontent.com/u/112555352?s=400&u=bd814d1e9298229771e502896aed4bc121b700b2&v=4';

  const handleLogout = () => {
    // Redirect the user to the login page upon logout
    window.location.href = '/login'; // Change the URL as needed
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
            <img src={chineseImage} alt="Featured Product 1" />
            <img src={plainImage} alt="Featured Product 2" />
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
            <FaShoppingCart className = "icon" />
            Cart
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
