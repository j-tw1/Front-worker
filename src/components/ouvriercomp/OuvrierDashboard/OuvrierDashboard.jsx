import React from 'react'
import './ouvrierdashboard.css'
import { orders } from '../../../data'
import ListOrderElement from './ListOrderElement'

function OuvrierDashboard() {
  return (
    <>
    <div id="layoutSidenav_content">
    <main>
    <div className="container-fluid">
  <h1 className="mt-4">Dashboard</h1>
  <ol className="breadcrumb mb-4">
    <li className="breadcrumb-item active">Dashboard</li>
  </ol>
  <div className="row">
    <div className="col-xl-3 col-md-6">
      <div className="card bg-primary text-white mb-4">
        <div className="card-body">New Orders!</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <a className="small text-white stretched-link" href="messages.html">
            10 Orders
          </a>
          <div className="small text-white">
            <i className="fas fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card bg-warning text-white mb-4">
        <div className="card-body">New Messages!</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <a className="small text-white stretched-link" href="bookings.html">
            10 Messages
          </a>
          <div className="small text-white">
            <i className="fas fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card bg-success text-white mb-4">
        <div className="card-body">New Reviews!</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <a className="small text-white stretched-link" href="reviews.html">
            18 Reviews
          </a>
          <div className="small text-white">
            <i className="fas fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card bg-danger text-white mb-4">
        <div className="card-body">New Favorites!</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <a className="small text-white stretched-link" href="bookmarks.html">
            15 Added you to Favorite
          </a>
          <div className="small text-white">
            <i className="fas fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="card mb-4">
    <div className="card-header">
      <i className="fas fa-table mr-1" />
      {" "}RECENT ORDERS
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table" id="dataTable" width="100%" cellSpacing={0}>
          <thead>
            <tr className="text-uppercase">
              <th>User</th>
              <th>Name</th>
              <th>Phone Number </th>
              <th>Status</th>
              <th>Ordered on</th>
              <th>Total</th>
              <th>Details</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/**/}
            {/**/}
            {orders.map((order) => (
              <ListOrderElement key={order.id} order={order} />
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</main>
    
  </div>


    </>
  )
}

export default OuvrierDashboard