import React, { useState, useEffect } from 'react';
import Order from '../cards/Order';
// import { orders } from '../../../data'
import {
  getConsultationByIdOuvrier,
  getConsultationList,
} from '../../../services/ConsultationService';
import { getUserDetails } from '../../../services/AuthService';

function OuvrierMessages() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    listConsultation();
  }, []);

  async function listConsultation() {
    const user = getUserDetails();

    await getConsultationByIdOuvrier(user.id)
      .then((response) => {
        setOrders(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function removeConfirmedOrder(orderId) {
    const updatedOrders = orders.filter(
      (order) => order.idConsultation !== orderId
    );
    setOrders(updatedOrders);
  }
  return (
    <>
      <div id="layoutSidenav_content">
        <main>
          <div className="Orders">
            <div className="container-fluid">
              <h1 className="mt-4">Orders</h1>
              <ol className="breadcrumb mb-4"></ol>
              <div className="row">
                <div className="col-xl-12">
                  {orders.map((order) => (
                    <Order
                      key={order.idConsultation}
                      order={order}
                      onOrderConfirmation={removeConfirmedOrder}
                     
                    />
                  ))}
                  
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
  );
}

export default OuvrierMessages;
