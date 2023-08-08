import React from "react";
import "../apply/Apply.scss"
import "../apply/Apply.css"
import "../apply/Apply-responsive.scss"



function Wrk({worker}) {
  return (
    <div className="col-sm-6">
          <div className="job-card">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="thumb-img">
                  <a href="job-details.html">
                    <img
                      src="assets/img/company-logo/1.png"
                      alt="company logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="job-info">
                  <h3>
                    <a href="job-details.html">{worker.name}</a>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">{worker.category}</a>
                    </li>
                    <li>
                      <i className="bx bx-location-plus" />
                      {worker.city}
                    </li>
                    <li>
                      <i className="bx bx-filter-alt" />
                      {worker.desc}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="job-save">
                  <span>{worker.price} DH</span>
                  <a href="#">
                    <i className="bx bx-heart" />
                  </a>
                  <p>
                    <i className="bx bx-stopwatch" />{worker.star} Stars
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
export default Wrk;