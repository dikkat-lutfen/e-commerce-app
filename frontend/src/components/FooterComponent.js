import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

function FooterComponent() {
  return (
  <footer>
    <Container fluid>
      <Row className='mt-5'>
        <Col className="text-light bg-dark text-center py-5"  >Copyright &copy ; By Muhammed Hakan</Col>
      </Row>
    </Container>
  </footer>

   )
}

export default FooterComponent