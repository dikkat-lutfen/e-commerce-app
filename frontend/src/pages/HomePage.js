import React from 'react'
import CategoryCardComponent from '../components/user/CategoryCardComponent';
import ProductCarouselComponent from '../components/user/ProductCarouselComponent';


 function HomePage() {
  return (
    <div>
      <ProductCarouselComponent/>
      <CategoryCardComponent/>
     
    </div>
  )
}

export default HomePage;
