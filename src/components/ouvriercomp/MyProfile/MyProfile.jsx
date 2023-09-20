import React from 'react';
import './myprofile.css';
import './myprof';

function MyProfile() {
  return (
    <div id="layoutSidenav_content">
      <main className="myprofile">
        <div className="container-fluid">
          <h1 className="mt-4">My Profile</h1>
          <ol className="breadcrumb mb-4"></ol>
          <div className="row">
            <div className="col-xl-12">
              <div className="card mb-4 order-list">
                <div className="gold-members11 p-4">
                  <a href="#"></a>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group-photo">
                        <div className="form-group2">
                          <input type="file" id="image-file" accept="image/*" />
                          <img
                            id="image-profile"
                            src="https://pub-static.fotor.com/assets/projects/pages/7252c2b86395453a836cdd57b13b3d39/600w/fotor-7c742084acd7491aae9923279bdc3218.jpg"
                            alt="Image"
                          />
                          <label for="image-file" id="edit-image">
                            Edit Image
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 add_top_30">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Last name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your last name"
                            />
                          </div>
                        </div>
                      </div>
                      {/* /row*/}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Telephone</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your telephone number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Your email"
                            />
                          </div>
                        </div>
                      </div>
                      {/* /row*/}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Personal info</label>
                            <textarea
                              style={{ height: 100 }}
                              className="form-control"
                              placeholder="Personal info"
                              defaultValue={''}
                            />
                          </div>
                        </div>
                      </div>
                      {/* /row*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 order-list">
                    <div className="gold-members11">
                      <div className="box_general padding_bottom">
                        <div className="header_box version_2 border-bottom p-3">
                          <h6 className="m-0">
                            <i className="fa fa-lock text-muted mr-2" /> Change
                            password
                          </h6>
                        </div>
                        <div className="p-3">
                          <div className="form-group">
                            <label>Old password</label>
                            <input className="form-control" type="password" />
                          </div>
                          <div className="form-group">
                            <label>New password</label>
                            <input className="form-control" type="password" />
                          </div>
                          <div className="form-group">
                            <label>Confirm new password</label>
                            <input className="form-control" type="password" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 order-list">
                    <div className="gold-members11">
                      <div className="box_general padding_bottom">
                        <div className="header_box version_2 border-bottom p-3">
                          <h6 className="m-0">
                            <i className="fa fa-envelope text-muted mr-2" />{' '}
                            Change email
                          </h6>
                        </div>
                        <div className="p-3">
                          <div className="form-group">
                            <label>Old email</label>
                            <input
                              className="form-control"
                              name="old_email"
                              id="old_email"
                              type="email"
                            />
                          </div>
                          <div className="form-group">
                            <label>New email</label>
                            <input
                              className="form-control"
                              name="new_email"
                              id="new_email"
                              type="email"
                            />
                          </div>
                          <div className="form-group">
                            <label>Confirm new email</label>
                            <input
                              className="form-control"
                              name="confirm_new_email"
                              id="confirm_new_email"
                              type="email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="save mb-2">
                <a href="#" className="btn btn-success">
                  Save
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyProfile;
