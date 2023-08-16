import React, { useState } from 'react';
import './signupClient.css';

function SignupClient() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setaddress] = useState('');
  const [phone, setphone] = useState('');

  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
    };

    try {
      const response = await fetch(
        'http://localhost:8081/api/v1/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        // Check the status code for success
        setRegistrationStatus('Registration successful!');
      } else {
        setRegistrationStatus('Registration failed. Please check the data.');
      }

      window.location.href = '/';
    } catch (error) {
      console.error('Error registering:', error);
      setRegistrationStatus('An error occurred during registration.');
    }
  };
  return (
    <>
      <div className="signup-container">
        <div className="signup-title">Registration</div>
        <div className="signup-content">
          <form onSubmit={handleSubmit}>
            <div className="signup-user-details">
              <div className="signup-input-box">
                <span className="signup-details">firstName</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>
              <div className="signup-input-box">
                <span className="signup-details">lastName</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  required
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
              <div className="signup-input-box">
                <span className="signup-details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signup-input-box">
                <span className="signup-details">password</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="signup-input-box">
                <span className="signup-details">address</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <div className="signup-input-box">
                <span className="signup-details">phone</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  required
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
            </div>
            <div className="signup-button">
              <input type="submit" value="Register" />
            </div>

            <p className="signup-login-link">
              Already have an account? <a href="/Signin">Sign in</a>
            </p>
          </form>
        </div>
      </div>

      <p>{registrationStatus}</p>
    </>
  );
}

export default SignupClient;
