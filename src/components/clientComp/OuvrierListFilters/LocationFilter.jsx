// import React, { useState } from 'react';

// function LocationFilter() {
//   const [selectedLocations, setSelectedLocations] = useState([]);

//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setSelectedLocations([...selectedLocations, value]);
//     } else {
//       setSelectedLocations(
//         selectedLocations.filter((location) => location !== value)
//       );
//     }
//   };

//   console.log('Selected Locations:', selectedLocations);

//   return (
//     <>
//       <div className="filters-card border-bottom p-4">
//         <div className="filters-card-header" id="headingOne">
//           <h6 className="mb-0">
//             <a
//               href="#"
//               className="btn-link1"
//               data-toggle="collapse"
//               data-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               Location <i className="icofont-arrow-down float-right" />
//             </a>
//           </h6>
//         </div>
//         <div
//           id="collapseOne"
//           className="collapse show"
//           aria-labelledby="headingOne"
//           data-parent="#accordion"
//         >
//           <div className="filters-card-body card-shop-filters">
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="cb1"
//                 value="Nador"
//                 checked={selectedLocations.includes('Nador')}
//                 onChange={handleCheckboxChange}
//               />
//               <label className="custom-control-label" htmlFor="cb1">
//                 Nador <small className="text-black-50">230</small>
//               </label>
//             </div>
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="cb2"
//                 value="Rabat"
//                 checked={selectedLocations.includes('Rabat')}
//                 onChange={handleCheckboxChange}
//               />
//               <label className="custom-control-label" htmlFor="cb2">
//                 Rabat <small className="text-black-50">95</small>
//               </label>
//             </div>
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="cb3"
//                 value="Casa"
//                 checked={selectedLocations.includes('Casa')}
//                 onChange={handleCheckboxChange}
//               />
//               <label className="custom-control-label" htmlFor="cb3">
//                 Casa <small className="text-black-50">35</small>
//               </label>
//             </div>
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="cb4"
//                 value="Tanger"
//                 checked={selectedLocations.includes('Tanger')}
//                 onChange={handleCheckboxChange}
//               />
//               <label className="custom-control-label" htmlFor="cb4">
//                 Tanger <small className="text-black-50">46</small>
//               </label>
//             </div>
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="cb5"
//                 value="Fes"
//                 checked={selectedLocations.includes('Fes')}
//                 onChange={handleCheckboxChange}
//               />
//               <label className="custom-control-label" htmlFor="cb5">
//                 Fes <small className="text-black-50">20</small>
//               </label>
//             </div>
//             <div className="mt-2">
//               <a href="#" className="link1">
//                 See all
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LocationFilter;

import React, { useState } from 'react';
import './LocationFilter.css';

function LocationFilter({ onFilterChange }) {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleLocationSelect = (location) => {
    const updatedLocations = [...selectedLocations];

    if (updatedLocations.includes(location)) {
      // Remove the location if it's already selected
      updatedLocations.splice(updatedLocations.indexOf(location), 1);
    } else {
      // Add the location if it's not already selected
      updatedLocations.push(location);
    }

    setSelectedLocations(updatedLocations);
    onFilterChange(updatedLocations, selectedCategories);
  };

  const handleCategorySelect = (category) => {
    const updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(category)) {
      // Remove the category if it's already selected
      updatedCategories.splice(updatedCategories.indexOf(category), 1);
    } else {
      // Add the category if it's not already selected
      updatedCategories.push(category);
    }

    setSelectedCategories(updatedCategories);
    onFilterChange(selectedLocations, updatedCategories);
  };

  const isLocationSelected = (location) => {
    return selectedLocations.includes(location);
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category);
  };

  return (
    <div className="filters-card border-bottom p-4">
      <div className="filters-card-header" id="headingOne">
        <h6 className="mb-0">Filters</h6>
      </div>
      <div id="collapseOne" className="collapse show">
        <div className="filters-card-body card-shop-filters">
          <div className="checkbox-group">
            <h6>Location</h6>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="cbNador"
                checked={isLocationSelected('Nador')}
                onChange={() => handleLocationSelect('Nador')}
              />
              <label className="custom-control-label" htmlFor="cbNador">
                Nador <small className="text-black-50">230</small>
              </label>
            </div>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="cbRabat"
                checked={isLocationSelected('Rabat')}
                onChange={() => handleLocationSelect('Rabat')}
              />
              <label className="custom-control-label" htmlFor="cbRabat">
                Rabat <small className="text-black-50">230</small>
              </label>
            </div>
            {/* Add similar code for other locations */}
            {/* ... */}
          </div>

          <div className="checkbox-group">
            <h6>Category</h6>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="cbCategory1"
                checked={isCategorySelected('Electricien')}
                onChange={() => handleCategorySelect('Electricien')}
              />
              <label className="custom-control-label" htmlFor="cbCategory1">
                Electricien <small className="text-black-50">100</small>
              </label>
            </div>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="cbCategory2"
                checked={isCategorySelected('Plombier')}
                onChange={() => handleCategorySelect('Plombier')}
              />
              <label className="custom-control-label" htmlFor="cbCategory2">
                Plombier <small className="text-black-50">100</small>
              </label>
            </div>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="cbCategory3"
                checked={isCategorySelected('Peintre')}
                onChange={() => handleCategorySelect('Peintre')}
              />
              <label className="custom-control-label" htmlFor="cbCategory3">
                Peintre <small className="text-black-50">100</small>
              </label>
            </div>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="cbCategory4"
                checked={isCategorySelected('Serrurier')}
                onChange={() => handleCategorySelect('Serrurier')}
              />
              <label className="custom-control-label" htmlFor="cbCategory4">
                Serrurier <small className="text-black-50">100</small>
              </label>
            </div>
            {/* Add similar code for other categories */}
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationFilter;
