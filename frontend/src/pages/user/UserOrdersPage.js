import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom"


function UserOrdersPage() {
  return (
  <Container>
    <Row className='m-5'>
      <Col md={12}>
        <h1>My Orders</h1>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Date</th>
          <th>Total</th>
          <th>Delivery</th>
          <th>Order details</th>
        </tr>
      </thead>
      <tbody>
        {["bi bi-check-lg text-success","bi bi-x-lg text-danger"].map((item,idx)=>{
          return(
            <tr key={idx}>
          <td>{idx+1}</td>
          <td>Mark someone</td>
          <td>2023-09-12</td>
          <td>$124</td>
          <td>
            <i className={item}></i>
          </td>
          <td>
            <Link to ="/user/order-details">go to order</Link>
          </td>
        </tr>
          )
        })}
        
        
      </tbody>
    </Table>
      </Col>
    </Row>
  </Container>
  )
}

export default UserOrdersPage
