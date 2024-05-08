// import React, { useEffect, useState } from 'react'
import { Col, Row ,Card,Button} from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removefromwishlist } from '../Redux/slices/WishlistSlice'


function Wishlist() {
//access data from store
const list = useSelector(state=>state.WishlistSlice.wishlist)
//dispatch action
const dispatch=useDispatch()

  return (
    <div>
        <Row>
       {list?.length>0?list.map((item,index)=>( <Col key={index}  sm={4} md={3} lg={2} xl={1} className=''>
         <Card style={{ width: '200px',height:'250px',overflow:'hidden'}} className='shadow  '>
        <Link to={`/view/${item.id}`}>  <Card.Img variant="top" src={item.thumbnail} className='p-1 rounded shadow border rounded' 
          style={{objectFit:'contain'}} /></Link>
          <Card.Body>
          <Card.Text style={{fontWeight:'400'}}>{item.title}</Card.Text>
            <div className='d-flex justify-content-between'>
            <Button
            onClick={()=>dispatch(removefromwishlist(item.id))}
            className='btn btn-light' style={{backgroundColor:"white"}}> <i className='fa-solid fa-heart-circle-xmark text-danger'></i></Button>
          <Button className='btn btn-light' style={{backgroundColor:"white"}}> <i className='fa-solid fa-cart-shopping text-warning'></i></Button>
            </div>
          </Card.Body>
         </Card>
        </Col>)):
        <div className="mt-5 text-center">
          <img src='https://schoolville.com/assets/img/empty-cart-illustration.gif' style={{width:"100px"}}/>
          <div className="text-center mt-2 text-danger fw-bold"> Your WishList is Empty</div>
        </div>
        }
        {/* end of card--------------------------------------------------------------------------------------------------------------------- */}
      </Row>
    </div>
  )
}

export default Wishlist