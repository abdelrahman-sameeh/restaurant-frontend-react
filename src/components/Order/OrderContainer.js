import React from "react";
import { Col, Row } from "react-bootstrap";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import OrderComp from "./OrderComp";

const OrderContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <OrderComp />
          <OrderComp />
        </div>
      </Row>
    </>
  );
};

export default OrderContainer;
