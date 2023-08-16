import React, { useState } from 'react';
import './logincomp.css';

const LoginComp = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);

  const handleButtonClick = () => {
    const container = document.getElementById('container10');
    container.classList.toggle('right-panel-active');
  };

  return (
    <>
      <div className="sign-ch">
        <div class="sign-ch-two pb-70">
          <div class="container"></div>
          <div
            className={`container1 ${
              isSignInActive ? '' : 'right-panel-active'
            }`}
            id="container10"
          >
            <div className="form-container sign-up-container">
              <h1 className="h-client">Client</h1>
              <a href="/SignupClient">
                <button className="button-client">Sign Up</button>
              </a>
            </div>

            <div className="form-container2 sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
              </form>
            </div>

            <div className="overlay-container">
              <div
                className={`overlay ${isSignInActive ? '' : 'overlay-left'}`}
              >
                <div className="overlay-panel overlay-left">
                  <button className="close-button" onClick={handleButtonClick}>
                    X
                  </button>

                  <h1 className="h-ouvrier">Ouvrier</h1>

                  <a href="/Signup/ouvrier">
                    <button className="button-ouvrier">Sign UP</button>
                  </a>
                </div>

                <div className="overlay-panel2 overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>
                    Enter your personal details and start your journey with us
                  </p>
                  <button className="ghost" onClick={handleButtonClick}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComp;
