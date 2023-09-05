import React from 'react'
import "./cardslist.css"
import AdressCard from '../cards/AdresseCard/AdressCard'



function AddressesList() {
  return (
    <div
          className="tab-pane fade"
          id="addresses"
          role="tabpanel"
          aria-labelledby="addresses-tab"
        >
          <h4 className="font-weight-bold mt-0 mb-4">Manage Addresses</h4>
          <AdressCard/>
    </div>
  )
}

export default AddressesList