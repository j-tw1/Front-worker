import React, { useState } from 'react';
import './orders.css';
import OrderModal from '../OuvrierOrders/OrderModal';
import { ConfirmConsultation } from '../../../services/ConsultationService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clientpics } from '../../../data';

function Message({ order, onOrderConfirmation }) {

  // Access the client picture based on the order's client ID
  const clientPic = clientpics[order.idConsultation];

  function handleAccepter() {
    ConfirmConsultation(order.idConsultation);

    // Notify the parent component that this order has been confirmed
    onOrderConfirmation(order.idConsultation);

    toast.success('Consultation has been confirmed', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  }

  return (
    <>
      <OrderModal />
      {order.isConfirmed ? null : (
        <div className="card mb-4 order-list">
          <div className="gold-members p-4">
            <a href="#"></a>
            <div className="media">
              <a href="#">
                {/* Display the client picture */}
                <img className="mr-4" src={clientPic.img} alt="Client" />
              </a>
              <div className="media-body">
                <a href="#">
                  <span className="float-right text-success">
                    {order.consultationDate}{' '}
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
                  <i className="feather-map-pin" /> {order.addresse}  Maroc ,
                  {order.ville}
                </p>
                <p className="text-black-50 mb-3">
                  <i className="feather-list" /> ORDER # {order.idConsultation} {' '}
                  <i className="feather-clock ml-2" /> {order.consultationDate}
                </p>
                <p className="text-dark">{order.description}</p>
                <hr />
                <div className="float-right">
                  <a className="btn btn-sm btn-success" onClick={handleAccepter}>
                    <i className="feather-check-circle" /> Accepter
                  </a>
                  <ToastContainer />
                  <a href="#0" className="btn btn-sm btn-danger">
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
                {/* <p className="mb-0 text-dark text-dark pt-2">
                  <span className="text-dark font-weight-bold"> Total Paid:</span>{' '}
                  {order.prix} DH
                </p> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
