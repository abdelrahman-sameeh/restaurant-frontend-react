import React from "react";
import { Row } from "react-bootstrap";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import OrderComp from "./OrderComp";
import GetLoggedUserOrderHook from "../../CustomHook/Order/GetLoggedUserOrderHook";
import Loading from "../Utility/Loading";
import UserOrderFilterComp from "./UserOrderFilterComp";
import PaginationComp from "../Utility/PaginationComp";
import UserOrderPaginationHook from "../../CustomHook/Order/UserOrderPaginationHook";

const UserOrderContainer = () => {
  const [loading, isPress, userOrders] = GetLoggedUserOrderHook();

  let pagination;
  if (localStorage.pagination) {
    pagination = JSON.parse(localStorage.pagination);
  }

  const [pageNum, getPageNum] = UserOrderPaginationHook();

  return (
    <>
      {loading && isPress ? <Loading /> : ""}
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <UserOrderFilterComp />

          {userOrders && userOrders.length ? (
            userOrders.map((order) => (
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

export default UserOrderContainer;
