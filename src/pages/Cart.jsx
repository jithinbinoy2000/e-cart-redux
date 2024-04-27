import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Cart() {
  return (
    <div>
      <div className="container">
        <Row mt-5>
          <div className="col-lg-8 mt-5">
            <table className='table shadow rounded'>
              <thead>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </thead>
              <tbody>
                <td>1</td>
                <td>Iphone</td>
                <td><img src="https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY218_.jpg" alt="product image" /></td>
                <td>$2500</td>
                <td><div className="btn"><i className='fa-solid fa-trash fa-1x text-danger'></i></div></td>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="rounded shadow d-fex flex-column p-4 ">
              <h5 >Total Product : 1</h5>
              <h5>Total Amount : $2500</h5>
              <hr />
              <div className="d-grid">
                <div className="btn btn-success">CheckOut <span><i className="fa-solid fa-cart-shopping fa-bounce ms-2"></i></span></div>
              </div>
            </div>
          </div>

        </Row>
      </div>
    </div>
  )
}

export default Cart