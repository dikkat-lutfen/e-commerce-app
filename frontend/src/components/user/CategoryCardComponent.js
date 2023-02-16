import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function CategoryCardComponent({category,idx}) {
  const images = [
    "images/tablets2-category.jpg",
    "images/games2-category.jpg",
    "images/monitor2-category.jpg",
    
    "images/printer2-category.jpg",
    "images/software2-category.jpg",
    "images/camera2-category.jpg",
    "images/book2-category.jpg",
    "images/video2-category.jpg"
  ]
  return (
    <div>
      <Card >
      <Card.Img  className='cardImg' variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer  to="/product-list">
         <Button variant="primary">Go to the category</Button>
        </LinkContainer>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default CategoryCardComponent
