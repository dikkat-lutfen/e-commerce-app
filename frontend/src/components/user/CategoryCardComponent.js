import React from 'react'
import { Card, Button } from 'react-bootstrap'

function CategoryCardComponent() {
  return (
    <div>
      <Card >
      <Card.Img  className='cardImg' variant="top" src="images/laptop2.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CategoryCardComponent
