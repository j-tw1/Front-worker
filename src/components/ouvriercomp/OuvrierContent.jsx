import React from 'react'
import OuvrierSideBar from './OuvrierSideBar/OuvrierSideBar'
import OuvrierDashboard from './OuvrierDashboard/OuvrierDashboard'
import OuvrierReviews from './OuvrierReviews/OuvrierReviews'
import OuvrierOrders from './OuvrierOrders/OuvrierOrders'

function OuvrierContent() {
  return (
    <div id="layoutSidenav">
        <OuvrierSideBar/>
        <OuvrierDashboard/>


    </div>
  )
}

export default OuvrierContent