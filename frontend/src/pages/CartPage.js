import React from 'react'
import {Row,Col,Container, ListGroup, ListGroupItem, Alert,Button} from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import CartItemComponent from '../components/CartItemComponent'


function CartPage() {
  return (
 <Container fluid>
  <Row className="mt-4">
    <Col md={8} style={{marginBottom:"150px"}}>
      <h1>
        Shopping Cart
      </h1>
      <ListGroup variant='flush' >
      {Array.from({length:3}).map((item,idx)=>{
        return(
          <div>
            <CartItemComponent  item= {{image: {path: "/images/tablets-category.png"}, name: "product name" , price: 10, count: 10, quantity:10 }} key={idx}/> <br/>
          </div>
        )
      })}
      </ListGroup>
      <Alert variant ="info"> Your cart is empty</Alert>
    </Col>
    <Col md={4}>
      <ListGroup>
        <ListGroupItem>
          <h3>Subtotal (2 Items)</h3>
        </ListGroupItem>
        <ListGroupItem>
          Price: <span className='fw-bold'>$892</span>
        </ListGroupItem>
        <ListGroupItem>
          <LinkContainer to="/user/cart-details">
          <Button>Checkout</Button>

          </LinkContainer>
        </ListGroupItem>
      </ListGroup>
    
    </Col>
 </Row>
 </Container>
  )
}

export default CartPage
