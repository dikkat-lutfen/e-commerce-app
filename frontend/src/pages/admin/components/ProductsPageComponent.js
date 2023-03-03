import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { LinkContainer } from "react-router-bootstrap";
/* import AdminLinksComponent from "../../../components/admin/AdminLinksComponent"; */
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userActions";


function ProductsPageComponent({fetchProducts, deleteProduct}) {
  const dispatch = useDispatch()

  const [products,setProducts]= useState([])
  const [productDeleted,setProductDeleted]= useState(false)

const deleteHandler=async (productId)=>{
  if(window.confirm("Are you sure")) {
    const data= await deleteProduct(productId)
    if(data.message === "product removed"){
      setProductDeleted(!productDeleted)
    }
  
  }
}




useEffect(()=>{
 const abctrl  = new AbortController();
 fetchProducts(abctrl).then((res)=> setProducts(res)).catch((er)=>
 dispatch(logout)
 /* setProducts([ {name:er.response.data.message ? er.response.data.message : er.response.data}]) */
 )
 return ()=> abctrl.abort()

},[productDeleted])

  return (

    <Container style={{marginBottom:"150px"}}>
      <Row className="m-5">
        
     
        <Col md={12}>
          <h1>
            Product List{" "}
            <LinkContainer to="/admin/create-new-product">
              <Button variant="primary" size="lg">
                create New
              </Button>
            </LinkContainer>
          </h1>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>
                      <LinkContainer to={`/admin/editt-product/${item._id}`}  >
                          <Button className="btn-sm">
                          <i className="bi bi-pencil-square"></i>
                          </Button>
                      </LinkContainer>
                      {" / "}
                      <Button variant="danger" className="btn-sm" onClick={()=>{deleteHandler(item._id)}}>
                          <i className="bi bi-x-circle"></i>
                          </Button>
                    </td>
                   
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        
      </Row>
    </Container>
  );
}

export default ProductsPageComponent;
