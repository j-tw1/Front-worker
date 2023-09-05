import React from 'react'
import "./cardslist.css"
import OrderCard from '../cards/OrderCard/OrderCard'

function OrdersList() {
  return (
    <div
          className="tab-pane fade active show"
          id="orders"
          role="tabpanel"
          aria-labelledby="orders-tab"
        >
          <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
          <OrderCard/>

    </div>
  )
}

export default OrdersList