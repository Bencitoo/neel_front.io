// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import AuthHome from './Components/AuthHome';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Settings from './Components/Settings';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authenticateUser = () => setIsAuthenticated(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/auth-home" />
            ) : (
              <Home authenticateUser={authenticateUser} isAuthenticated={isAuthenticated} />
            )
          }
        />
        <Route
          path="/auth-home"
          element={
            isAuthenticated ? (
              <AuthHome />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/settings"
          element={isAuthenticated ? <Settings /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login authenticateUser={authenticateUser} isAuthenticated={isAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
