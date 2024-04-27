import React from 'react'
import { Col, Row ,Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Wishlist() {
  return (
    <div>
        <Row>
        <Col sm={6} md={3} lg={3} xl={1} className=''>
         <Card style={{ width: '200px'}} className='shadow mt-2 ms-2 '>
        <Link to={"/view/1"}>  <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY218_.jpg" className='p-1 rounded shadow ms-2 me-2' style={{width:'180px',objectFit:'fill'}} /></Link>
          <Card.Body>
          <Card.Text>Card Title</Card.Text>
            <div className='d-flex justify-content-between'>
            <Button className='btn btn-light' style={{backgroundColor:"white"}}> <i className='fa-solid fa-heart-circle-xmark text-danger'></i></Button>
          <Button className='btn btn-light' style={{backgroundColor:"white"}}> <i className='fa-solid fa-cart-shopping text-warning'></i></Button>
            </div>
          </Card.Body>
         </Card>
        </Col>
        {/* end of card--------------------------------------------------------------------------------------------------------------------- */}
      </Row>
    </div>
  )
}

export default Wishlist