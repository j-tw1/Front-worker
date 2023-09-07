import React from 'react'
import "./ouvriersidebar.css"



function OuvrierSideBar() {
  return (
    <>
  <div className='col-2' id="layoutSidenav_nav sidebar">
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <a className="nav-link" href="/Dashboard">
            <div className="sb-nav-link-icon">
              <i className="feather-home" />
            </div>
            Dashboard
          </a>
          <a className="nav-link" href="/Messages">
            <div className="sb-nav-link-icon">
              <i className="feather-message-square" />
            </div>
            Messages
          </a>
          <a className="nav-link" href="/Orders">
            <div className="sb-nav-link-icon">
              <i className="feather-calendar" />
            </div>
            My Orders{" "}
            <span className="badge badge-pill" id='bd2'>6 New</span>
          </a>
          <a className="nav-link" href="/Reviews">
            <div className="sb-nav-link-icon">
              <i className="feather-star" />
            </div>
            Reviews
          </a>
          
          <a className="nav-link" href="my-profile.html">
            <div className="sb-nav-link-icon">
              <i className="feather-user" />
            </div>
            My Profile
          </a>
          
        </div>
      </div>
      
    </nav>
  </div>
  

    </>
  )
}

export default OuvrierSideBar