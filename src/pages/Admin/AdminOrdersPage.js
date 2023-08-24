import React from "react";
import OrderContainer from "../../components/Order/OrderContainer";
import AdminSidebarComp from "../../components/Admin/AdminSidebarComp";
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
      <OrderContainer />
    </div>
  );
};

export default AdminOrdersPage;
