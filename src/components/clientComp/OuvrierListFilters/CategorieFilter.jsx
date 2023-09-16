import React, { useState } from 'react';

function CategorieFilter() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
  };

  console.log('Selected Categories:', selectedCategories);

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
                value="Mecanicien"
                checked={selectedCategories.includes("Mecanicien")}
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
                checked={selectedCategories.includes("Plombier")}
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
                checked={selectedCategories.includes("Peintre")}
                onChange={handleCheckboxChange}
              />
              <label className="custom-control-label" htmlFor="cb37">
                Peintre <small className="text-black-50">85</small>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategorieFilter;