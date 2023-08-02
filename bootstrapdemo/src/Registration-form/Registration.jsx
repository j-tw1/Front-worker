import React from 'react';
import './Registration.css';
import wimg from '../assets/pexels-gül-işık-3084343 (2).jpg';
export default function Login() {
  return (
    <section className="center-container">
      <div className="register">
        <div className="col-1">
          <h2 className="h2">Sign In</h2>
          <span className="sp">register and enjoy the service</span>
          <form id="form" className="flex flex-col">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <input type="tel" placeholder="phone" />
            <button className="btn">Sign in</button>
          </form>
        </div>

        <div className="col-2">
          <img src={wimg} alt="" />
        </div>
      </div>
    </section>
  );
}
