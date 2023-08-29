import React, { useEffect, useState } from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import DeliveryOrderComp from "./DeliveryOrderComp";
import { BaseUrl } from "../../api/BaseUrl";

const DeliveryOrdersContainer = () => {
  const [data, setData] = useState([]);

  const run = async () => {
    const response = await BaseUrl.get("/api/v1/order");
    setData(response.data)
  };

  useEffect(() => {
    run();
  }, []);

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" الطلبات المراد توصيلها "} />

          {/* loop in all orders that delivery user was asked to deliver */}
          {data && data.data
            ? data.data.map((order) => <DeliveryOrderComp order={order} />)
            : null}
          {/* <DeliveryOrderComp  /> */}
        </div>
      </Row>
    </>
  );
};

export default DeliveryOrdersContainer;
