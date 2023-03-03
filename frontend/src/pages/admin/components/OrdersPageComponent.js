import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
/* import AdminLinksComponent from "../../../components/admin/AdminLinksComponent"; */

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
     /*    console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        ) */
      );
  }, []);
  
  return (
    <Row className="m-5" >
      <Col md={1}></Col>
     
      <Col md={10} style={{marginBottom:"150px"}} >
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
              <th>Order details</th>
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
                <td>
                  <Link to={`/admin/order-details/${order._id}`}>
                    go to order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <Col md={1}></Col>
    </Row>
  );
};

export default OrdersPageComponent;

