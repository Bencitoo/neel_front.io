// Settings.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Settings.css';

const Settings = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [profilePicture, setProfilePicture] = useState(null); // For handling file uploads
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    // Handle profile picture file upload
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSettingsSubmit = async (event) => {
    event.preventDefault();

    try {
      // Implement logic for updating user information
      // Example: make an API call to update user information
      // Replace this with your actual API endpoint and payload
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phoneNumber', phoneNumber);
      formData.append('paymentMethod', paymentMethod);
      if (profilePicture) {
        formData.append('profilePicture', profilePicture);
      }

      const response = await fetch('/api/update-user', {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        console.log('User information updated successfully!');
        setSuccessMessage('User information updated successfully!');
      } else {
        console.error('Failed to update user information.');
        setErrorMessage('Failed to update user information.');
      }
    } catch (error) {
      console.error('Error updating user information:', error);
      setErrorMessage('Error updating user information.');
    }
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
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

        <label htmlFor="paymentMethod">Payment Method:</label>
        <input
          type="text"
          id="paymentMethod"
          name="paymentMethod"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        />

        <label htmlFor="profilePicture">Profile Picture:</label>
        <input
          type="file"
          id="profilePicture"
          name="profilePicture"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />

        <button type="submit">Update Settings</button>
      </form>

      {/* Example: Link to another page, e.g., Home */}
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Settings;
