import React, { useEffect, useState } from 'react'
import { Col, Row ,Card,Button,Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/slices/ProductSlice'

function Home() {
  const dispach = useDispatch();
  const {loading,products,error} = useSelector((state)=>state.ProductSlice)
  const [hoverIndex,setHoveredIndex]=useState(null);
const handleMouseEnter=(index)=>{
  setHoveredIndex(index);
}
const handleMouseLeave=()=>{
  setHoveredIndex(null);
}
  useEffect(()=>{
    dispach(fetchProducts())
  },[dispach])
  return (

    <div>
      {
        // spinner when loading state is true else dispaly items
        loading?<div className='text-center mt-5'> <Spinner animation="border" variant="primary" /></div>: <Row>
       {products.length>0&&products.map((product,index)=>(
       <Col sm={4} md={3} lg={2} xl={1} style={{padding:"0px"}} key={index} className=''>
         <Card style={{ width: '200px',height:"300px",backgroundColor:hoverIndex===index?'#dedede':'white',
         borderColor: hoverIndex === index ? 'grey' : 'transparent',
         transition: 'transform 0.3s ease, border-color 0.3s ease',
         transitionDelay: hoverIndex === index ? '0s' : '0.2s',
         cursor:'pointer'
        }} className='shadow mt-1'
         onMouseEnter={()=>handleMouseEnter(index)}
         onMouseLeave={()=>handleMouseLeave}>
        <Link to={`/view/${product.id}`}>  <Card.Img variant="top" src={product.thumbnail} className='p-1 rounded shadow ms-2 me-2' style={{width:'180px',height:'150px',objectFit:"cover",transform:hoverIndex===index?'scale(.9)':'scale(1)',
      transition: 'transform 0.3s ease, border-color 0.3s ease',
      transitionDelay: hoverIndex === index ? '0s' : '0.2s'}} /></Link>
          <Card.Body>
          <Card.Text style={{fontSize:hoverIndex?'13px':'12px',fontWeight:"700"}}
          onMouseEnter={(index)=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave()}>{product.title}</Card.Text>
       <div className='d-flex justify-content-between'>
            <p style={{color:"#00b207",fontWeight:"600"}}>${product.price}</p>
            <p style={{fontSize:'12px'}}>Rating <span className='text-warning'>{product.rating}</span></p>
       </div>
            <div className='d-flex justify-content-between'>
          <Button className='btn btn-light' style={{backgroundColor:"white"}}><i className='fa-solid fa-heart  text-danger'></i></Button>
          <Button className='btn btn-light' style={{backgroundColor:"white"}}> <i className='fa-solid fa-cart-shopping text-warning'></i></Button>
            </div>
          </Card.Body>
         </Card>
        </Col>)) }
        {/* end of card--------------------------------------------------------------------------------------------------------------------- */}
      </Row>
      }
    
    </div>
  )
}

export default Home