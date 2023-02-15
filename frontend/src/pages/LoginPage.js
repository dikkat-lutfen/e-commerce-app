import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  
  Alert,
} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
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
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group md="4" className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
                defaultValue=""
                name="email"
              />
              {/*  <Form.Control.Feedback type="invalid    >Please enter valid email address!</Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group md="4" className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
                defaultValue=""
                name="password"
              />
            </Form.Group>

          {/*   <Form.Group md="4" className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="doNotLogout"
                label="Do not log out"
              />
            </Form.Group> */}

            <Row>
              <Col className="pb-2">
                Don't you have an account?
                <Link to={"/register"}> Register </Link>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Login
            </Button>
          </Form>
        {/*   <Alert show={true} variant="danger">
              Wrong credentials
          </Alert>
          */}
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
