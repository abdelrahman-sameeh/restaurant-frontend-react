import React from "react";
import OrderContainer from "../../components/Order/OrderContainer";
import CurrentLocation from "../../components/Utility/CurrentLocation";
import { Row } from "react-bootstrap";

const UserOrdersPage = () => {
  return (
    <div className="orders">
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"ادارة طلباتك"} />
        </div>
      </Row>
      <OrderContainer />
    </div>
  );
};

export default UserOrdersPage;
