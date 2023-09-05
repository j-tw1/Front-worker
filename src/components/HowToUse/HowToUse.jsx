import React from "react";
import "./HowToUse.scss"
import "./HowToUse.css"
import "./HowToUse-responsive.scss"
import { useTranslation } from 'react-i18next';



function HowToUse() {
  const [t, i18n ] = useTranslation();
  return (
    <section className="use-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h2>{t('title12')}</h2>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="use-text">
            <span>1</span>
            <i className="flaticon-website" />

            <h3>{t('title13')}</h3>
          
            <p>
            {t('title16')}
            </p>
            
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="use-text">
            <span>2</span>
            <i className="flaticon-recruitment" />
            <h3>{t('title14')}</h3>
            <p>
            {t('title17')}
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 offset-sm-3 offset-md-0">
          <div className="use-text">
            <span>3</span>
            <i className="flaticon-login" />
            <h3>{t('title15')}</h3>
            <p>
            {t('title18')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
export default HowToUse;