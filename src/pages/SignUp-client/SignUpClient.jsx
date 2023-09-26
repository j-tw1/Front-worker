import './SignUpClient.css';
import React, { useState } from 'react';
import { registerClientAPICall } from '../../services/AuthService';

import logo from '../../assets/img/logo2.png';

import { useNavigate } from 'react-router-dom';

function SignUpClient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cin: '',
    phone: '',
    address: '',
    image: '',
    pays: '',
    ville: '',
  });

  const navigator = useNavigate();

  function handlecloseButtonClick(event) {
    navigator('/Signin');
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'pays' || name === 'ville') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setFormData({ ...formData, image: URL.createObjectURL(imageFile) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    registerClientAPICall(formData)
      .then((response) => {
        console.log(response.data);
        navigator('/Signin');
      })
      .catch((error) => {
        console.error(error);
      });

    // Send this data to your backend or perform necessary actions
  };

  return (
    <div className="registration-page">
      <div className="registration-form-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
          <button className="close-button" onClick={handlecloseButtonClick}>
            X
          </button>
        </div>
        <h2 className="Registration">Client Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="client-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
              required
            />
            <input
              className="client-input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="client-input"
              type="Email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="client-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
            <input
              className="client-input"
              type="cin"
              name="cin"
              placeholder="CIN"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="client-input"
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleInputChange}
              required
            />
            <input
              className="client-input"
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="client-input"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <div className="form-group">
            <select name="pays" onChange={handleInputChange} required>
              <option value="">Countries</option>
              <option value="Maroc">Maroc</option>
            </select>
            <select name="ville" onChange={handleInputChange} required>
              <option value="ville">City</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Nador">Nador</option>
              <option value="Rabat">Rabat</option>
            </select>
          </div>
          <button className="btn-C" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpClient;
