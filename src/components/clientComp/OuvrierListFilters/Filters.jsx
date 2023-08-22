import React from 'react'
import "./filters.css"
import LocationFilter from './LocationFilter'
import CategorieFilter from './CategorieFilter'

function Filters() {
  return (
    <>
    <div className="col-md-3">
            <div className="filters shadow-sm rounded bg-white mb-4">
              <div className="filters-header border-bottom pl-4 pr-4 pt-3 pb-3">
                <h5 className="m-0">Filter By</h5>
              </div>
              <div className="filters-body">
                <div id="accordion">
                  <LocationFilter/>
                  <CategorieFilter/>
                  
                </div>
              </div>
            </div>
            
          </div>
    </>
  )
}

export default Filters