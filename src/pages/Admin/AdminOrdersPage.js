import React from "react";
import AdminOrderContainer from "../../components/Order/AdminOrderContainer";
import CurrentLocation from "../../components/Utility/CurrentLocation";
import { Row } from "react-bootstrap";

const AdminOrdersPage = () => {
  return (
    <div className="orders">
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"ادارة جميع الطلبات"} />
        </div>
      </Row>
      <AdminOrderContainer />
    </div>
  );
};

export default AdminOrdersPage;
