// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUser, FaShoppingCart, FaBell } from "react-icons/fa"; // Import icons
import "../assets/css/Home.css";
import chineseImage from "../assets/images/ChineseCalendar.jpg"; // Import featured product image
import plainImage from "../assets/images/PlainCalendar.jpg"; // Import featured product image

const Home = () => {
  const featuredProductLink = "/login"; // Replace with the actual login page route

  return (
    <div className="home-container">
      <div className="text-content">
        <p className="title1">THE RIGHT CHOICE</p>
        <p className="title2">FOR YOUR BUSINESS ADS</p>
        <p className="title3">NEEL</p>
        <p className="title4">ENTERPRISES</p>
        <p className="description1">Don't miss out on our amazing deals!</p>
        <p className="description2">Reserve now to get the best prices and</p>
        <p className="description3">avoid the rush.</p>
      </div>
      <div className="middle-right-image">
        {/* Make the featured product images clickable */}
        <Link to={featuredProductLink}>
          <img src={chineseImage} alt="Featured Product 1" />
        </Link>
        <Link to={featuredProductLink}>
          <img src={plainImage} alt="Featured Product 2" />
        </Link>
      </div>
      <div className="top-left-menu">
        <Link to="/menu">
          <button className="icon-button">
            <FaBars />
          </button>
        </Link>
      </div>
      <div className="top-right-buttons">
        <Link to="/bell">
          <button className="icon-button">
            <FaBell />
          </button>
        </Link>
        <Link to="/cart">
          <button className="icon-button">
            <FaShoppingCart />
          </button>
        </Link>
        <Link to="/login">
          <button className="icon-button">
            <FaUser />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
