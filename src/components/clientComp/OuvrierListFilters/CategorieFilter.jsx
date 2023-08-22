import React from 'react'

function CategorieFilter() {
  return (
    <>
        <div className="filters-card p-4">
                <div className="filters-card-header" id="headingCategory">
                  <h6 className="mb-0">
                    <a
                      href="#"
                      className="btn-link1"
                      data-toggle="collapse"
                      data-target="#collapseCategory"
                      aria-expanded="true"
                      aria-controls="collapseCategory"
                    >
                      Category <i className="icofont-arrow-down float-right" />
                    </a>
                  </h6>
                </div>
                <div
                  id="collapseCategory"
                  className="collapse"
                  aria-labelledby="headingCategory"
                  data-parent="#accordion"
                >
                  <div className="filters-card-body card-shop-filters">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cb15"
                      />
                      <label className="custom-control-label" htmlFor="cb15">
                        Mecanicien <small className="text-black-50">156</small>
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cb26"
                      />
                      <label className="custom-control-label" htmlFor="cb26">
                        Plombier <small className="text-black-50">120</small>
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="cb37"
                      />
                      <label className="custom-control-label" htmlFor="cb37">
                        Peintre <small className="text-black-50">85</small>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
    </>
  )
}

export default CategorieFilter