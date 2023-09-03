import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import DeliveryOrderComp from "./DeliveryOrderComp";
import GetDeliveryOrdersHook from "../../CustomHook/Delivery/GetDeliveryOrdersHook";
import Loading from "../Utility/Loading";
import PaginationComp from "../Utility/PaginationComp";
import DeliveryPaginationHook from "../../CustomHook/Delivery/DeliveryPaginationHook";

let pagination;
if (localStorage.pagination) {
  pagination = JSON.parse(localStorage.pagination);
}

console.log();

const DeliveryOrdersContainer = () => {
  const [loading, isPress, orders] = GetDeliveryOrdersHook();

  const [paginationLoading, paginationIsPress, getPageNum] =
    DeliveryPaginationHook();

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" الطلبات المراد توصيلها "} />

          {(loading && isPress) || (paginationLoading && paginationIsPress) ? (
            <Loading />
          ) : (
            ""
          )}
          {/* loop in all orders that delivery user was asked to deliver */}
          {orders && orders.length ? (
            orders.map((order) => (
              <DeliveryOrderComp
                key={order._id}
                order={order.order}
                id={order._id}
              />
            ))
          ) : (
            <h4 className="fw-bold text-center"> لا يوجد طلبات الان </h4>
          )}

          {pagination && pagination.numberOfPages ? (
            <PaginationComp onPress={getPageNum} pageCount={pagination.numberOfPages} />
          ) : null}
        </div>
      </Row>
    </>
  );
};

export default DeliveryOrdersContainer;
