import React from 'react'
import './myAccount.css'
import ClientNav from '../ClientNav'

function MyAccount() {
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
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
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
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  defaultValue="Amine"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Amine Bouhmidi"
                />
              </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input
                  type="text"
                  className="form-control mb-1"
                  defaultValue="amine@gmail.com"
                />
                <div className="alert alert-warning mt-3">
                  Your email is not confirmed. Please check your inbox.
                  <br />
                  <a href="javascript:void(0)">Resend confirmation</a>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="EMSI"
                />
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
                  defaultValue={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus."
                  }
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
                  <option>Nador</option>
                  <option selected="">Casablanca</option>
                  <option>Rabat</option>

                </select>
                <label className="form-label">Country</label>
                <select className="custom-select">
                  <option>Morocco</option>
                  
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
                  defaultValue="+0 (123) 456 7891"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Website</label>
                <input type="text" className="form-control" defaultValue="" />
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
                  defaultValue="https://twitter.com/user"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Facebook</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="https://www.facebook.com/user"
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
                  defaultValue="https://www.instagram.com/user"
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