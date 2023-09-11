import React from 'react';
import './ouvrierlist.css';
import ClientNav from '../ClientNav';
import OuvrierCard from './OuvrierCard/OuvrierCard';
//  import { workers } from '../../../data'

import Filters from '../OuvrierListFilters/Filters';
import ClientProfile from '../ClientProfile/ClientProfile';
import ClientModals from '../ClientModals';
import { getOuvrierList } from '../../../services/OuvrierService';
import { useState } from 'react';
import { useEffect } from 'react';
import NavbarV1 from '../../navbar/NavbarV1';

function OuvrierList() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    listWorkers();
  }, []);

  function listWorkers() {
    getOuvrierList()
      .then((response) => {
        setWorkers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <NavbarV1 />
      <ClientModals />

      <section class="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center">
        <h1 class="text-white">Workers List</h1>
        <h6 class="text-white-50">
          Explore top workers and offers exclusively for you!
        </h6>
      </section>
      <section className="section pt-5 pb-5 products-listing">
        <div className="container">
          <div className="row d-none-m">
            <div className="col-md-12">
              <div className="dropdown float-right">
                <a
                  className="btn btn-outline-info dropdown-toggle btn-sm border-white-btn"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort by: <span className="text-theme">Price</span>{' '}
                  &nbsp;&nbsp;
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow-sm border-0 ">
                  <a className="dropdown-item" href="#">
                    Price
                  </a>
                  <a className="dropdown-item" href="#">
                    Experience
                  </a>
                  <a className="dropdown-item" href="#">
                    Rating
                  </a>
                </div>
              </div>
              <h4 className="font-weight-bold mt-0 mb-3">
                OFFERS <small className="h6 mb-0 ml-2">299 restaurants</small>
              </h4>
            </div>
          </div>
          <div className="row">
            <Filters />
            <div className="col-md-9">
              <div className="row">
                {workers.map((worker) => (
                  <OuvrierCard key={worker.id} worker={worker} />
                ))}

                <div className="col-md-12 text-center load-more">
                  <button className="btn btn-primary" type="button" disabled="">
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OuvrierList;
