import React, { useState } from "react";
import { Button, ButtonGroup, Row } from "react-bootstrap";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import OrderComp from "./OrderComp";
import Loading from "../Utility/Loading";
import GetAdminAllOrdersHook from "../../CustomHook/Order/GetAdminAllOrdersHook";
import AdminOrderFilterComp from "./AdminOrderFilterComp";
import PaginationComp from "../Utility/PaginationComp";
import AdminOrderPaginationHook from "../../CustomHook/Order/AdminOrderPaginationHook";

const AdminOrderContainer = () => {
  const [loading, isPress, adminOrder] = GetAdminAllOrdersHook();

  let pagination;
  if (localStorage.pagination) {
    pagination = JSON.parse(localStorage.pagination);
  }

  const [pageNum, getPageNum] = AdminOrderPaginationHook();

  return (
    <>
      {loading && isPress ? <Loading /> : ""}
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <AdminOrderFilterComp />
          {adminOrder && adminOrder.length ? (
            adminOrder.map((order) => (
              <OrderComp key={order._id} order={order} />
            ))
          ) : (
            <h4 className="fw-bold text-center"> لا يوجد طلبات الان </h4>
          )}
          {pagination && pagination.numberOfPages > 1 ? (
            <PaginationComp
              pageCount={pagination.numberOfPages}
              onPress={getPageNum}
            />
          ) : null}
        </div>
      </Row>
    </>
  );
};

export default AdminOrderContainer;
