import React from 'react'
import { Carousel } from 'react-bootstrap'

function ProductCarouselComponent() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className=" d-inline-block w-100 carouselImg"
          src="/images/laptop2.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline-block w-100 carouselImg "
          src="/images/phone1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline-block w-100 carouselImg "
          src="/images/tv1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ProductCarouselComponent
