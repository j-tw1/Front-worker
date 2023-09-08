import React from 'react'
import './reviews.css'
function Review({review}) {
  return (
    <>
    <div className="card mb-4 order-list">
        <div className="gold-members p-4">
          <a href="#"></a>
          <div className="media">
            <a href="#">
              <img
                className="mr-4"
                src={review.pp}
                alt="Generic placeholder image"
              />
            </a>
            <div className="media-body">
              <a href="#">
                <span className="float-right text-success">
                  Mon, Nov 12, 7:18 PM{" "}
                  <i className="feather-clock text-success" />
                </span>
              </a>
              <h6 className="mb-1">{review.title}</h6>
              <p className="text-black mb-3">
                <i className="feather-user" /> by {review.name}
              </p>
              <p className="text-black-50">
                {review.desc}
              </p>
              <hr />
              <div className="float-right">
                <a
                  href="#0"
                  className="btn btn-sm btn-success"
                  data-toggle="modal"
                  data-target="#edit_booking"
                >
                  <i className="fa fa-fw fa-reply" /> Reply to this review
                </a>
                <a href="#0" className="btn btn-sm btn-danger">
                  <i className="feather-trash" /> Cancel
                </a>
              </div>
              <p className="mb-0 text-dark pt-2">
                <span className="text-dark font-weight-bold"> <b>Rate</b></span>{" "}
                <span className="bg-warning px-2 py-1 rounded ml-1"> {review.star} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review