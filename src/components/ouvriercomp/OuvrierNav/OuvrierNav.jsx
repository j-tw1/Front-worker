import React from 'react';
import './ouvriernav.css';
import { useNavigate } from 'react-router-dom';
import { getUserDetails, handleLogout , imageAPICALL } from '../../../services/AuthService';
import { useState } from 'react';
function OuvrierNav() {
  const navigator = useNavigate();

   const [i , setImage] = useState('');
    const u = getUserDetails() ;
    console.log(u.image);
    

        imageAPICALL(u.id).then((response)=>{
          
          setImage(response.data);
          
            });

    console.log(u);
    console.log(i);
     

  function handlLogout1() {
    handleLogout();
    navigator('/');
  }
  return (
    <>
      <div className="form-ouvnav">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light osahan-nav shadow-sm">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img alt="logo" src={getUserDetails.image}/>
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
            <div class="collapse navbar-ouv" id="navbarNavDropdown">
              <form className="form-ouvnav1 ">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary btn-sm" type="button">
                      <i class="feather-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              <ul class="navbar-nav ml-auto">
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
                      src={i}
                     class="nav-osahan-pic rounded-pill"
                    />{' '}
                    My Account
                  </a>
                  <div class="dropdown-menu dropdown-menu-right shadow-sm border-0">
                    <a className="dropdown-item" href="my-profile.html">
                      <i className="feather-edit" /> My Account
                    </a>
                    <a className="dropdown-item" href="my-profile.html">
                      <i className="feather-settings" /> Account Settings
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" onClick={handlLogout1}>
                      <i className="feather-log-out" /> Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default OuvrierNav;
