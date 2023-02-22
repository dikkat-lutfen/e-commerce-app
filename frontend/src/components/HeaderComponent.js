import React from "react";
import {
  Container,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import {logout} from "../redux/actions/userActions"
import { useDispatch } from "react-redux";

function HeaderComponent() {

  const dispatch = useDispatch()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="py-2">
        <LinkContainer to="/">
          <Navbar.Brand href="/">HERE IS WHAT YOU NEED</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All Categories">
                <Dropdown.Item>Phones</Dropdown.Item>
                <Dropdown.Item>Televisions</Dropdown.Item>
                <Dropdown.Item>Computers</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search item" />
              <Button variant="primary">
                <i className="bi bi-search"></i>
              </Button>{" "}
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
              {/*   <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span> */}
              </Nav.Link>
            </LinkContainer>

           
             
           
            <NavDropdown title="Halim Boushada" id="collasible-nav-dropdown">
              {/*  <NavDropdown.Item eventKey="/user/my-orders"  as={Link} to="/user/my-orders">My orders</NavDropdown.Item> */}

              <NavDropdown.Item>
                <Link
                  eventKey="/user/my-orders"
                  to="/user/my-orders"
                  className="text-decoration-none link-dark  "
                >
                  My orders
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  eventKey="/user"
                  to="/user"
                  className="text-decoration-none link-dark  "
                >
                  My Profile
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item  onclick={()=>dispatch(logout())}>Logout</NavDropdown.Item>
            </NavDropdown>

            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
              <Nav.Link> 
                <Badge bg="danger">2</Badge> 
                <i className="bi bi-cart-plus"></i>
                 <span className="ms-1">CART</span>
              </Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
