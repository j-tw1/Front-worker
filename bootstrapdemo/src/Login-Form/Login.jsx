import React from 'react';
import '../Login-Form/Login.css';
import wimg from '../assets/pexels-gül-işık-3084343 (2).jpg';

export default function Login() {
  return (
    <section className="center-container">
      <div className="register">
        <div className="col-1">
          <h2 className="h2">Login</h2>
          <span className="sp">Enter your credentials to log in</span>
          <form id="form" className="flex flex-col">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button className="btn">Login</button>
          </form>
        </div>

        <div className="col-2">
          <img src={wimg} alt="" />
        </div>
      </div>
    </section>
  );
}
