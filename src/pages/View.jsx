import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function View() {
  const {id}=useParams();
  const {loading,products,error}=useSelector((state)=>state.ProductSlice)
  const[product,setProduct]=useState({})
  useEffect(()=>{
   setProduct(products.find(product=>product.id==id))
  
  },[])
  console.log(product.thumbnail);

  return (
    <div > 
      <div className='container'>
        {loading?<div className='text-center mt-5'> <Spinner animation="border" variant="primary" /></div>:
          <div className="row " >
            <div className="col-md-4 d-flex align-item-center" >
              <img src={product.thumbnail} alt="product image"  style={{width:'100%',objectFit:'cover'}} className='p-3'/>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 text-start">
              
              <h1 className='mt-5'>{product.title}</h1>
              <h5 className='fw-bolder text-danger'> Price :{product.price}</h5>
              <p style={{textAlign:'justify'}}>{product.description}</p>
              <div className='d-flex justify-content-between'>
                <p style={{textAlign:'justify',fontWeight:'700'}}>Discount<span className='text-success'> {product.discountPercentage} %</span></p>
                <p style={{textAlign:'justify'}}>Rating <span className='text-warning'>{product.rating} &#9733;</span></p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="btn btn-outline-danger fs-5"><i className='fa-solid fa-heart '></i> <span style={{fontSize:'15px'}} className='ms-2 fw-bold'>WishList</span></div>
                <div className="btn btn-outline-success fs-5"><i className='fa-solid fa-cart-plus '></i> <span style={{fontSize:'15px'}} className='ms-2 fw-bold'>Cart &nbsp; &nbsp;</span></div>
              </div>
            </div>
          </div>
         }
      </div>
    </div>
  )
}

export default View