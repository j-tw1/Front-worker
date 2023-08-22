import React from 'react'
import "./checkout.css"

function Checkout() {
  return (
    <>
    <div className="row">
  <div className="col-md-8">
    <div className="offer-dedicated-body-left">

      <div className="bg-white rounded shadow-sm p-4 osahan-payment">
        <h4 className="mb-1">Choose payment method</h4>
        <h6 className="mb-3 text-black-50">Credit/Debit Cards</h6>
        <div className="row">
          <div className="col-sm-4 pr-0">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <i className="icofont-credit-card" /> Credit/Debit Cards
              </a>
              
              <a
                className="nav-link"
                id="v-pills-cash-tab"
                data-toggle="pill"
                href="#v-pills-cash"
                role="tab"
                aria-controls="v-pills-cash"
                aria-selected="false"
              >
                <i className="icofont-money" /> Pay on Delivery
              </a>
            </div>
          </div>
          <div className="col-sm-8 pl-0">
            <div className="tab-content h-100" id="v-pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <h6 className="mb-3 mt-0 mb-3">Add new card</h6>
                <p>
                  WE ACCEPT{" "}
                  <span className="osahan-card">
                    <i className="icofont-visa-alt" />{" "}
                    <i className="icofont-mastercard-alt" />{" "}
                    <i className="icofont-american-express-alt" />{" "}
                    <i className="icofont-payoneer-alt" />{" "}
                    <i className="icofont-apple-pay-alt" />{" "}
                    <i className="icofont-bank-transfer-alt" />{" "}
                    <i className="icofont-discover-alt" />{" "}
                    <i className="icofont-jcb-alt" />
                  </span>
                </p>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputPassword4">Card number</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Card number"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="icofont-card" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-8">
                      <label>Valid through(MM/YY)</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Valid through(MM/YY)"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>CVV</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter CVV Number"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label>Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Card number"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          Securely save this card for a faster checkout next
                          time.
                        </label>
                      </div>
                    </div>
                    <div className="form-group col-md-12 mb-0">
                      <a
                        href="thanks.html"
                        className="btn btn-success btn-block btn-lg"
                      >
                        PAY $1329
                        <i className="icofont-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-cash"
                role="tabpanel"
                aria-labelledby="v-pills-cash-tab"
              >
                <h6 className="mb-3 mt-0 mb-3">Cash</h6>
                <p>
                  Please keep exact change handy to help us serve you better
                </p>
                <hr />
                <form>
                  <a
                    href="thanks.html"
                    className="btn btn-success btn-block btn-lg"
                  >
                    PAY $1329
                    <i className="icofont-long-arrow-right" />
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="bg-white rounded shadow-sm p-4 mb-4">
      <h4 className="mb-1">Choose a delivery address</h4>
      <h6 className="mb-3 text-black-50">
        Multiple addresses in this location
      </h6>
      <div className="col-md-6" id='col2'>
        <div className="bg-white card addresses-item mb-4 border border-success">
          <div className="gold-members p-4">
            <div className="media2">
              <div className="rrr">
                <i className="icofont-ui-home icofont-3x" />
              </div>
              <div className="media-body">
                <h6 className="Title1">Home</h6>
                <p className="Desc1">
                  291/d/1, 291, Jawaddi Kalan, Ludhiana, Punjab 141002, India
                </p>
                <p className="mb-0 text-black font-weight-bold">
                  <a className="btn btn-sm btn-success mr-2" href="#">
                    {" "}
                    DELIVER HERE
                  </a>
                  
                </p>
              </div>
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

export default Checkout