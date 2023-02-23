import { Card, Button,Row,Col } from "react-bootstrap";
import {Rating} from "react-simple-star-rating"
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = ({name,description, price,images,rating,reviewNumber,productId}) => {
  return (
    <Card style={{ marginTop:"30px", marginBottom:"50px" }}>
      <Row>
        <Col lg={5}>
        <Card.Img variant="top" src={images[0] ? images[0].path:""}/>
        </Col>
        <Col lg={7}>
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Card.Text>
          <Rating readonly size={20} initialValue={rating}>({reviewNumber})</Rating>
        </Card.Text>
        <Card.Text className="h4">
          ${price}{" "}
        </Card.Text>
        <LinkContainer to={`/product-details/${productId}`}>
         <Button variant="primary">See product</Button>
        </LinkContainer>
      </Card.Body>
        </Col>
      </Row>
      
      
    </Card>
  );
};

export default ProductForListComponent;
