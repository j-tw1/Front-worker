import React from 'react'
import "./clientprofile.css"
import "../listOuvrier/ouvrierlist.css"

import AddressesList from './cardslist/AddressesList'
import OrdersList from './cardslist/OrdersList'
import FavouritesList from './cardslist/FavouritesList'
import ClientModals from '../ClientModals'

import {   getUserDetails  } from "../../../services/AuthService";

import {   getOuvrierList } from "../../../services/OuvrierService";


function ClientProfile() {

  const client = getUserDetails() 
  const ouvriers = getOuvrierList()
  
  
  return (
    <>
    <ClientModals/>
        <section className="profile">
          
      <div className="container">
    <div className="row profile">
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
              <h6 className="mb-2">{client.firstname} {client.lastname}</h6>
              <p className="mb-1">{client.phone}</p>
              <p>{client.email}</p>
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
        <OrdersList/>
        <FavouritesList/>
        <AddressesList/>
      </div>
    </div>
  </div>
</div>
</div>
    </section>

    </>
  )
}

export default ClientProfile