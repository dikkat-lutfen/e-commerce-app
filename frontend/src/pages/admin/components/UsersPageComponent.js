import { Row, Col, Table, Button } from "react-bootstrap";



import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userActions";

const UsersPageComponent = ({ fetchUsers }) => {
    const dispatch = useDispatch()
  const [users, setUsers] = useState([]);
  const[userDeleted,setUserDeleted]= useState(false)



  useEffect(() => {
    const abctrl = new AbortController();
    fetchUsers(abctrl)
      .then((res) => setUsers(res))
      .catch((er) =>
      dispatch(logout)
   
      );
    return () => abctrl.abort();
  }, [userDeleted]);

  return (
    <Row className="m-5">
      <Col md={2}>
   
      </Col>
      <Col md={8}>
        <h1>User List</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
       
            </tr>
          </thead>
          <tbody>
            {users.map(
              (user, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}
                  </td>
        
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
      <Col md={2}>
   
   </Col>
    </Row>
  );
};

export default UsersPageComponent;

