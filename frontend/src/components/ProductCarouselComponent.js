import React from "react";
import { Carousel } from "react-bootstrap";

function ProductCarouselComponent() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            crossOrigin="anonymous"
            className=" d-inline-block w-100 carouselImg"
            style={{ height: "300px ", objectFit: "cover" }}
            src="/images/carousel/carousel-1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-inline-block w-100 carouselImg "
            style={{ height: "300px ", objectFit: "cover" }}
            src="/images/carousel/carousel-2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-inline-block w-100 carouselImg "
            style={{ height: "300px ", objectFit: "cover" }}
            src="/images/carousel/carousel-3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProductCarouselComponent;
