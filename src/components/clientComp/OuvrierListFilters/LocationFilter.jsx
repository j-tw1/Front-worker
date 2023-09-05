import React from 'react'

function LocationFilter() {
  
  return (
    <>
    <div className="filters-card border-bottom p-4">
                <div className="filters-card-header" id="headingOne">
                  <h6 className="mb-0">
                    <a
                      href="#"
                      className="btn-link1"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Location <i className="icofont-arrow-down float-right" />
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="filters-card-body card-shop-filters">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cb1"
                      />
                      <label className="custom-control-label" htmlFor="cb1">
                        Nador{" "}
                        <small className="text-black-50">230</small>
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cb2"
                      />
                      <label className="custom-control-label" htmlFor="cb2">
                        Rabat <small className="text-black-50">95</small>
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cb3"
                      />
                      <label className="custom-control-label" htmlFor="cb3">
                        Casa <small className="text-black-50">35</small>
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cb4"
                      />
                      <label className="custom-control-label" htmlFor="cb4">
                        Tanger <small className="text-black-50">46</small>
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cb5"
                      />
                      <label className="custom-control-label" htmlFor="cb5">
                        Fes <small className="text-black-50">20</small>
                      </label>
                    </div>
                    <div className="mt-2">
                      <a href="#" className="link1">
                        See all
                      </a>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default LocationFilter