import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import DeliveryOrderComp from "./DeliveryOrderComp";

const DeliveryOrdersContainer = () => {


  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" الطلبات المراد توصيلها "} />

          {/* loop in all orders that delivery user was asked to deliver */}
          {/* <DeliveryOrderComp  /> */}
              
        </div>
      </Row>
    </>
  );
};

export default DeliveryOrdersContainer;
