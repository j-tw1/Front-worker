// import React from 'react';
// import './ouvriercard.css';
// import { savechoosedWorkerEmail } from '../../../../services/AuthService';
// import { useNavigate } from 'react-router-dom';

// function OuvrierCard({ worker }) {
//   const navigator = useNavigate();

//   function handleImgClick(e) {
//     console.log(worker.categorie);
//     console.log(worker.email);

//     savechoosedWorkerEmail(worker.email);
//     // navigator('/workerhome');
//     navigator(`/workerhome/`);
//   }

//   return (
//     <>
//       <div className="col-md-4 col-sm-6 mb-4 pb-2">
//         <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
//           <div className="list-card-image">
//             <div className="star position-absolute">
//               <span className="badge badge-success">
//                 {/* <i className="icofont-star" /> {worker.star} ({worker.ReviewsNumber}+) */}
//               </span>
//             </div>
//             <div className="favourite-heart text-danger position-absolute">
//               <a href="detail.html">
//                 <i className="icofont-heart" />
//               </a>
//             </div>
//             <div className="member-plan position-absolute">
//               <span className="badge badge-danger">{worker.categorie}</span>
//             </div>
//             <a onClick={handleImgClick}>
//               <img src={worker.pp} className="img-fluid item-img" />
//             </a>
//           </div>
//           <div className="p-3 position-relative">
//             <div className="list-card-body">
//               <h6 className="mb-1">
//                 <a href="detail.html" className="text-black">
//                   {worker.firstName} {worker.lastName}
//                 </a>
//               </h6>
//               <p className="text-gray mb-3">
//                 {worker.pays} • {worker.ville}
//               </p>
//               <p className="text-gray mb-3 time">
//                 <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
//                   <i className="icofont-wall-clock" /> 20–25 min
//                 </span>{' '}
//                 <span className="float-right text-black-50">
//                   {' '}
//                   {/* {worker.price} DH */}
//                 </span>
//               </p>
//             </div>
//             <div className="list-card-badge">
//               <span className="badge badge-success">OFFER</span>{' '}
//               <small>65% off | Use Coupon OSAHAN50</small>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OuvrierCard;

import React from 'react';
import './ouvriercard.css';
import {
  saveWorker,
  savechoosedWorkerEmail,
} from '../../../../services/AuthService';
import { useNavigate } from 'react-router-dom';

function OuvrierCard({ worker }) {
  const navigator = useNavigate();

  function handleImgClick(e) {
    savechoosedWorkerEmail(worker.email);

    navigator(`/workerhome/`);
  }

  return (
    <>
      <div className="col-md-4 col-sm-6 mb-4 pb-2">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
          <div className="list-card-image">
            <div className="star position-absolute">
              <span className="badge badge-success"></span>
            </div>
            <div className="favourite-heart text-danger position-absolute">
              <a href="detail.html">
                <i className="icofont-heart" />
              </a>
            </div>
            <div className="member-plan position-absolute">
              <span className="badge badge-danger">{worker.categorie}</span>
            </div>
            <a onClick={handleImgClick}>
              <img src={worker.image} className="img-fluid item-img" id="im" />
            </a>
          </div>
          <div className="p-3 position-relative">
            <div className="list-card-body">
              <h6 className="mb-1">
                <a href="detail.html" className="text-black">
                  {worker.firstName} {worker.lastName}
                </a>
              </h6>
              <p className="text-gray mb-3">
                {worker.pays} • {worker.ville}
              </p>
              <p className="text-gray mb-3 time">
                <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                  <i className="icofont-wall-clock" /> 20–25 min
                </span>{' '}
                <span className="float-right text-black-50">
                  {' '}
                  {/* {worker.price} DH */}
                </span>
              </p>
            </div>
            <div className="list-card-badge">
              <span className="badge badge-success">OFFER</span>{' '}
              <small>65% off | Use Coupon OSAHAN50</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OuvrierCard;
