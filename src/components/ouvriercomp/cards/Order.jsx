import React ,{useState} from 'react'
import './orders.css'
import OrderModal from '../OuvrierOrders/OrderModal'
import { getConsultationByIdOuvrier, getConsultationList } from '../../../services/ConsultationService'
import { getUserDetails } from '../../../services/AuthService'
function Message({order}) {


  // const [order, setOrders] = useState([]);


  // const user = getUserDetails();

  // getConsultationByIdOuvrier(user.id).then((response)=>{
  
  //     setOrders(response.data);


  // })

 
  
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
                {order.consultationDate}{" "}
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
                <i className="feather-map-pin" /> {order.addresse} , Maroc ,{order.ville}
              </p>
              <p className="text-black-50 mb-3">
                <i className="feather-list" /> ORDER # {order.idConsultation}{" "}
                <i className="feather-clock ml-2" /> {order.consultationDate}
              </p>
              <p className="text-dark">
                {order.description}
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

export default Message;