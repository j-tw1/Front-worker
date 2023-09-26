import React from 'react'
import './myAccount.css'
import ClientNav from '../ClientNav'
import { getUserDetails } from '../../../services/AuthService'
import { clientpics } from '../../../data'

function MyAccount() {

  const client = getUserDetails()

  const pic = clientpics[client.id];

  return (
    <>
    <ClientNav/>
    <div className="Myacc">
    <div className="container light-style flex-grow-1 container-p-y">
  <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
  <div className="card overflow-hidden">
    <div className="row no-gutters row-bordered row-border-light">
      <div className="col-md-3 pt-0">
        <div className="list-group list-group-flush account-settings-links">
          <a
            className="list-group-item list-group-item-action active"
            data-toggle="list"
            href="#account-general"
          >
            General
          </a>
          <a
            className="list-group-item list-group-item-action"
            data-toggle="list"
            href="#account-change-password"
          >
            Change password
          </a>
          <a
            className="list-group-item list-group-item-action"
            data-toggle="list"
            href="#account-info"
          >
            Info
          </a>
          <a
            className="list-group-item list-group-item-action"
            data-toggle="list"
            href="#account-social-links"
          >
            Social links
          </a>
          
          
        </div>
      </div>
      <div className="col-md-9">
        <div className="tab-content">
          <div className="tab-pane fade active show" id="account-general">
            <div className="card-body media align-items-center">
              <img
                src={pic.img}
                alt=""
                className="d-block ui-w-80"
              />
              <div className="media-body ml-4">
                <label className="btn btn-outline-primary">
                  Upload new photo
                  <input type="file" className="account-settings-fileinput" />
                </label>{" "}
                &nbsp;
                <button type="button" className="btn btn-default md-btn-flat">
                  Reset
                </button>
                <div className="text-light1 small mt-1">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </div>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  placeholder={client.firstname}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={client.lastname}

                />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  placeholder={client.email}
                />
                <div className="alert alert-warning mt-3">
                  Your email is not confirmed. Please check your inbox.
                  <br />
                  <a href="javascript:void(0)">Resend confirmation</a>
                </div>
              </div>
            
            </div>
          </div>
          <div className="tab-pane fade" id="account-change-password">
            <div className="card-body pb-2">
              <div className="form-group">
                <label className="form-label">Current password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">New password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">Repeat new password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="account-info">
            <div className="card-body pb-2">
              <div className="form-group">
                <label className="form-label">Bio</label>
                <textarea
                  className="form-control"
                  rows={5}
                  
                />
              </div>
              <div className="form-group">
                <label className="form-label">Birthday</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="May 3, 1995"
                />
              </div>
              <div className="form-group">
                <label className="form-label">City</label>
                <select className="custom-select">
                  <option>{client.ville}</option>
                  <option selected="">Casablanca</option>
                  <option>Rabat</option>

                </select>
                <label className="form-label">Country</label>
                <select className="custom-select">
                  <option>{client.pays}</option>
                  
                </select>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body pb-2">
              <h6 className="mb-4">Contacts</h6>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                    placeholder={client.phone}                />
              </div>
              
            </div>
          </div>
          <div className="tab-pane fade" id="account-social-links">
            <div className="card-body pb-2">
              <div className="form-group">
                <label className="form-label">Twitter</label>
                <input
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Facebook</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={"https://www.facebook.com/"+client.firstname+client.lastname}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Google+</label>
                <input type="text" className="form-control" defaultValue="" />
              </div>
              <div className="form-group">
                <label className="form-label">LinkedIn</label>
                <input type="text" className="form-control" defaultValue="" />
              </div>
              <div className="form-group">
                <label className="form-label">Instagram</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={"https://www.instagram.com/"+client.firstname+client.lastname}
                />
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
  <div className="text-right mt-3">
    <button type="button" className="btn btn-primary">
      Save changes
    </button>
    &nbsp;
    <button type="button" className="btn btn-default">
      Cancel
    </button>
  </div>
</div>
</div>

    
    </>
  )
}

export default MyAccount