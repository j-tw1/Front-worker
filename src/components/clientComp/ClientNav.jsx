import React, { useState ,useEffect} from 'react';
import './clientnav.css';
import { getUserDetails, handleLogout } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { clientpics } from '../../data';

function ClientNav() {
  const [userId, setUserId] = useState('');
  const [clientPic, setClientPic] = useState('');
  const navigator = useNavigate();

  useEffect(() => {
    const userDetails = getUserDetails();
    setUserId(userDetails.id);

    // Check if a valid clientPic exists in clientpics for the current userId
    const userClientPic = clientpics[userDetails.id];
    if (userClientPic) {
      setClientPic(userClientPic);
    }
  }, []);

  function handlLogout1() {
    handleLogout();
    navigator('/');
  }







  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light osahan-nav shadow-sm">
        <div class="container">
          <a class="navbar-brand" href="/ouvrierlist">
            <img alt="logo" src="assets/img/logo2.png" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-cl" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/ouvrierlist">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ouvrierlist">
                  <i class="icofont-sale-discount"></i> Ouvriers
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    alt="Generic placeholder image"
                    src={clientPic.img}
                    class="nav-osahan-pic rounded-pill"
                  />{' '}
                  My Account
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow-sm border-0">
                  <a class="dropdown-item" href="/MyAccount">
                    <i class="icofont-home"></i> My Account
                  </a>
                  <a class="dropdown-item" href="/Profile#orders">
                    <i class="icofont-food-cart"></i> Orders
                  </a>
                  <a class="dropdown-item" href="/Profile#favourites">
                    <i class="icofont-heart"></i> Favourites
                  </a>
                  <a class="dropdown-item" href="/Profile#addresses">
                    <i class="icofont-location-pin"></i> Addresses
                  </a>
                  <a class="dropdown-item" onClick={handlLogout1}>
                    <i class="icofont-logout" ></i> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ClientNav;
