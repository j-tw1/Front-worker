import React, { useState, useEffect } from 'react';
import "./ordercard.css"
import { getConsultationByIdClient } from '../../../../../services/ConsultationService';
import { getUserDetails } from '../../../../../services/AuthService';
import { getOuvrierByIdConsultation } from '../../../../../services/OuvrierService';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RatingStars from 'react-rating-stars-component';
import { addRatingAPICall } from '../../../../../services/RatingService';
import { addReviewAPICall } from '../../../../../services/ReviewService';
import { projects } from '../../../../../data';


function OrderCard() {
  const client = getUserDetails();
  const [orders, setOrders] = useState([]);
  const [idc, setId] = useState([]);


  const [ouvriers, setOuvriers] = useState([]); 
  const [selectedOuvrierPhone, setSelectedOuvrierPhone] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [rating, setRating] = useState(1); // Initialize the rating to 1
  const [showRatingModal, setShowRatingModal] = useState(false);


  const [showReviewModal, setShowReviewModal] = useState(false);
const [comment, setComment] = useState('');


const [reviewOrderId, setReviewOrderId] = useState(null);

  



  

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
   
  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };

  const openRatingModal = () => {
    setShowRatingModal(true);
  };

  const closeRatingModal = () => {
    setShowRatingModal(false);
            
          
  };



  const saveRating = async () => {
    // Assuming you have a function createRating in your API service
    // Replace client.email, ouvrier.email, and rating with the actual values
    try {
      await addRatingAPICall( ouvriers[0]?.email, rating);
      // Optionally, you can handle success or display a success message
      alert('Rating saved successfully');
      setShowRatingModal(false);
    } catch (error) {
      // Handle any errors, e.g., display an error message
      console.error('Error saving rating:', error);
    }
  };

  const openReviewModal = (idConsultation) => {
    setShowReviewModal(true);
    setReviewOrderId(idConsultation);
  };
  
  const closeReviewModal = () => {
    setShowReviewModal(false);
  };
  
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  
  const saveComment = async () => {
    
    try {
      await addReviewAPICall(reviewOrderId, comment);
      // Optionally, you can handle success or display a success message
      alert('Comment saved successfully');
      closeReviewModal();
    } catch (error) {
      // Handle any errors, e.g., display an error message
      console.error('Error saving comment:', error);
    }
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
                  src={projects[order.idConsultation] ? projects[order.idConsultation].img : 'Loading...'} // Replace with the actual image source
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
                  worker : {ouvriers[index] ? `${ouvriers[index].firstName} ${ouvriers[index].lastName}` : 'Loading...'} {/* Display ouvrier name */}{" "}
                    <span className="badge badge-success"> {ouvriers[index] ? ouvriers[index].categorie : 'Loading...'}</span>
                  </a>
                </h6>
                <p className="text-gray mb-1">
                  <i className="icofont-location-arrow" /> {client.address}
                </p>
                <p className="text-gray mb-3">
                  <i className="icofont-list"  /> ORDER #{order.idConsultation}{" "}
                  <i className="icofont-clock-time ml-2" /> {order.consultationDate}
                </p>
                <p className="text-dark">
                  {order.products}
                </p>
                <hr />
                <div className="float-right">
                  

                  
                <Button variant="success"
              onClick={() => handleContactClick(ouvriers[index]?.phone || '')}
            >
              <i className="icofont-phone" /> CONTACT
            </Button>
            

            <div className="float-right ml-2">
            <Button variant="primary"
              onClick={openRatingModal}
            >
              <i class="icofont-ui-rate-blank" /> RATE  
              
            </Button>

            <Button variant="warning" onClick={() => openReviewModal(order.idConsultation)}>
              <i class="icofont-fountain-pen"></i> REVIEW  
              
            </Button>
          </div>

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
            <h5 className="modal-title">Contact worker</h5>
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






    {/* Rating Modal */}
    <Modal show={showRatingModal} onHide={closeRatingModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Rate the Ouvrier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="rating">
              <Form.Label>Rating:</Form.Label>
              <RatingStars
                count={5}
                onChange={(newValue) => handleRatingChange(newValue)}
                size={40}
                value={rating}
                activeColor="#ffd700"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeRatingModal}>
            Close
          </Button>
          <Button variant="primary" onClick={saveRating}>
            Save Rating
          </Button>
        </Modal.Footer>
      </Modal>




      <Modal show={showReviewModal} onHide={closeReviewModal} centered>
  <Modal.Header closeButton>
    <Modal.Title>Write a Review</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group controlId="comment">
        <Form.Label>Comment:</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={comment}
          onChange={handleCommentChange}
          className="custom-textarea"
        />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={closeReviewModal}>
      Close
    </Button>
    <Button variant="primary" onClick={saveComment}>
      Save Comment
    </Button>
  </Modal.Footer>
</Modal>

          


      
    </>
  )
}

export default OrderCard;
