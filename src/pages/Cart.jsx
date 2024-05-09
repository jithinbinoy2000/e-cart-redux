import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removefromCart } from '../Redux/slices/CartSlice'
import { toast } from 'react-toastify'

function Cart() {
  const cart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch();
  const showdeletetoast=()=>{
    toast.error("deleted",{position:'bottom-right', className:'deletetoast'})
  }
  useEffect(()=>{

  },[])
  return (
    <div>
      <div className="container">
        {cart.length>0?<Row className='mt-5'>
          <div className="col-lg-8 mt-5">
            <table className='table shadow rounded'>
             <thead>
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Unit Price</th>
                    <th>Qtd</th>
                    <th>Total Price</th>
                    <th></th>
                </tr>
             </thead>
             <tbody>
             {cart.map((item,index)=>( 
                  <tr key={index+1}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><img src={item.thumbnail} alt="product image" style={{width:"100px"}}/></td>
                    <td className='text-center'>${item.price}</td>
                    <td className='text-center'>{item.quandity}</td>
                    <td className='text-center'>${item.totalPrice}</td>
                    <td><div onClick={()=>{dispatch(removefromCart(item));
                    showdeletetoast();
                    }} className="btn"><i className='fa-solid fa-trash fa-1x text-danger'></i></div></td>
                  </tr>
              ))}</tbody>
            </table>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="rounded shadow d-fex flex-column p-4 ">
              <h5 >Total Product : {cart.length}</h5>
              <h5>Total Amount : $ {cart.reduce((sum,item)=>sum+item.totalPrice,0)}</h5>
              <hr/>
              <div className="d-grid">
                <div className="btn btn-success">CheckOut <span><i className="fa-solid fa-cart-shopping fa-bounce ms-2"></i></span></div>
              </div>
            </div>
          </div>
          
        </Row>:
        
       <div className='mt-5 text-center'> <img src="https://media0.giphy.com/media/LOL2XB5O5slfFE4K3M/giphy.gif?cid=6c09b952e9km389rumzgizjky03cs4ogpyny1l5tmf92buus&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" className='text-center'
       style={{width:'20vw'}}/>
       <div className="mt-2 text-warning">Empty Cart</div>
       </div>
        }
      </div>
    </div>
  )
}

export default Cart