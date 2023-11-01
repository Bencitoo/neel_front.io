// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Welcome to NEEL Calendar Shop</h2>
        <p>Explore our amazing collection of calendars!</p>
        <div className="auth-info">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button">Sign Up</button>
          </Link>
        </div>
        <p className="signup-prompt">Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default Home;
