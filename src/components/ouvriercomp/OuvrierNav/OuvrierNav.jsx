import React from 'react';
import './ouvriernav.css';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../../services/AuthService';
function OuvrierNav() {
  const navigator = useNavigate();

  function handlLogout1() {
    handleLogout();
    navigator('/');
  }
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light osahan-nav shadow-sm">
        <div class="container">
          <a class="navbar-brand" href="/">
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
          <div class="collapse navbar-ouv" id="navbarNavDropdown">
            <form class="d-none d-md-inline-block form-inline ">
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
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="feather-message-square" />
                  {/* Counter - Alerts */}
                  <span className="badge badge-danger badge-counter">8</span>
                </a>
                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                  <h6 className="dropdown-header">Message Center</h6>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="img/user/2.png" alt="" />
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="font-weight-bold overflow-hidden">
                      <div class="text-truncate">
                        Hi there! I am wondering if you can help me with a
                        problem I've been having.
                      </div>
                      <div class="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="img/user/3.png" alt="" />
                      <div class="status-indicator"></div>
                    </div>
                    <div class="overflow-hidden">
                      <div class="text-truncate">
                        I have the photos that you ordered last month, how would
                        you like them sent to you?
                      </div>
                      <div class="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="img/user/4.png" alt="" />
                      <div class="status-indicator bg-warning"></div>
                    </div>
                    <div class="overflow-hidden">
                      <div class="text-truncate">
                        Last month's report looks great, I am very happy with
                        the progress so far, keep up the good work!
                      </div>
                      <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                    </div>
                  </a>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="img/user/5.png" alt="" />
                      <div class="status-indicator bg-success"></div>
                    </div>
                    <div class="overflow-hidden">
                      <div class="text-truncate">
                        Am I a good boy? The reason I ask is because someone
                        told me that people say this to all dogs, even if they
                        aren't good...
                      </div>
                      <div class="small text-gray-500">
                        Chicken the Dog · 2w
                      </div>
                    </div>
                  </a>
                  <a
                    class="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Read More Messages
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="feather-bell" />
                  {/* Counter - Alerts */}
                  <span className="badge badge-info badge-counter">6</span>
                </a>
                {/* Dropdown - Alerts */}
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
                  <h6 className="dropdown-header">Alerts Center</h6>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-primary">
                        <i className="fas fa-download text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 12, 2020
                      </div>
                      <span className="font-weight-bold">
                        A new monthly report is ready to download!
                      </span>
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-success">
                        <i className="fas fa-edit text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 7, 2020
                      </div>
                      $290.29 has been deposited into your account!
                    </div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-warning">
                        <i className="fas fa-folder text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 2, 2020
                      </div>
                      Spending Alert: We've noticed unusually high spending for
                      your account.
                    </div>
                  </a>
                  <a
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Show All Alerts
                  </a>
                </div>
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
                    src="https://ets-goossens.be/images/photos/chauffagiste-intervention-chaudiere-gaz.jpg"
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
    </>
  );
}

export default OuvrierNav;
