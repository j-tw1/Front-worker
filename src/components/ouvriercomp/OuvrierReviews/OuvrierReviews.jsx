import React from 'react'
import Review from '../cards/Review'
import { reviews } from '../../../data'
function OuvrierReviews() {
  return (
    <>
    <div id="layoutSidenav_content">
    <main>
          <div className="Reviews">

      <div className="container-fluid">
  <h1 className="mt-4">Reviews</h1>
  <ol className="breadcrumb mb-4">
    <li className="breadcrumb-item">
      <a href="index.html">Dashboard</a>
    </li>
    <li className="breadcrumb-item active">Reviews</li>
  </ol>
  <div className="row">
    <div className="col-xl-12">

      {reviews.map((review) => (
              <Review key={review.id} review={review} />
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
  )
}

export default OuvrierReviews