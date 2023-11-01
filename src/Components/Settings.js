// Settings.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Settings.css';

const Settings = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // Add more state variables for other information

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSettingsSubmit = async (event) => {
    event.preventDefault();

    try {
      // Implement logic for updating user information
      // Example: make an API call to update user information
      // Replace this with your actual API endpoint and payload
      const response = await fetch('/api/update-user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary authentication headers
        },
        body: JSON.stringify({ name, phoneNumber /* other fields */ }),
      });

      if (response.ok) {
        console.log('User information updated successfully!');
      } else {
        console.error('Failed to update user information.');
      }
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleSettingsSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />

        {/* Add more input fields for other information (email, password, etc.) */}

        <button type="submit">Update Settings</button>
      </form>

      {/* Example: Link to another page, e.g., Home */}
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Settings;