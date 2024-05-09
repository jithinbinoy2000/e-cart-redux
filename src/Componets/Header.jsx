import React, { useEffect, useState } from 'react'
import { Badge, Navbar } from 'react-bootstrap'
import { act } from 'react-dom/test-utils';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const[count,setWishListCount]=useState(0)//wishlist count
  const[cartCount,setCartCount]=useState(0)
  const {wishlist}=useSelector((state)=>state.WishlistSlice)
  const cart = useSelector((state)=>state.cartReducer)
    //------------------get count of wishlist and update------
  useEffect(()=>{
    setWishListCount(wishlist?wishlist.length:0),
    setCartCount(cart?cart.length:0)
  },[wishlist,cart]);
  //------------------get count of cart------------------------
  // get store cart data

  
  useEffect(()=>{
    if(count>0){
    const element=document.getElementById("elementToChange")
    element.style.color="white";
    toastShow()
    }
    else null
  
  },[count])

   //toast
   const toastShow=()=>{
    toast.success(`Wishlist Updated successfully`,
    {position:'bottom-right',
    className:'toast-message'})
   }
  return (
    <div className='headerbar'>
        <Navbar expand="lg" className='bg-body-tertiary d-flex justify-content-between user-select-none' data-bs-theme="dark">
    <div className='text-light ms-3'>           
    <Link to={"/"} className='logo'>
        <i className="fa-solid fa-truck-fast me-2"></i>
        <span>E-Cart</span>
    </Link>
    </div>
    <div className='text-light me-3 '> 
        <Link to={"/wishlist"} className="btn btn-outline-light me-3">
        <i className='fa-solid fa-heart me-2 text-danger'></i>WishList
        <Badge className='ms-2 badge' bg='danger' id='elementToChange'>{count}</Badge>
        </Link>
        <Link to={"/cart"} className="btn btn-outline-light me-3 ">
       <i className='fa-solid fa-cart-shopping me-2 text-warning'></i> Cart
       <Badge className='ms-2 badge' bg='warning'>{cartCount}</Badge>
        </Link>
        <ToastContainer/>
    </div>
        </Navbar>
    </div>
  )
}

export default Header