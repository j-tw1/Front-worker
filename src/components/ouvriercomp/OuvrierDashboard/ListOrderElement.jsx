import React from 'react'

function ListOrderElement({order}) {
  return (
    <tr>
        <td>
            <img class="img-profile rounded-circle" src={order.pp}/>
        </td>
        <td> {order.name} </td>
        <td>{order.phone}</td>
        <td><button type="button" class="btn btn-sm btn-success btn-round">confirmed</button></td>
        <td>Sat, Jul 11, 2020 1:38 AM</td>
        <td>{order.prix} DH</td>
        <td><a href="edit-order.html" class="btn btn-primary btn-sm">View</a></td>
        <td><a href="edit-order.html" class="btn btn-success btn-sm">Edit</a></td></tr>
  )
}

export default ListOrderElement