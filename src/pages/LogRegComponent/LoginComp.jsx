import React, { useState } from 'react';
import './logincomp.css';
import {
  getRole,
  getToken,
  loginAPICall,
  saveLoggedInUser,
  storeRole,
  storeToken,
  storeUserDetails,
} from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/img/logo2.png';

const LoginComp = () => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [isSignInActive, setIsSignInActive] = useState(true);

  const navigator = useNavigate();

  const handleButtonClick = () => {
    const container = document.getElementById('container10');
    container.classList.toggle('right-panel-active');
  };

  function handleHomeButtonClick(event) {
    navigator('/');
  }
  async function handleloginClick(e) {
    e.preventDefault();

    await loginAPICall(username, password)
      .then((response) => {
        console.log(response.data);
        const id = response.data.id;
        const address = response.data.addresse;
        const token = 'Bearer ' + response.data.accessToken;
        const role = response.data.role;
        const email = response.data.email;
        const phone = response.data.phone;
        const firstname = response.data.firstname;
        const lastname = response.data.lastname;
        const pays = response.data.pays;
        const ville = response.data.ville;
        const cin = response.data.cin;

        storeToken(token);

        storeRole(role);

        saveLoggedInUser(username);

        storeUserDetails(
          id,
          address,
          email,
          firstname,
          lastname,
          pays,
          phone,
          ville,
          cin
        );

        const roleY = getRole();

        if (roleY == 'Ouvrier') {
          navigator('/ouvdash');
        }
        if (roleY == 'Client') {
          navigator('/ouvrierlist');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="sign-ch">
        <div className="home-button-container">
          <button className="home-button" onClick={handleHomeButtonClick}>
            <img src={logoImage} alt="jjj" className="home-logo" />
          </button>
        </div>
        <div className="sign-ch-two pb-70">
          <div className="container"></div>
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
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Email"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a href="#">Forgot your password?</a>
                <button className="button11" onClick={handleloginClick}>
                  Sign In
                </button>
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

                  <h1 className="h-ouvrier">Worker</h1>

                  <a href="/Signup/ouvrier">
                    <button className="button-ouvrier">Sign UP</button>
                  </a>
                </div>

                <div className="overlay-panel2 overlay-right">
                  <h1>Hello</h1>
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
