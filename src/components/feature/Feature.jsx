import React from "react";
import "./Feature.scss";
import "./Feature-responsive.scss";
import "./Feature.css";
import { useTranslation } from 'react-i18next';

function Feature() {
  const [t, i18n ] = useTranslation();
  return (
    <div className="banner-section">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="banner-content text-center">
            <p>{t('SubTitleLogin')}</p>
            <h1>join us &amp; small text</h1>
            <form className="banner-form">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Keyword:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Job Title"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Location:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="City or State"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <button type="submit" className="find-btn">
                    Find A Job
                    <i className="bx bx-search" />
                  </button>
                </div>
              </div>
            </form>
            <ul className="keyword">
              <li>Trending Keywords:</li>
              <li>
                <a href="#">Automotive,</a>
              </li>
              <li>
                <a href="#">Education,</a>
              </li>
              <li>
                <a href="#">Health</a>
              </li>
              <li>and</li>
              <li>
                <a href="#">Care Engineering</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Feature;