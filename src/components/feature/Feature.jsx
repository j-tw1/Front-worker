import React from "react";
import "./Feature.scss";
import "./Feature-responsive.scss";
import "./Feature.css";
import { useTranslation } from 'react-i18next';
import { isUserLoggedIn   } from "../../services/AuthService";


function Feature() {
  const [t, i18n ] = useTranslation();

  
  return (

   
    <div className="banner-section">
 
       

    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="banner-content text-center">
            <div className="animated-text">
              <span className="focus-text">
            <p>{t('SubTitleLogin')}</p>
            
            <h1>{t('title37')}</h1>
            <h2>{t('title42')}</h2>

            </span>


            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Feature;