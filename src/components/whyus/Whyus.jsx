import React from 'react';
import './Whyus.scss';
import './Whyus.css';
import './Whyus-responsive.scss';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';

function Whyus() {
  const [t, i18n] = useTranslation();
  return (
    <section className="why-choose">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 p-0">
            <div className="why-choose-text pt-100 pb-70">
              <div className="section-title text-center">
                <div className="animated-text">
                  <span className="vibrating-text">
                    <h2>{t('title19')}</h2>
                  </span>
                </div>
                <p>{t('title20')}</p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="media">
                    <i className="flaticon-group align-self-center mr-3" />
                    <div className="media-body">
                      <h5 className="mt-0">{t('title21')}</h5>
                      <p>{t('title25')} </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <i className="flaticon-research align-self-center mr-3" />
                    <div className="media-body">
                      <h5 className="mt-0">{t('title22')}</h5>
                      <p>{t('title26')} </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <i className="flaticon-discussion align-self-center mr-3" />
                    <div className="media-body">
                      <h5 className="mt-0">{t('title23')}</h5>
                      <p>{t('title27')} </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="media">
                    <i className="flaticon-recruitment align-self-center mr-3" />
                    <div className="media-body">
                      <h5 className="mt-0">{t('title24')}</h5>
                      <p>{t('title28')} </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row counter-area">
                <div className="col-md-3 col-6">
                  <div className="counter-text">
                    <h2>
                      <span>{t('title29')}</span>
                    </h2>
                    <p>{t('title33')}</p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="counter-text">
                    <h2>
                      <span>{t('title30')}</span>
                    </h2>
                    <p>{t('title34')}</p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="counter-text">
                    <h2>
                      <span>{t('title31')}</span>
                    </h2>
                    <p>{t('title35')}</p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="counter-text">
                    <h2>
                      <span>{t('title32')}</span>
                    </h2>
                    <p>{t('title36')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 p-0">
            <div className="why-choose-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Whyus;
