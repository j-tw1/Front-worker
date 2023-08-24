import React from 'react'
import OuvrierCard from '../../listOuvrier/OuvrierCard/OuvrierCard'
import { workers } from '../../../../data'




function FavouritesList() {
  return (
    <div
          className="tab-pane fade"
          id="favourites"
          role="tabpanel"
          aria-labelledby="favourites-tab"
        >
          <h4 className="font-weight-bold mt-0 mb-4">Favourites</h4>
          <div className="row">
          {workers.filter((worker) => worker.fav === true)
            .map((worker) => (
              <OuvrierCard key={worker.id} worker={worker} />
            ))}

          </div>
    </div>
  )
}

export default FavouritesList