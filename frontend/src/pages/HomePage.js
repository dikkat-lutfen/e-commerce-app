import React from 'react'
import CategoryCardComponent from '../components/user/CategoryCardComponent';
import ProductCarouselComponent from '../components/user/ProductCarouselComponent';
import {Row,Container} from "react-bootstrap"


 function HomePage() {
   const categories = [
    "Tablets","Games","Monitors","Printer","Software","Cameras","books","videos",
   ]
  return (
    <div>
      <ProductCarouselComponent/>
      <Container>
      <Row xs={1} md={2} className="g-4 mt-5">
       {categories.map((category, idx)=>(<CategoryCardComponent  key={idx} category={category} idx={idx}/> )) }
      </Row>
      </Container>
      
     
    </div>
  )
}

export default HomePage;
