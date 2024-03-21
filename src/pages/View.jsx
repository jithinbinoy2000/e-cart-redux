import React from 'react'

function View() {
  return (
    <div > 
      <div className='container'>
        <div className="row " >
          <div className="col-md-4" >
            <img src="https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY218_.jpg" alt="product image"  style={{width:'100%'}}/>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 text-start">
            
            <h1 className='mt-5'>Product Title</h1>
            <h5 className='fw-bolder'> Price : 7987</h5>
            <p style={{textAlign:'justify'}}>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nesciunt officia, voluptatum sapiente, ad aspernatur autem sint beatae harum nihil obcaecati, culpa labore ducimus alias doloremque laboriosam numquam dignissimos eius?</p>
            <div className="d-flex justify-content-between">
              <div className="btn btn-outline-danger fs-5"><i className='fa-solid fa-heart '></i> <span style={{fontSize:'15px'}} className='ms-2 fw-bold'>WishList</span></div>
              <div className="btn btn-outline-success fs-5"><i className='fa-solid fa-cart-plus '></i> <span style={{fontSize:'15px'}} className='ms-2 fw-bold'>Cart &nbsp; &nbsp;</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View