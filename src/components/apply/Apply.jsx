import React from "react";
import "./Apply.scss"
import "./Apply.css"
import "./Apply-responsive.scss"
import { useTranslation } from 'react-i18next';



function Apply() {
  const [t, i18n ] = useTranslation();
  return (
    <div className="job-info pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="looking-job">
            <div className="media">
              <i className="flaticon-group align-self-start mr-3" />
              <div className="media-body">
                <h5 className="mt-0">{t('title38')}</h5>
                <p>
                {t('title39')}                </p>
                <a href="job-list.html">
                {t('title40')}
                  <i className="bx bx-chevrons-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="recruiting-card">
            <div className="media">
              <i className="flaticon-resume align-self-start mr-3" />
              <div className="media-body">
                <h5 className="mt-0">{t('title41')}</h5>
                <p>
                {t('title39')}   
                </p>
                <a href="post-job.html">
                {t('title40')}
                  <i className="bx bx-chevrons-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Apply;