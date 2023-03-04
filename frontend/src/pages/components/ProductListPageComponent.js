import { Row, Col, Container } from "react-bootstrap";
import ProductForListComponent from "../../components/ProductForListComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductListPageComponent = ({ getProducts}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [total,setTotal]=useState(0)
  const { categoryName } = useParams() || "";
  
  const { searchQuery } = useParams() || "";




  useEffect(() => {
    getProducts(categoryName,  searchQuery)
      .then((products) => {
        setProducts(products.products);
        setTotal(products.totalProducts)
        setLoading(false);
      })
      .catch((er) => {
        console.log(er);
        setError(true);
      });
  }, [categoryName,searchQuery]);

  

  return (
    <Container fluid  style={{marginBottom:"150px"}}>
      <Row>
       
        <Col md={1}>

        </Col>
        <Col md={10}>
          {loading ? (
            <h1>Loading products ....</h1>
          ) : error ? (
            <h1>Error while loading products. Try again later.</h1>
          ) : (
            products.map((product) => (
              <ProductForListComponent
                key={product._id}
                images={product.images}
                name={product.name}
                description={product.description}
                price={product.price}
               
                productId={product._id}
              />
            ))
          )}
       
        </Col>
      </Row>
      <Col md={1}>
             Total Product : {total}
        </Col>
    </Container>
  );
};

export default ProductListPageComponent;

