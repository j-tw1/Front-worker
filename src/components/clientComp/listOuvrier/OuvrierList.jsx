import React, { useState, useEffect } from 'react';
import ClientNav from '../ClientNav';
import OuvrierCard from './OuvrierCard/OuvrierCard';
import LocationFilter from '.././OuvrierListFilters/LocationFilter';

function OuvrierList() {
  const [workers, setWorkers] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    listWorkers();
  }, [selectedLocations, selectedCategories]);

  function listWorkers() {
    // Use your actual API path here
    let apiUrl = 'http://localhost:8081/users/ListOuvrier';

    const locationParams = selectedLocations
      .map((location) => `ville=${location}`)
      .join('&');
    const categoryParams = selectedCategories
      .map((category) => `category=${category}`)
      .join('&');

    if (locationParams) {
      apiUrl += `?${locationParams}`;
    }

    if (categoryParams) {
      apiUrl += locationParams ? `&${categoryParams}` : `?${categoryParams}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWorkers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleFilterChange(locations, categories) {
    setSelectedLocations(locations);
    setSelectedCategories(categories);
  }

  return (
    <>
      <ClientNav />

      <section class="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center">
        <h1 class="text-white">Workers List</h1>
        <h6 class="text-white-50">
          Explore top workers and offers exclusively for you!
        </h6>
      </section>
      {/* ... Existing code for header section */}
      <section className="section pt-5 pb-5 products-listing">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <LocationFilter onFilterChange={handleFilterChange} />
            </div>
            <div className="col-md-9">
              <div className="row">
                {workers.map((worker) => (
                  <OuvrierCard key={worker.id} worker={worker} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OuvrierList;
