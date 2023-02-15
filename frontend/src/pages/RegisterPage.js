import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

function RegisterPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
              <Form.Group  md="4" className="mb-3" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  defaultValue=""
                  name="name"
                />
                {/* <Form.Control.Feedback type = "invalid" className=" ">Please enter a name!</Form.Control.Feedback> */}
              </Form.Group>
              <Form.Group  md="4" className="mb-3" controlId="formBasicLastName">
                <Form.Label>Your last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your last name"
                  defaultValue=""
                  name="lastName"
                />
               {/*  <Form.Control.Feedback type="invalid    >Please enter your last name!</Form.Control.Feedback> */}
              </Form.Group>
             
            
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
