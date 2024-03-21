import React from 'react'
import { Badge, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar expand="lg" className='bg-body-tertiary d-flex justify-content-between user-select-none' data-bs-theme="dark">
        

    <div className='text-light ms-3'>
    <Link to={"/"} className='logo'>
        <i class="fa-solid fa-truck-fast me-2"></i>
        <span>E-Cart</span>
    </Link>

    </div>
    <div className='text-light me-3 '> 
        <Link to={"/wishlist"} className="btn btn-outline-light me-3">
        <i className='fa-solid fa-heart me-2 text-danger'></i>WishList
        <Badge className='ms-2 badge' bg='danger'>5</Badge>
        </Link>
        <Link to={"/cart"} className="btn btn-outline-light me-3 ">
       <i className='fa-solid fa-cart-shopping me-2 text-warning'></i> Cart
       <Badge className='ms-2 badge' bg='warning'>5</Badge>
        </Link>
    </div>
        </Navbar>

    </div>
  )
}

export default Header