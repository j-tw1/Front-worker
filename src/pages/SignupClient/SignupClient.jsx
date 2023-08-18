import React, { useState } from 'react';
import './signupClient.css';
import { registerAPICall } from '../../services/AuthService';

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

    const register = {
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
    };

    registerAPICall(register).then((response) => {  
         console.log(response.data);

     })  .catch(error=>{
          console.error(error); 
     })
 
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
                  name='name'
                  value={firstName}
                  placeholder="Enter your firstname"
                  required
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>
              <div className="signup-input-box">
                <span className="signup-details">lastName</span>
                <input
                  type="text"
                  name='lastname'
                  placeholder="Enter your lastname"
                  required
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
              <div className="signup-input-box">
                <span className="signup-details">Email</span>
                <input
                  type="text"
                  name='email'
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signup-input-box">
                <span className="signup-details">password</span>
                <input
                  type="text"
                  name='password'
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="signup-input-box">
                <span className="signup-details">address</span>
                <input
                  type="address"
                  placeholder="Enter your adress"
                  required
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <div className="signup-input-box">
                <span className="signup-details">phone</span>
                <input
                  type="text"
                  placeholder="enter your phone number"
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
