import { Row, Col, Table } from "react-bootstrap";


import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userActions";

const OrdersPageComponent = ({ getOrders }) => {

 const dispatch = useDispatch() 

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch((er) =>
      dispatch(logout)
   
      );
  }, []);
  
  return (
    <Row className="m-5" >
      <Col md={2}></Col>
     
      <Col md={8} style={{marginBottom:"150px"}} >
        <h1>Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
         
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  {order.user !== null ? (
                    <>
                      {order.user.name} {order.user.lastName}
                    </>
                  ) : null}
                </td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.orderTotal.cartSubtotal}</td>
                <td>
                  {order.isDelivered ? (
                    <i className="bi bi-check-lg text-success"></i>
                  ) : (
                    <i className="bi bi-x-lg text-danger"></i>
                  )}
                </td>
                <td>{order.paymentMethod}</td>
           
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default OrdersPageComponent;

