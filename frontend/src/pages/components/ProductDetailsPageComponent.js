import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
} from "react-bootstrap";


import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetailsPageComponent = ({
  addToCartReduxAction,
  reduxDispatch,
  getProductDetails,
}) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  
  const [imgPath, setImgPath] = useState("");
  const navigate = useNavigate();

 

  const addToCartHandler = () => {
    reduxDispatch(addToCartReduxAction(id, quantity));
  /* 
   */
  navigate("/cart");
  };



  useEffect(() => {
    getProductDetails(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((er) =>
        setError(
          er.response.data.message ? er.response.data.message : er.response.data
        )
      );
  }, [id]);



  return (
    <Container style={{ marginBottom: "150px" }}>

      <Row className="mt-5">
        {loading ? (
          <h2>Loading product details ...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <Col style={{ zIndex: 1 }} md={5}>
              <Row>
                <Col md={2}>
                  {product.images
                    ? product.images.map((image, id) => (
                        <div key={id}>
                          <div key={id} id={`imageId${id + 1}`}>
                            <Image
                              onMouseEnter={() => {
                               
                                setImgPath(`${image.path}`);
                              }}
                              onMouseLeave={() => {
                                
                                setImgPath("");
                              }}
                              crossOrigin="anonymous"
                              fluid
                              src={`${image.path ?? null}`}
                            />
                          </div>
                          <br />
                        </div>
                      ))
                    : null}
                </Col>
                <Col md={10}>
              
                  {imgPath ? (
                    <Image src={imgPath} />
                  ) : (
                    <Image
                      src={product.images[0].path}
                      style={{ width: "350px" }}
                    />
                  )}
                </Col>
              </Row>
            </Col>
            <Col md={7}>
              <Row>
                <Col md={7}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h1>{product.name}</h1>
                    </ListGroup.Item>
                   
                    <ListGroup.Item>
                      Price <span className="fw-bold">${product.price}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>{product.description}</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={4}>
                  <ListGroup>
                    <ListGroup.Item>
                      Status: {product.count > 0 ? "in stock" : "out of stock"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Price: <span className="fw-bold">${product.price}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Quantity:
                      <Form.Select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        size="lg"
                        aria-label="Default select example"
                      >
                        {[...Array(product.count).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button onClick={addToCartHandler} variant="danger">
                        Add to cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default ProductDetailsPageComponent;
