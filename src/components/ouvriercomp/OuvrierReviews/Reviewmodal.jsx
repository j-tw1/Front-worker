import React from 'react';

function Reviewmodal() {
  return (
    <div
      className="modal fade"
      id="review-profile-modal"
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
          <div className="modal-header">
            <h5 className="modal-title" id="edit-profile">
              Review
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="form1">
              <div className="form-row1">
                <div className="form-group col-md-12">
                  <label>Reply</label>
                  <textarea
                    type="text"
                    className="form-control description-area"
                    placeholder="Write your reply here ..."
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn d-flex w-50 text-center justify-content-center btn-outline-primary"
              data-dismiss="modal"
            >
              CANCEL
            </button>
            <button
              type="button"
              className="btn d-flex w-50 text-center justify-content-center btn-primary"
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviewmodal;
