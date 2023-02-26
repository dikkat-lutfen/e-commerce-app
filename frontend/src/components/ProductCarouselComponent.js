import React from 'react'
import { Carousel } from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap"

function ProductCarouselComponent() {
  const cursorP = {
    cursor:"pointer"
  }
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className=" d-inline-block w-100 carouselImg"
          style={{height:"300px ",objectFit:"cover"}}
          src="/images/laptop1.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style ={cursorP} to="/product-details">

          <h3>Best seller in Laptop Category</h3>
          </LinkContainer>
          
          <p>Dell Inspiron 15 3000 laptop, 15.6 inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline-block w-100 carouselImg "
          style={{height:"300px ",objectFit:"cover"}}
          src="/images/phone1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style ={cursorP} to="/product-details">

<h3>Best seller in Book Category</h3>
</LinkContainer>
          <p>Word of Eric Carle, Hear Bear Roar 30-Button Animal Sound Book</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline-block w-100 carouselImg "
          style={{height:"300px ",objectFit:"cover"}}
          src="/images/tv1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style ={cursorP} to="/product-details">

<h3>Best seller in Cameras Category</h3>
</LinkContainer>
          <p>
            4K Camcorder Video Camera 60FPS 48MP Vlogging Camera for YouTube Wifi 16X Digital Camera
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ProductCarouselComponent
