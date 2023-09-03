import React from "react";
import UserOrderContainer from "../../components/Order/UserOrderContainer";
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
      <UserOrderContainer />
    </div>
  );
};

export default UserOrdersPage;
