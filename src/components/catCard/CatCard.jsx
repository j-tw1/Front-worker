import React from "react";
import "./CatCard.scss"
import "./CatCard.css"
import { getLoggedInUser } from "../../services/AuthService";

function CatCard({card}) {


  const user = getLoggedInUser();

  

  return (
       <div className="col-lg-3 col-sm-6">
          <div className="company-card">
            <h1 > </h1>
            <div className="company-logo">
              <a href="job-grid.html">
                <img src="assets/img/top-company/1.png" alt="company logo" />
              </a>
            </div>
            <div className="company-text">
              <h3>{card.title}</h3>
              <p>
                <i className="bx bx-location-plus" />
                {card.desc}
              </p>
              <a href="job-grid.html" className="company-btn">
                25 ouvrier {}
              </a>
            </div>
          </div>
        </div>
  );
}
export default CatCard;
