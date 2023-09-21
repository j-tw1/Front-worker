import React, { useState, useEffect } from 'react';
import "./ordercard.css"
import { getConsultationByIdClient } from '../../../../../services/ConsultationService';
import { getUserDetails } from '../../../../../services/AuthService';
import { getOuvrierByIdConsultation } from '../../../../../services/OuvrierService';

function OrderCard() {
  const client = getUserDetails();
  const [orders, setOrders] = useState([]);
  const [idc, setId] = useState([]);

  const [ouvriers, setOuvriers] = useState([]); 
  const [selectedOuvrierPhone, setSelectedOuvrierPhone] = useState('');
  const [showModal, setShowModal] = useState(false);

  



  

  useEffect(() => {
    listConsultation();
  }, []);

  async function listConsultation() {
    await getConsultationByIdClient(client.id).then(async (response) => {
      setOrders(response.data);

      // Fetch ouvriers information for each order
      const ouvrierPromises = response.data.map(async (order) => {
        const ouvrierResponse = await getOuvrierByIdConsultation(order.idConsultation);
        return ouvrierResponse.data;
      });

      // Wait for all ouvrier requests to complete
      const ouvrierData = await Promise.all(ouvrierPromises);
      setOuvriers(ouvrierData);
    });


  
  }


  const handleContactClick = (phone) => {
    setSelectedOuvrierPhone(phone);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOuvrierPhone('');
  };
   

   

  

  

  return (
    <>
      {orders.map((order ,  index) => (
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
                  Ouvrier: {ouvriers[index] ? `${ouvriers[index].firstName} ${ouvriers[index].lastName}` : 'Loading...'} {/* Display ouvrier name */}{" "}
                    <span className="badge badge-success"> {ouvriers[index] ? ouvriers[index].categorie : 'Loading...'}</span>
                  </a>
                </h6>
                <p className="text-gray mb-1">
                  <i className="icofont-location-arrow" /> {client.address}
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
                  

                  
                <button
              className="btn btn-sm btn-primary"
              onClick={() => handleContactClick(ouvriers[index]?.phone || '')}
            >
              <i className="icofont-phone" /> CONTACT
            </button>
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


{/* Modal */}
<div
      className={`modal ${showModal ? 'show' : ''}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: showModal ? 'block' : 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{ border: '2px solid #ccc', backgroundColor: '#f9f9f9' }}>
          <div className="modal-header">
            <h5 className="modal-title">Contact Ouvrier</h5>
            <button type="button" className="close btn-close"  aria-label="Close" onClick={closeModal}>
              
            </button>
          </div>
          <div className="modal-body">
            <p className="mb-0">
              <strong>Phone Number:</strong> <span className="font-weight-bold" style={{ fontSize: '20px' }}>{selectedOuvrierPhone}</span>
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={closeModal}>
              Close
            </button>
          
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default OrderCard;
