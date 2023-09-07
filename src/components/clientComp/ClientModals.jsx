import React from 'react'
import "./clientmodals.css"
import { isUserLoggedIn , getUserDetails , handleLogout } from "../../services/AuthService";



function ClientModals() {

       const client = getUserDetails()

  return (
    <>
  <div
    className="modal fade"
    id="edit-profile-modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="edit-profile"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-sm modal-dialog-centered"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="edit-profile">
            Edit profile
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="form1">
            <div className="form-row1">
              <div className="form-group col-md-12">
                <label>Phone number</label>
                {<input
                  type="text"
                  className="form-control"
                  placeholder="+212 6969696969"
                />}
              </div>
              <div className="form-group col-md-12">
                <label>Email id</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="mouad69@gmail.com"
                />
              </div>
              <div className="form-group col-md-12 mb-0">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="**********"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn d-flex w-50 text-center justify-content-center btn-outline-primary"
            data-dismiss="modal"
          >
            CANCEL
          </button>
          <button
            type="button"
            className="btn d-flex w-50 text-center justify-content-center btn-primary"
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div
    className="modal fade"
    id="add-address-modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="add-address"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="add-address">
            Add Delivery Address
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="form1">
            <div className="form-row1">
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Delivery Area</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Delivery Area"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      <i className="icofont-ui-pointer" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Complete Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Complete Address e.g. house number, street name, landmark"
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Delivery Instructions</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall"
                />
              </div>
              <div className="form-group mb-0 col-md-12">
                <label htmlFor="inputPassword4">Nickname</label>
                <div
                  className="btn-group btn-group-toggle d-flex justify-content-center"
                  data-toggle="buttons"
                >
                  <label className="btn btn-info active">
                    <input
                      type="radio"
                      name="options"
                      id="option1"
                      autoComplete="off"
                      defaultChecked=""
                    />{" "}
                    Home
                  </label>
                  <label className="btn btn-info">
                    <input
                      type="radio"
                      name="options"
                      id="option2"
                      autoComplete="off"
                    />{" "}
                    Work
                  </label>
                  <label className="btn btn-info">
                    <input
                      type="radio"
                      name="options"
                      id="option3"
                      autoComplete="off"
                    />{" "}
                    Other
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn d-flex w-50 text-center justify-content-center btn-outline-primary"
            data-dismiss="modal"
          >
            CANCEL
          </button>
          <button
            type="button"
            className="btn d-flex w-50 text-center justify-content-center btn-primary"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div
    className="modal fade"
    id="review-profile-modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="review-profile"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-lg modal-dialog-centered"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="edit-profile">
            Review
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="form1">
            <div className="form-row1">
              <div className="form-group col-md-12">
                <p class="mb-2">Give a rate</p>
                <div class="mb-4">
                    <span class="star-rating">
                    <a href="#"><i class="icofont-ui-rating icofont-2x"></i></a>
                    <a href="#"><i class="icofont-ui-rating icofont-2x"></i></a>
                    <a href="#"><i class="icofont-ui-rating icofont-2x"></i></a>
                    <a href="#"><i class="icofont-ui-rating icofont-2x"></i></a>
                    <a href="#"><i class="icofont-ui-rating icofont-2x"></i></a>
                    </span>
                </div>
                <label>Review</label>
                <textarea
                  type="text"
                  className="form-control description-area"
                  placeholder="Write your feedback here ..."
                />
              </div>
              
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn d-flex w-50 text-center justify-content-center btn-outline-primary"
            data-dismiss="modal"
          >
            CANCEL
          </button>
          <button
            type="button"
            className="btn d-flex w-50 text-center justify-content-center btn-primary"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div
    className="modal fade"
    id="reclamation-modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="reclamation"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-lg modal-dialog-centered"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="edit-profile">
            Reclamation
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="form1">
            <div className="form-row1">
              <div className="form-group col-md-12">
                
                <label>Reclamation</label>
                <textarea
                  type="text"
                  className="form-control description-area"
                  placeholder="Write your feedback here ..."
                />
              </div>
              
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn d-flex w-50 text-center justify-content-center btn-outline-primary"
            data-dismiss="modal"
          >
            CANCEL
          </button>
          <button
            type="button"
            className="btn d-flex w-50 text-center justify-content-center btn-primary"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
</>

  )
}

export default ClientModals;
