import React, { useState, useEffect, useRef } from 'react';
import ClientNav from '../ClientNav';
import OuvrierCard from './OuvrierCard/OuvrierCard';
import LocationFilter from '.././OuvrierListFilters/LocationFilter';
import { projects } from '../../../data';


function OuvrierList() {
  const [workers, setWorkers] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const abortControllerRef = useRef(null);
  
  
  useEffect(() => {

    // Create a new AbortController for each fetch request

    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    
    listWorkers();
    
    // Cleanup function
    return () => {
      // Abort the fetch request when the component is unmounted

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [selectedLocations, selectedCategories]);

  // Rest of your component code...

  async function listWorkers() {
    let apiUrl = 'http://localhost:8081/users/ListOuvrierParams';
    
  
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
  
   
  try {
    const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setWorkers(data);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch request aborted:', error.message);
      } else {
        console.error('Fetch error:', error);
      }
    }
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
                  <OuvrierCard key={worker.id} worker={worker} projectss={projects}/>
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
