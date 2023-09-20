import React, { useState, useEffect } from 'react';
import "./ordercard.css"
import { getConsultationByIdClient } from '../../../../../services/ConsultationService';
import { getUserDetails } from '../../../../../services/AuthService';
import { getOuvrierById } from '../../../../../services/OuvrierService';

function OrderCard() {
  const client = getUserDetails();
  const [orders, setOrders] = useState([]);
  const [idouvrier , setIdouvrier] = useState('')

  const [ouvrier , setOuvrier] = useState('');

  

  useEffect(() => {
    listConsultation();
  }, []);

  async function listConsultation() {
    await getConsultationByIdClient(client.id).then((response) => {
      setOrders(response.data);
      console.log(response.data);
      
    })
  }

  return (
    <>
      {orders.map((order) => (
        <div key={order.idConsultation} className="bg-white card mb-4 order-list shadow-sm"  >
          <div className="gold-members1 p-4">
            <a href="#"></a>
            <div className="media1">
              <a href="#">
                <img
                  className="mr-4"
                  src={order.imageSrc} // Replace with the actual image source
                  alt="Generic placeholder image"
                />
              </a>
              <div className="media-body">
                <a href="#">
                  <span className="float-right text-info">
                    Delivered on {order.consultationDate}{" "}
                    <i className="icofont-check-circled text-success" />
                  </span>
                </a>
                <h6 className="mb-2">
                  <a href="#"></a>
                  <a href="detail.html" className="text-black">
                    {order.customerName} {" "}
                    <span className="badge badge-success">{order.workerType}</span>
                  </a>
                </h6>
                <p className="text-gray mb-1">
                  <i className="icofont-location-arrow" /> {order.address}
                </p>
                <p className="text-gray mb-3">
                  <i className="icofont-list"  /> ORDER #{order.idConsultation}{" "}
                  <i className="icofont-clock-time ml-2" /> {order.orderDate}
                </p>
                <p className="text-dark">
                  {order.products}
                </p>
                <hr />
                <div className="float-right">
                  <a
                    className="btn2 btn-sm btn-outline-primary"
                    data-toggle="modal"
                    data-target="#reclamation-modal"
                    href="#"
                  >
                    <i className="icofont-warning-alt" /> RECLAMATION
                  </a>{" "}
                  <a
                    className="btn btn-sm btn-primary"
                    data-toggle="modal"
                    data-target="#review-profile-modal"
                    href="#"
                  >
                    <i className="icofont-comment" /> REVIEW
                  </a>
                </div>
                <p className="mb-0 text-black text-primary pt-2">
                  <span className="text-black font-weight-bold">
                    {" "}
                    Total Paid:
                  </span>{" "}
                  {order.totalAmount} DH
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default OrderCard;
