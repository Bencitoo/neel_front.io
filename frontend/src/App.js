import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Make sure to import CartProvider
import Home from "./pages/Home";
import AuthHome from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"; // Import the Checkout component
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authenticateUser = () => setIsAuthenticated(true);

  return (
    <CartProvider>
      {" "}
      {/* Wrap your routes with CartProvider */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/auth-home" />
              ) : (
                <Home
                  authenticateUser={authenticateUser}
                  isAuthenticated={isAuthenticated}
                />
              )
            }
          />
          <Route
            path="/auth-home"
            element={isAuthenticated ? <AuthHome /> : <Navigate to="/login" />}
          />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />{" "}
          {/* Checkout route */}
          <Route
            path="/settings"
            element={isAuthenticated ? <Settings /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={
              <Login
                authenticateUser={authenticateUser}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
