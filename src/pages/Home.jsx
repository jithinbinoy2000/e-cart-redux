import React, { useEffect, useState } from 'react'
import { Col, Row ,Card,Button,Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/slices/ProductSlice'
import { addtowishlist } from '../Redux/slices/WishlistSlice'
import { addtoCart} from '../Redux/slices/CartSlice'
import { toast } from 'react-toastify'
function Home() {
  //  dispatch actions to the Redux store. 
  const dispach = useDispatch();
  //extract data from the Redux store state
  const {loading,products,error} = useSelector((state)=>state.ProductSlice)
  const [hoverIndex,setHoveredIndex]=useState(null);
  
// data from cartSlice
const cartitem=useSelector((state)=>state.cartReducer)
  useEffect(()=>{
    //api call
    dispach(fetchProducts());
  },[dispach])

  //hover
  const handleMouseEnter=(index)=>{
    setHoveredIndex(index);
  }
  const handleMouseLeave=()=>{
    setHoveredIndex(null);
  }
  //cart toast
 const showtoast=()=>{
    toast.success("Cart updated",{
      position:'bottom-right',
      className:"cartToast"
    })
    
  }
  return (

    <div className='user-select-none'>
      {
  // spinner when loading state is true else dispaly items
        loading?<div className='text-center mt-5'> <Spinner animation="border" variant="primary" /></div>: 
// display products by loop (map)
        <Row>
        {products.length>0&&products.map((product,index)=>(
           <Col sm={4} md={3} lg={2} xl={1} style={{padding:"0px"}} key={index} className=''>
  {/* card  */}
           <Card style={{ width: '200px',height:"300px",
           //hover effect
           backgroundColor:hoverIndex===index?'#dedede':'white',
           borderColor: hoverIndex === index ? 'grey' : 'transparent',
           transition: 'transform 0.3s ease, border-color 0.3s ease',
           transitionDelay: hoverIndex === index ? '0s' : '0.2s',
           //pointer
           cursor:'pointer'
          }} className='shadow mt-1'
          //state event
           onMouseEnter={()=>handleMouseEnter(index)}
           onMouseLeave={()=>handleMouseLeave}>
  {/* image */}
        <Link to={`/view/${product.id}`}>  <Card.Img variant="top" src={product.thumbnail} className='p-1 rounded shadow ms-2 me-2' 
        style={{width:'180px',height:'150px',objectFit:"cover",
        // hover
        transform:hoverIndex===index?'scale(.9)':'scale(1)',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        transitionDelay: hoverIndex === index ? '0s' : '0.2s'}} /></Link>
          <Card.Body>
  {/* title */}
          <Card.Text style={{fontSize:hoverIndex?'13px':'12px',fontWeight:"700"}}
          // hover
          onMouseEnter={(index)=>handleMouseEnter(index)} 
          onMouseLeave={()=>handleMouseLeave()}>
            {product.title.length<22?(product.title):`${product.title.slice(0,22)}...`}
            </Card.Text>
       <div className='d-flex justify-content-between'>
  {/* price */}
            <p style={{color:"#00b207",fontWeight:"600"}}>${product.price}</p>
  {/* Rating */}
            <p style={{fontSize:'12px'}}>Rating <span className='text-warning'>{product.rating}</span></p>
       </div>
  {/* buttons */}
            <div className='d-flex justify-content-between'>
          <Button 
          onClick={()=>{dispach(addtowishlist(product));
          }}
          
          className='btn btn-light' style={{backgroundColor:"white"}}><i className='fa-solid fa-heart  text-danger'></i></Button>
          {/* cart btn */}
          <Button onClick={()=>{dispach(addtoCart(product))
                              showtoast()
          }}
           className='btn btn-light' style={{backgroundColor:"white"}}> <i className='fa-solid fa-cart-shopping text-warning'></i></Button>
            </div>
          </Card.Body>
         </Card>
        </Col>)) }
  {/* end of card--------------------------------------------------------------------------------------------------------------------- */}
      </Row>
      }
      <div>
       
      </div>
    
    </div>
  )
}

export default Home