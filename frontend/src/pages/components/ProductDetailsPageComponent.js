import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,

} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../../components/AddedToCartMessageComponent";


import { useEffect, useState, useRef } from "react";

import { useParams } from "react-router-dom";




const ProductDetailsPageComponent = ({
  addToCartReduxAction,
  reduxDispatch,
  getProductDetails,
 
}) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productReviewed, setProductReviewed] = useState(false);
  const [hover, setHover] = useState(true);
  const [imgPath,setImgPath]=useState("")

  const messagesEndRef = useRef(null);

  const addToCartHandler = () => {
    reduxDispatch(addToCartReduxAction(id, quantity));
    setShowCartMessage(true);
  };

  useEffect(() => {
    if (productReviewed) {
        setTimeout(() => {
             messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }, 200)
    }  
  }, [productReviewed])



 

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
  }, [id, productReviewed]);

  const sendReviewHandler = (e) => {
     e.preventDefault();
     const form = e.currentTarget.elements;
     const formInputs = {
         comment: form.comment.value,
         rating: form.rating.value,
     }

  }

  return (
    <Container style={{marginBottom:"150px"}}>
      <AddedToCartMessageComponent
        showCartMessage={showCartMessage}
        setShowCartMessage={setShowCartMessage}
      />
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
                              onMouseEnter={()=>{
                                setHover(false);
                                setImgPath(`${image.path }`)
                              }}
                              onMouseLeave={()=>{
                                setHover(true);
                                setImgPath("")
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
                      {console.log("imgPath: "+imgPath)}
                       {      
      
                       imgPath ?  
               
      
                          (<Image  src={imgPath}/>): ( <Image src={product.images[0].path}  style={{width:"350px"}} />)}  
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
                      <Rating
                        readonly
                        size={20}
                        initialValue={product.rating}
                      />{" "}
                      ({product.reviewsNumber})
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

