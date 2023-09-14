import React from 'react'
import Order from '../cards/Order'
import { orders } from '../../../data'

function OuvrierMessages() {

  
  return (
    <>
    <div id="layoutSidenav_content">
    <main>
    <div className="Orders">
     <div className="container-fluid">
  <h1 className="mt-4">Orders</h1>
  <ol className="breadcrumb mb-4">
    <li className="breadcrumb-item">
      <a href="index.html">Dashboard</a>
    </li>
    <li className="breadcrumb-item active">Orders</li>
  </ol>
  <div className="row">
    <div className="col-xl-12">
    {orders.map((order) => (
              <Order key={order.id} order={order} />
            ))}
      <div className="card mb-4 order-list">
        <div className="gold-members p-4">
          <a href="#"></a>
          <div className="media">
            <a href="#">
              <img
                className="mr-4"
                src="https://marcopolis.net/images/stories/Ghana_Report/2023/biographies/Kojo_Ansah_Mensah/Kojo_Ansah_Mensah_CEO_of_Mobus_Property.jpg"
                alt="Generic placeholder image"
              />
            </a>
            <div className="media-body">
              <a href="#">
                <span className="float-right text-info">
                  Delivered on Mon, Nov 12, 7:18 PM{" "}
                  <i className="feather-check-circle text-success" />
                </span>
              </a>
              <h6 className="mb-3">
                <a href="#"></a>
                <a href="detail.html" className="text-dark">
                  The Famous Restaurant
                </a>
              </h6>
              <p className="text-black-50 mb-1">
                <i className="feather-map-pin" /> 953 S Main St, Centerville, OH
                45459, USA
              </p>
              <p className="text-black-50 mb-3">
                <i className="feather-list" /> ORDER #25102589748{" "}
                <i className="feather-clock ml-2" /> Mon, Nov 12, 6:26 PM
              </p>
              <p className="text-dark">
                Veg Masala Roll x 5, Veg Penne Pasta in Red Sauce x 1
              </p>
              <hr />
              <div className="float-right">
                <a href="messages.html" className="btn btn-sm btn-warning">
                  <i className="feather-message-circle" />
                </a>
                <a href="#0" className="btn btn-sm btn-success">
                  <i className="feather-check-circle" />
                </a>
                <a
                  href="#0"
                  className="btn btn-sm btn-info"
                  data-toggle="modal"
                  data-target="#edit_booking"
                >
                  <i className="feather-edit" />
                </a>
                <a href="#0" className="btn btn-sm btn-danger">
                  <i className="feather-trash" />
                </a>
              </div>
              <p className="mb-0 text-dark text-primary pt-2">
                <span className="text-dark font-weight-bold"> Total Paid:</span>{" "}
                $420
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-sm mb-4 justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</div>
</main>
    
  </div>

    
    </>
    )
}

export default OuvrierMessages