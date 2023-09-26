// import React, { useEffect, useState } from 'react';
// import Review from '../cards/Review';
// import Reviewmodal from './Reviewmodal';
// import { getUserDetails } from '../../../services/AuthService';
// function OuvrierReviews() {
//   const [workerReviews, setWorkerReviews] = useState([]);

//   const userDetails = getUserDetails();
//   const workerId = userDetails.id;

//   useEffect(() => {
//     // Simulate fetching data from an API
//     const fetchData = async () => {
//       try {
//         // Replace this URL with your actual API endpoint
//         const response = await fetch(
//           `http://localhost:8081/review/findConsultations?id=${workerId}`
//         );
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setWorkerReviews(data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(workerReviews);
//   return (
//     <>
//       <Reviewmodal />
//       <div id="layoutSidenav_content">
//         <main>
//           <div className="Reviews">
//             <div className="container-fluid">
//               <h1 className="mt-4">Reviews</h1>
//               <ol className="breadcrumb mb-4"></ol>
//               <div className="row">
//                 <div className="col-xl-12">
//                   {workerReviews.length === 0 ? (
//                     <p>No reviews available</p>
//                   ) : (
//                     workerReviews.map((workrev) => (
//                       <div
//                         key={workrev.id_review}
//                         className="card mb-4 order-list"
//                       >
//                         <div className="gold-members p-4">
//                           <a href="#"></a>
//                           <div className="media">
//                             <a href="#">
//                               <img
//                                 className="mr-4"
//                                 alt="Generic placeholder image"
//                               />
//                             </a>
//                             <div className="media-body">
//                               <a href="#">
//                                 <span className="float-right text-success">
//                                   Mon, Nov 12, 7:18 PM{' '}
//                                   <i className="feather-clock text-success" />
//                                 </span>
//                               </a>
//                               <h6 className="mb-1">
//                                 {workrev.commentaire || 'No Comment'}
//                               </h6>
//                               <hr />
//                               <div className="float-right">
//                                 <a
//                                   href="#"
//                                   className="btn btn-sm btn-success"
//                                   data-toggle="modal"
//                                   data-target="#review-profile-modal"
//                                 >
//                                   <i className="fa fa-fw fa-reply" /> Reply to
//                                   this review
//                                 </a>
//                                 <a href="#0" className="btn btn-sm btn-danger">
//                                   <i className="feather-trash" /> Cancel
//                                 </a>
//                               </div>
//                               <p className="mb-0 text-dark pt-2">
//                                 <span className="text-dark font-weight-bold">
//                                   {' '}
//                                   <b>Rate</b>
//                                 </span>{' '}
//                                 <span className="bg-warning px-2 py-1 rounded ml-1">
//                                   {' '}
//                                   {workrev.star || 'No Rating'}{' '}
//                                 </span>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }

// export default OuvrierReviews;

import React, { useEffect, useState } from 'react';
import Review from '../cards/Review';
import Reviewmodal from './Reviewmodal';
import { getUserDetails } from '../../../services/AuthService';

function OuvrierReviews() {
  const [workerReviews, setWorkerReviews] = useState([]);
  const [workerRating, setWorkerRating] = useState(null); // State to store worker's rating

  const userDetails = getUserDetails();
  const workerId = userDetails.id;

  useEffect(() => {
    // Fetch worker's reviews
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/review/findConsultations?id=${workerId}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWorkerReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    // Fetch worker's rating
    const fetchRating = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/rating/FindRatingByOuvrier?id=${workerId}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWorkerRating(data); // Assuming the rating is a single numeric value
      } catch (error) {
        console.error('Error fetching rating:', error);
      }
    };

    fetchReviews();
    fetchRating();
  }, [workerId]);

  return (
    <>
      <Reviewmodal />
      <div id="layoutSidenav_content">
        <main>
          <div className="Reviews">
            <div className="container-fluid">
              <h1 className="mt-4">Reviews</h1>
              <ol className="breadcrumb mb-4"></ol>
              <div className="row">
                <div className="col-xl-12">
                  {workerReviews.length === 0 ? (
                    <p>No reviews available</p>
                  ) : (
                    workerReviews.map((workrev) => (
                      <div
                        key={workrev.id_review}
                        className="card mb-4 order-list"
                      >
                        <div className="gold-members p-4">
                          <a href="#"></a>
                          <div className="media">
                            <a href="#">
                              <img
                                className="mr-4"
                                alt="Generic placeholder image"
                              />
                            </a>
                            <div className="media-body">
                              <a href="#">
                                <span className="float-right text-success">
                                  Mon, Nov 12, 7:18 PM{' '}
                                  <i className="feather-clock text-success" />
                                </span>
                              </a>
                              <h6 className="mb-1">
                                {workrev.commentaire || 'No Comment'}
                              </h6>
                              <hr />
                              <div className="float-right">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-success"
                                  data-toggle="modal"
                                  data-target="#review-profile-modal"
                                >
                                  <i className="fa fa-fw fa-reply" /> Reply to
                                  this review
                                </a>
                                <a href="#0" className="btn btn-sm btn-danger">
                                  <i className="feather-trash" /> Cancel
                                </a>
                              </div>
                              <p className="mb-0 text-dark pt-2">
                                <span className="text-dark font-weight-bold">
                                  {' '}
                                  <b>Rate</b>
                                </span>{' '}
                                <span className="bg-warning px-2 py-1 rounded ml-1">
                                  {' '}
                                  {workerRating.note || 'No Rating'}{' '}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  {workerRating !== null && (
                    <div className="mb-4">
                      <p>Worker's Rating: {workerRating.note}</p>
                    </div>
                  )}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-sm mb-4 justify-content-center">
                      {/* Pagination controls */}
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

export default OuvrierReviews;
