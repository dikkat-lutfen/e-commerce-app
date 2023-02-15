import React from "react";
import { Container, Row, Col, Form, Button, Alert} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom";


function RegisterPage() {

  const [name,setName] =useState("")
  const [lastName,setLastName]= useState("")
  const [password,setPassword] =useState("")
  const [email,setEmail]= useState("")
  const navigate = useNavigate()


  function saveIt(){
    console.log(name,lastName,email,password)
    axios.post(`http://localhost:5000/api/users/register`,{name: name,lastName: lastName,email: email,password:password})
  .then(({data})=>{
    console.log(data)
    if(data){
            navigate("/login")
    }else{
      Alert("not registered")
    }
  })/* .catch(error=>console.log(error)) */

  }

  /* const [validated, setValidated] = useState(false); */


/*   const onChange = () =>{
    const password = document.querySelector("input[name=password]")
    const confirm = document.querySelector("input[name=confirmPassword]")
    if(confirm.value===password.value){
      confirm.setCustomValidity("")
      setPassword(password.value)
    }else{
      confirm.setCustomValidity("Password do not match")
    }
   
  } */

 /*  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }; */

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Form /* noValidate validated={validated} onSubmit={handleSubmit} */>
            
              <Form.Group  md="4" className="mb-3" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  defaultValue=""
                  name="name"
                  onChange={(e)=>{ setName( e.target.value)}}
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
                  onChange={(e)=>{ setLastName( e.target.value)}}
                />
               {/*  <Form.Control.Feedback type="invalid    >Please enter your last name!</Form.Control.Feedback> */}
              </Form.Group>
              <Form.Group  md="4" className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your email"
                  defaultValue=""
                  name="email"
                  onChange={(e)=>{ setEmail( e.target.value)}}
                />
               {/*  <Form.Control.Feedback type="invalid    >Please enter valid email address!</Form.Control.Feedback> */}
              </Form.Group>
              <Form.Group  md="4" className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter your password"
                  defaultValue=""
                  name="password"
                  minLength={6}
                  onChange={(e)=>{ setPassword( e.target.value)}}
                 /*  onChange = {onChange} */

                />
               {/*  <Form.Control.Feedback type="invalid    >Please enter valid password!</Form.Control.Feedback> */}
              </Form.Group>
              <Form.Text className="text-muted">
                Password should have at least 6 characters
              </Form.Text>
           {/*    <Form.Group  md="4" className="mb-3" controlId="formBasicPasswordRepeat">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Repeat Password"
                  defaultValue=""
                  name="confirmPassword"
                  minLength={6}
                  onChange={onChange}
                />
                <Form.Control.Feedback type="invalid    >Both passwords should match!</Form.Control.Feedback>
              </Form.Group> */}

              <Row>
                <Col className="pb-2">
                Do you have an account already?
                <Link to={"/login"}> Login </Link>
                </Col>
              </Row>
             
             
            
            <Button type="submit"  onClick={()=>{saveIt()}} >
            <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
              Submit</Button>
          </Form>
         {/*  <Alert show={true}  variant= "danger">User with that email already exists!</Alert>
          <Alert show={true}  variant= "danger">User created!</Alert> */}
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
