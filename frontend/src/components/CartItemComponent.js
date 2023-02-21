import React from 'react'
import { ListGroupItem,Row,Col,Image, Form,Button} from 'react-bootstrap'

function CartItemComponent({item,orderCreated=false}) {
  return (
    
        <ListGroupItem >
            <Row>
                <Col md={2}>
                    <Image crossOrigin='anonymous' src={item.image ? (item.image.path ?? null) : null} fluid/>
                </Col>
                <Col md={2}>
                  {item.name}
                </Col>
                <Col md={2}>
                    <b>${item.price}</b>
                </Col>
                <Col md={3}>
                    <Form.Select  onChange={()=>{}} disabled={orderCreated} value= {item.quantity}>
                         {[...Array(item.count).keys()].map(x=>(

                            <option key={x+1} value={x+1}>{x+1}</option>
                         )
                            )}
                
                           
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
