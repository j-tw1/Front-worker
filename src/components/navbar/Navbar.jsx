import React, { useState } from 'react';
//import "./Navbar.scss"
import './Navbar.css';
import './Navbar-responsive.scss';
import {
  isUserLoggedIn,
  getUserDetails,
  handleLogout,
} from '../../services/AuthService';

import { useEffect } from 'react';

function Navbar() {
  const userDetails = getUserDetails();

  async function sed(event) {
    handleLogout();
  }

  const currentUser = {
    id: 1,
    username: 'Mouad',
    isSeller: false,
  };

  // if(isUserLoggedIn()){

  return (
    <>
      <div className="navbar-area">
        {/* Menu For Mobile Device */}
        <div className="mobile-nav">
          <a href="/" className="logo">
            <img src="assets/img/logo2.png" alt="logo" />
          </a>
        </div>
        {/* Menu For Desktop Device */}
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="/">
                <img src="assets/img/logo2.png" alt="logo" />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a href="/" className="nav-link active">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      How To Use
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      About Us
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/ContactUs" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>

                {isUserLoggedIn() ? (
                  <>
                    <div className="other-option">
                      <h1 className="fname">
                        {' '}
                        {userDetails.firstname} {userDetails.lastname}
                      </h1>

                      {/* <h1 className="fname">{userDetails.lastname} </h1>  */}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="other-option">
                      <a href="/Signupchoice" className="signup-btn">
                        Sign Up
                      </a>
                      <a href="/Signin" className="signin-btn">
                        Sign In
                      </a>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
