import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>This is product details page</h1>
    </div>
  );
}

export default ProductDetailPage;
