import React , {useState}from 'react'
import "./filters.css"


function Filters() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter((location) => location !== value));
    }
  };

  console.log('Selected Filters:', selectedFilters);
  return (
    <>
        <div className="col-md-3">
            <div className="filters shadow-sm rounded bg-white mb-4">
              <div className="filters-header border-bottom pl-4 pr-4 pt-3 pb-3">
                <h5 className="m-3">Filter By</h5>
              </div>
              <div className="filters-body">
                <div id="accordion">
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
                            value="Nador"
                            checked={selectedFilters.includes("Nador")}
                            onChange={handleCheckboxChange}
                          />
                          <label className="custom-control-label" htmlFor="cb1">
                            Nador <small className="text-black-50">230</small>
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cb2"
                            value="Rabat"
                            checked={selectedFilters.includes("Rabat")}
                            onChange={handleCheckboxChange}
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
                            value="Casa"
                            checked={selectedFilters.includes("Casa")}
                            onChange={handleCheckboxChange}
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
                            value="Tanger"
                            checked={selectedFilters.includes("Tanger")}
                            onChange={handleCheckboxChange}
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
                            value="Fes"
                            checked={selectedFilters.includes("Fes")}
                            onChange={handleCheckboxChange}
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
                            value="Mecanicien"
                            checked={selectedFilters.includes("Mecanicien")}
                            onChange={handleCheckboxChange}
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
                            value="Plombier"
                            checked={selectedFilters.includes("Plombier")}
                            onChange={handleCheckboxChange}
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
                            value="Peintre"
                            checked={selectedFilters.includes("Peintre")}
                            onChange={handleCheckboxChange}
                          />
                          <label className="custom-control-label" htmlFor="cb37">
                            Peintre <small className="text-black-50">85</small>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          
        </div>
    </>
  )
}

export default Filters