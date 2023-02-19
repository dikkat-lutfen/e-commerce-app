import React from 'react'
import AdminChatRoomComponent from '../../components/admin/AdminChatRoomComponent'
import AdminLinksComponent from '../../components/admin/AdminLinksComponent'
import {Row,Col} from "react-bootstrap"

function AdminChatsPage() {
  return (
    <Row className="m-5">
<Col md={2}>
    <AdminLinksComponent/>
</Col>
<Col md={10}>
  <Row style={{marginBottom:"100px"}}>
    <AdminChatRoomComponent/>
  </Row>
</Col>
    </Row>
  )
}

export default AdminChatsPage
