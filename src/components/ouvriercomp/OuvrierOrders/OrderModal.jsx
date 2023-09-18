import React, {useState} from 'react'
import './ordermodal.css'

function OrderModal() {

  return (
    <>
    {/* Modal 
    <div 
        className="modal fade"
        id="detail-modal"
        tabIndex={-11}
        role="dialog"
        aria-labelledby="detail"
        aria-hidden="true"
    
    >
      <div className='modalContainer'>
        <img id='imgmodal' src='https://pub-static.fotor.com/assets/projects/pages/7252c2b86395453a836cdd57b13b3d39/600w/fotor-7c742084acd7491aae9923279bdc3218.jpg' alt='/' />
        <div className='modalRight'>
          <div className='closeBtn' >
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className='contentModal'>
            <div className='nameorder'>
              <h3>Amine Bouhmidi</h3>
            </div>
            <div className='ordernum'>
              <p id='city'>Order # 101 </p>
            </div>
            
            <div className='citytime'>
              <p id='city'>Rabat, Maroc</p>
              <p id='timeorder'>Mon, 16 Jun 2023 , 23:15</p>
            </div>
            <div className='descr'>
              <p id='descreption'>Details</p>
              <h6> x2 robini 
                x3 l3ibat 
                9ad dakchi mzyan
              </h6>
            </div>
            <div className='totalprice'>
              <p id='total'><span>Total:</span> 200DH</p>
            </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>Confirm</span>
            </button>
            <button className='btnOutline'>
              <span className='bold'>Delete</span> 
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>*/}

<div
    className="modal fade"
    id="detail-profile-modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="review-profile"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-lg modal-dialog-centered"
      role="document"
    >
      <div className="modal-content">
        
        <div className='modalContainer'>
        <img id='imgmodal' src='https://www.ifapme.be/sites/default/files/styles/wvn_facebook/public/2022-05/metiers_MM_mecanicien_automobile_garage_BR.jpg?itok=AW6LI2M1' alt='/' />
        <div className='modalRight'>
          <div className='closeBtn' >
            <a
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              
            >
              <span aria-hidden="true">×</span>
            </a>
          </div>
          <div className='contentModal'>
            <div className='nameorder'>
              <h3>Amine Bouhmidi</h3>
            </div>
            <div className='ordernum'>
              <p id='city'>Order # 101 </p>
            </div>
            
            <div className='citytime'>
              <p id='city'>Rabat, Maroc</p>
              <p id='timeorder'>Mon, 16 Jun 2023 , 23:15</p>
            </div>
            <div className='descr'>
              <p id='descreption'>Details</p>
              <h6> x2 robini 
                x3 l3ibat 
                9ad dakchi mzyan
              </h6>
            </div>
            <div className='totalprice'>
              <p id='total'>Total:200DH</p>
            </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>
              <i class="feather-check-circle"></i>
              Confirm</span>
            </button>
            <button className='btnOutline'>
              <span className='bold'>Delete</span> 
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default OrderModal