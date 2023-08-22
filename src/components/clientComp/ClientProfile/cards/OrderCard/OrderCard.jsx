import React from 'react'
import "./ordercard.css"

function OrderCard() {
  return (
    <>
    <div className="bg-white card mb-4 order-list shadow-sm">
            <div className="gold-members p-4">
              <a href="#"></a>
              <div className="media1">
                
                <a href="#">
                  <img
                    className="mr-4"
                    src="https://www.ifapme.be/sites/default/files/styles/wvn_facebook/public/2022-05/metiers_MM_mecanicien_automobile_garage_BR.jpg"
                    alt="Generic placeholder image"
                  />
                </a>
                
                <div className="media-body">
                  <a href="#">
                    <span className="float-right text-info">
                      Delivered on Mon, Nov 12, 7:18 PM{" "}
                      <i className="icofont-check-circled text-success" />
                    </span>
                  </a>
                  <h6 className="mb-2">
                    <a href="#"></a>
                    <a href="detail.html" className="text-black">
                      Oussama Ababou {" "}
                      <span className="badge badge-success">Plombier</span>

                    </a>
                  </h6>
                  <p className="text-gray mb-1">
                    <i className="icofont-location-arrow" /> Rue Med 5 appt 2 , Rabat
                  </p>
                  <p className="text-gray mb-3">
                    <i className="icofont-list" /> ORDER #25102589748{" "}
                    <i className="icofont-clock-time ml-2" /> Mon, Nov 12, 6:26
                    PM
                  </p>
                  <p className="text-dark">
                    Robini x 2, 9wads x 7
                  </p>
                  <hr />
                  <div className="float-right">
                  <a 

                    className="btn btn-sm btn-outline-primary" 
                    data-toggle="modal"
                    data-target="#reclamation-modal"
                    href="#"
                    >
                      <i className="icofont-warning-alt" /> RECLAMATION
                    </a>{" "}
                    <a 

                    className="btn btn-sm btn-primary" 
                    data-toggle="modal"
                    data-target="#review-profile-modal"
                    href="#"
                    >
                      <i className="icofont-comment" /> REVIEW
                    </a>
                  </div>
                  <p className="mb-0 text-black text-primary pt-2">
                    <span className="text-black font-weight-bold">
                      {" "}
                      Total Paid:
                    </span>{" "}
                    300 DH
                  </p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default OrderCard