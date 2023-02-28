import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../../components/PaginationComponent";
import ProductForListComponent from "../../components/ProductForListComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductListPageComponent = ({ getProducts}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [paginationLinksNumber, setPaginationLinksNumber] = useState(null);
  const [pageNum, setPageNum] = useState(null);
  const { categoryName } = useParams() || "";
  const { pageNumParam } = useParams() || 1;
  const { searchQuery } = useParams() || "";




  useEffect(() => {
    getProducts(categoryName, pageNumParam, searchQuery)
      .then((products) => {
        setProducts(products.products);
        setPaginationLinksNumber(products.paginationLinksNumber);
        setPageNum(products.pageNum);
        setLoading(false);
      })
      .catch((er) => {
        console.log(er);
        setError(true);
      });
  }, [categoryName, pageNumParam, searchQuery]);

  

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
                rating={product.rating}
                reviewsNumber={product.reviewsNumber}
                productId={product._id}
              />
            ))
          )}
          {paginationLinksNumber > 1 ? (
            <PaginationComponent
              categoryName={categoryName}
              searchQuery={searchQuery}
              paginationLinksNumber={paginationLinksNumber}
              pageNum={pageNum}
            />
          ) : null}
        </Col>
      </Row>
      <Col md={1}>

        </Col>
    </Container>
  );
};

export default ProductListPageComponent;

