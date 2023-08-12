import React, { useState } from "react";
//import "./Navbar.scss"
import "./Navbar.css"
import "./Navbar-responsive.scss"




function Navbar() {
    


    const currentUser = {
      id: 1,
      username: "Mouad",
      isSeller: false,
    };

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
                      <a href="/About" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/Categories" className="nav-link">
                        Categories
                      </a>
                      
                    </li>
                    
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="company.html" className="nav-link">
                            Company
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="pricing.html" className="nav-link">
                            Pricing
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link dropdown-toggle">
                            Profile
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a href="account.html" className="nav-link">
                                Account
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#" className="nav-link dropdown-toggle">
                                Member
                              </a>
                              <ul className="dropdown-menu">
                                <li className="nav-item">
                                  <a href="/Signin" className="nav-link">
                                    Sign In
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="/Signup" className="nav-link">
                                    Sign Up
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="reset-password.html" className="nav-link">
                                    Reset Password
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li></li>
                            <li className="nav-item">
                              <a href="resume.html" className="nav-link">
                                Resume
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="404.html" className="nav-link">
                            404 Page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="testimonial.html" className="nav-link">
                            Testimonials
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="faq.html" className="nav-link">
                            FAQ
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Catagories
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="privacy-policy.html" className="nav-link">
                            Privacy &amp; Policy
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="terms-condition.html" className="nav-link">
                            Terms &amp; Conditions
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="blog.html" className="nav-link">
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-two" className="nav-link">
                            Blog Two
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-details.html" className="nav-link">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  {!currentUser?.isSeller && 
                    <div className="other-option">
                    <a href="/Signup/ouvrier" className="signup-btn">
                      Sign Up
                    </a>
                    <a href="/Signin" className="signin-btn">
                      Sign In
                    </a>
                  </div>
                  }
                  {currentUser?.isSeller && 
                    <div >
                      
                      <img className="img22"
                        src="assets/img/img2.jpg"
                        alt=""
                      />
                      <span className="user22">{currentUser?.username}</span>
                    
                    
                    </div>
                  }
                  
                  
                </div>
              </nav>
            </div>
          </div>
        </div>
  
  


  
</>

    );
  }

export default Navbar;