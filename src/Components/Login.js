// Login.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Login = ({ authenticateUser, isAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useEffect to extract and set values from query parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const usernameParam = params.get('username');
    const passwordParam = params.get('password');

    if (usernameParam) {
      setUsername(usernameParam);
    }

    if (passwordParam) {
      setPassword(passwordParam);
    }
  }, [location.search]);

  // Rest of your component logic

  const handleLogin = () => {
    // Your login logic here
    authenticateUser(); // Call this function on successful login
    navigate('/'); // Redirect to home
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        {/* Your login form */}
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;