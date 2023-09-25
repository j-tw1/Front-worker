import React from "react";

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
            

            
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Feature;