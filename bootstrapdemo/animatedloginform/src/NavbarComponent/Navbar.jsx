import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <a href="#">Web Dev Creative</a>
        </div>
        <ul className={`links ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="hero">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
        <a href="#" className="action-btn">
          Get Started
        </a>
        <div className="toggle-btn" onClick={handleToggle}>
          <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>
      </div>

      <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="hero">Home</a>
          </li>
          <li>
            <a href="about">about</a>
          </li>
          <li>
            <a href="Services">Services</a>
          </li>
          <li>
            <a href="contact">contact</a>
          </li>
          <li>
            <a href="#" className="action-btn">
              Get started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
