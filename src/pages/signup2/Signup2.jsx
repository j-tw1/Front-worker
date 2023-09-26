import React, { useState } from 'react';
//import { useTranslation } from 'react-i18next';
import defaultImage from '../../assets/img/account.jpg';
import './Signup2.css';

function Signup2() {
  //const [t, i18n ] = useTranslation();
  const [selectedImage, setSelectedImage] = useState(defaultImage);

  const handleInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <section className="h-100 h-custom gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="p-5 bg-lwla">
                        <h3
                          className="fw-normal mb-5"
                          style={{ color: '#4835d4' }}
                        >
                          <b className="b0">General Infomation</b>
                        </h3>
                        <div className="card2">
                          <img src={selectedImage} alt="" id="prof-pic" />
                          <label
                            for="input-file"
                            className="lbl1"
                            id="prof-pic"
                          >
                            update image
                          </label>
                          <input
                            type="file"
                            accept="image/jpeg, image/png, image/jpg"
                            id="input-file"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Examplev2"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplev2"
                              >
                                LastName
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Examplev3"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplev3"
                              >
                                FirstName
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Examplev2"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplev2"
                              >
                                CIN
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="date"
                                id="form3Examplev3"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplev3"
                              >
                                Birthdate
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Examplev4"
                                className="form-control form-control-lg"
                                style={{ backgroundColor: 'lightgray' }}
                                defaultValue="Plombier"
                                readOnly
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplev4"
                              >
                                Category
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Examplev4"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplev4"
                              >
                                Experience
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12 mb-4 pb-2 mb-md-0 pb-md-0">
                          <div className="form-outline">
                            <input
                              type="file"
                              className="select-arrow form-control "
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplev5"
                            >
                              Certifications
                            </label>
                          </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control description-area"
                              id="exampleFormControlTextarea1"
                              rows={6}
                              placeholder="Description"
                              required=""
                              defaultValue={''}
                            />
                            <label htmlFor="exampleFormControlTextarea1">
                              Description
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 bg-indigo text-white">
                      <div className="p-5">
                        <h3 className="fw-normal mb-5 bold">
                          <b className="b1">Contact Details</b>
                        </h3>
                        <div className="mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              Street + Nr
                            </label>
                          </div>
                        </div>
                        <div className="mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea3"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea3"
                            >
                              Additional Information
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="form3Examplea4"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea4"
                              >
                                Zip Code
                              </label>
                            </div>
                          </div>
                          <div className="col-md-7 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="form3Examplea5"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea5"
                              >
                                city
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea6"
                              className="form-control form-control-lg"
                              style={{ backgroundColor: 'lightgray' }}
                              defaultValue="Maroc"
                              readOnly
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea6"
                            >
                              Country
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="form3Examplea7"
                                className="form-control form-control-lg"
                                style={{ backgroundColor: 'lightgray' }}
                                defaultValue="+212"
                                readOnly
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea7"
                              >
                                Code +
                              </label>
                            </div>
                          </div>
                          <div className="col-md-7 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="form3Examplea8"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea8"
                              >
                                Phone Number
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea9"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea9"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="password"
                                id="form3Examplev3"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplev3"
                              >
                                Password
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="password"
                                id="form3Examplev3"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplev3"
                              >
                                Confirm password
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-start mb-4 pb-3">
                          <input
                            className="form-check-input me-3"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label text-white"
                            htmlFor="form2Example3"
                          >
                            I do accept the{' '}
                            <a href="#!" className="text-white">
                              <u>Terms and Conditions</u>
                            </a>{' '}
                            of your site.
                          </label>
                        </div>
                        <button
                          type="button"
                          className="btn btn-light btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Signup2;
