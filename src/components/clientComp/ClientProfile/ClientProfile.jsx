import React from 'react'
import "./clientprofile.css"
import "../listOuvrier/ouvrierlist.css"
import { workers } from '../../../data'
import OuvrierCard from '../listOuvrier/OuvrierCard/OuvrierCard'
import OrderCard from './cards/OrderCard/OrderCard'
import AdressCard from './cards/AdresseCard/AdressCard'

function ClientProfile() {
  return (
    <>
    <div className="row">
  <div className="col-md-3">
    <div className="osahan-account-page-left shadow-sm bg-white h-100">
      <div className="border-bottom p-4">
        <div className="osahan-user text-center">
          <div className="osahan-user-media">
            <img
              className="mb-3 rounded-pill shadow-sm mt-1"
              src="https://moodoffdp.com/wp-content/uploads/2023/04/Instagram-Girl-DP.jpg"
              alt="gurdeep singh osahan"
            />
            <div className="osahan-user-media-body">
              <h6 className="mb-2">Mouad Emsi</h6>
              <p className="mb-1">+212 69696969</p>
              <p>mouad69@gmail.com</p>
              <p className="mb-0 text-black font-weight-bold">
                <a
                  className="text-primary mr-3"
                  data-toggle="modal"
                  data-target="#edit-profile-modal"
                  href="#"
                >
                  <i className="icofont-ui-edit" /> EDIT
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul
        className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="orders-tab"
            data-toggle="tab"
            href="#orders"
            role="tab"
            aria-controls="orders"
            aria-selected="true"
          >
            <i className="icofont-food-cart" /> Orders
          </a>
        </li>
        
        <li className="nav-item">
          <a
            className="nav-link"
            id="favourites-tab"
            data-toggle="tab"
            href="#favourites"
            role="tab"
            aria-controls="favourites"
            aria-selected="false"
          >
            <i className="icofont-heart" /> Favourites
          </a>
        </li>
        
        <li className="nav-item">
          <a
            className="nav-link"
            id="addresses-tab"
            data-toggle="tab"
            href="#addresses"
            role="tab"
            aria-controls="addresses"
            aria-selected="false"
          >
            <i className="icofont-location-pin" /> Addresses
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="col-md-9">
    <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade active show"
          id="orders"
          role="tabpanel"
          aria-labelledby="orders-tab"
        >
          <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
          <OrderCard/>

        </div>

        <div
          className="tab-pane fade"
          id="favourites"
          role="tabpanel"
          aria-labelledby="favourites-tab"
        >
          <h4 className="font-weight-bold mt-0 mb-4">Favourites</h4>
          <div className="row">
          {workers.filter((worker) => worker.fav === true)
            .map((worker) => (
              <OuvrierCard key={worker.id} worker={worker} />
            ))}
            <div className="col-md-12 text-center load-more">
              <button className="btn btn-primary" type="button" disabled="">
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </button>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="addresses"
          role="tabpanel"
          aria-labelledby="addresses-tab"
        >
          <h4 className="font-weight-bold mt-0 mb-4">Manage Addresses</h4>
          <AdressCard/>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ClientProfile