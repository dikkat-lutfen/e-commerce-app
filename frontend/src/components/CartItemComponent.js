import React from 'react'
import { ListGroupItem,Row,Col,Image, Form,Button} from 'react-bootstrap'

function CartItemComponent() {
  return (
    
        <ListGroupItem >
            <Row>
                <Col md={2}>
                    <Image crossOrigin='anonymous' src="images/games2-category.jpg" fluid/>
                </Col>
                <Col md={2}>
                    Best game you had ever seen <br/>
                </Col>
                <Col md={2}>
                    <b>$89</b>
                </Col>
                <Col md={3}>
                    <Form.Select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <button type="button" variant="secondary" onClick={()=>window.confirm("Are you sure=")}><i className='bi bi-trash'></i></button>
                </Col>
            </Row>
        </ListGroupItem>

  )
}

export default CartItemComponent
