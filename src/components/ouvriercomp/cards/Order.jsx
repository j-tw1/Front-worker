import React from 'react'
import './orders.css'
import OrderModal from '../OuvrierOrders/OrderModal'
function Message({order}) {
  return (
    <>
    <OrderModal/>
    <div className="card mb-4 order-list">
        <div className="gold-members p-4">
          <a href="#"></a>
          <div className="media">
            <a href="#">
              <img
                className="mr-4"
                src={order.pp}
                alt="Generic placeholder image"
              />
            </a>
            <div className="media-body">
              <a href="#">
                <span className="float-right text-success">
                  Delivered on Mon, Nov 12, 7:18 PM{" "}
                  <i className="feather-check-circle text-success" />
                </span>
              </a>
              <h6 className="mb-3">
                <a href="#"></a>
                <a href="detail.html" className="text-dark">
                  {order.name}
                </a>
              </h6>
              <p className="text-black-50 mb-1">
                <i className="feather-map-pin" /> {order.addresse} ,{order.city} ,{order.country}
              </p>
              <p className="text-black-50 mb-3">
                <i className="feather-list" /> ORDER #{order.id}{" "}
                <i className="feather-clock ml-2" /> Mon, Nov 12, 6:26 PM
              </p>
              <p className="text-dark">
                {order.desc}
              </p>
              <hr />
              <div className="float-right">
                <a href="#0" className="btn btn-sm btn-success">
                  <i className="feather-check-circle" /> Accepter
                </a><a href="#0" className="btn btn-sm btn-danger">
                  <i className="feather-trash" /> Refuser
                </a>
                <a href="messages.html" className="btn btn-sm btn-warning">
                  <i className="feather-message-circle" /> Message
                </a>
                <a
                  className="btn btn-sm btn-info"
                  data-toggle="modal"
                  data-target="#detail-profile-modal"
                  href="#"
                >
                  <i className="feather-edit" /> Details
                </a>
              </div>
              <p className="mb-0 text-dark text-dark pt-2">
                <span className="text-dark font-weight-bold"> Total Paid:</span>{" "}
                {order.prix} DH
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Message